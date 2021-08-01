import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import masterCard from "../../assets/master.svg";
import verveCard from "../../assets/verve.svg";
import visaCard from "../../assets/Visa.svg";
import { color } from "../../Global/color";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "f5f5f5",
    boxShadow: "initial"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    fontSize: "16px",
    "& select": {
      marginLeft: "100px",
      marginBottom: "10px"
  }
  },
  submit: {
    width: "50%",
    margin: "0 auto",
    "& button": {
      width: "100%",
      color: "#ffF",
      background: color.primary,
      fontSize:"18px",
      padding: "10px",
      border: "none",
      marginBottom:"10px"
    }
  },
  payment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-around",
    width: "100%",
  },
}));

export default function Payment(props) {
  const classes = useStyles();

  const handlePayment = () => {
    props.history.push('/confirm')
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <h2>   Upgrade Plan</h2>
       
       
        <form className={classes.form} noValidate>
          <select >
            <option value="professional"> Professional</option>
            <option value="appSumo"> AppSumo</option>
          </select>
          <select >
            <option value="monthly"> $35/monthly</option>
            <option value="yearly"> $420/yearly</option>
          </select>
          <div className={classes.submit}>
          
            <h5> We accept:</h5>
            <div className={classes.payment}>
              <img src={masterCard} alt="master" />
              <img src={verveCard} alt="verve" />
              <img src={visaCard} alt="visa" />
            </div>
            <button type="submit" variant="contained"  onClick={()=>handlePayment()}>
              Pay
            </button>
          </div>
        </form>
      </div>
      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
    </Container>
  );
}
