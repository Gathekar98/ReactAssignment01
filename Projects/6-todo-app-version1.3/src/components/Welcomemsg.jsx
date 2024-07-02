import { useContext } from "react";
import css from "./Welcomemsg.module.css";
import { TodoItemContext } from "../store/todo-items-store";

const Welcomemsg = () => {
  const {todoItems} = useContext(TodoItemContext);

  return (
    todoItems.length === 0 && <p className={css.welcome}>Enjoy your day</p>
  );
};
export default Welcomemsg;
