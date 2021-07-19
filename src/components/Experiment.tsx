import { useEffect, useState, useContext } from "react";
import analyticsJS from "lib/analyticsJS";
import AnalyticsContext from "components/AnalyticsContext";

interface VariantProps {
  children: React.ReactNode;
}

interface ExperimentProps {
  name: string;
  children: JSX.Element[];
}

export const Variant = ({ children }: VariantProps) => <>{children}</>;

const Experiment = ({ name, children }: ExperimentProps) => {
  const [activeVariant, setActiveVariant] = useState(0);
  const { experimentId } = useContext(AnalyticsContext);

  useEffect(() => {
    if (!experimentId) return;

    const variantIndex = Math.floor(experimentId * children.length);

    setActiveVariant(variantIndex);

    analyticsJS()?.identify(undefined, {
      [`Experiment - ${name}`]: String.fromCharCode(65 + variantIndex),
    });
  }, [experimentId]);

  return children[activeVariant];
};

Experiment.Variant = Variant;

export default Experiment;
