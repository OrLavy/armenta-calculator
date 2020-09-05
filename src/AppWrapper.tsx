import React from "react";
import App from "./App";
import { CssBaseline } from "@material-ui/core";
import {
  makeStyles,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import { baseTheme } from "./theme/Theme";

interface IProps {}

export const AppWrapper = React.memo<IProps>((props) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={baseTheme}>
        <App /> <CssBaseline />
      </ThemeProvider>
    </StylesProvider>
  );
});
