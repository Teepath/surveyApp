import React, { Component } from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { color } from "../../../Global/color"
import DialogClose from "../../Dashboard/Dialog";


const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },


    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },

  button:{
    width: "20%",
    margin: "0 auto",
    fontSize: "14px",
    background: color.primary,
    color: "#fff",
    height: "auto"
    }
 
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
  
  // const DialogActions = withStyles((theme) => ({
  //   root: {
  //     margin: "0 auto",
  //     background: "red",
  //     fontSize: "14px",
  //     textAlign: "center",
  //     color: "#fff",
  //     width: "20%",
  //   "& p": {
  //     textAlign: "center"
  //   }
  //   },
  // }))(MuiDialogActions);


class SocialShare extends Component {

    constructor(props) {
        super(props);
        this.state = {
          openLink: false,
   
        };
      

    
      }
    
  handleOpen = () => {
    const { urlId } = this.props;
    const url = `https://superbi.web.app/create/view/${urlId}`;
    navigator.clipboard.writeText(url)
    this.setState({
          openLink:true
        })
  }

  handleCloseLink = () => {
    
    this.setState({
      openLink: false
    })
  }
   

  render() {

      const { open, onClose, urlId, classes} = this.props;
  
    const url = `https://superbi.web.app/create/view/${urlId}`;

    return (
        <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
            >
      <DialogTitle id="customized-dialog-title" onClose={onClose}>
                <h5> Survey Link:</h5>
            </DialogTitle>
            <DialogContent>
        <h4> {url}</h4>
          <button className={classes.button} onClick={() => this.handleOpen() }>  Copy </button>
        </DialogContent>
        <DialogClose
          open={this.state.openLink}
          onClose={this.handleCloseLink}
          />
            </Dialog>
    );
  }
}

export default withStyles(styles)(SocialShare);
