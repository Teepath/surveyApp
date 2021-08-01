import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "80%",
    height: "50%",
    display: "flex",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid grey",
    boxSizing: "content",
    margin: theme.spacing(2, 2, 3),
    boxShadow: "1px 2px 6px 0px",

    "& p": {
      fontSize: "14px",
      padding: "4px",
      textTransform: "title-case",
    },

    "& h4": {
      fontSize: "18px",
      padding: "4px",
    },
  },
}));

function Card({ title, response }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <p> {title}</p>
      <h4>{response}</h4>
    </div>
  );
}

export default Card;
