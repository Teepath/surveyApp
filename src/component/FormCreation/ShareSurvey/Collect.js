import React, {useRef, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import { useSelector, connect } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from '@material-ui/core/styles';
import { BiLinkAlt } from "react-icons/bi";
import { BiCode } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";

//components

import ShareButton from "./shareButton";
import SocialShare from "./ShareSocial";
import EmbedSurvey from "./EmbedSurvey";
import PlanUpgrade from "./Plan";
import ViewSurvey from "../ViewSurvey";

const styles =  {
    wrapper: {
        width: "100%",
    },

    card: {
        border: "hidden",
        borderRadius: "10px",
        fontSize: "14px",
        cursor: "pointer"
    }
}

const useStyle = makeStyles(styles)

const SurveyCollect = (props) => {
    const classes = useStyle()
    const [open, setOpen] = React.useState(false)
    const [openSocial, setOpenSocial] = React.useState(false)
    const [openPlan, setOpenPlan] = React.useState(false)
    const [openEmbed, setOpenEmbed] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("");
    const Iframe = useRef(null)
    const user = useSelector(({firebase})=> firebase.profile)

    const id = props.match.params.id;
        const { userId, dataId, json, authUser, surveys } = props;
        useEffect(() => {
        const script = document.createElement("script");
        script.src = `http://localhost:3000/create/view/${id}`;
        script.async = true;
        }, [])
    
   
    
    
    // const getEmbedComponent = () => {
    //     const { userId, dataId, json, authUser, surveys } = props;
    //     return <ViewSurvey
    //         userId={userId}
    //         id={dataId}
    //         json={json}
    //         authUser={authUser}
    //         surveys={surveys}

    //     />

        
    // }

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

  const  handleSocialClose = (value)=> {
    setOpenSocial(false);
    setSelectedValue(value);
    }

    
    const handleClickSocialOpen = () => {
        setOpenSocial(true)
    }

    const handleClickEmbed = () => {
        console.log(user.plan)
        if (user.plan === "free") {
            setOpenPlan(true)
            // setOpenEmbed(true)
        } else {
             setOpenEmbed(true)
        }
     
    }

    const handleEmbedClose = (value) => {
       
        setOpenEmbed(false);
        setOpenPlan(false)
        setSelectedValue(value);
        }
    const handleClickLinkOpen = () => {
        setOpen(true);
        setSelectedValue(id)
       
      };

      const url = `https://superbi.web.app/create/view/${id}`;
    return (
        <Grid container component="main">
            <CssBaseline />
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.wrapper}>
                <h3> How do you want to share your survey?</h3>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} className={classes.card}  onClick={()=>handleClickLinkOpen()}>
                <h4> Web Link</h4>
                <h2> <BiLinkAlt /> </h2>
                <p> sharing via link </p>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} className={classes.card} onClick={()=>handleClickSocialOpen()}>
                <h4> Social Media</h4>
                <h2><BiShareAlt/></h2>
                <p>  share via your social media</p>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} className={classes.card}>
       <h4> Email</h4>
       <a href={`mailto:{enter receiver email}?subject={subject}&body=${url}`} style={{textDecoration:"none"}}><h2><BiEnvelope/> </h2>
      <p> Share via email</p> </a>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} className={classes.card} onClick={()=> handleClickEmbed()}>
                <h4> Website</h4>
                <h2><BiCode/>  </h2>
                <p>Embeded your survey via  your websites</p>
            </Grid>
            
       <ShareButton
                open={open}
                onClose={handleClose}
                urlId={selectedValue}
            /> 
            <SocialShare
            open={openSocial}
            onClose={handleSocialClose}
            urlId={id}
            />
            
            <EmbedSurvey
            open={openEmbed}
            onClose={handleEmbedClose}
                urlId={id}
                authUser={authUser}
                id={id}
                json={json}
                userId={userId}
                surveys={surveys}
            />
            <PlanUpgrade
                open={openPlan}
                onClose={handleEmbedClose}
            />
            
            </Grid>
    )
}



const mapStateToProp = ({ authedUser, surveys }, props) => {
  
    const { id } = props.match.params;
  const survey = surveys.surveys;
  const jsonData = survey ? survey[id] : null
  const json = jsonData ? jsonData.json : null;
  const userId = jsonData ? jsonData.userId : null;
    console.log(surveys)
    return {
      authUser: authedUser.id? authedUser.id:null,
      userId: userId?userId: null,
      dataId: id? id:null,
      json: json?json: null,
      surveys: surveys.surveys?surveys.surveys:null
    
    }
  }

export default connect(mapStateToProp)(SurveyCollect);