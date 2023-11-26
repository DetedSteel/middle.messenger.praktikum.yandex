import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import { data } from "./data";

export default defineConfig({
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "src/pages/Login/login.html"),
        register: resolve(__dirname, "src/pages/Register/register.html"),
        profileSettings: resolve(__dirname, "src/pages/Profile/profileSettings.html"),
        changePassword: resolve(__dirname, "src/pages/ChangePassword/changePassword.html")
      },
    },
  },
  server: {
    port: 3000,
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      context: data,
    }),
  ],
});
