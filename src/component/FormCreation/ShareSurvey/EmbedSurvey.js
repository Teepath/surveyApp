import React, { Component} from 'react';
import { withStyles} from "@material-ui/core/styles";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import UseScript from './useScript';


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


const EmbededSurvey = (props) =>{
  


      const divStyle = {
        margin: "0 auto",
        maxWidth: "100%",
        width: "640px"
      };

      const iframeStyle = {
        margin: "0 auto",
        maxWidth: "100%",
        width: "100%",
        height: "300px",
        border: "1px solid #cfcfcf"
      };
    

      const { userId, dataId, json, authUser, surveys ,  open, onClose, urlId} = props;
      // https://superbi.web.app/create/view/
    const surveyUrl = `http://localhost:3000/create/view/${urlId} `;

    return (
        <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
            >
              <DialogTitle id="customized-dialog-title" onClose={onClose}>
                <h5> Embeded Link</h5>
            </DialogTitle>
            <DialogContent>
          <div data-id={`${urlId}`} style={divStyle} data-auto-scroll="true">
            {/* <UseScript id={ urlId}/> */}
            <iframe lazy-loading="true" title="embed-test" src={`${surveyUrl}`} allowFullScreen style={iframeStyle} >
           
            </iframe>
                </div>

                </DialogContent>     
            </Dialog>
    );
  
}


const mapStateToprop = () => {

    // return {
    //   userId: authedUser.id,
    // };
  };

export default connect(mapStateToprop)(EmbededSurvey);
