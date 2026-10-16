
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Configure Vite to support React and Tailwind CSS.
export default defineConfig({
  plugins: [
    react(),       // Enables React support and Fast Refresh.
    tailwindcss(), // Processes Tailwind utility classes.
  ],
});
