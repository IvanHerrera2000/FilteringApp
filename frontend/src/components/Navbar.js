import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  navigation: {
    background: "#1d1a27",
    display: "flex",
    justifyContent: "center",
  },
  link: {
    background: "#1d1a27",
    color: "#fcf7ff",
    textDecoration: "none",
  },
});

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.navigation}>
        <Typography variant="h5">
          <Link to="/" className={classes.link}>
            Bootcamps
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
