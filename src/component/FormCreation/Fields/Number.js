import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {BiTrash } from 'react-icons/bi'
import {color} from "../../../Global/color"


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
        "& input": {
            width: "auto",
            height: "2.8em",
            fontSize:"1.5em",
            borderRadidus: "10px",
            border: "none",
            padding:theme.spacing(2),
            marginLeft: "24%",
          marginRight: "5%",
          boxShadow: "1px 2px 6px 0px #f3f3f3",
        },
    
        "& button": {
            width: " auto",
            height: "auto",
          fontSize: " 1.5em"
        }
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



function InputNumber({question, handleDelete}) {
    const classes = styles();

    return (
<div className={classes.fieldContainer}>
            <div>
                <label> {question.title}</label>
                     <div className={classes.inputRow}>
                       <input type={question.type} id={question.questionId} name={question.label} />
            <BiTrash onClick={(e) => handleDelete(question.title)} />
            
                       {/* <button  type="button" onClick={()=>handleFields(data)}> Save Question</button> */}
                     </div>         
            </div>
          
        </div>
    )
}

export default InputNumber;