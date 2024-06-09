/* eslint-disable react/prop-types */
import css from "./Items.module.css";
import TodoItem from "./TodoItem";
const Items = ({ todoItems }) => {
  return (
    <>
      <div className={`${css["items-container"]}`}>
        {todoItems.map((item) => (
          <TodoItem
            key="todoItems"
            todoName={item.name}
            todoDate={item.dueDate}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default Items;
