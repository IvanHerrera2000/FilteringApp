import React from "react";
import { makeStyles, Box, Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "boxicons";

const useStyles = makeStyles({
  container: {
    marginTop: "20px",
    background: "#1d1a27",
  },
  box: {
    marginTop: "10px",
  },
  link: {
    textDecoration: "none",
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
        className={classes.container}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>LinkedIn</Box>
              <Box className={classes.box}>
                <a
                  href="https://www.w3schools.com"
                  target="_blank"
                  className={classes.link}
                >
                  <box-icon
                    type="logo"
                    name="linkedin-square"
                    color="#fcf7ff"
                    size="lg"
                  ></box-icon>
                </a>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>GitHub</Box>
              <Box className={classes.box}>
                <a
                  href="https://www.w3schools.com"
                  target="_blank"
                  className={classes.link}
                >
                  <box-icon
                    type="logo"
                    name="github"
                    color="#fcf7ff"
                    size="lg"
                  ></box-icon>
                </a>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Source Code</Box>
              <Box className={classes.box}>
                <a
                  href="https://www.w3schools.com"
                  target="_blank"
                  className={classes.link}
                >
                  <box-icon
                    type="solid"
                    name="folder"
                    color="#fcf7ff"
                    size="lg"
                  ></box-icon>
                </a>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Iván Herrera - Fullstack Developer &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
