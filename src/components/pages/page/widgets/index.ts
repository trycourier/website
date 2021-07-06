import Subprocessors from "./Subprocessors";

import GetAllSubprocessors from "scripts/GetAllSubprocessors";

export const widgetComponents: Record<
  string,
  React.ComponentType<{ data: any }>
> = {
  subprocessors: Subprocessors,
};

export const widgetQueries: Record<string, () => Promise<any>> = {
  subprocessors: GetAllSubprocessors,
};
