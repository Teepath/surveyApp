import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { color } from "../../Global/color";
import Typography from "@material-ui/core/Typography";
import Image from "../../assets/logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontFamily: "Roboto",
    fontSize: "14px",
    backgroundColor: color.lightWight,
    padding: theme.spacing(8),
  },

  footerCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  
  socialButton: {
    display: "flex",
    justifyContent: "center",
    fontSize: "60px",
    color: color.primary
  },
  link: {
    textDecoration: "none",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={3} sm={3} md={3} className={classes.img}>
        <img src={Image} alt="logo" />
      </Grid>
      {/* <Grid item xs={3} sm={3} md={3} className={classes.footerCard}>
        <Typography variant="h5">Links</Typography>
        Home <br />
        Pricing
        <br />
        Contact
        <br />
      </Grid>
      <Grid item xs={3} sm={3} md={3} className={classes.footerCard}>
        <Typography variant="h5">Company</Typography>
        About
        <br />
        Careers
        <br />
        Affiliates <br />
      </Grid> */}
      <Grid item xs={8} sm={8} md={8} className={classes.footerCard}>
        <Typography variant="h5">Follow Us on:</Typography>
        <Grid className={classes.socialButton}>
            <Grid item xs={4} sm={4} md={4}>
           <a href="https://twitter.com/superbi_data" target="_blank" rel="noopener noreferrer"> <FaTwitter />  </a> 
        
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
            <a href="https://facebook.com/superbi.co" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
            <a href="https://instagram.com/superbi_data" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
              </Grid>
        </Grid>
        
      </Grid>
    </Grid>
  );
};

export default Footer;
