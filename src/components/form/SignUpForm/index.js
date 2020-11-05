import React, { useState, useEffect } from "react";
import { Button, Alert } from "reactstrap";
import { validateEmail } from "../../../util";
import FormInput from "../FormInput";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as userAction from "../../../actions/user-action-type";
import { withRouter } from "react-router-dom";

const SignUpForm = (props) => {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    phone: "+971",
  });
  const { email, password, phone } = inputs;
  const { registerStatus, register} = props;
  const [alertText, setAlertText] = useState("");
  const [isAlert, setAlert] = useState("");
  const [alertColor, setAlertColor] = useState("");
  const [error, setError] = useState({ errorType: "", errorText: "" });
  const clearError = () => setError({ errorType: "", errorText: "" });

  const handleInput = (e) => {
    clearError();
    if (e.target.name == "phone" && e.target.value.length < 4) 
      setInputs({ ...inputs, [e.target.name]: "+971" });
    else
      setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (registerStatus === "success") {
      setAlertText("User Registered Successfully");
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
    } else if (registerStatus === "failed") {
      setAlertText("Please enter all the valid information");
      setAlert(true);
      setAlertColor("danger");
      setTimeout(
        function () {
          setAlert(false);
          setAlertText("");
        }.bind(this),
        2000
      );
    }
  }, [registerStatus]);
  const validateForm = () => {
    if (email === "") {
      setError({
        errorType: "email",
        errorText: "Please Enter Email",
      });
      return false;
    }
    if (!validateEmail(email)) {
      setError({
        errorType: "email",
        errorText: "Please Enter Valid Email",
      });
      return false;
    }
    if (phone === "") {
      setError({
        errorType: "phone",
        errorText: "Please Enter Phone",
      });
      return false;
    }
    if (password === "") {
      setError({
        errorType: "password",
        errorText: "Please Enter Password",
      });
      return false;
    }

    return true;
  };
  const handleSubmit = () => {
    if (!validateForm()) {
      return null;
    } else {
      const data = new FormData();
      data.append("action", "register");
      data.append("email", email);
      data.append("password", password);
      data.append("mobile", phone);
      register(data);
      // history.push("/home");
    }
  };

  return (
    <div>
      {isAlert && <Alert color={alertColor}>{alertText}</Alert>}

      <FormInput
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleInput}
        {...error}
      />
      <FormInput
        label="Phone"
        // type="phone"
        name="phone"
        value={phone}
        onChange={handleInput}
        {...error}
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={handleInput}
        {...error}
      />
      <Button color="primary" onClick={handleSubmit}>
        Register
      </Button>
      <p className="mt-4">
        Already have a account than <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

const mapStateToProps = ({ user: { registerStatus } }) => ({
  registerStatus,
});

const mapDispatchToProps = {
  register: userAction.register,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignUpForm));
