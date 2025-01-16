import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../common/graphicsTheme";
import Graphics from "./lowerThird/Graphics";

export default function LowerThird() {
  return (
    <ThemeProvider theme={theme}>
      <Graphics />
    </ThemeProvider>
  );
}
