import React from 'react'
import "survey-react/survey.css";
import * as Survey from "survey-react";

function DoneForm(props) {
    
    const json = JSON.parse(localStorage.getItem('userData'))
    return (
        <Survey.Survey
                json={json}
                 showCompletedPage={false}
                 onComplete={(data) => props.showCompletedPage(data.valuesHash)}
                /> 
    )
}

export default DoneForm;

