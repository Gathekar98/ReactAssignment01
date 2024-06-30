/* eslint-disable react/prop-types */
import { useState } from "react";
import Food from "./Food";

const FooditemList = ({ list }) => {
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newBuyItems = [...activeItems, item];
    setActiveItems(newBuyItems);
  };
  return (
    <ul className="list-group">
      {list.map((item) => (
        <Food
          key={item}
          fooditem={item}
          activebuy={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
        ></Food>
      ))}
    </ul>
  );
};
export default FooditemList;
