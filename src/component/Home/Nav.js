import React from "react";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import DropDown from "./dropDowMenu";

import CssBaseline from "@material-ui/core/CssBaseline";

import Grid from "@material-ui/core/Grid";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../assets/bg.png";
import Logo from "../../assets/logo.png";
import { color } from "../../Global/color";

import HomeContent from "./HomeContant";


// const colorPrimary = "#00ACEE";

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
    borderBottom: "2px solid grey",
    // padding: theme.spacing(1, 2, 2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "70px",
    background: color.primary,
    paddingLeft: "1%",
    paddingTop: "0.5%",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& ul": {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      listStyle: "none",
      fontSize:"2em",
      width: "100%",

      "& li a": {
        textDecoration: "none",
        border: "none",
        color:"#fff"
     
      },
    },
  },

  auth: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    "& ul": {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      fontSize: "110%",
      listStyle: "none",
      width: "100%",

      "& li": {
        textDecoration: "none",
        fontSize:"1.5em",
      },
    },
  },

  loginBtn: {
    border: "hidden",
    background: color.complimentary,
    textDecoration: "none",
    marginRight:"2%"
  },

  signup: {
    backgroundColor: color.green,
    border: "hidden",
    marginLeft: "2%" 
  },
  dropDown: {
    position: "relative",
    display: "inline-block",

    "& :hover .dropdown-content": {
      display: "block"
    }
  },

  logo: {
    width: "20%",
    height: "30px",
  },



  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Nav = (props) => {
  const classes = useStyles();


  const{userId} = props
  if (userId) {
    return (
      <Grid>
        <CssBaseline />
        <Grid container className={classes.wrapper}>
          <Grid item xs={2} sm={4} md={4}>
            <img src={Logo} alt="logo" className={classes.logo} />
          </Grid>
          <Grid item xs={10} sm={8} md={8} className={classes.nav}>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Home
              </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/templates" exact activeClassName="active">
                  Create Survey
              </NavLink>
              </li>
              <li>
              <NavLink to="/payment"> Upgrade Account </NavLink> 
              </li>
              {/* <li>
            <NavLink to="/form-creator" exact activeClassName="active">
                  New Survey
              </NavLink>
              </li> */}
              <li className={classes.dropDown}>
               <DropDown/>

              </li>
      
            </ul>
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return null;
  }
};

const mapStateToprop = ({ authedUser }) => {
  return {
    userId: authedUser.id,
    loading: authedUser == null,
  };
};


export default connect(mapStateToprop)(Nav);
