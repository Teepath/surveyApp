import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/landing.svg";
import Typography from "@material-ui/core/Typography";
import { color } from "../../Global/color";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "80%",
  },
  wrapper: {
    width: "100%",
    "& p": {
      fontSize: "16px",
    },

    "& button": {
      width: "30%",
      margin: theme.spacing(5, 10),
      height: "5%",
      background: color.primary,
      border: "none",
    },
  },
  left: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  getStarted: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    height: "100%",
  },
}));

function HomeContant() {
  const classes = useStyles();
  return (
    <Grid container className={classes.wrapper}>
      <Grid xs={6} sm={6} md={6} className={classes.left}>
        <div className={classes.getStarted}>
          <Typography variant="h5"> Customer FeedBack Analytics</Typography>
          <p>
            {" "}
            SuperBI gives consumers a voice and helps business <br />
            clients make informed decisions.{" "}
          </p>{" "}
          <button> Get Started </button>
        </div>
      </Grid>
      <Grid xs={6} sm={6} md={6}>
        <img src={Image} alt="image..." className={classes.img} />
      </Grid>
    </Grid>
  );
}

export default HomeContant;
