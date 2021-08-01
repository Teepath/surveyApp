import React from 'react';
import { makeStyles } from "@material-ui/core/styles";


const styles = makeStyles((theme) => ({
    select: {
        display: "flex",
        width: "50%",
        height: "2.8em",
        fontSize:"1.5em",
        borderRadidus: "10px",
        border: "none",
        margin: theme.spacing(2),
        boxShadow: "1px 2px 6px 0px #f3f3f3",
    },    
}))

function QuestionChoices({ handleSelectedQuentionType }) {
    const classes = styles();
    return (
      
        <select onChange={(e) => handleSelectedQuentionType(e)} className={ classes.select} > <option value="question-type">...Slect question type...</option>
                         <option value="text">Text</option> 
                            <option value="comment">Comment</option>
                            {/* <option value="date">Date</option>
                            <option value="email">Email</option>
                            <option value="number">Number</option> */}
                            <option value="checkbox">Checkbox</option>
                            <option value="radio">Radio</option>
                            <option value="rating">Rating</option>
                            <option value="dropdown">Dropdown</option>
                            {/* <option value="rating">...Slect question type...</option>  */}
                        </select>
        
    )
}

export default QuestionChoices
