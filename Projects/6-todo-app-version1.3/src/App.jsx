import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import Items from "./components/Items";
import "./App.css";
import { useState } from "react";
import Welcomemsg from "./components/Welcomemsg";
import { TodoItemContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <TodoItemContext.Provider value={{
      todoItems, addNewItem, deleteItem }}>
      <center className="todo-container">
        <AppName></AppName>
        <AddToDo></AddToDo>
        <Welcomemsg></Welcomemsg>
        <Items></Items>
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
