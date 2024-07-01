/* eslint-disable react/prop-types */
import { useState } from "react";
import css from "./AddToDo.module.css";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
  setTodoName("");
  };
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">
          <input
            className={`${css["input-bar"]}`}
            type="text"
            placeholder="Enter Todo Here"
          value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={`${css["input-bar"]}`}
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success todo-btn"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
