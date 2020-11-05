import React, { useState, useEffect } from "react";
import ChangePasswordIcon from "../../assets/images/icons/change-password.svg";
import EyeIcon from "../../assets/images/icons/eye.svg";
import { Button, Alert } from "reactstrap";

import UnlockIcon from "../../assets/images/icons/unlock.svg";
import ArrowIcon from "../../assets/images/icons/left-arrow.svg";
import { createGlobalStyle } from "styled-components";
import { connect } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Header from '../../components/Header';
import Layout from "../../components/layout";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ChangePassword(props) {
  const [currentPassword, setCurrPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alertText, setAlertText] = useState("");
  const [isAlert, setAlert] = useState("");
  const [alertColor, setAlertColor] = useState("");
  const history = useHistory();

  const { changePassword, changePasswordStatus } = props
  const onPasswordChange = () => {
    const data = new FormData()
      data.append( 'action', 'changePassword' )
      data.append('password',newPassword )
      changePassword(data)
  }

  useEffect(() => {
    if (changePasswordStatus === "success") {
      setAlertText("Password Changed Successfully");
      setAlert(true);
      setAlertColor("success");
      setTimeout(
        function () {
          history.push("/login");
          setAlert(false);
          setAlertText("");
        }.bind(this),
        2000
      );
    } 
  }, [changePasswordStatus]);
  return (
    <Layout>
      <Header></Header>
      <div className="change_password-screen">
        {isAlert && <Alert color={alertColor}>{alertText}</Alert>}

        <GlobalStyle />
        <div className="change_password">
          <div className="backContainer">
            <img src={ArrowIcon} height="20px" alt="Back icon" onClick={() => history.push({ pathname: "/settings" })} />
            <div className="password_text">Password</div>
          </div>
          <div className="image_container">
            <img className="image" src={ChangePasswordIcon} alt="Change password icon" />
          </div>
          <div className="row">
            <p className="text_small">Current Password</p>
            <div className="input_row">
              <img src={UnlockIcon} alt="Unlock Icon" />
              <input
                type="password"
                class="input"
                id="current_pass"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrPassword(e.target.value)}
              />
              <img
                src={EyeIcon}
                alt="Eye Icon"
                onClick={() => {
                  var x = document.querySelector("#current_pass");
                  x.type === "text" ? (x.type = "password") : (x.type = "text");
                }}
              />
            </div>
            <p className="text_small">New Password</p>
            <div className="input_row">
              <img src={UnlockIcon} alt="Unlock Icon" />
              <input
                type="password"
                className="input"
                id="new_pass"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <img
                src={EyeIcon}
                alt="Eye Icon"
                onClick={() => {
                  var x = document.querySelector("#new_pass");
                  x.type === "text" ? (x.type = "password") : (x.type = "text");
                }}
              />
            </div>
            <p className="text_small">Confirm Password</p>
            <div className="input_row">
              <img src={UnlockIcon} alt="Unlock Icon" />
              <input
                type="password"
                class="input"
                id="confirm_pass"
                placeholder="Current Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <img
                src={EyeIcon}
                alt="Eye Icon"
                onClick={() => {
                  var x = document.querySelector("#confirm_pass");
                  x.type === "text" ? (x.type = "password") : (x.type = "text");
                }}
              />
            </div>
          </div>
          <button className="btn" type="submit" onClick={() => onPasswordChange()}>
            Change Password
          </button>
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = ({ user: { changePasswordStatus } }) => ({
  changePasswordStatus,
});

const mapDispatchToProps = {
  changePassword: userAction.changePassword,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ChangePassword));


const GlobalStyle = createGlobalStyle`
body{
    background-color: #503E9D;
}`;
