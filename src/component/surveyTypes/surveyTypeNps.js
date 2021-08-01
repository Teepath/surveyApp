import React from "react";
import "survey-react/survey.css";
import {color} from "../../Global/color"

import { connect } from "react-redux";
import {handleNPSSurveyPost } from "../../actions/nps";

import * as Survey from "survey-react";

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

const NPSSurvey = (props) => {
  
  const { json, userId, dispatch } = props;


  const handleSurveyPost = () => {
    const survey = {
      id: generateUID(),
      title:"Nps Survey Form",
      json
    }
    dispatch(handleNPSSurveyPost(survey))
    props.history.push(`/collect/${survey.id}`)
  }

  if (json) {
    return (
      <main>
        <button style={{
          width: "10%", height: "50px",
          margin: "10px", fontSize: "16px", border: "hidden",
          background: color.green, color: "white",
        }} onClick={()=> handleSurveyPost()}>Click to use</button>
      <Survey.Survey
        json={json}
        showCompletedPage={false}
        onComplete={(data) => props.showCompletedPage(data.valuesHash)}
        />
   </main>
    );
  } else {
    return <div> Loading...</div>
  }
  }




const mapStateToProp = ({ nps, authedUser }) => {
  return {
    json: nps.json,
    userId: authedUser.id,
  }
}

export default connect(mapStateToProp)(NPSSurvey);
