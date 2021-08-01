import React, { useState, useCallback } from "react";
import { handlePostResponse } from "../../actions/response";
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import MySurvey from "../surveyTypes/customerFeedbackModel";

const SurveyCustomerFeedback = (props) => {
  const [showPage, setShowPage] = useState(true);
  const dispatch = useDispatch()

  const { id, userId} = props;
  const onCompletePage = useCallback((data) => {
    console.log(data);
    dispatch(handlePostResponse(data, id, userId))
    dispatch()
    setShowPage(!showPage);
  }, []);

  const setFinalPage = () => {
    return (
      <main>
        <h1> Thank you for taking survey Custmer Feedback</h1>
      </main>
    );
  };

  return showPage ? (
    <MySurvey showCompletedPage={(data) => onCompletePage(data)} />
  ) : (
    setFinalPage()
  );
};

const mapStateToProp = ({ customerFeedBack, authedUser, surveys }, props) => {
  console.log(customerFeedBack.questionId)
   
  const { id } = props.match.params;
  return {
    userId: surveys.surveys[id].userId,
    json: surveys.surveys[id].json,
    id: customerFeedBack.questionId
  }
}

export default connect(mapStateToProp)(SurveyCustomerFeedback);