// vite.config.ts
import { defineConfig } from "file:///Users/albert.li/ws/prj/react/ac-grid/node_modules/vite/dist/node/index.js";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "file:///Users/albert.li/ws/prj/react/ac-grid/node_modules/glob/dist/esm/index.js";
import react from "file:///Users/albert.li/ws/prj/react/ac-grid/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///Users/albert.li/ws/prj/react/ac-grid/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///Users/albert.li/ws/prj/react/ac-grid/node_modules/vite-plugin-lib-inject-css/dist/index.js";
var __vite_injected_original_dirname = "/Users/albert.li/ws/prj/react/ac-grid";
var __vite_injected_original_import_meta_url = "file:///Users/albert.li/ws/prj/react/ac-grid/vite.config.ts";
var vite_config_default = defineConfig({
  base: "/ac-grid/",
  plugins: [
    react(),
    libInjectCss(),
    dts({
      tsconfigPath: resolve(__vite_injected_original_dirname, "tsconfig.lib.json")
    })
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/main.ts"),
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob.sync("lib/**/*.{ts,tsx}", {
          ignore: ["lib/**/*.d.ts"]
        }).map((file) => [
          // 1. The name of the entry point
          // lib/nested/foo.js becomes nested/foo
          relative(
            "lib",
            file.slice(0, file.length - extname(file).length)
          ),
          // 2. The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYWxiZXJ0LmxpL3dzL3Byai9yZWFjdC9hYy1ncmlkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYWxiZXJ0LmxpL3dzL3Byai9yZWFjdC9hYy1ncmlkL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hbGJlcnQubGkvd3MvcHJqL3JlYWN0L2FjLWdyaWQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgZXh0bmFtZSwgcmVsYXRpdmUsIHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gXCJub2RlOnVybFwiO1xuaW1wb3J0IHsgZ2xvYiB9IGZyb20gXCJnbG9iXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCB7IGxpYkluamVjdENzcyB9IGZyb20gXCJ2aXRlLXBsdWdpbi1saWItaW5qZWN0LWNzc1wiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBiYXNlOiBcIi9hYy1ncmlkL1wiLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgcmVhY3QoKSxcbiAgICAgICAgbGliSW5qZWN0Q3NzKCksXG4gICAgICAgIGR0cyh7XG4gICAgICAgICAgICB0c2NvbmZpZ1BhdGg6IHJlc29sdmUoX19kaXJuYW1lLCBcInRzY29uZmlnLmxpYi5qc29uXCIpLFxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIGNvcHlQdWJsaWNEaXI6IGZhbHNlLFxuICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJsaWIvbWFpbi50c1wiKSxcbiAgICAgICAgICAgIGZvcm1hdHM6IFtcImVzXCJdLFxuICAgICAgICB9LFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBleHRlcm5hbDogW1wicmVhY3RcIiwgXCJyZWFjdC9qc3gtcnVudGltZVwiXSxcbiAgICAgICAgICAgIGlucHV0OiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9yb2xsdXBqcy5vcmcvY29uZmlndXJhdGlvbi1vcHRpb25zLyNpbnB1dFxuICAgICAgICAgICAgICAgIGdsb2JcbiAgICAgICAgICAgICAgICAgICAgLnN5bmMoXCJsaWIvKiovKi57dHMsdHN4fVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmU6IFtcImxpYi8qKi8qLmQudHNcIl0sXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGZpbGUpID0+IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEuIFRoZSBuYW1lIG9mIHRoZSBlbnRyeSBwb2ludFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGliL25lc3RlZC9mb28uanMgYmVjb21lcyBuZXN0ZWQvZm9vXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUuc2xpY2UoMCwgZmlsZS5sZW5ndGggLSBleHRuYW1lKGZpbGUpLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAyLiBUaGUgYWJzb2x1dGUgcGF0aCB0byB0aGUgZW50cnkgZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGliL25lc3RlZC9mb28udHMgYmVjb21lcyAvcHJvamVjdC9saWIvbmVzdGVkL2Zvby50c1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVVSTFRvUGF0aChuZXcgVVJMKGZpbGUsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiBcImFzc2V0cy9bbmFtZV1bZXh0bmFtZV1cIixcbiAgICAgICAgICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJbbmFtZV0uanNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpUyxTQUFTLG9CQUFvQjtBQUM5VCxTQUFTLFNBQVMsVUFBVSxlQUFlO0FBQzNDLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsWUFBWTtBQUNyQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsb0JBQW9CO0FBTjdCLElBQU0sbUNBQW1DO0FBQXlJLElBQU0sMkNBQTJDO0FBU25PLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLGFBQWE7QUFBQSxJQUNiLElBQUk7QUFBQSxNQUNBLGNBQWMsUUFBUSxrQ0FBVyxtQkFBbUI7QUFBQSxJQUN4RCxDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsZUFBZTtBQUFBLElBQ2YsS0FBSztBQUFBLE1BQ0QsT0FBTyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUN2QyxTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2xCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDWCxVQUFVLENBQUMsU0FBUyxtQkFBbUI7QUFBQSxNQUN2QyxPQUFPLE9BQU87QUFBQTtBQUFBLFFBRVYsS0FDSyxLQUFLLHFCQUFxQjtBQUFBLFVBQ3ZCLFFBQVEsQ0FBQyxlQUFlO0FBQUEsUUFDNUIsQ0FBQyxFQUNBLElBQUksQ0FBQyxTQUFTO0FBQUE7QUFBQTtBQUFBLFVBR1g7QUFBQSxZQUNJO0FBQUEsWUFDQSxLQUFLLE1BQU0sR0FBRyxLQUFLLFNBQVMsUUFBUSxJQUFJLEVBQUUsTUFBTTtBQUFBLFVBQ3BEO0FBQUE7QUFBQTtBQUFBLFVBR0EsY0FBYyxJQUFJLElBQUksTUFBTSx3Q0FBZSxDQUFDO0FBQUEsUUFDaEQsQ0FBQztBQUFBLE1BQ1Q7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNKLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ3BCO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
