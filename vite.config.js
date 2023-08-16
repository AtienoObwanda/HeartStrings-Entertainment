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
    // server: {
    //   port: 3000,
    // },
    build: {
      outDir: "build",
    },
    plugins: [
      tsconfigPaths(),
      react(),
      replace({
        preventAssignment: true,
        "process.env.REACT_APP_API_URL": JSON.stringify(env.REACT_APP_API_URL),
        "process.env.SOCIAL_AUTH_GOOGLE_OAUTH2_KEY": JSON.stringify(env.SOCIAL_AUTH_GOOGLE_OAUTH2_KEY),
        "process.env.SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET": JSON.stringify(env.SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET),     

      }),
    ],
  };
});
