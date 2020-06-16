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
  },
});

export function ThemeProvider({ children }) {
  return <Provider theme={theme}>{children}</Provider>;
}

