import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",

    background: {
      secondary: "rgb(242 240 240)",
    },
  },
});

declare module "@mui/material/styles" {
  interface TypeBackground {
    secondary: string;
  }
}
