import { combineReducers } from "redux";
import authedUser from "./login";
import survey from "./surveys";
import reports from './response';
import registered from "./signup";
import nps from "./nps";
import product from "./product";
import customerFeeback from "./customerFeedBack";
import customerSatisfaction from "./customerSatisfaction";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
    authedUser,
    registered,
    firebase: firebaseReducer,
    loadingBar: loadingBarReducer,
  firestore: firestoreReducer,
  surveys: survey,
  reports: reports,
  nps: nps,
  productSurvey: product,
  customerFeedBack: customerFeeback,
  customerSatisfaction: customerSatisfaction
    
  });
  