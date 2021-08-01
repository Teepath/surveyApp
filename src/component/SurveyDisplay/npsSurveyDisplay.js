import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { handlePostResponse } from "../../actions/response";
import { connect } from "react-redux";

import MySurvey from "../surveyTypes/surveyTypeNps";

const SurveyNps = (props) => {
  const [showPage, setShowPage] = useState(true);
  const dispatch = useDispatch()

  const { id, userId} = props
  
  const onCompletePage = useCallback((data) => {
    console.log(data);
    dispatch(handlePostResponse( data, id, userId))
    setShowPage(!showPage);
  }, []);

  const setFinalPage = () => {
    return (
      <main>
        <h1> Thank you for taking survey NPS</h1>
      </main>
    );
  };



  return showPage ? (
    <MySurvey showCompletedPage={(data) => onCompletePage(data)} />
  ) : (
    setFinalPage()
  );
};

const mapStateToProp = ({ nps, authedUser, surveys }, props) => {
  console.log(authedUser.id)
   
  const { id } = props.match.params;
  return {
   id: nps.questionId,
   userId: surveys.surveys[id].userId,
   json: surveys.surveys[id].json
  }
}

export default connect(mapStateToProp)(SurveyNps);
