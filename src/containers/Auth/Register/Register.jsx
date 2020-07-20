import React, { Component } from "react";
import { Link } from "react-router-dom";

import FormInput from "../../../ui-assets/Form/FormInput/FormInput";
import FormButton from "../../../ui-assets/Form/FormButton/FormButton";

import "./Register.scss";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "", name: "" });
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="form-container">
        <h2 className="title">Don't have an account yet?</h2>
        <span>Register below</span>
        <form onSubmit={this.submitHandler}>
          <FormInput
            type="text"
            name="firstName"
            value={this.state.firstName}
            handleChange={this.onChangeHandler}
            required
            label="first name"
          ></FormInput>
          <FormInput
            type="text"
            name="lastName"
            value={this.state.lastName}
            handleChange={this.onChangeHandler}
            required
            label="last name"
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.onChangeHandler}
            required
            label="email"
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.onChangeHandler}
            required
            label="password"
          ></FormInput>

          <FormButton type="submit" label="register">
            Register
          </FormButton>
          <Link to="/signin">
            <FormButton
              type="button"
              onClick={this.props.handleFormChange}
              label="switch"
            >
              Back to login page
            </FormButton>
          </Link>
        </form>
      </div>
    );
  }
}

export default Register;