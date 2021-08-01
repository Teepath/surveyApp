import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { color } from "../../../Global/color";
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
        
    "& p": {
      width: "100%",
      marginLeft: theme.spacing(8),
      textAlign: "left",
      fontSize: "1.5em",
      marginTop: theme.spacing(2),
    },

  
},
    select: {
      width: "100%",
      display: "flex",
      justifyContent: "space-around",

      "& select": {
        width: "30%",
        fontSize:"1.5em",
        borderRadidus: "10px",
        border: "hidden",
      marginTop: theme.spacing(2),
      marginLeft: "24%",
        boxShadow: "1px 2px 6px 0px #f3f3f3",
      },
      "& button": {
        width: "8%",
        display: "flex",
        justifyContent: "center",
        marginRight: "7%",
        marginLeft: "7%",
        fontSize: " 1.5em"
      }
    },
    
      
    
    
  button: {
    width: " auto",
    height: "auto",
  fontSize: " 1.5em",
    background: color.lightDimPrimary
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

function DropDown({ question, handleDelete, index}) {
    const classes = styles();
    return (
        <div className={classes.fieldContainer}>
        <label> {question.title}</label>
        <div className={classes.select}>
        <select>
                <option> { question.label}</option>
          {question.choices && question.choices.map(choice => (
            <option value={choice}> {choice}</option>
          ))}
        </select>
          <BiTrash style={{cursor:"pointer", fontSize:"18px", marginRight: "25%"}} onClick={() => handleDelete(question.title)}/> 
          </div>
        </div>          
    )
}

export default DropDown;






