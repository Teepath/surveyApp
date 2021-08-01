import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(2),
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },

  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: theme.spacing(10),
    border: "2px solid gray",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function ConfirmPayment() {
  const classes = useStyles();
  return (
    <Grid container main="component">
      <div className={classes.paper}>
        <Grid item xs={6} className={classes.wrapper}>
          <h4> Payment</h4>
          <p>
            Your payment has been sent. Please check your mailbox for a
            confirmation email.
          </p>
          <Button type="submit" variant="contained" color="primary">
            
           <Link to="/">  Done </Link>
          </Button>
        </Grid>
      </div>
    </Grid>
  );
}

export default ConfirmPayment;
