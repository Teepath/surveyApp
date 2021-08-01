import React, {useState, Component} from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { color } from "../../../Global/color";
import {BiTrash } from 'react-icons/bi'


const styles = {

    fieldContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        "& label": {
            width: "100%",
            marginLeft: "20%",
            textAlign: "left",
            fontSize: "1.5em",
            marginTop: "5%",  
        },
    
        "& p": {
          width: "100%",
          marginLeft: "15%",
          textAlign: "left",
          fontSize: "1.5em",
          marginTop:"5%",
        },
    
       
    },
    
    rating: {
        width:"60%",
        fontSize:"1.5em",
      borderRadidus: "10px",
        border: "none",
        padding:"5%",
      marginTop: "5%",
      marginLeft: "24%",
      marginRight: "5%",
        boxShadow: "1px 2px 6px 0px #f3f3f3",
        
      },
    
}



class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRating: this.props.currentRating
    };
  }

  componentDidMount() {
    this.setRating();
  }

  hoverHandler = ev => {
    const stars = ev.target.parentElement.getElementsByClassName('star');
    const hoverValue = ev.target.dataset.value;
    Array.from(stars).forEach(star => {
      star.style.color = hoverValue >= star.dataset.value ? 'yellow' : 'gray';
    });
  };

  setRating = ev => {
    const stars = this.refs.rating.getElementsByClassName('star');
    Array.from(stars).forEach(star => {
      star.style.color =
        this.state.currentRating >= star.dataset.value ? 'blue' : 'gray';
    });
  };

  starClickHandler = ev => {
    let rating = ev.target.dataset.value;
    this.setState({ currentRating: rating }); // set state so the rating stays highlighted
    // if(this.props.onClick){
    //   this.props.onClick(rating); // emit the event up to the parent
    // }
  };

    render() {
      
        const { classes, question, handleDelete, index } = this.props;
      return (
        <div style={{  width: "70%",
        display: "flex",
          flexDirection: "row",
          height: "40px",
          marginTop: "5%",
          marginBottom: "5%",
        justifyContent: "space-around"}}>
              <label htmlFor="rating" style={{
            textAlign: "right",
                marginLeft:"8%",
            fontSize: "1.6em",
        marginTop: "5%",}}>{question.title}:</label>
       
      <div
        className={classes.rating}
        ref="rating"
        data-rating={this.state.currentRating}
                  onMouseOut={this.setRating}
                  style={{
                      width: "60%",
                      fontSize: "1.6em",
                    marginTop: "1%",
             
                  }}
      >
        {[...Array(+this.props.numberOfStars).keys()].map(n => {
          return (
            <span
              className="star"
              key={n+1}
              data-value={n+1}
              // onMouseOver={this.hoverHandler}
              style={{
                border: "1px solid black",
              padding: "0.5%"
              }}
              onClick={this.starClickHandler}
            >
              { n +1}
            </span>
            
          );
        })}
            
          </div>
  
                      <BiTrash style={{cursor:"pointer", fontSize:"25px"}} onClick={()=> handleDelete(question.title)} /> 
                       
                        
              </div>
    );
  }
}


export default withStyles(styles)(Rating);























