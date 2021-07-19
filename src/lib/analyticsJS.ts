import { SegmentAnalytics } from "@segment/analytics.js-core";

declare global {
  interface Window {
    analytics?: SegmentAnalytics.AnalyticsJS;
  }
}

const analyticsJS = () => global.window.analytics;

export default analyticsJS;
