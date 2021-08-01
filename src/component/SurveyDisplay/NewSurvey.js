import React, { useState, useCallback } from "react";

import MySurvey from "../NewSurveys/DoneForm";
import SurveyEditMode from "../NewSurveys/EditModeForm"
import { color } from "../../Global/color";


import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    fieldButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        border: "hidden",
        width: "10%",
        marginLeft:"70%",
        height: "auto",
        padding: "0.4em",
        background: color.lightDimPrimary,
        fontSize: "1.008em",
        marginTop: "1em",
        marginBottom: "1em",
    },

    
}))

const DoneSurvey = () => {

    const classes = styles()
    const [showPage, setShowPage] = useState(true);
    const [ is_edit, setEdit] = useState(false)

  const onCompletePage = useCallback((data) => {
    console.log(data);
    setShowPage(!showPage);
  }, []);
    
    const hadnleMode = () => {
      setEdit(true)
    }
    const json = JSON.parse(localStorage.getItem('userData'))

  const setFinalPage = () => {
    return (
      <main>
        <h1> Thank you for taking survey NPS</h1>
      </main>
    );
  };

    return showPage ? (
        <main>
            <button className={classes.fieldButton} onClick={() => setEdit(true)}> Edit</button>
            {
                !is_edit?
                    <MySurvey showCompletedPage={(data) => onCompletePage(data)} />
                    :
                    <SurveyEditMode
                        questions={json.questions}
                        title={json.title}
                        description={json.decsription}
                    />
            }
             
      </main>
 
  ) : (
    setFinalPage()
  );
};

export default DoneSurvey;