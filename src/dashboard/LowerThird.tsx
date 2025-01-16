import React, { ChangeEvent, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../common/dashboardTheme";
import Host from "./lowerThird/Host";

export default function LowerThird() {
  return (
    <ThemeProvider theme={theme}>
      <Host />
    </ThemeProvider>
  );
}
