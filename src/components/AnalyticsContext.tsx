import { createContext, useState, useEffect, useCallback } from "react";
import Router from "next/router";
import analyticsJS from "lib/analyticsJS";

interface AnalyticsContextProps {
  experimentId: number | null;
  setExperimentVariant: (experiment: string, variant: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextProps>({
  experimentId: null,
  setExperimentVariant: () => {},
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
  const [identifyTraits, setIdentifyTraits] = useState<object | null>(null);

  useEffect(() => {
    const storedExperimentId = localStorage.getItem(EXPERIMENT_ID_STORAGE_KEY);
    const parsedExperimentId =
      storedExperimentId == null || Number.isNaN(+storedExperimentId)
        ? null
        : +storedExperimentId;
    const currentExperimentId =
      parsedExperimentId == null ? Math.random() : parsedExperimentId;

    setExperimentId(currentExperimentId);

    localStorage.setItem(
      EXPERIMENT_ID_STORAGE_KEY,
      String(currentExperimentId)
    );
  }, []);

  useEffect(() => {
    if (!experimentId) return;
    if (!identifyTraits) return setIdentifyTraits({});

    analyticsJS()?.identify(undefined, identifyTraits);
    analyticsJS()?.page();
  }, [experimentId, identifyTraits]);

  const setExperimentVariant = useCallback((experiment, variant) => {
    setIdentifyTraits((traits) => ({ ...traits, [experiment]: variant }));
  }, []);

  return (
    <AnalyticsContext.Provider value={{ experimentId, setExperimentVariant }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsContext;
