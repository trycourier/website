import { useEffect, useState, useContext } from "react";
import AnalyticsContext from "components/AnalyticsContext";
import { Box } from "@chakra-ui/react";

interface VariantProps {
  children: React.ReactNode;
}

interface ExperimentProps {
  name: string;
  children: JSX.Element[];
}

export const Variant = ({ children }: VariantProps) => <>{children}</>;

const Experiment = ({ name, children }: ExperimentProps) => {
  const [activeVariant, setActiveVariant] = useState<number | null>(null);
  const { experimentId, setExperimentVariant } = useContext(AnalyticsContext);

  useEffect(() => {
    if (!experimentId) return;

    const variantIndex = Math.floor(experimentId * children.length);

    setActiveVariant(variantIndex);
    setExperimentVariant(
      `Experiment - ${name}`,
      String.fromCharCode(65 + variantIndex)
    );
  }, [experimentId]);

  return (
    <Box opacity={activeVariant == null ? 0 : undefined}>
      {children[activeVariant || 0]}
    </Box>
  );
};

Experiment.Variant = Variant;

export default Experiment;
