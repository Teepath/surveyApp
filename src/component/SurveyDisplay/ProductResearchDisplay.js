import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import MySurvey from "../surveyTypes/marketResearchType";
import { handlePostResponse } from "../../actions/response";
import { connect } from "react-redux";

const ProductResearchDisplay = (props) => {
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

const mapStateToProp = ({  productSurvey, authedUser, surveys }, props) => {
  const { id } = props.match.params;
  return {
    id:  productSurvey.questionId,
    userId: surveys.surveys[id].userId,
    json: surveys.surveys[id].json
  }
}
export default connect(mapStateToProp)(ProductResearchDisplay);