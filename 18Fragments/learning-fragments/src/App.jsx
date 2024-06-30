import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FooditemList from "./components/FoodItemList";
import ErrorMessage from "./components/ErrorMessage";
import styles from "./components/Food.module.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let [textToShow, setTextState] = useState("Food item Entered by user");
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value ="";
      // console.log(newFoodItem);
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      
    }
  };
  return (
    <>
      <Container>
        <h1 className={`${styles["Food-heading"]}`}>Healty Food List</h1>
        
        <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage list={foodItems}></ErrorMessage>
        <FooditemList list={foodItems}></FooditemList>
      </Container>
      <Container>
        <p>
          Above is the list of heathy Food items which is good for health and
          well being..
        </p>
      </Container>
    </>
  );
}

export default App;
