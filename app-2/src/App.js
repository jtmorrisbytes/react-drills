import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      foodList: ["apples", "oranges", "sausages", "hamburgers", "cheese"]
    };
  }
  render() {
    let foodList = this.state.foodList.map((food, foodIndex) => {
      return <li key={"foodItem-" + foodIndex}>{food}</li>;
    });

    return (
      <div id="App">
        <h1>The food List</h1>
        <ul id="food-list">{foodList}</ul>
      </div>
    );
  }
}

export default App;
