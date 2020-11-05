import React, {useState, useEffect} from 'react';
import ChangePasswordIcon from '../../assets/images/icons/change-password.svg';
import ProfileIcon from '../../assets/images/icons/Profile.svg';
import EmailIcon from '../../assets/images/icons/email.svg';
import CallIcon from '../../assets/images/icons/call.svg';
import ArrowIcon from '../../assets/images/icons/left-arrow.svg';
import LanguageIcon from '../../assets/images/icons/language.svg';
import { Button, Alert } from "reactstrap";
import { useHistory } from "react-router-dom";
import Header from '../../components/Header';
import Layout from "../../components/layout";

// import './style.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'jquery/dist/jquery';
import { connect } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
function EditProfile(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [language, setLanguage] = useState("");
    const [alertText, setAlertText] = useState("");
    const [isAlert, setAlert] = useState("");
    const [alertColor, setAlertColor] = useState("");
    const { getProfileDetails, userData, editProfile, editProfileStatus } = props
    const history = useHistory();

    useEffect(() => {
        const profileData = new FormData();

        profileData.append("action", "getProfileDetails");
        getProfileDetails(profileData)

    }, [])
    useEffect(() => {
        setName(userData ? userData.name : '')
        setEmail(userData ? userData.email : '')
        setPhone(userData ? userData.mobile : '')
    }, [userData])

    const onUpdateProfile = () => {
        const data = new FormData()
        data.append( 'action', 'editProfile' )
        data.append('name',name )
        data.append('mobile',phone )
        // data.append('password',newPassword )
        editProfile(data)
    }

    useEffect(() => {
        if (editProfileStatus === "success") {
          setAlertText("Profile Updated Successfully");
          setAlert(true);
          setAlertColor("success");
          setTimeout(
            function () {
              history.push("/");
              setAlert(false);
              setAlertText("");
            }.bind(this),
            2000
          );
        } 
      }, [editProfileStatus]);
    return (
        <Layout>
            <Header></Header>
            <div className="edit-profile">
                <div className="backContainer">
                    <img src={ArrowIcon} height="20px" alt="Back icon" onClick={() => history.push({ pathname: "/settings" })} /> 
                    <div className="password_text">Profile</div>
                </div>
                {isAlert && <Alert color={alertColor}>{alertText}</Alert>}

                <div className="row">
                    <p className="text_small">Name</p>
                    <div className="input_row">
                        <img src={ProfileIcon} class="icon" alt="Profile Icon"/>
                        <input type="text" class="input" id="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <p className="text_small">Email</p>
                    <div className="input_row">
                        <img src={EmailIcon} alt="Email Icon"/>
                        <input type="email" className="input" id="email" placeholder="Email" disabled value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <p className="text_small">Phone</p>
                    <div className="input_row">
                        <img src={CallIcon} alt="Phone Icon"/>
                        <input type="tel" class="input" id="phone" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                     </div>
                    <p className="text_small">Language</p>
                    <div className="input_row dropdown_row">
                        <img src={LanguageIcon} alt="Language Icon"/>

                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pick Language
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">English</button>
                                <button class="dropdown-item" type="button">Hindi</button>
                                <button class="dropdown-item" type="button">German</button>
                                <button class="dropdown-item" type="button">French</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit" onClick={() => onUpdateProfile()}>Update Profile</button>
            </div>
        </Layout>
    )
}
const mapStateToProps = ({
    user: { userData, editProfileStatus },
  }) => ({
    userData,
    editProfileStatus,
  });
  
  const mapDispatchToProps = {
    getProfileDetails: userAction.getProfileDetails,
    editProfile: userAction.editProfile
  };
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProfile));
  