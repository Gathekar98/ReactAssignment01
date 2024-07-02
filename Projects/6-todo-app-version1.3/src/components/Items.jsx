/* eslint-disable react/prop-types */
import { useContext } from "react";
import css from "./Items.module.css";
import TodoItem from "./TodoItem";
import { TodoItemContext } from "../store/todo-items-store";


const Items = ({onDeleteClick }) => {
  const {todoItems} = useContext(TodoItemContext);


  return (
    <>
      <div className={`${css["items-container"]}`}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick = {onDeleteClick}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default Items;
