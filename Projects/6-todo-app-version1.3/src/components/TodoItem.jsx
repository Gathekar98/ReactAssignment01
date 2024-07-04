/* eslint-disable react/prop-types */

import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TodoItemContext } from "../store/todo-items-store";
function TodoItem({ todoName, todoDate}) {
  const {deleteItem} = useContext(TodoItemContext);

  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger todo-btn"
          onClick={() => deleteItem(todoName)}>
                                                                         <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
