import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FooditemList from "./components/FoodItemList";
import ErrorMessage from "./components/ErrorMessage";


function App() {
  let foodItems = ["Daal", "Green Vegetable", "Roti", "Salad", "Curd"];

  return (
    <>
    <h1>Healty Food List</h1>
    <ErrorMessage list={foodItems}></ErrorMessage>
    <FooditemList list={foodItems}></FooditemList>
    </>
  );
}

export default App;
