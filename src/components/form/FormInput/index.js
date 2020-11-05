import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const FormInput = (props) => {
  const {
    name,
    label = "",
    type = "text",
    value = "",
    placeholder = "",
    onChange = () => {},
    errorType = "",
    errorText = "",
  } = props;
  return (
    <FormGroup>
      {label && <Label>{label}</Label>}
      <div className="position-relative">
        <Input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        <span className="bar" />
      </div>
      {errorType === name && <span className="d-block form-error text-danger">{errorText}</span>}
    </FormGroup>
  );
};

export default FormInput;
