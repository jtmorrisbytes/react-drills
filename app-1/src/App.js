import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    };
  }
  handleChange = event => {
    this.setState({ userInput: event.target.value });
  };
  render() {
    return (
      <div id="App">
        <h3>Type into input box and your text will be mirrored below</h3>
        <textarea type="text" onChange={this.handleChange} />
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
