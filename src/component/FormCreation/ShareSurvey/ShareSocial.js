import React, { Component } from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { SiFacebook } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si"
import { SiGmail } from "react-icons/si"
import { SiLogmein } from "react-icons/si"


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

    shareBtn: {
        display: "inline-block",
        color: "#ffffff",
        border: "none",
        padding: "0.1em 0.6em",
        outline:"none",
        textAlign: "center",
        fontSize: "0.9em",
        margin: "0 0.2em",
        "& focus": {
            cursor: "focus"
        },
        "& hover":{
            textDecoration: "none",
            opacity: "0.8"
        },

        "& active": {
            color:"#e2e2e2"
        },
    

       
    },
    email: {
        background: "#444444"
    },
    twitter: {
        background: "#55acee"
        },
    facebook: {
        background: "#3B5998"
    },
    

    linkedIn: {
        background: "#4875B4"
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


class SocialShare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shareOpen: "closeShare",
            toggleButtonText: "Share this"
        };
      
        this.shareOpenToggle = this.shareOpenToggle.bind(this);
    
      }
    
    shareOpenToggle() {
        if (this.state.shareOpen==="closeShare") {
            this.setState({
                shareOpen: "openShare",
                toggleButtonText: "Hide sharing options"
            });
        }else {
            this.setState({
                shareOpen: "closeShare",
                toggleButtonText: "Share this"
            });
        }   
    }
   

  render() {

      const { open, onClose, urlId, classes } = this.props;
  
    const url = `https://superbi.web.app/create/view/${urlId}`;

    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;

    return (
        <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
            >
                      <DialogTitle id="customized-dialog-title" onClose={onClose}>
                <h5> Share social links</h5>
            </DialogTitle>
            
            <DialogContent className="share-btn">
         
 
                <a href={twitterUrl} target="_blank" className="share-btn twitter" rel="noopener noreferrer"> < SiTwitter/></a>
                <a href={facebookUrl} target="_blank" className="share-btn facebook" rel="noopener noreferrer">< SiFacebook/></a>
                <a href={linkedinUrl} target="_blank" className="share-btn linkedin " rel="noopener noreferrer"><SiLogmein /></a>
   
             
                </DialogContent>   
            </Dialog>
    );
  }
}

export default withStyles(styles)(SocialShare);
