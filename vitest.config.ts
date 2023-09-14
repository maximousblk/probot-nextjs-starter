import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
// import magicalSvg from "vite-plugin-magical-svg";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths() /*, magicalSvg({ target: "react" })*/],
  test: {
    environment: "jsdom",
    globals: true,
    // setupFiles: ["dotenv/config", "src/testUtils/vitestSetup.ts"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
    threads: true,
  },
});
