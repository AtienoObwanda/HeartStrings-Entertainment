import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import replace from "@rollup/plugin-replace";

// Load environment variables from .env file
import { loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    build: {
      outDir: "build",
    },
    plugins: [
      tsconfigPaths(),
      react(),
      replace({
        preventAssignment: true,
        "process.env.REACT_APP_API_URL": JSON.stringify(env.REACT_APP_API_URL),
      }),
    ],
  };
});
