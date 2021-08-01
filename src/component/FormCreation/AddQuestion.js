import React from 'react';
import { makeStyles } from "@material-ui/core/styles";


const styles = makeStyles((theme) => ({
    formField: {
        display: "flex",
        flexDirection:"column",
        width:"50%",
    },
    inputQuestion: {
        width: "100%",
        height: "2.8em",
        alignSelf:"center",
        fontSize:"1.8em",
        borderRadidus: "10px",
        border: "none",
        margin: theme.spacing(2),
        padding: "3%",
        boxShadow: "1px 2px 6px 0px #f3f3f3",
    },
    fieldButton: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "auto",
        padding: "0.4em",
        fontSize: "1.008em",
        margin: "1em",
    },
  
}))

function AddQuestion({ handleChangeLabel, inputChoice, addChoices, handleFields, data, handleChange}) {
    const classes = styles();
    return (
            <form className={classes.formField}> <input type="text" name="question" className={classes.inputQuestion} id="question" onChange={(e) =>  handleChange(e)} placeholder="Your question?" />
            {/* <input type="text" name="label" className={classes.inputQuestion} id="label" onChange={(e) => handleChangeLabel(e)} placeholder="Field Label?" /></div> */}
           
                        {data.type === "radiogroup" || data.type === "checkbox" || data.type === "dropdown"
                  ? (<div>
                            
                                <div>
                        {inputChoice.length > 0 && inputChoice.map(input => (
                           input
                        ))
                        }      
                     </div>
                                <div className={classes.fieldButton}>
                                <button type="submit" onClick={(e) => addChoices(e)} > Add Options </button>
                                <button type="button" onClick={(e)=>handleFields(data, e)}  >  Save Question</button>
                                </div>
                              
                        </div>) : <div style={{display:"flex", width:"100%", justifyContent:"center"}}>  <button type="button" onClick={(e)=>handleFields(data, e)} className={classes.btn}>  Save Question</button></div> 
                       
                    }
                      
                    </form>
    
    )
}

export default AddQuestion
