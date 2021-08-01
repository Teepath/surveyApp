import React, {useEffect} from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import SurveyTable from "./SurveyTable";
import Table from "./Table";
import { handleSharedData } from '../../actions/shared';


import ProfileBox from "./ProfileBox";

import Footer from "./footer";

const useStyles = makeStyles((theme) => ({
  root: {
  width: "100vw",
  },

  title: {
    textAlign: "center",
    width: "100%",
    height: "10%",
  },
}));

function Profile(props) {

  const { dispatch, userId, surveyLength, reportLength, surveys, reports } = props;
  


  const classes = useStyles();

  useEffect(() => {

   
      dispatch(handleSharedData(userId))

 
  },[])

  if (surveyLength && reportLength) {
    return (
      <Grid container component="main">
        <CssBaseline />
        <ProfileBox surveyLength={surveyLength?.length} reportLength={reportLength?.length} />
        <SurveyTable title="Surveys" />
        <Table
          columns={[
            "Title",
            "Modified",
            "Responses",
            "Edit",
            "View",
            "Analyse",
            "Copy",
            "Collect",
            "Delete",
          ]}
          surveyLength={surveyLength}
          surveys={surveys? surveys : null}
          reports={reports}
        />
        <Footer />
      </Grid>
    );
  } else {
    return<div> Loading.....</div>
  }
}

const mapStateToprop = ({ authedUser, surveys, reports }) => {
  const dataSurvey = surveys.surveys;
  const dataReports = reports.reports;
  const surveyLength = dataSurvey? Object.keys(dataSurvey).sort((a, b) => dataSurvey[b].createdAt - dataSurvey[a].createdAt ) : null;
  const reportLength = dataReports ? Object.keys(dataReports) : null;
  return {
    userId: authedUser.id,
    loading: authedUser == null,
    surveys: dataSurvey,
    reports:dataReports,
    surveyLength,
    reportLength

  };
};

export default connect(mapStateToprop)(Profile);
