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
          marginTop: theme.spacing(2),
          marginLeft: "24%",
        marginRight: "5%",
          boxShadow: "1px 2px 6px 0px #f3f3f3",
            
        
        },
     
    
        "& p": {
          width: "100%",
          marginLeft: theme.spacing(8),
          textAlign: "left",
          fontSize: "1.5em",
          marginTop: theme.spacing(2),
        },
        button: {
            width: " auto",
            height: "auto",
          fontSize: " 1.5em",
          
        }
      },
      
      inputRow: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        "& button": {
          width: "5%",
          height: "2%",
          marginTop: "2%"
          }
            
      }
}))

function Checkbox({ question, handleDelete, index}) {
    const classes = styles();


    return (
        <div className={classes.fieldContainer}>     
                      <label> {question.title}</label>
                      <div style={{display: "flex", width:"100%", marginLeft: "20%" }}>
                   <div style={{display:"flex", justifyContent:"space-around", width:"20%", flexDirection:"column"}}>
                     {
                          question.choices && question.choices.map(choice => (
                            <div style={{ display: "flex", width: "100%", justifyContent: "space-around" }}>
                           <input type={question.type} id={choice} name={question.label} value={choice} style={{ width: "20%" }} />
                            <label for={choice}> { choice}</label><br></br>
               </div> 
                       
                       ))  
                      } 
                        </div>
                        <div style={{display:"flex", width:"35%", paddingRight:"5%", justifyContent:"flex-end", cursor:"pointer", fontSize:"18px"}}>
                      <BiTrash  onClick={()=> handleDelete(question.title)} /> 
                       
                        </div>
                        </div>
                      
                    </div>
    )
}

export default Checkbox





