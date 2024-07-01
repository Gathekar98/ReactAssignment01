import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import Items from "./components/Items";
import "./App.css";
import { useState } from "react";
import Welcomemsg from "./components/Welcomemsg";


function App() {
  // const initialTodoItems = [
  //   { name: "BUY MILK", dueDate: "04/10/2023" },
  //   { name: "BUY MILK", dueDate: "04/10/2023" },
  //   { name: "BUY MILK", dueDate: "04/10/2023" },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate)=>{
    const newTodoItems = [...todoItems, {name : itemName , dueDate: itemDueDate}];
  setTodoItems(newTodoItems);
}

const handleDeleteItem = (todoItemName) =>{
const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
setTodoItems(newTodoItems);
}
    return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo onNewItem ={handleNewItem}></AddToDo>
      {todoItems.length === 0 && <Welcomemsg todoItems={todoItems}></Welcomemsg>}
      <Items todoItems={todoItems} onDeleteClick={handleDeleteItem}></Items>
    </center>
  );
}

export default App;
