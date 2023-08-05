import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  jsxFramework: "react",

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",

  globalCss: {
    body: {
      backgroundColor: "#000",
      color: "#e7e9ea",
      minHeight: "100%",
      height: "100%",
    },
    html: {
      height: "100%",
    },
  },
})
