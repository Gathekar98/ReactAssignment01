/* eslint-disable react/prop-types */
import { useContext, useRef } from "react";
import css from "./AddToDo.module.css";
import { MdOutlineAdd } from "react-icons/md";
import { TodoItemContext } from "../store/todo-items-store";

function AddToDo() {
  const {addNewItem} = useContext(TodoItemContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate); 
  };
  return (
    <div className="container">
      <form onSubmit={handleAddButtonClicked} className="row todo-row">
        <div className="col-6">
          <input
            ref={todoNameElement}
            className={`${css["input-bar"]}`}
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input
            ref={dueDateElement}
            className={`${css["input-bar"]}`}
            type="date"
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success todo-btn">
            <MdOutlineAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
