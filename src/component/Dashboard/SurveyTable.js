import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { FaSortAmountUpAlt } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(1, 10, 0),
  },
  surveyTitle: {
    display: "flex",
    justifyContent: "space-around",
    margin: theme.spacing(1),
    alignItems: "ceneter",
    fontSize: "2em",
  position:"relative"
  },
}));

function SurveyTable(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.wrapper}>
      <Grid container className={classes.surveyTitle}>
        <Grid item xs={8} sm={10} md={10}>
          {props.title}
        </Grid>
        <Grid item xs={2} sm={1} md={1}>
          <FaSortAmountUpAlt />
        </Grid>
        <Grid item xs={2} sm={1} md={1}>
          Filter
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SurveyTable;
