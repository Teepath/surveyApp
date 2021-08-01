import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import MySurvey from "../surveyTypes/satisfactionType";
import { handlePostResponse } from "../../actions/response";
import { connect } from "react-redux";

const ProductSatisfactionSurvey = (props) => {
  const [showPage, setShowPage] = useState(true);
  const dispatch = useDispatch()
  const pathname = props.location.pathname.split("/")[1]
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

const mapStateToprop = ({ customerSatisfaction, authedUser, surveys }, props) => {
  const { id } = props.match.params;
  return {
    userId: surveys.surveys[id].userId,
    json: surveys.surveys[id].json,
    id: customerSatisfaction.questionId
  }
}

export default connect(mapStateToprop)(ProductSatisfactionSurvey);