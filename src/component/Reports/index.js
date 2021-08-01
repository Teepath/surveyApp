import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
import { handleAnalysis } from "../../actions/response";
import Chart from "./PieChart";
import RateChart from "./RateChart";
import CommentTable from "./CommentTable"
import CreateBar from "./CheckBoxBarchart";
import RadioBarChart from "./RadioBarchart";
import Image from "../../assets/logo.png";
// import CommentBox from "./CommentAnalyse";
import ChartTable from "./ChartTable";
import CheckBoxTable from "./CheckBoxTable";
import RatingTable from "./RatingTable";
import { color } from "../../Global/color"


const styles ={
  root: {
    height: "100vh",
  },

  title: {
    textAlign: "center",
    width: "100%",
    height: "10%",
  },

  table: {
    width: "30%",
  },

  chart: {
    width: "60%"
  },

  button: {
    fontSize: "16px",
    color: color.primary,
    marginTop: "20px",
    justifyContent: "flex-end"
  }
};

class Reports extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    const { dispatch, analysis } = this.props;
    if (id && !analysis) {
      dispatch(handleAnalysis(id))
    }

  }


  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   return nextProps.analysis && !nextProps.analysis;
  // }


  downloadToPDF = () => {
    const path = window.location.href;
    const DownloadFile = window.location.pathname
    fetch(path, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  })
  .then((response) => response.blob())
  .then((blob) => {
    // Create blob link to download
    const url = window.URL.createObjectURL(
      new Blob([blob]),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `report.pdf`,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  });

  }
  

  render() {
    console.log(window.location.pathname)
    const path = window.location.href;
    const pathname = window.locationpathname
    const { id } = this.props.match.params;
    const { questions, analysis, classes,} = this.props;
    const chartHandle = (question) => {
      switch (question.type) {
        case "radiogroup":
          return <div>  <h3> {question.title}:</h3>  <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className={classes.table}>
            <ChartTable name={question.name}
            choices={question.choices} analysis={analysis}
            key={question.name}
 
            />
            </div>
            <div  className={classes.chart}>
            <RadioBarChart name={question.name}
              choices={question.choices} analysis={analysis}
              key={question.name}
             
              />
            </div>
            </div> </div>
          case "rating":
          return <div ><h3> {question.title}:</h3>  <div style={{ display: "flex", justifyContent: "space-around" }}>
             <div className={classes.table}>
            <RatingTable name={question.name}
              choices={question.choices}
              analysis={analysis}
              key={question.name}
              />
            </div>
            <div className={classes.chart}>
              <RateChart analysis={analysis}
              name={question.name}
              className={classes.chart}
              />
            </div>
            </div></div>
        case "checkbox":
          return <div ><h3> {question.title}:</h3> <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div className={classes.table}>
            <CheckBoxTable name={question.name}
              choices={question.choices} analysis={analysis}
              key={question.name}
              />
            </div>
            <div className={classes.chart}>
              <CreateBar name={question.name} choices={question.choices}
              analysis={analysis}
              key={question.name}
                className={classes.chart} />
            </div>
            </div></div>
        case "comment":
          return <div ><h3> {question.title}:</h3> <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}> <CommentTable name={question.title} analysis={analysis} key={question.title} /> </div> </div>
          case "dropdown":
          return <div ><h3> {question.title}:</h3> <div style={{ display: "flex", justifyContent: "space-around" }}>
             <div className={classes.table}>
            <ChartTable name={question.name} choices={question.choices}
              analysis={analysis}
                key={question.name} className={classes.table} />
            </div>
            <div className={classes.chart}>
            <Chart name={question.name} choices={question.choices}
              analysis={analysis} key={question.name}
              className={classes.chart}
              />
            </div>
            </div></div>
        default:
         return  <div> Not to return</div>
      }
     
     }

    console.log(id)
    if (questions && analysis) {
      return (
        <div>
          <div className={classes.button}> <button onClick={()=>this.downloadToPDF()}> Download</button> </div>
             
          {
            questions.map((question) => (
              chartHandle(question)
            ))
          }

<div style={{ display: "flex", fontSize:"16px", flexDirection:"column", alignItems: "center", marginTop: "50px"}}>
        <p> Proudly powered by</p>
       <div>  <img src={Image} alt="logo" /> </div>
       
      </div>
        </div>
      );
    } else {
      return <div> No report yet</div>
    }
   
  }
} 

const mapStateToprop = ({ surveys, reports }, props) => {
  const obj = surveys.surveys?surveys.surveys:null;

  const { id } = props.match.params;
  const survey = obj && obj[id];
  // console.log(survey.json.questions)
  // console.log(reports.analysis);
  return {
    questions: survey?survey.json.questions:null,
    analysis: reports.analysis?reports.analysis:null
  }
}

export default connect(mapStateToprop)(withStyles(styles)(Reports));
