import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      foodList: ["apples", "oranges", "sausages", "hamburgers", "cheese"],
      userInput: ""
    };
  }
  handleInputChange = event => {
    this.setState({ userInput: event.target.value });
  };
  render() {
    let foodList = this.state.foodList
      .filter(food => {
        if (this.state.userInput.length > 0) {
          return food.includes(this.state.userInput);
        } else return true;
      })
      .map((food, foodIndex) => {
        return <li key={"foodItem-" + foodIndex}>{food}</li>;
      });

    return (
      <div id="App">
        <h1>The Filtered Food List</h1>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleInputChange}
        />
        <ul id="food-list">{foodList}</ul>
      </div>
    );
  }
}

export default App;
