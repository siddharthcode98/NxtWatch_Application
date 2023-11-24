import { Component } from "react";

import { Redirect } from "react-router-dom";

import Cookies from "js-cookie";

import ThemeContext from "../../context/ThemeContext";

import {
  FormContainer,
  Form,
  LoginContainer,
  LoginLogo,
  LoginInput,
  LoginBtn,
  LoginError,
  Label,
} from "./StyledComponents.js";

class LoginForm extends Component {
  state = {
    username: "rahul",
    password: "rahul@2021",
    showPassword: false,
    showError: false,
    errorMsg: "",
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  onChangeCheckbox = (event) => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  successfullLogin = (jwtToken) => {
    const { history } = this.props;
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    history.replace("/");
  };
  failureLogin = (errorMsg) => {
    this.setState({ showError: true, errorMsg });
  };
  onSubmitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const loginApiUrl = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(loginApiUrl, options);
    const data = await response.json();
    if (response.ok) {
      this.successfullLogin(data.jwt_token);
    } else {
      this.failureLogin(data.error_msg);
    }
  };
  render() {
    const {
      showPassword,
      username,
      password,
      showError,
      errorMsg,
    } = this.state;
    const variable = showPassword ? "text" : "password";

    const jwtToken = Cookies.get("jwt_token");

    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }

    return (
      <ThemeContext.Consumer>
        {(value) => {
          const { activeTheme } = value;
          const bgTheme = activeTheme ? "#f9f9f9" : " #0f0f0f";
          const Theme = activeTheme ? "#f9f9f9" : " #231f20";
          const textColor = activeTheme ? "black" : "white";
          const logo = activeTheme
            ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png";
          return (
            <LoginContainer bgColor={bgTheme}>
              <FormContainer bgColor={Theme}>
                <LoginLogo src={logo} alt="website logo " />
                <Form onSubmit={this.onSubmitForm}>
                  <br />
                  <Label color={textColor}>USERNAME</Label>
                  <br />
                  <LoginInput
                    onChange={this.onChangeUsername}
                    type="text"
                    value={username}
                  />
                  <br />
                  <Label color={textColor}>PASSWORD</Label>
                  <br />
                  <LoginInput
                    onChange={this.onChangePassword}
                    type={variable}
                    value={password}
                  />
                  <br />
                  <div>
                    <input type="checkbox" onChange={this.onChangeCheckbox} />
                    <Label color={textColor}>Show Password</Label>
                  </div>
                  <br />
                  <LoginBtn type="submit">Login</LoginBtn>
                  {showError && <LoginError>{errorMsg}</LoginError>}
                </Form>
              </FormContainer>
            </LoginContainer>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default LoginForm;
