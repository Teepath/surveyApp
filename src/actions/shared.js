import { getInitialData } from "../utils/_API_";
import { getResponses} from "./response";
import { getSurveys } from "./survey";
import { getNpsAction } from "./nps";
import { cusFeedbackAction } from "./customerFeedback";
import { cusSatisfactionAction } from "./customerSatisfaction";
import { propductAction } from "./product";
import { getTemplateForms } from "../utils/_API_";

export const handleSharedData = (id) => (dispatch) => {
 return getInitialData(id).then(({ reports, surveys}) => {
    dispatch(getResponses(reports));
   dispatch(getSurveys(surveys));
 
  });
};


export const handleTemplateForm = (id) => (dispatch) => {
  return getTemplateForms(id).then(({ feedback, satisfaction, nps, product }) => {
    dispatch(cusFeedbackAction(feedback))
    dispatch(cusSatisfactionAction(satisfaction))
    dispatch(getNpsAction(nps))
    dispatch(propductAction (product))
  })
}