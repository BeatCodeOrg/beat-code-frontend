import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import monacoEditorPlugin from "vite-plugin-monaco-editor";
import dynamicImport from "vite-plugin-dynamic-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    monacoEditorPlugin.default({
      languageWorkers: [
        "editorWorkerService",
        "css",
        "html",
        "json",
        "typescript",
      ],
    }),
    dynamicImport(),
  ],
});
