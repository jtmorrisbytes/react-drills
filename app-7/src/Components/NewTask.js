import React, { Component } from "react";

export default function Task(props) {
  return (
    <form onSubmit={props.add}>
      <input name="task" placeholder="type to add task" />
      <button type="submit">Submit</button>
    </form>
  );
}
