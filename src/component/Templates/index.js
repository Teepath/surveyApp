import React,{useEffect} from "react";
import NavbarTitle from "./NavTitle";
import Grid from "@material-ui/core/Grid";
import imageNps from "../../assets/nps.png";
import imageSatisFaction from "../../assets/faction.png";
import imageCustomer from "../../assets/feedback.png";
import imageResearch from "../../assets/research.png";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { color } from "../../Global/color";
import { handleTemplateForm } from "../../actions/shared";

//component
import TemplateCover from "./TemplateArticle";
import CreateSurvey from "../Dashboard/Button"


const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
  },

  title: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(3),
    width: "100%",
    height: "20%",
    backgound: "white",

    "& button": {
      width: "10%",
      margin: theme.spacing(1),
      height: "2.5em",
      fontSize: "1.5em",
      borderRadius: "10px",
      background: color.primary,
      border: "none",
    },
  },
}));

function Templates(props) {
  const classes = useStyles()

  const { json, userId, dispatch } = props;

  useEffect(() => {
    let data = dispatch(handleTemplateForm(userId))
  }, [userId])

  const handleTemplate = () => {
   props.history.push("/template-nps")
  }

  const handleNewSurvey = () => {
    props.history.push("/form-creator")
  }
  
  const handleCustomerFeedback = () => {
    props.history.push('/template-feedback')
  }

  const handleCusSatisfaction = () => {
    props.history.push('/template-satisfaction')
  }

  const handleResearch = () => {
    props.history.push('/template-research')
  }
  return (
    <Grid>
      <NavbarTitle />
      <Grid container>
        <Grid item xs={12} sm={3} md={3}>
          <TemplateCover
            image={imageNps}
            title="Net Promoter Score
            (NPS) survey template"
            btn="Use Template"
            onClick={handleTemplate}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <TemplateCover
            image={imageSatisFaction}
            title="Customer Feedback and Assurance survey template"
            btn="Use template"
            onClick={handleCustomerFeedback}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <TemplateCover
            image={imageResearch}
            title="Product Market Research survey template"
            btn="Use Template"
            onClick={handleCusSatisfaction}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <TemplateCover
            image={imageCustomer}
            title="Customer Satisfaction
survey template"
            btn="Use Template"
            onClick={handleResearch}
          />
        </Grid>
      </Grid>
    <div className={classes.title}>
        <button style={{color:"#fff", fontSize:"16px"}} onClick={()=>handleNewSurvey()}> New Survey</button>
        </div>
 
    
    </Grid>
  );
}

const mapStateToProps = ({ authedUser }) => {
  return {
    userId: authedUser.id,
  }
}

export default connect(mapStateToProps)(Templates);
