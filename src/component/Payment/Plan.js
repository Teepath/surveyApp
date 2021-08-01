import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { color } from "../../Global/color";


const styles = {
    
    wrapper: {
        width: "50%",
        display: "flex",
        fontSize: "14px",
        margin: "0 auto",
        border: "1px solid #000",

        "& li": {
            listStyleType: "none",
            marginRight: "10px"
        },
        "& h4": {
            background: color.green,
            padding: "10px"
        },
        
        "& button": {
            background: color.primary,
            margin: "10px",
            padding: "10px",
            fontSize: "16px",
            color: "#fff"
        }
    },
    profile: {
        width: "50%"
    },

    headerLeft: {
        height: "100px",
        borderBottom: "2px solid #000",
        marginLeft: "40px"
    },
    headerRight: {
        height: "100px",
        borderBottom: "2px solid #000",
        "& li": {
            color: "red"
        }
    },


}

const useStyle = makeStyles(styles)


const PlanUser = (props) => {
    const classes = useStyle()

    const handlePayment = () => {
        props.history.push('/payment')
    }
    return (
        <Grid component="main" className={classes.wrapper}>
            <Grid item xs={6} sm={6} md={6}>
                <div className={classes.headerLeft}>
                    <h3> FREE</h3>     
                </div>
                <ul>
                <li> <h4> SURVEY</h4></li>
                    <li> 1 active survey</li>
                    <li> 100 responses per month</li>
                    <li> Templates for NPS, CSAT, andCES</li>
                    <li> Duplicate surveys</li>
                    <li><h4> COLLECT FEEDBACK</h4></li>
                    <li> Copy a Weblink</li>
                    <li> Post on social media</li>
                    <li><h4> REPORTS</h4></li>
                    <li> Standard web report</li>
                    <li> <h4> INTEGRATIONS</h4></li>
                    <li> Slack</li>
                    <li> Zapier</li>
                    <li> Email</li>
                </ul>
                </Grid>
            <Grid item xs={6} sm={6} md={6}>
                <div className={classes.headerRight}>
                <h3>PROFESSIONAL</h3>
                <li> Monthly: $35/mon</li>
                    <li> Yearly: $30/mon</li>
                    <hr></hr>
                </div>
              
                <li> <h4> SURVEY</h4></li>
                <li> Unlimited surveys</li>
                <li> Unlimited responses per survey</li>
                <li> Templates for NPS, CSAT and CES</li>
                <li> Duplicate surveys</li>
                <li><h4> CUSTOMIZATION</h4></li>
                <li> Theme customization </li>
                <li> Remove/replace SuperBI brand </li>
                <li><h4>COLLECT FEEDBACK</h4></li>
                <li> Copy a Weblink </li>
                <li> Post on social media </li>
                <li> Embed on Websites and Blogs</li>
                <li><h4>REPORTS </h4></li>
                <li> Standard web report </li>
                <li> Export report to PDF, XLS, .CSV </li>
                <li><h4> INTEGRATIONS </h4></li>
                <li> Slack</li>
                <li> Zapier </li>
                <li> Email </li>
                <button onClick={()=>handlePayment()}> Upgrade Account</button>
            </Grid>
        </Grid>
    )
}

export default PlanUser;