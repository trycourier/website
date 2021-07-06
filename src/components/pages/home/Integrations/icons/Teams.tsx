import { Icon } from "@chakra-ui/react";

const MicrosoftTeamsIcon = ({ whiteFill }: { whiteFill?: boolean }) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="25px"
    height="26px"
    fill="none"
    viewBox="0 0 25 26"
  >
    <path
      fill="#fff"
      d="M21.614 7.203a1.823 1.823 0 1 0 0 3.645 1.823 1.823 0 0 0 0-3.645zM2.083 21.265l11.98 2.084V2.515L2.082 4.598v16.667z"
    />
    <path
      fill={whiteFill ? "#FFF" : "#565AAD"}
      d="M10.937 8.906v1.422l-2.078.093-.01 6.178-1.552-.047v-6.073l-2.089.083V9.255l5.73-.35z"
    />
    <path
      fill="#fff"
      d="M18.75 7.723a2.083 2.083 0 0 1-3.646 1.375v-2.75a2.083 2.083 0 0 1 3.646 1.375zm1.042 4.688v5.73h1.823c.918 0 1.67-.681 1.797-1.563h.026V12.41h-3.646zm-4.688-1.563v8.855h1.823c.918 0 1.67-.68 1.797-1.563h.026v-7.292h-3.646z"
    />
  </Icon>
);

export default MicrosoftTeamsIcon;
