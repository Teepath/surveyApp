import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "survey-react/survey.css";
import Image from "../../assets/logo.png";
import { handlePostResponse } from "../../actions/response";
import { handleSharedData, } from '../../actions/shared';
import { handleGetSingleSurvey } from "../../actions/survey"; 
import { connect } from "react-redux";
import EmbedView from './embeded';
import { TrainRounded } from "@material-ui/icons";

const ViewSurvey = (props) => {
  const [showPage, setShowPage] = useState(true);
  const [ completed, setCompleted] = useState(false)
    const dispatch= useDispatch()
    // const jsonData = useSelector(({ surveys }) => surveys.surveys[id])
  // const json = jsonData.json;
  
  const {userId, id, json,} = props
    
  useEffect(() => {
    // dispatch(handleSharedData(authUser))
    const { id} = props.match.params;
    // setShowPage(!showPage);
    // setCompleted(!completed)
    if (!json) {
      dispatch(handleGetSingleSurvey(id))
      setCompleted(!completed)
      setShowPage(showPage)
    }
   
  }, [id])
    
  const onCompletePage = useCallback((data) => {
      console.log(data);
    dispatch(handlePostResponse(data, id, userId))
    setCompleted(true)
    setShowPage(false)
  

  }, []);

  const setFinalPage = () => {
    return (
      <main>
    <div style={{ display: "flex", fontSize: "14px", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
    <h3> Thank you, your responses have been recorded </h3>
        <p> Proudly powered by</p>
       <div>  <img src={Image} alt="logo" /> </div>
       
      </div>
     
      </main>
    );
  };
    

  if (showPage ) {
    return (
      <EmbedView
      onComplete={onCompletePage}
        json={json}
        id={id}
        showPage={showPage}
        showCompletedPage={false}
        // setFinalPage={setFinalPage}
      />
    )
  } else {
    return <div style={{ margin: "0 auto", fontSize: "16px" }}>
      {
        completed? setFinalPage(): "....Loading.... "
      }

      {/* <h2>...Loading......</h2> */}
 </div>
  }

  
};


const mapStateToProp = ({ authedUser, surveys }, props) => {
  
  const { id } = props.match.params;
  const survey = surveys.surveys;
  const jsonData = survey ? survey[id] : null
  const json = jsonData ? jsonData.json : null;
  const userId = jsonData ? jsonData.userId : null;
  return {
    authUser: authedUser.id? authedUser.id:null,
    userId:userId?userId: null,
    id: id? id:null,
    json:json?json: null,
    surveys: surveys.surveys?surveys.surveys:null
  
  }
}

export default connect(mapStateToProp)(ViewSurvey);
