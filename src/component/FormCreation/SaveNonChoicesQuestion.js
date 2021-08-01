import React from 'react'
import { connect } from 'react-redux';

function SaveNonChoicesQuestion({ is_question, json, handleDoneForm, setOpen, is_edit, updateEditForm, id }) {
    

    if (json) {
        return (
    
            <div style={{ display: "flex", width: "50%", justifyContent: "space-around", margin: "5%" }}>
                <button type="button" onClick={() => setOpen()}> Add Question</button>
                {
                    !is_question && !is_edit > 0 ? <button type="button" onClick={() => handleDoneForm()}> Save Form</button> : <button type="button" onClick={() =>  updateEditForm()}> update form </button> 
                }
            
            </div>
        )
    } else {
        
        return <div>loading....</div>
    }
}

const mapStateToProps = ({ surveys }) => {
    // const dataSurvey = surveys.surveys;
    // const surveyLength = dataSurvey ? Object.keys(dataSurvey).sort((a, b) => dataSurvey[b].createdAt - dataSurvey[a].createdAt) : null;
    // console.log(surveyLength[0])
    return {
       
    }
}

export default connect(mapStateToProps)(SaveNonChoicesQuestion)
