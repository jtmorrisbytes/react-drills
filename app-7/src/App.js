import React, { Component } from "react";
import NewTask from "./Components/NewTask";
import List from "./Components/List";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(e) {
    e.preventDefault();
    let taskInput = e.target.querySelector("input[name='task']");
    console.log(taskInput.value);
    this.state.list.push(taskInput.value);
    if ((taskInput || {}).value) {
      this.setState({ list: this.state.list });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
