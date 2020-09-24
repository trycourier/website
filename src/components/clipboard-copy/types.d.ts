export type ClipboardCopyProps = {
  theme?: "light" | "dark";
  tooltipProps?: any;
  value: string;
};

export type PickATextFunction = (state: boolean, prop?: boolean) => string;
