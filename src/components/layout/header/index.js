import React from "react";
import { Container } from "reactstrap";
import { ExclamationIcon } from "../../svgComponents";
import lineImage from "../../../assets/images/b-lines.jpeg";
import settingIcon from "../../../assets/images/icons/setting.jpg";

const Header = () => {
  return (
    <header id="header" className="bg-black" style={{ backgroundImage: `url(${lineImage})` }}>
      <Container>
        <button className="btn-icon p-0 d-md-none mt-3 mb-4">
          <img src={settingIcon} alt="setting" />
        </button>
        <h2 className="title">You spent</h2>
        <div className="d-flex align-items-end mb-2 value">
          <p className="mb-0 aed">AED</p>
          <h2 className="mb-0 px-1">6,412</h2>
          <p className="mb-0 pb-2">
            <ExclamationIcon />
          </p>
        </div>
        <p className="time mb-0">Last purchase 12 hours ago</p>
      </Container>
    </header>
  );
};

export default Header;
