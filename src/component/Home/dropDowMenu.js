import React from 'react';
import { connect, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import avatar from "../../assets/profile.jpeg";
import { logOut } from "../../actions/login";
import { withRouter } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";



const styles = {
  wrapper: {
    fonstSize: "14px"
  },
  text: {
    fontSize:"16px"
  }
}

const useStyle = makeStyles(styles);

function SimpleMenu(props) {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleUserDetail = () => {
    props.history.push('/settings')
  };

  return (
    <div className={classes.wrapper}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {/* Open Menu */}
        <img src={avatar} alt="avatar" height="20" /> 
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        className={classes.wrapper}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleUserDetail} className={classes.text}>Settings</MenuItem>
        <MenuItem onClick={()=>dispatch(logOut())} className={classes.text}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
export default withRouter(SimpleMenu)