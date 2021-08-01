import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { color } from "../../../Global/color"
import {BiTrash } from 'react-icons/bi'


const styles = makeStyles((theme) => ({   
  fieldContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    "& label": {
        width: "100%",
        marginLeft: theme.spacing(8),
        textAlign: "left",
        fontSize: "1.5em",
        marginTop: theme.spacing(2),
    
    },
    "& input": {
        width: "auto",
        height: "2.8em",
        fontSize:"1.5em",
        borderRadidus: "10px",
        border: "none",
        padding:theme.spacing(2),
      marginTop: theme.spacing(2),
  
      boxShadow: "1px 2px 6px 0px #f3f3f3",
        
    
    },

    "& p": {
      width: "100%",
      marginLeft: theme.spacing(8),
      textAlign: "left",
      fontSize: "1.5em",
      marginTop: theme.spacing(2),
    },

    button: {
        width: " auto",
        height: "auto",
      fontSize: " 1.5em",
        background: color.lightDimPrimary
    }
  },
  inputRow: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "& button": {
      width: "5%",
      height: "2%",
    }
  }
    
}))



function RadioGroup({question, handleDelete, index}) {
    const classes = styles();
   
    // const [data, setData] = useState({
    //     type: "radiogroup",
    //     title: "",
    //     inputType: option,
    //     choices:[],
    //     isRequired: true,
    //     autoComplete: option,
    // });



    // const handleDelete = (id, res)=>{
    //     let choices = inputChoice.filter(choice => choice.id !== id)
    //     setInputChoice(choices)
    //     let items = data.choices.filter(item => item !== res)
    //     data.choices= items;
      
    // }

    // const addChoices = () => {
    //     let input = <div key={choiceId} className={classes.input}>  <input name="choice" id={`${choiceId + 1}`} onChange={(e)=>handleChoiceChange(e)}/> <span onClick={(e)=> handleDelete(choiceId, )}> X </span> </div>
    //     setInputChoice(() => [...inputChoice, input])
       
    //         let choiceName = data.choices;
    //         if(choice){
    //         choiceName = [...choiceName, choice]
    //         data.choices = choiceName;
    //         setChoice("")
    //     }
       
       

       
    // }



    return (
        <div className={classes.fieldContainer}>
                    
        <label> {question.title}</label>
        <div style={{display: "flex", width:"95%", marginLeft: "24%" }}>
     <div style={{display:"flex", justifyContent:"space-around", width:"20%", flexDirection:"column"}}>
       {
            question.choices && question.choices.map(choice => (
              <div style={{ display: "flex", width: "80%", justifyContent: "space-around" }}>
             <input type="radio" id={choice} name={question.label} value={choice} style={{ width: "15%" }} />
              <label for={choice}> { choice}</label>
 </div> 
         
         ))  
        } 
          </div>
          <div style={{ display: "flex", width: "60%", paddingRight: "32%", justifyContent: "flex-end",  cursor: "pointer", fontSize:"18px"}}>
                      <BiTrash onClick={()=> handleDelete(question.title)} /> 
                       
                        </div>
          </div>
        
      </div>
    )
}

export default RadioGroup