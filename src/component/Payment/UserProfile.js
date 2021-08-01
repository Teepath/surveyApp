import React, { useState } from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../assets/profile.jpeg";
import { color } from "../../Global/color";



const styles = {
    
    wrapper: {
        width: "50%",
        display: "flex",
        fontSize: "18px",
        margin: "40px auto",
        border: "none",

        "& button": {
            background: color.primary,
            color: "#fff",
            padding: "10px",
            marginBottom: "5px",
            "& :hover": {
                cursor:"pointer"
            }
        }
    },
    profile: {
        marginTop: "10px",
        width: "50%",
    },
    info: {
        width: "50%",
        marginTop: "10px",
        "& div":{
            display: "flex",
            margin: "2px",
            padding:"10px"
        },
        "& span": {
            color: color.primary,
            fontSize: "16px",
            fontWeight: "bold",
            paddingLeft:"10px"
        },

    }

}

const useStyle = makeStyles(styles)


const UserDetails = (props) => {

    const handlePayment = ()=>{
        props.history.push('/payment')
    }

    const user = useSelector(({firebase})=> firebase.profile)
    const classes = useStyle()
    return (
        
        <Grid component="main" className={classes.wrapper}>
            <Grid item xs={6} sm={6} md={6} className={classes.profile}>
                <img src={image} alt="profile" className={ classes.profile}/>
            </Grid>
            <Grid item xs={6} sm={6} md={6} className={classes.info}>
             <div> Name:<span> {user.name} </span></div>
             <div> Emai: <span>{user.email}</span> </div>
               <div>Plan: <span> {user.plan}</span></div>
                <button onClick={()=> handlePayment()}> Upgrade plan</button>
                </Grid>
        </Grid>
    )
}

export default UserDetails