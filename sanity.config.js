import { defineConfig } from "sanity";
import { dashboardTool } from "@sanity/dashboard";
export default defineConfig({
  /* ... */
  plugins: [dashboardTool({ widgets: [] })],
});
