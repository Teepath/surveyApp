import React from 'react'
import * as Survey from "survey-react";
import Image from "../../assets/logo.png";




function Embeded(props) {
    
    const { json, showCompletedPage, onComplete, id,setFinalPage, showPage } = props;


    // useEffect(() => {
    //     dispatch(handleGetSingleSurvey(id))
    // }, [])

    if (json) {
        return (
            <main>
                <Survey.Survey
                    json={json}
                    showCompletedPage={showCompletedPage}
                    onComplete={(res) => onComplete(res.data)}
                />
                <div style={{ display: "flex", fontSize: "14px", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
                    <p> Proudly powered by</p>
                    <div>  <img src={Image} alt="logo" /> </div>
                </div>
            </main>
        )
    } else {
        return <div>...Fetching data.... </div>
    }
    
}

export default Embeded
