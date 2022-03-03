import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
  Slider,
  TextField,
  Typography,
} from "@material-ui/core";
import BootcampCard from "../components/BootcampCard";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
  grid: {
    display: "flex",
    justifyContent: "center",
  },
  loader: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    marginBottom: "1rem",
    padding: "13px",
  },
  filters: {
    padding: "0 1.5rem",
  },
  priceRangeInputs: {
    display: "flex",
    justifyContent: "space-between",
  },
});

function Home() {
  const [bootcamps, setBootcamps] = useState([]);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    let cancel;

    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios({
          method: "GET",
          url: `/api/v1/bootcamps`,
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });

        setBootcamps(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className={classes.root}>
      <Grid container spacing={2} className={classes.grid}>
        {loading ? (
          <div className={classes.loader}>
            <CircularProgress size="3rem" thickness={5} />
          </div>
        ) : (
          bootcamps.map((bootcamp) => (
            <Grid item key={bootcamp._id} xs={12} sm={6} md={4} lg={3}>
              <BootcampCard bootcamp={bootcamp} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

export default Home;
