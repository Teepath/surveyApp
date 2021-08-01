import React, { Component } from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
// import { color } from "../../../Global/color"
import { withRouter } from "react-router-dom";


const styles = (theme) => ({
    root: {
      margin: 0,
        padding: theme.spacing(2),
      fontSize: "14px"
    },


    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
});
  

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
  
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);


class PlanUpgrade extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shareOpen: "closeShare",
            toggleButtonText: "Share this"
        };
    
      }


  render() {

      const { open, onClose,lasses } = this.props;
  
    return (
        <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
            >
                      <DialogTitle id="customized-dialog-title" onClose={onClose}>
    
            </DialogTitle>
            
            <DialogContent>
                  <p style={{fontSize:"14px"}}> Copied Link to Clipboard</p>
            </DialogContent>
            </Dialog>
    );
  }
}

export default withRouter(PlanUpgrade);