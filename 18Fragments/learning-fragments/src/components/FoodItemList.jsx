/* eslint-disable react/prop-types */
import Food from "./Food";

const FooditemList = ({list}) => {
  
  return (
    <ul className="list-group">
      {list.map((item) => (
    <Food key={item} fooditem={item}></Food> 
      ))}
    </ul>
  );
};
export default FooditemList;
