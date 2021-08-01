import React, { useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SuperBI from "../assets/logo.png";
import bgImage from "../assets/bg.png";
import LinearProgress from "@material-ui/core/LinearProgress";
import Logo from "../assets/google.png";
import { handleSignUpUser, handleSingUpWithGoogle } from "../actions/signup";
import { color } from "../Global/color";



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
  logoWrapper: {
    border: "none",
    marginTop:"20px",
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
    "& button": {
      border: "none"
    }
  },
  wrapper: {
    width: "100%",
    borderBottom: "2px solid grey",
    padding: theme.spacing(2, 3),
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
    border: "none",
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

const Signup=(props)=> {

    const [loading, setLoading] = useState("");
    const [type, setType] = useState(false);
    const [data, setData] = useState({});
    const dispatch = useDispatch();
  const classes = useStyles();

    
  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: data.email,
      name: data.fullname,
      password: data.password,
    };
    setLoading(true)
    console.log(userData);

    if (event.code === "Enter" || event.code === "NumpadEnter") {
    
      dispatch(handleSignUpUser(userData, props.history));
      setLoading(false)
    }

    dispatch(handleSignUpUser(userData, props.history));
    setLoading(false)
  };


 const { message} = props

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
            <div style={{display: "flex", width:"100%", justifyContent:"center", alignItems:"center", color:color.primary}}>
             <h4>CREATE A FREE ACCOUNT  </h4>
            </div>
            <input
                margin="normal"
                fullWidth
                id="fullname"
                label="Fullname"
                placeholder="Full Name"
                name="fullname"
                onChange={(e)=>setData({ ...data, fullname: e.target.value })}
                autoComplete="fullname"
                autoFocus
              />
              <input
            
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                placeholder="Email"
                name="email"
                autoComplete="email"
                onChange={(e)=>setData({ ...data, email: e.target.value })}
                autoFocus
              />
              <input
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>setData({ ...data, password: e.target.value })}
              />
                 <input
                margin="normal"
                fullWidth
                name="confirmPassword"
                placeholder="Confirm password"
                label="Confirm Password"
                type="password"
                onChange={(e)=>setData({ ...data, confirmPassword: e.target.value })}
                id="confirmPassword"
               
              />
              <div>
                <p> By signing up you agree to <a href="https://www.superbi.co/terms/" style={{color:"blue", textDecorationLine:"none"}} target="_blank">SuperBI's Term  of Service </a> and  <a href="https://www.superbi.co/privacy/" style={{color:"blue", textDecorationLine:"none"}} target="_blank"> Privacy Policy</a></p>
            </div>
              <button
                type="submit"
                color="primary"
                className={classes.submit}
              >
               Sign Up
              </button>
              <Grid container>
                {/* <Grid item xs>
                  <a href="#" variant="body2" style={{color:color.primary, textDecorationLine:"none"}}>
                    Forgot password?
                  </a>
                </Grid> */}
                <Grid item style={{color: "black"}}> 
                  <Link to="/login" variant="body2">
                    Already have Account? <span style={{color:color.primary}}> Login </span>
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
                <h4> OR Sign
                  Up With</h4> <br/>
              <button   onClick={() => dispatch(handleSingUpWithGoogle (props.history))}>
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


const mapStateToprop = ({ registered }) => {
  console.log(registered)
  return {
    authedUser: registered.id,
    loading: registered.loading,
    message:registered.message
  };
};

export default connect(mapStateToprop)(Signup);
