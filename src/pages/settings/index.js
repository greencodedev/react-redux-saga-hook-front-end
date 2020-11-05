import React from "react";
import { Button } from "reactstrap";
import ProfileIcon from "../../assets/images/icons/Profile.svg";
import ReceiptIcon from "../../assets/images/icons/Receipt.svg";
import HelpIcon from "../../assets/images/icons/Help.svg";
import CardIcon from "../../assets/images/icons/Card.svg";
import ChangePasswordIcon from "../../assets/images/icons/change-password.svg";
import { useHistory } from "react-router";
import Layout from '../../components/layout'
import {useDispatch} from 'react-redux';
import {logOut} from '../../actions/user-action-type';
function Settings() {
  const history = useHistory();
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logOut());
    history.push("/login");
  }
  return (
    <Layout>
    <div className="settings">
      <div className="settings_panel">
        <div className="settings_row" onClick={() => history.push({ pathname: "/edit-profile" })}>
          <div className="settings_icon" id="help_icon">
            <img src={ProfileIcon} alt="Profile icon" />
          </div>
          <div className="settings_text">
            <div className="settings_toptext">Account Settings</div>
            <div className="settings_bottomtext">Change secret PIN or Recover</div>
          </div>
        </div>
        <div className="settings_row"  >   {/*onClick={() => history.push({ pathname: "/invoics" })} */}
          <div className="settings_icon" id="help_icon">
            <img src={ReceiptIcon} alt="Order History icon" />
          </div>
          <div className="settings_text">
            <div className="settings_toptext">Order History</div>
            <div className="settings_bottomtext">List of completed digital payments</div>
          </div>
        </div>
        {/* <div className="settings_row"  onClick={() => history.push({ pathname: "/notifications" })}>
          <div className="settings_icon" id="help_icon">
            <img src={CardIcon} alt="Notifications icon" />
          </div>
          <div className="settings_text">
            <div className="settings_toptext">Notifications</div>
            <div className="settings_bottomtext">Account / Order Related Notifications</div>
          </div>
        </div> */}
        <div
          className="settings_row"
          onClick={() => history.push({ pathname: "/change-password" })}
        >
          <div className="settings_icon" id="help_icon">
            <img width="15px" height="15px" src={ChangePasswordIcon} alt="Change Password icon" />
          </div>
          <div className="settings_text">
            <div className="settings_toptext">Change Password</div>
            <div className="settings_bottomtext">Change your account password</div>
          </div>
        </div>
        <div className="settings_row">
          <div className="settings_icon" id="help_icon">
            <img src={HelpIcon} alt="Help icon" />
          </div>
          <div className="settings_text">
            <div className="settings_toptext">Help</div>
            <div className="settings_bottomtext">Get support or report any issue</div>
          </div>
        </div>



        <div
          className="settings_row"
          onClick={() => onLogOut()}
        >
          <div className="settings_icon" id="help_icon">
            <img width="15px" height="15px" src={ChangePasswordIcon} alt="Change Password icon" />
          </div>
          <div className="settings_text">
            <div className="settings_toptext">Logout</div>
            <div className="settings_bottomtext">Logout of your Account</div>
          </div>
        </div>

        {/* <div style={{margin:20}}>
          <Button
              style={{backgroundColor: "#000000"}}
              className="mt-3"
              onClick={() => onLogOut()}
            >
            Logout
          </Button> 
        </div> */}

      </div>
    </div>
    </Layout>
  );
}

export default Settings;
