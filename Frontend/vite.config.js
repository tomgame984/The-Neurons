import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      thresholds: {
        lines: 90,
        branches: 90,
        functions: 90,
        statements: 90},
      enabled: true,
      reporter: ['text', 'json-summary', 'json', 'html', 'lcov'],
      reportOnFailure: true
    },
    
    globals: true,
    environment: "jsdom",
  },
});
