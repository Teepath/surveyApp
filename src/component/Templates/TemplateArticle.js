import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { color } from "../../Global/color";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "90%",
    marginTop: theme.spacing(10),
    padding: theme.spacing(4),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    "& img": {
      borderRadius: "4px",
      width:"200px",
      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
    },

    "& h4": {
      fontWeight: "bold",
    },
    "& button": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: theme.spacing(7),
      fontSize: "14px",
      fontWeight: "bold",
      boxShadow: "0px 0p 8px rgba(0,0,0,0.25)",
      color: color.lightWhite,
      background: color.primary,
      width: "50%",
      height: "40px",
    },  },
}));

function TemplateArticle({ image, title, btn, onClick }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img src={image} alt="..." className={classes.img} />
      <h4>{title}</h4>
      <button onClick={()=>onClick()}> {btn} </button>
    </div>
  );
}

export default TemplateArticle;
