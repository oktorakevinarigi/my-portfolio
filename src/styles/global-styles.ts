"use client";

import { createGlobalStyle } from "styled-components";

import variables from "./variables";

export const GlobalStyles = createGlobalStyle`
${variables};

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body, #__next {
  height: 100%;
}

body {
  line-height: 1.3;
  font-family: var(--font-calibre),  "Inter", "San Francisco", "SF Pro Text",
  -apple-system, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #0a192f;
  color: #ccd6f6;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}

`;
