import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { color } from "../../Global/color";
import Grid from "@material-ui/core/Grid";

//components
import Input from "./Fields/input";
import InputEmail from "./Fields/input";
import InputRadio from "./Fields/RadioGroup";
import InputCheckbox from "./Fields/Checkbox";
import InputRating from "./Fields/Rating"
import InputComment from "./Fields/Comment";
import InputDropdown from "./Fields/Dropdown";
import InputNumber from './Fields/Number';



const styles = ((theme) => ({
    root: {
        margin: 0,
        width: "100%",
      
      },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
    background: color.lightPrimary,
    top: theme.spacing(1),
    color: theme.palette.grey[500],
    },
    title:{
      margin: "2%"
    },
    selectOption: {
        width: "60%",
        marginTop: "1em",
        marginLeft: "27%",
        height: "2.5em",
       fontSize: "1.5em"
  },
    
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
        width: "70%",
        height: "2.8em",
        fontSize:"1.5em",
        borderRadidus: "10px",
        border: "none",
        padding:theme.spacing(2),
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(8),
      boxShadow: "1px 2px 6px 0px #f3f3f3",
        
    
    },
    "& textarea": {
      width:"70%",
      fontSize:"1.5em",
      borderRadidus: "10px",
      border: "none",
      padding:theme.spacing(2),
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(8),
      boxShadow: "1px 2px 6px 0px #f3f3f3",
    },

    "& select": {
      width: "70%",
      fontSize:"1.5em",
      borderRadidus: "10px",
      border: "hidden",
    marginTop: theme.spacing(2),
    marginLeft: "24%",
      boxShadow: "1px 2px 6px 0px #f3f3f3",
    },

    "& p": {
      width: "100%",
      marginLeft: theme.spacing(8),
      textAlign: "left",
      fontSize: "1.5em",
      marginTop: theme.spacing(2),
    },

    "& button": {
      width: "20%",
      marginRight: "3%",
      fontSize: " 1.5em"
    }
  },
  
  inputRow: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "& button": {
      width: "5%",
      height: "2%",
      marginTop: "2%"
      }

  }
  
}));
  
const useStyle = makeStyles(styles);

function FormField({questions, setRating, handleDelete}) {
  
   const classes = useStyle() 
      
        return(
            <div className={classes.root}>

            {
              questions && questions.map((question, index )=> {
               switch (question.type) {
                  case "text":
                   return (
                     <Input question={question} handleDelete={handleDelete} index={ index}/>
                   )
                   case "number":
                    return (
                      <InputNumber question={question} handleDelete={handleDelete} index={ index}/>
                    )
                    case "date":
                      return (
                        <Input question={question} handleDelete={handleDelete} index={ index}/>
                      )
                 case "comment":
                   return (
                     <InputComment question={ question} handleDelete={ handleDelete} index={index}/>
                  )
                 case "email":
                  return (
                         <InputEmail question={question} handleDelete={ handleDelete} index={index}/>
                  )    
                 case "radiogroup":
                   return (
                     <InputRadio question={ question} handleDelete={ handleDelete} index={index}/>
                   )
                   case "checkbox":
                   return (
                     <InputCheckbox question={ question} handleDelete={ handleDelete} index={index}/>
                    )
                 case "dropdown":
                   return (
                     <InputDropdown question={ question} handleDelete={ handleDelete} index={index}/>
                   )
                 
                 case "rating":
                   return (
                    
                     <InputRating
                       question={question}
            numberOfStars="10"
            currentRating="0"
            onClick={setRating}
                       handleDelete={handleDelete}
                       index={ index}
          />

                   )
                 default:
                   return <p> No question yet</p>
                }   
              })
            }
            </div>
        )
}

export default FormField;





// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;

//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h5">{children}</Typography>
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           className={classes.closeButton}
//           onClick={onClose}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });



                  {/* <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
                > */}
                    {/* <DialogTitle id="customized-dialog-title" onClose={onClose}> */}
                                     
                            
                        
        {/* </DialogTitle>
        <Typography variant="h5" className={classes.title}>  Please Select the field type you want to use</Typography> */}



   {/* </Dialog> */}








    {/* <form onSubmit={handleSubmit(onSubmit)}>
            <h4> Form</h4>
            <div>

                <label htmlFor ="firstname">
                    firstname
                </label>
                        <input type="text" name="firstname" id="firstname" {...register("firstname", {required: true})}/>
                        </div>
                        <br />
                   <button type="submit" className="btn"> Submit</button>     
         
        </form> */}
      


