import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FcNews } from "react-icons/fc";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "90%",
    height: "90%",
    fontSize: "90%",
    textAlign: "center",
    boxShadow: "1px 2px 6px 0px",
    borderRadius: "2px",
    padding: theme.spacing(1),
  },
}));

function Card({ title, subject, icon }) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <h4> { icon? icon:null} {title}</h4>
      <h3> {subject}</h3>
    </div>
  );
}

export default Card;
