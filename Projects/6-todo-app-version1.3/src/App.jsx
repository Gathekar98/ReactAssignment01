import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import Items from "./components/Items";
import "./App.css";
import Welcomemsg from "./components/Welcomemsg";
import TodoItemsContextProvider from "./store/todo-items-store";



function App() {
  return (
   <TodoItemsContextProvider>
   <center className="todo-container">
   <AppName></AppName>
   <AddToDo></AddToDo>
   <Welcomemsg></Welcomemsg>
   <Items></Items>
   </center>
   </TodoItemsContextProvider>
  );
}

export default App;
