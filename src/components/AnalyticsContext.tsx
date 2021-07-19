import { createContext, useState, useEffect } from "react";
import Router from "next/router";
import analyticsJS from "lib/analyticsJS";

interface AnalyticsContextProps {
  experimentId: number | null;
}

const AnalyticsContext = createContext<AnalyticsContextProps>({
  experimentId: null,
});

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

// Track client-side page views with Segment
Router.events.on("routeChangeComplete", (url) => {
  analyticsJS()?.page(url);
});

const EXPERIMENT_ID_STORAGE_KEY = "experimentId";

export const Provider = ({ children }: ProviderProps) => {
  const [experimentId, setExperimentId] = useState<number | null>(null);

  useEffect(() => {
    const storedExperimentId = localStorage.getItem(EXPERIMENT_ID_STORAGE_KEY);
    const parsedExperimentId =
      storedExperimentId == null || Number.isNaN(+storedExperimentId)
        ? null
        : +storedExperimentId;
    const currentExperimentId =
      parsedExperimentId == null ? Math.random() : parsedExperimentId;

    setExperimentId(currentExperimentId);
  }, []);

  useEffect(() => {
    if (!experimentId) return;

    localStorage.setItem(EXPERIMENT_ID_STORAGE_KEY, String(experimentId));

    analyticsJS()?.page();
  }, [experimentId]);

  return (
    <AnalyticsContext.Provider value={{ experimentId }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsContext;
