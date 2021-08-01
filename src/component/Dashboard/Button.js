import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import { color } from "../../Global/color";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
  },

  title: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(3),
    width: "100%",
    height: "20%",
    backgound: "white",

    "& button": {
      width: "14%",
      margin: theme.spacing(1),
      height: "15.5em",
      fontSize: "1.5em",
      borderRadius: "10px",
      color: "#fff",
      background: color.primary,
      border: "none",
    },
  },
}));

function Button(props) {
  const classes = useStyles();
  const { datalength } = props;

  const handleGrade = () => {
    alert("You have exceeded your free plan")
    props.push.history('/confirm')
  }

  if (datalength && datalength.length <= 5) {
    return(
    <Grid item className={classes.title}>
      <h4> Create A New Survey now!</h4>
      <button> <Link to="/form-creator"> New Survey </Link> </button>
    </Grid>
)
  } else {
    return (
      <Grid item className={classes.title}>
        <h4> Create A New Survey now!</h4>
        <button onClick={()=> handleGrade()}> New Survey </button>
      </Grid >
    )
  }

}


const mapStateToProps = ({ surveys}) => {
  return {
    datalength: Object.keys(surveys.surveys)
  }
}

export default connect(mapStateToProps)(Button);
