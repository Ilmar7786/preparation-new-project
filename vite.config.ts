import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { EsLinter, linterPlugin, TypeScriptLinter } from "vite-plugin-linter"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig(configEnv => ({
  plugins: [
    react(),
    tsconfigPaths(),
    linterPlugin({
      include: ["./src/**/*.ts", "./src/**/*.tsx"],
      linters: [new EsLinter({ configEnv }), new TypeScriptLinter()],
    }),
  ],
}))
