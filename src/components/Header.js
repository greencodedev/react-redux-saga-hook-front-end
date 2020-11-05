import React from "react";
import Logo from "../assets/images/top-logo.png";
import { connect,useSelector } from 'react-redux';
// import {Link} from "react-router-dom";
import {useHistory} from 'react-router-dom'
import { withRouter, Link } from "react-router-dom";
import "../assets/style/_header.scss";

const Header = (props) => {
    const storeData = useSelector(store=>store)
    //console.log("========",storeData.user)
    const history = useHistory()
    const gotoLogin = () =>{
        if(storeData.user.token) {
          history.push("/settings");
        } else {
          history.push("/sign-up");
        }        
    }
  return (
      <div class="header-part">
       <a href="/">  <img src={Logo} style={{ width: '190px'}}  /> </a>
         <div class="profile-part" onClick={gotoLogin}>
            <i className="fas fa-user" />
            {storeData.user.token?<span class="login-text">{`Hello!`}</span>:<span class="login-text">Sign in</span>}            
         </div>
      </div>
    )
  }

export default Header;