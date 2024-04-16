import eslintPlugin from "@nabla/vite-plugin-eslint"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import checkerPlugin from "vite-plugin-checker"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    react(),
    eslintPlugin(),
    tsconfigPaths(),
    checkerPlugin({
      typescript: true,
      eslint: {
        lintCommand: "eslint .",
      },
    }),
  ],
}))
