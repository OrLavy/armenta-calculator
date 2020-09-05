import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { HEADER_HEIGHT_REM } from "../../theme/Theme";
import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Logo from "../../assets/armenta_logo.jpeg";

interface IProps {}

export const HOVER_COLOR = "#00A1CB";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    height: `${HEADER_HEIGHT_REM}rem`,
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    boxSizing: "border-box",
    // height: `${HEADER_HEIGHT_REM}rem`,
    zIndex: theme.zIndex.drawer + 1,
    // padding: `${theme.spacing(2)}px ${theme.spacing(8)}px`,
    padding: theme.spacing(1),
  },
  toolbar: {
    paddingRight: 0,
    paddingLeft: 0,
    // marginRight: 'auto',
    // marginLeft: 'auto',
    margin: "auto",
    width: "90%",
    maxWidth: "90%",
    justifyContent: "center",
  },
  logo: {
    width: "10rem",
  },
  link: {
    color: "#2B2B2B", // DEV_NOTE : Taken from armenta
    marginLeft: 30,
    transition: "color 0.4s ease-in-out",
    "&:hover": {
      color: HOVER_COLOR,
    },
  },
}));

export const Header = React.memo<IProps>((props) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" data-testid="header" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <NavLink to="/">
          <img className={classes.logo} src={Logo} alt="Armenta" />
          {/*<Link*/}
          {/*  // @ts-ignore*/}
          {/*  component={NavLink}*/}
          {/*  exact={true}*/}
          {/*  className={classes.link}*/}
          {/*  // activeStyle={{ color: HOVER_COLOR }}*/}
          {/*  underline="none"*/}
          {/*  to={"/"}*/}
          {/*  variant="h6"*/}
          {/*  noWrap*/}
          {/*>*/}
          {/*  Armenta*/}
          {/*</Link>*/}
        </NavLink>
      </Toolbar>
    </AppBar>
  );
});
