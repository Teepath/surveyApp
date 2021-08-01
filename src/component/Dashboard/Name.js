import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
  },

  title: {
    textAlign: "center",
    width: "100%",
    height: "10%",
    backgound: "white",
    marginBottom: theme.spacing(1),
  },
}));

function Name(props) {
  const classes = useStyles();
  const {user} = props
  return (
    <Grid container className={classes.root}>
      <Grid xs={12} sm={12} md={ 12} item className={classes.title}>
      <h1> Welcome back {user }! </h1>
    </Grid>
    </Grid>
  
  );
}

const mapStateToprop = (state) => {
  console.log(state.firebase.profile.name)
  return {
    user: state.firebase.profile.name
  }
}

export default connect(mapStateToprop)(Name);
