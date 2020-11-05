import React, { useState, useEffect } from "react";
import { Button, Alert } from "reactstrap";
import { validateEmail } from "../../../util";
import FormInput from "../FormInput";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as userAction from "../../../actions/user-action-type";
import { withRouter } from "react-router-dom";

const LoginForm = (props) => {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [alertText, setAlertText] = useState("");
  const [isAlert, setAlert] = useState("");
  const [alertColor, setAlertColor] = useState("");
  const { email, password } = inputs;
  const { login, loginStatus } = props;
  const [error, setError] = useState({ errorType: "", errorText: "" });
  const clearError = () => setError({ errorType: "", errorText: "" });

  const handleInput = (e) => {
    clearError();
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (loginStatus === "success") {
      setAlertText("Login Successfully");
      setAlert(true);
      setAlertColor("success");
      setTimeout(
        function () {
          history.goBack();
          setAlert(false);
          setAlertText("");
        }.bind(this),
        2000
      );
    } else if(loginStatus === "failed") {
      setAlertText("Invalid Login Credentials");
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
  }, [loginStatus]);

  useEffect(() => {
    setAlertText("Login is required");
    setAlert(true);
    setAlertColor("danger");
    setTimeout(
      function () {
        setAlert(false);
        setAlertText("");
      }.bind(this),
      4000
    );
  }, []
  )
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
      const data = new FormData()
      data.append( 'action', 'login' )
      data.append( 'email', email )
      data.append('password',password )
      login(data)
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
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={handleInput}
        {...error}
      />
      <Button color="primary" onClick={handleSubmit}>
        Login
      </Button>
      <p className="mt-4">
        Not have a account than <Link to="/sign-up">Sign Up</Link>
      </p>
    </div>
  );
};


const mapStateToProps = ({
  user: { loginData, loginStatus },
}) => ({
  loginData,
  loginStatus,
});

const mapDispatchToProps = {
  login: userAction.login,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));