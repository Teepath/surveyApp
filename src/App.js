import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./authentication/Signup";
import Login from "./authentication/Signin";
import Nav from "./component/Home/Nav";
import Profile from "./component/Dashboard/Profile";
import Reports from "./component/Reports";
import Payment from "./component/Payment/payment";
import ConfirmPayment from "./component/Payment/ConfirmPayment";
import Templates from "./component/Templates/index";
import NewSurveyTemplate from "./component/surveyTypes/surveyTypeNps";
import CustomerFeedbackTemplate from "./component/surveyTypes/customerFeedbackModel";
import ProductResearchTemplate from "./component/surveyTypes/marketResearchType";
import CustomerSatisFactionTemplate from "./component/surveyTypes/satisfactionType";
import Form from './component/FormCreation/FormWrapper'
import Completed from "./component/FormCreation/completed"
import DoneForm from "./component/SurveyDisplay/NewSurvey"
import AuthRoute from "./config/authGuide";
import SurveyView from "./component/FormCreation/ViewSurvey";
import EditForm from "./component/FormCreation/EditPage";
import UpgradePlan from "./component/Payment/Plan"
import UserDetails from "./component/Payment/UserProfile";
import SurveyCollect from "./component/FormCreation/ShareSurvey/Collect"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <AuthRoute path="/" exact component={Profile} />
        <AuthRoute path="/create/analysis/:id" component={Reports} />
        <AuthRoute path="/collect/:id" component={SurveyCollect}/>
        <AuthRoute path="/templates" component={Templates} />
        <AuthRoute path="/upgrade-plan" component={UpgradePlan} />
        <AuthRoute path="/settings" component={UserDetails}/>
        <AuthRoute path="/payment" component={Payment} />
        <AuthRoute path="/confirm" component={ConfirmPayment} />
        <Route path="/create/view/:id" component={SurveyView}/>
        <AuthRoute path="/form-creator" component={Form} />
        <AuthRoute path="/create/edit/:id" component={EditForm} />
        <AuthRoute path="/done-form" component={DoneForm} />
        <AuthRoute path="/template-nps" component={NewSurveyTemplate} />
        <AuthRoute path="/template-feedback" component={CustomerFeedbackTemplate} />
        <AuthRoute path="/template-research" component={ProductResearchTemplate} />
        <AuthRoute path="/template-satisfaction" component={CustomerSatisFactionTemplate} />
        <AuthRoute path="/completed"  component={Completed} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        
      </div>
    </Router>
  );
}



export default App;
