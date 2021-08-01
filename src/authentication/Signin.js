import React, { useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link,} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import bgImage from "../assets/bg.png";
import Logo from "../assets/google.png";
import SuperBI from "../assets/logo.png";
import { color } from "../Global/color";
import { handleAuthUser, LogInWithGoogle } from "../actions/login";




const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "cover",
  },
  wrapper: {
    width: "100%",
    // borderBottom: "2px solid grey",
    padding: theme.spacing(2, 3),
    "& p": {
      fontSize: "1.5em"
    }
  },
  logoWrapper: {
    border: "none",
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
    "& button": {
      border: "none"
    }
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(1),
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    fontSize:"1.5em"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    margin: "2px",
    "& input": {
      fontSize: "1em",
      width: "100%",
      marginTop: "10px",
      padding: "15px",
      border: "none"
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontSize: "1.8em",
    background: color.primary,
    textTransform: "title-case",
    width: "100%",
    border: "none",
    color:" #fff",
    padding:"10px"
  },
  Checkbox: {
    fontSize:"2em"
  }
}));

function Login(props) {

  const [loading, setLoading] = useState("");
  const [type, setType] = useState(false);
  const [email, setEmail] = useState("");
  const message = useSelector((state) => state.authedUser.error);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();


  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    setLoading(true)    
    console.log(userData)
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      
      dispatch(handleAuthUser(userData, props.history));
      setLoading(false)
    }

    dispatch(handleAuthUser(userData, props.history));
    setLoading(false)
  
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={false} sm={3} md={4} />
        <Grid
          item
          xs={12}
          sm={8}
          md={4}
          className={classes.center}
          elevation={5}
          square
        >
          <div className={classes.paper}>
           
            <div style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: " 20px", color:color.primary }}>
          
              <img src={SuperBI} alt="" width="120" height="30"/>
            </div>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <div style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center", color:color.primary }}>
                <h3> Login  </h3>
                </div>
              <input
                // variant="outlined"
                margin="normal"
                id="email"
                label="Email"
                name="email"
                placeholder= "Email"
                autoComplete="email"
                onChange={(e)=>setEmail(e.target.value)}
                autoFocus
              />
              <input
                // variant="outlined"
                margin="normal"
                placeholder="Password"
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e)=>setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                className={classes.Checkbox}
              />
              <button
                type="submit"
                className={classes.submit}
              >
                Sign In
              </button>
          
              <Grid container>
                <Grid item md>
                  <Link to="#" variant="body2">
                    <p style={{color: color.primary}}> Forgot password?  </p>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    <p> Don't have an account? <span style={{color: color.primary}}>Sign Up</span></p>
                  </Link>
                </Grid>
              </Grid>
            
  
              <div>
                    {loading ? (
                      <div>
                        <LinearProgress
                          size={50}
                          className={classes.progress}
                        />
                      </div>
                    ) : null}

                    {message ? (
                      <div justify={"center"} style={{ color: "red" }}>
                        <p color="danger" style={{ textAlign: "center" }}>
                          {" "}
                          {message}
                        </p>
                      </div>
                    ) : null}
                  </div>
            </form>
            <div className={classes.logoWrapper}>
                <p> OR Sign
                  In With</p>
              <button onClick={() => dispatch(LogInWithGoogle(props.history))}>
              <img src={Logo} alt="" width="40" height="40"/>
            </button>
              </div>
          </div>
        </Grid>
        <Grid item xs={false} sm={3} md={4} />
      </Grid>
      
    </Grid>
  );
}


const mapStateToprop = ({ authedUser, dispatch }) => {
  return {
    authedUser: authedUser.id,
  };
};

export default connect(mapStateToprop)(Login);
