import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import Items from "./components/Items";
import "./App.css";


function App() {
  const todoItems = [
    { name: "BUY MILK", dueDate: "04/10/2023" },
    { name: "BUY MILK", dueDate: "04/10/2023" },
    { name: "BUY MILK", dueDate: "04/10/2023" },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <Items todoItems={todoItems}></Items>
    </center>
  );
}

export default App;
