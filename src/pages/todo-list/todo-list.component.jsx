import React, { useState } from "react";
import TodoEntry from "../../components/todo-entry/todo-entry.component";
import "./todo-list.styles.scss";

const TodoListPage = () => {
  const [todoEntries, setTodoEntries] = useState([]);
  const [entry, setEntry] = useState({ title: "", description: "" });

  return (
    <div className="todo-page">
      <div className="TodoListPage">
        <h1>Add an Entry</h1>
        <span>Title:</span>
        <input
          type="text"
          value={entry.title}
          onChange={(e) => setEntry({ ...entry, title: e.target.value })}
        />
        <br />
        <span>Description:</span>
        <input
          type="text"
          value={entry.description}
          onChange={(e) => setEntry({ ...entry, description: e.target.value })}
        />
        <br />
        <button
          onClick={() => {
            setTodoEntries([...todoEntries, entry]);
            setEntry({ title: "", description: "" });
          }}
        >
          Add
        </button>
      </div>
      <div className="todo-list">
        {todoEntries
          ? todoEntries.map((entry, idx) => <TodoEntry key={idx} {...entry} />)
          : null}
      </div>
    </div>
  );
};

export default TodoListPage;
