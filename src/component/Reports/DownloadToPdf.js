import React, {useEffect} from 'react'
import MyPDF from ".";
import { connect } from "react-redux";
import { handleAnalysis } from "../../actions/response";

function DownloadToPdf(props) {
    const { id, questions, json, analysis, classes,} = props;
    useEffect(() => {
        const { dispatch } = props;
        if (id) {
            dispatch(handleAnalysis(id))  
        }
      
    }, [])
    

    const download = <MyPDF id={id} questions={questions} analysis={analysis} classes={classes} json={json} />
    
    if (analysis) {
        return (
           <MyPDF />
        )
    } else {
        return <div> ...Loading...</div>
    }
}



const mapStateToprop = ({ surveys, reports }, props) => {
    const obj = surveys.surveys?surveys.surveys:null;
  
    const { id } = props;
    const survey = obj && obj[id];
    // console.log(survey.json.questions)
    console.log(reports.analysis);
    return {
      questions: survey.json.questions?survey.json.questions:null,
      analysis: reports.analysis?reports.analysis:null
    }
  }

export default connect(mapStateToprop)(DownloadToPdf)
