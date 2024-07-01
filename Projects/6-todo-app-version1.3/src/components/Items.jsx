/* eslint-disable react/prop-types */
import css from "./Items.module.css";
import TodoItem from "./TodoItem";
const Items = ({ todoItems , onDeleteClick }) => {
  return (
    <>
      <div className={`${css["items-container"]}`}>
        {todoItems.map((item) => (
          <TodoItem
            key="todoItems"
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
