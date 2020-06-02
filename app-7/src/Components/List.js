import React, { Component } from "react";

import "./List.css";

export default function List(props) {
  return (
    <div className="List">
      <h3>{props.tasks.length} Items</h3>
      <ul>
        {(props.tasks || []).map(function (task, i) {
          return <li key={i}>{task}</li>;
        })}
      </ul>
    </div>
  );
}
