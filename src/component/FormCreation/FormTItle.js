import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    fieldContainer: {
        width: "100%",
        "& label": {
            width: "20%",
            margin: theme.spacing(2),
            textAlign: "center",
            fontSize: "1.5em",
            
        
        },
        "& input": {
            width: "70%",
            height: "2em",
            fontSize:"1.5em",
            borderRadidus: "10px",
            border: "none",
            padding:theme.spacing(2),
            margin: theme.spacing(2),
            boxShadow: "1px 2px 6px 0px #f3f3f3",
        },
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

function FormTItle({handleInputChange, title, description}) {
    const classes = styles();
    return (
        <div className={classes.fieldContainer}>
              <div >
                <label htmlFor="title"> Title</label>
                <input type="text" name="title" id="title" placeholder="Enter Form Title" onChange={(e) => handleInputChange(e)} value={ title}/>
                </div>
                <div>
                <label htmlFor="description"> Description</label>
                <input type="text" name="description" id="description" placeholder="Describe your form" onChange={(e) => handleInputChange(e)} value={ description}/>
                            </div>
                        
        </div>
    )
}

export default FormTItle
