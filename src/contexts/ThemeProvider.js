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
    },
    cardDescription: {
      fontSize: "0.8rem",
      letterSpacing: "0.00938em",
      overflow: "hidden",
      lineHeight: "1.30",
      textOverflow: "ellipsis",
    },
  },
});

export function ThemeProvider({ children }) {
  return <Provider theme={theme}>{children}</Provider>;
}

