import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import FormInput from "../../../components/UI/Form/FormInput/FormInput";
import FormButton from "../../../components/UI/Form/FormButton/FormButton";
import * as actions from "../../../store/actions/index";

import "./SignIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  submitHandler = async (e) => {
    e.preventDefault();
    this.props.onAuthSignIn(this.state.email, this.state.password);
    this.setState({
      email: "",
      password: "",
    });
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="form-container">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.submitHandler}>
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

          <div className="buttons">
            <FormButton type="submit" label="submit">
              Sign in
            </FormButton>
            <Link to="/register">
              <FormButton type="button" label="switch">
                New user? Register here!
              </FormButton>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthSignIn: (email, password) =>
      dispatch(actions.authSignIn(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
