import { TippyProps } from "@tippy.js/react";

export type IToolTipProps = TippyProps & {
  asToolbar?: boolean;
  disabled?: boolean;
  disableWhenDragging?: boolean;
  theme?: string | "light" | "dark" | "transparent";
};
