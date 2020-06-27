import React from "react";
import {
  createMuiTheme,
  ThemeProvider as Provider,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  mixins: {
    toolbar: {
      maxWidth: 240,
    },
    cardTitle: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "0.35em",
      overflow: "hidden",
      lineHeight: "1.30",
      textOverflow: "ellipsis",
      fontFamily:"Segoe UI",
    },
    cardDescription: {
      fontSize: "0.8rem",
      letterSpacing: "0.00938em",
      overflow: "hidden",
      lineHeight: "1.30",
      textOverflow: "ellipsis",
      fontFamily:"-apple-system",
    },
  },
  palette: {
    secondary:{
        main:"#920005",
        dark: "#8b0000",
        light:"#b60006",
    },
    tertiary:{
      main:"#daff8f",
      dark: "#8b0000",
      light:"#b60006",
  },
  },
});

export function ThemeProvider({ children }) {
  return <Provider theme={theme}>{children}</Provider>;
}

