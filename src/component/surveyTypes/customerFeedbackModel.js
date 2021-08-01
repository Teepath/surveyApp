import React,{useEffect} from "react";
import "survey-react/survey.css";
import {color} from "../../Global/color"
// import { json } from "../surveys/customerFeedBackQuestion";
import { connect } from "react-redux";

import { handleCusFeedbackSurveyPost} from "../../actions/customerFeedback";

import * as Survey from "survey-react";

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

const MySurvey = (props) => {
  const { json, userId, dispatch } = props;

  const handleSurveyPost = () => {
    const survey = {
      id: generateUID(),
      title:"FeedBack",
      json
    }
    dispatch(handleCusFeedbackSurveyPost(survey))
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
};

const mapStateToprop = ({ customerFeedBack, authedUser }) => {
  console.log(customerFeedBack)
  return {
    json: customerFeedBack.json,
    userId: authedUser.id
  }
}

export default connect(mapStateToprop)(MySurvey);