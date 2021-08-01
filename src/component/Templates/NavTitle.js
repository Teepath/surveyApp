import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { color } from "../../Global/color";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "97%",
    height: "50px",
    position: "absolute",
    top: "20",
    left: "10",
    background: color.lightPrimary,
    "& h4": {
      fontWeight: "bold",
      paddingLeft: theme.spacing(10),
    },
  },
}));

function NavTitle() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h4> Templates</h4>
    </div>
  );
}

export default NavTitle;
