import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import "survey-react/survey.css";
import * as Survey from "survey-react";
import { connect } from "react-redux";
import FormComponent from './form'
import FormTItle from "./FormTItle";
import QuestionChoices from "./QuestionChoices";
import AddQuestion from "./AddQuestion";
import SaveNonChoicesQuestion from "./SaveNonChoicesQuestion";
import { color } from "../../Global/color"
import { handleUpdateSurvey,  handleGetSingleSurvey } from "../../actions/survey";



const styles = ((theme) => ({
    wrapper: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& button": {
            width: "auto",
            height: "auto",
            display: "flex",
            alignItems:"center",
            justifyContent: "center",
            fontSize: "1.8em",
            padding: "1%",
            background: color.lightPrimary,
            border: "hidden",
        }
    },
        button :{
            width: "8em",
            alignSelf: "center",
            height: "50px",
            fontSize: "2em",
            background: color.lightPrimary,
            border: "none",
            borderRadius: "5px"
        },
         
        form: {
            width: "50%",

            "& button": {
                width: "30%",
                height: "1.5em",
                borderRadidus: "5px",
            }
        },
    

    fieldContainer: {
        width: "100%",
        "& label": {
            width: "20%",
            margin: theme.spacing(2),
            textAlign: "center",
            fontSize: "1.5em",
            
        
        },
        "& input": {
            width: "70%",
            height: "2em",
            fontSize:"1.5em",
            borderRadidus: "10px",
            border: "none",
            padding:theme.spacing(2),
            margin: theme.spacing(2),
            boxShadow: "1px 2px 6px 0px #f3f3f3",
        },
    },
    inputQuestion: {
        width: "100%",
        height: "2.8em",
        fontSize:"1.5em",
        borderRadidus: "10px",
        border: "none",
        margin: theme.spacing(2),
        boxShadow: "1px 2px 6px 0px #f3f3f3",
    },

    btnWrapper: {
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        marginTop: "1%",
        marginBottom: "1%"
    },
  
    btn: {
        width: "8%",
        height: "auto",
        display: "flex",
        alignItems:"center",
        justifyContent: "center",
        fontSize: "2em",
        background: color.lightPrimary,
        border: "hidden",
    }
    
}))



class EditPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
             
            },
            questionId:1,
            choiceId: 0,
            choiceText:"",
            choice: "",
            rating: 0,
            is_done:false,
            inputChoice:[],
            open: false,
            showPage: true,
            is_question: false,
            is_edit: true,
            json:{
                title: "",
                description: "",
                questions: []
            }
            
        }
    }


    onCompletePage = (item) => {
        console.log(item)
        const { dispatch } = this.props;
        // dispatch( handlePostResponse(item))
        this.setState((prev) => ({ showPage: !this.state.showPage }))
      
        this.props.history.push("/completed");
    } 

    handleChoiceChange = (e) => {
        const { value, id } = e.target;
        this.setState(() => ({
            choiceText: value,
            choiceId: id,
        }))
  
    }
 
    handleDelete = (id) => {
        let questions = this.state.json.questions;
        questions = questions.filter(question => question.title !== id)

        let json = {
            ...this.state.json,
            questions
        }
        this.setState(() => ({
            ...this.state,
           json
        }))
    }

    debounce = (func, delay) => {
        let debounceTimer;
        return function () {
          const context = this;
          const args = arguments;
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
      };
    

    addChoices = (e) => {
        e.preventDefault();
        let choiceId = this.state.choiceId;
        let data = this.state.data;
        let item = this.state.choiceText;
        if (item) {
            data = {
                ...data,
                choices:[item, ...data.choices]
            }
        }
     
        let input = <div key={choiceId + 1} >  <input name="choice" id={`${choiceId + 1}`} onChange={(e) => this.debounce(this.handleChoiceChange(e), 3000)} className={this.props.classes.inputQuestion} key={ choiceId}/>
            {/* <span onClick={() => this.handleDelete(choiceId, data)}> X </span> */}
        </div>
        let inputChoice = this.state.inputChoice;
        this.setState(() => ({
            ...this.state,
            inputChoice: [...inputChoice, input],
            choiceId: choiceId + 1,
            choice: "",
            data,
            choiceText:''
        })) 
    }

    handleInputChange = (e) => {
         e.preventDefault()
         const { id, value } = e.target;
         let json = {
             ...this.state.json,
             [id]: value
         }
         this.setState(() => ({
             ...this.state,
             json
          
        }))
    }
    
    setRating = rating => {
        this.setState({ rating: rating });
      };
    
    handleSelectedQuentionType = (e) => {
        let data = this.state.data;

        switch (e.target.value) {
            case "email":
                data = {
                    ...data,
                    type: e.target.value,
                    inputType: e.target.value,
                    autoComplete: e.target.value,
                    isRequired: true,
                    validators: [
                        {
                            type: "email"
                        }
                    ]
                }

                this.setState(() => ({
                    ...this.state,
                    is_question: true,
                    data
                }))
                break;
            case "text":
                data = {
                    ...data,
                    type: e.target.value,
                    inputType: e.target.value,
                    autoComplete: e.target.value,
                    questionId: this.state.questionId + 1,
                    isRequired: true,
                }

                this.setState(() => ({
                    ...this.state,
                    is_question: true,
                    data
                }))
                break;
                case "number":
                    data = {
                        ...data,
                        type: e.target.value,
                        inputType: e.target.value,
                        questionId: this.state.questionId + 1,
                        isRequired: true,
                    }
    
                    this.setState(() => ({
                        ...this.state,
                        is_question: true,
                        data
                    }))
                break;
                case "date":
                    data = {
                        ...data,
                        type: e.target.value,
                        inputType: e.target.value,
                        questionId: this.state.questionId + 1,
                    }
    
                    this.setState(() => ({
                        ...this.state,
                        is_question: true,
                        data
                    }))
                    break;
            case "comment":
                data = {
                    type: "comment",
                    name: "",
                    title: "",
                    inputType: e.target.value,
                    isRequired: true,
                    questionId: this.state.questionId + 1,
                
                }

                this.setState(() => ({
                    ...this.state,
                    is_question: true,
                    data
                }))
                break;
            case "radio":
                data = {
                    type: "radiogroup",
                    title: "",
                    inputType: "radiogroup",
                    choices: [],
                    isRequired: true,
                    questionId: this.state.questionId + 1,
                    autoComplete: "radiogroup",
                }

                this.setState(() => ({
                    ...this.state,
                    is_question: true,
                    data
                }))
                break;
            case "checkbox":
                data = {
                    type: "checkbox",
                    title: "",
                    hasNone: true,
                    inputType: e.target.value,
                    choices: [],
                    questionId: this.state.questionId + 1,
                    isRequired: true,
                    autoComplete: e.target.value,
                
                    validators: [
                        {
                            type: "answercount",
                            text: "Please select two features maximum.",
                            maxCount: 2,
                        },
                    ],
                    hasOther: true,
                    otherText: "Other feature:",
                }

                this.setState(() => ({
                    ...this.state,
                    is_question: true,
                    data
                }))
                break;
            case "dropdown":
                data = {
                    type: "dropdown",
                    name: "",
                    title: "",
                    isRequired: true,
                    questionId: this.state.questionId + 1,
                    colCount: 0,
                    choices: [
                      
                    ]
                }
                this.setState(() => ({
                    ...this.state,
                    is_question: true,
                    data
                }))
                break;
            case "rating":
                data = {
                    type: "rating",
                    name: "",
                    title: "",
                    rateMin: 0,
                    rateMax: 10,
                    isRequired: true,
                    questionId: this.state.questionId + 1,
                    minRateDescription: "",
                    maxRateDescription: ""
                }
                this.setState(() => ({
                    ...this.state,
                    is_question: true,
                    data
                }))
                break;
            default:
                this.setState({
                  data: {}
              })

        }
    
    }
    
    handleFields = (item, e) => {
        e.preventDefault()
        let questions = this.state.json.questions;
        let data = this.state.data;
        questions = [...questions, item];
        if (this.state.choiceText) {
            alert('You have not add the last choice')
            return;
        }
        let json = {
            ...this.state.json,
            questions,     
        }

        data = {
            ...data,
            choices:[]
        }
        
        
        
        this.setState(() => ({
            ...this.state,
            json,
            open: false,
            is_question: false,
            inputChoice: [],
            showPage: true,
           data
        }))
    }
    
    
     handleEdit = () => {
         this.setState(() => ({
             open: true,
             showPage: true,
             is_question:false
        }))
     };
    
    
    handleChange = (e) => {
        const { value } = e.target;
        let data = this.state.data;
        data = {
            ...data,
            title: value
        }
        this.setState(() => ({
            ...this.state,
            data
        }))
    }

    updateEditForm = () => {
        const { json } = this.state 
        const { dispatch, id} = this.props;
        localStorage.setItem('userData', JSON.stringify(json))
        if (json) {
            dispatch( handleUpdateSurvey(id, json))
        }
        this.setState(() => ({
            showPage: false,
            open: false,
            is_question:false
        }))

        this.props.history.push(`/collect/${id}`);
    }

    handleChangeLabel = (e) => {
        const { id, value } = e.target;
        let data = this.state.data;
        data = {
            ...data,
            label: value,
        }

        this.setState(() => ({
            ...this.state,
            data
        }))
    }

    handleStateTrue = () => {
        this.setState(() => ({
            open:true
        }))
    }

    componentDidMount() {
        const { survey, dispatch, id } = this.props;
        if (survey) {
            this.setState({
                json: survey.json
            })
        }

        if (!survey) {
            dispatch(handleGetSingleSurvey(id))
          }
    }
    

    render() {
        const { classes, dispatch, survey} = this.props;
        const { title, description, showPage, open, is_question, data, inputChoice, json, is_edit} = this.state;
        console.log(this.state)
        console.log(json.description)
        if (json.questions && json.questions.length > 0) {
            return (
                <div>
                    <div className={classes.wrapper}>
                        <FormTItle handleInputChange={this.handleInputChange} title={json.title} description={json.description} />
                        {
                            showPage && this.state.json.questions ?
                                <FormComponent
                                    questions={this.state.json.questions ? this.state.json.questions : null}
                                    handleField={this.handleFields}
                                    setRating={this.setRating}
                                    handleDelete={this.handleDelete}
                                />
                                      
                                : null
                                
                        }

                        <div className={classes.wrapper}>
                            {
                                open ?
                                    <QuestionChoices handleSelectedQuentionType={this.handleSelectedQuentionType} />
                                    : null
                            }

                            {
                                is_question ?
        
                                    <AddQuestion
                                        handleChangeLabel={this.handleChangeLabel}
                                        inputChoice={inputChoice}
                                        addChoices={this.addChoices}
                                        handleFields={this.handleFields}
                                        data={data}
                                        handleChange={this.handleChange}
                                    />
                                    :
                           
                        
                                    <SaveNonChoicesQuestion json={json} is_question={is_question} updateEditForm={this.updateEditForm} setOpen={this.handleStateTrue}  is_edit={is_edit} />
                            }
                        </div>
                    </div>
            
           
                </div>
                
            )
        } else if (json.pages && json.pages.length > 0) {
            
          return(  <div>
            <div className={classes.wrapper}>
                <FormTItle handleInputChange={this.handleInputChange} title={json.title? json.title:null} description={json.description? json.description:null} />
                {
                    showPage && this.state.json.pages ?
                        <FormComponent
                            questions={this.state.json.pages ? this.state.json.pages : null}
                            handleField={this.handleFields}
                            setRating={this.setRating}
                            handleDelete={this.handleDelete}
                        />
                              
                        : null
                        
                }

                <div className={classes.wrapper}>
                    {
                        open ?
                            <QuestionChoices handleSelectedQuentionType={this.handleSelectedQuentionType} />
                            : null
                    }

                    {
                        is_question ?

                            <AddQuestion
                                handleChangeLabel={this.handleChangeLabel}
                                inputChoice={inputChoice}
                                addChoices={this.addChoices}
                                handleFields={this.handleFields}
                                data={data}
                                handleChange={this.handleChange}
                            />
                            :
                   
                
                            <SaveNonChoicesQuestion json={json} is_question={is_question} updateEditForm={this.updateEditForm} setOpen={this.handleStateTrue}  is_edit={is_edit} />
                    }
                </div>
              </div>
              </div>
)
        } else {
            
            return <div> .....Loading</div>
        }
    }
   
}


const mapStateToProps = ({ surveys }, props) => {
    const { id } = props.match.params;
   
    const obj = surveys.surveys
    console.log(obj[id])
    return {
        survey: obj[id],
        id
    }
}

export default connect(mapStateToProps)(withStyles(styles)(EditPage));