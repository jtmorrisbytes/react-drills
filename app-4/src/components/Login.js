import React from "react";
import "./Login.css";
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleInputChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleLogin(e) {
    e.preventDefault();
    alert(`Username:${this.state.username}, Password ${this.state.password}`);
    this.setState({ username: "", password: "" });
  }
  render() {
    return (
      <form id="Login" onSubmit={this.handleLogin}>
        <input
          id="username"
          onChange={this.handleInputChange}
          value={this.state.username}
        />
        <br />
        <input
          id="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <br />
        <button type="button" onClick={this.handleLogin}>
          Login
        </button>
      </form>
    );
  }
}
