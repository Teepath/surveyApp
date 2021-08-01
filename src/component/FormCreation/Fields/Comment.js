import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { color } from "../../../Global/color"
import {BiTrash } from 'react-icons/bi'


const styles = makeStyles((theme) => ({

    fieldContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        "& label": {
            width: "100%",
            marginLeft: theme.spacing(8),
            textAlign: "left",
            fontSize: "1.5em",
            marginTop: theme.spacing(2),  
        },
    
        "& textarea": {
          width:"60%",
          fontSize:"1.5em",
          borderRadidus: "10px",
          border: "none",
          padding:theme.spacing(2),
          marginTop: theme.spacing(2),
        marginLeft: "20%",
        // marginRight: "5%",
          boxShadow: "1px 2px 6px 0px #f3f3f3",
        },
    
        // "& button": {
        //     width: " auto",
        //     height: "auto",
        //   fontSize: " 1.5em"
        // }
  },
  inputRow: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "& button": {
      width: "5%",
      height: "2%",
    }
  }
    
}))

function Comment({ question, handleDelete, index}) {
    const classes = styles();
    return (
        <div className={classes.fieldContainer}>
        <label> {question.title}</label>
        <div className={classes.inputRow}>
          <textarea type={question.type} id={question.questionId} name={question.label} rows="4" cols="50"> </textarea>
          <div style={{display:"flex", width:"40%", paddingRight:"30%", justifyContent:"flex-end", fontSize:"18px", cursor:"pointer", }}>
                      <BiTrash onClick={()=> handleDelete(question.title)}/>
                       
                        </div>
           {/* <button> Edit</button> */}
          </div>
      </div>
    )
}

export default Comment;