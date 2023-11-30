// vite.config.js
import { defineConfig } from "file:///G:/%E9%A1%B9%E7%9B%AE/%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE/front-end/node_modules/vite/dist/node/index.js";
import react from "file:///G:/%E9%A1%B9%E7%9B%AE/%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE/front-end/node_modules/@vitejs/plugin-react/dist/index.mjs";
import monacoEditorPlugin from "file:///G:/%E9%A1%B9%E7%9B%AE/%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE/front-end/node_modules/vite-plugin-monaco-editor/dist/index.js";
import dynamicImport from "file:///G:/%E9%A1%B9%E7%9B%AE/%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE/front-end/node_modules/vite-plugin-dynamic-import/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    monacoEditorPlugin.default({
      languageWorkers: [
        "editorWorkerService",
        "css",
        "html",
        "json",
        "typescript"
      ]
    }),
    dynamicImport()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxcdTk4NzlcdTc2RUVcXFxcXHU1QjY2XHU0RTYwXHU5ODc5XHU3NkVFXFxcXGZyb250LWVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRzpcXFxcXHU5ODc5XHU3NkVFXFxcXFx1NUI2Nlx1NEU2MFx1OTg3OVx1NzZFRVxcXFxmcm9udC1lbmRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0c6LyVFOSVBMSVCOSVFNyU5QiVBRS8lRTUlQUQlQTYlRTQlQjklQTAlRTklQTElQjklRTclOUIlQUUvZnJvbnQtZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBtb25hY29FZGl0b3JQbHVnaW4gZnJvbSBcInZpdGUtcGx1Z2luLW1vbmFjby1lZGl0b3JcIjtcbmltcG9ydCBkeW5hbWljSW1wb3J0IGZyb20gXCJ2aXRlLXBsdWdpbi1keW5hbWljLWltcG9ydFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgbW9uYWNvRWRpdG9yUGx1Z2luLmRlZmF1bHQoe1xuICAgICAgbGFuZ3VhZ2VXb3JrZXJzOiBbXG4gICAgICAgIFwiZWRpdG9yV29ya2VyU2VydmljZVwiLFxuICAgICAgICBcImNzc1wiLFxuICAgICAgICBcImh0bWxcIixcbiAgICAgICAgXCJqc29uXCIsXG4gICAgICAgIFwidHlwZXNjcmlwdFwiLFxuICAgICAgXSxcbiAgICB9KSxcbiAgICBkeW5hbWljSW1wb3J0KCksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1MsU0FBUyxvQkFBb0I7QUFDblUsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sd0JBQXdCO0FBQy9CLE9BQU8sbUJBQW1CO0FBRzFCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLG1CQUFtQixRQUFRO0FBQUEsTUFDekIsaUJBQWlCO0FBQUEsUUFDZjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsRUFDaEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
