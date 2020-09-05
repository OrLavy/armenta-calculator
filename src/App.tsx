import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { HEADER_HEIGHT_REM } from "./theme/Theme";
import { CalculatorPage } from "./pages/CalculatorPage";
import { Header } from "./components/header/Header";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    // minHeight: `calc(100% - ${HEADER_HEIGHT_REM}rem)`,
    minHeight: `calc(100% - ${HEADER_HEIGHT_REM}rem)`,

    // Center the content
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  appMain: {
    height: "100%",
    maxWidth: "90%",
    boxSizing: "border-box",
    padding: theme.spacing(2),
  },

  headerSeparator: {
    height: `${HEADER_HEIGHT_REM}rem`,
  },
}));

const App = React.memo(() => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.headerSeparator} />
      <div className={classes.mainWrapper}>
        <main className={classes.appMain}>
          <CalculatorPage />
        </main>
      </div>
    </>
  );
});

export default App;
