import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/styles";
import { FcNews } from "react-icons/fc";
import { FcButtingIn } from "react-icons/fc";
import { FcBarChart } from "react-icons/fc";
import Name from "./Name";
import Button from "./Button";

import { color } from "../../Global/color";

//components
import Card from "./Card";


const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "colum",
  },

  name: {
    margin: theme.spacing(2),
    height: "20px",
    alignItems: "center",
  },

  card: {
    width: "100%",
    margin: theme.spacing(2),
    boxShadow:"none",
  },
  create: {
    width: "90%",
    height: "80%",
  },
}));

function DashBoardCard({surveyLength, reportLength}) {
  const classes = useStyles();
  return (
    <Grid container className={classes.wrapper}>
   
      <Grid container className={classes.card}>
        <Grid item xs={12} sm={4} md={4}>
          <Card
            icon={<FcNews/>}
            title="Reports"
            subject={reportLength}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card
            icon={<FcBarChart/>}
            title="Surveys"
            subject={surveyLength}
          />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Card
            icon={<FcButtingIn/>}
            title="Responses"
            subject={reportLength}
          />
        </Grid>
      </Grid>
      <Name/>

    </Grid>
  );
}

export default DashBoardCard;
