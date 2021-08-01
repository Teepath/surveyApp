import React, { Component } from 'react'
import FormComponent from '../FormCreation/form'
import FormTItle from "../FormCreation/FormTItle";
import QuestionChoices from "../FormCreation/QuestionChoices";
import AddQuestion from "../FormCreation/AddQuestion";
import SaveNonChoicesQuestion from "../FormCreation/SaveNonChoicesQuestion";
import { withStyles } from '@material-ui/core';
import {color} from "../../Global/color"


const styles = ((theme) => ({
    wrapper: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& button": {
            width: "8em",
            alignSelf: "center",
            height: "50px",
            fontSize: "2em",
            background: color.lightPrimary,
            border: "none",
            borderRadius: "5px"
        },
         
        "& form": {
            width: "50%",

            "& button": {
                width: "30%",
                height: "1.5em",
                borderRadidus: "5px",
            }
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
    btn: {
        width: "100%",
        display: "flex",
        alignItems:"center",
        justifyContent: "center",
        fontSize: "0.678em",
        background: color.lightPrimary,
        border: "none",
        borderRadius: "5px"
    }
    
}))

class EditModeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

            data: {
            },
            choiceId: 0,
            choice: "",
            rating: 0,
            is_done:false,
            inputChoice:[],
            open: false,
            showPage: false,
            is_question: false,
            json:{
                title: "",
                description: "",
                questions: [
                
                ]
            }
            
        }
    }


    onCompletePage = (data) => {
        console.log(data);
        this.setState((prev) => ({ showPage: !this.state.showPage }), [])

        this.props.history.push("/completed");
    }

    handleChoiceChange = (e) => {
        const { value, id } = e.target;
        let data = this.state.data;
        data = {
            ...data,
            choices:[...data.choices, value]
        }
        this.setState(() => ({
            ...this.state,
            choiceId: id,
            choice: value,
            data
        
        }))
    }
    handleDelete = (id) => {
        console.log(this.state.choiceId)
        let inputChoice = this.state.inputChoice;
        let data = this.state.data
        let choices = inputChoice.filter(({ props:{children}}) => children[1].props.id !==id)
       
        this.setState(() => ({
            inputChoice : choices
        }))

        let items = data.choices.filter(item => item !== this.state.data)

       data.choices = items
        this.setState(() => ({
            ...this.state,
            data
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
        let input = <div key={choiceId + 1} >  <input name="choice" id={`${choiceId + 1}`} onChange={(e) => this.debounce(this.handleChoiceChange(e), 5000)} className={ this.props.classes.inputQuestion}/>
            {/* <span onClick={() => this.handleDelete(choiceId, data)}> X </span> */}
        </div>
        let inputChoice = this.state.inputChoice;
        this.setState(() => ({
            ...this.state,
            inputChoice: [...inputChoice, input],
            choiceId: choiceId + 1,
            choice:""
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
                    questionId: data.questionId + 1,
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
                    questionId: data.questionId + 1,
                    isRequired: true,
                }

                this.setState(() => ({
                    ...this.state,
                    is_question: true,
                    data
                }))
                break;
            case "comment":
                data = {
                    type: e.target.value,
                    name: "",
                    title: "",
                    isRequired: true,
                }

                this.setState(() => ({
                    ...this.state,
                    is_question: true,
                    data
                }))
                break;
            case "radio":
                data = {
                    type: "radio",
                    title: "",
                    inputType: "radiogroup",
                    choices: [],
                    isRequired: true,
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
        questions = [...questions,item ];
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
    
    
     handleClose = () => {
         this.setState(() => ({
            open:false
        }))
     };
    
    
    handleChange = (e) => {
        const { id, value } = e.target;
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

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('userData'))
        this.setState(() => ({
            title: data.title,
            description: data.description,
            questions: data.questions,
            showPage: true
        }))
    }

    handleDoneForm = () => {
        const {json} = this.state
        localStorage.setItem('userData', JSON.stringify(json))

        this.setState(() => ({
            showPage: false
        }))

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
    

    render() {
        const { classes, questions, title, description} = this.props;
        const {showPage, open, choiceId, is_question, data, inputChoice, json} = this.state;
        console.log(this.state)
        console.log(choiceId)
           
        return (
            <div className={classes.wrapper}>
               
                <FormTItle handleInputChange={this.handleInputChange} title={title} decsription={ description}/>
              
                    <FormComponent
                    questions={questions}
                    handleField= {this.handleFields}
                    setRating={this.setRating} 
                    
                /> 
                

                 {
                    open ?
                        <QuestionChoices handleSelectedQuentionType={this.handleSelectedQuentionType }/>
                        :null
                }

                {
                    is_question ?
                        <AddQuestion handleChangeLabel={this.handleChangeLabel}
                            inputChoice={inputChoice}
                            addChoices={this.addChoices}
                            handleFields={this.handleFields}
                            data={data}
                            handleChange={this.handleChange}
                        />
                        :
                        
                        <SaveNonChoicesQuestion json={json} is_question={is_question} handleDoneForm={this.handleDoneForm} setOpen={   this.handleStateTrue}/>
                }              
                </div>
                
        )
    }
}

export default withStyles(styles)(EditModeForm)
