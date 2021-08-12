import React from "react";
import "./todo-entry.styles.scss";

const TodoEntry = ({ title, description }) => (
  <div className="todo">
    <h3>{title}</h3>
    <p>{description}</p>
    <input type="checkbox" />
  </div>
);

export default TodoEntry;
