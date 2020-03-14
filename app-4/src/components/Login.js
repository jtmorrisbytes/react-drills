import React from "react";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleLogin = () => {
    alert(`Username:${this.state.username}, Password ${this.state.password}`);
    this.setState({ username: "", password: "" });
  };
  render() {
    return (
      <div id="Login">
        <input
          id="username"
          onChange={this.handleInputChange}
          value={this.state.username}
        />
        <input
          id="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button type="button" onClick={this.handleLogin}>
          Login
        </button>
      </div>
    );
  }
}
