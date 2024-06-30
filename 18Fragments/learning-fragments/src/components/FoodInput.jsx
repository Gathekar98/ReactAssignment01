/* eslint-disable react/prop-types */
import css from './FoodInput.module.css';
const FoodInput = ({handleOnKeyDown})=>{

return <input type="text" placeholder="Enter Food List Items..." 
className={`${css.foodinput}`}
onKeyDown={handleOnKeyDown}
// onChange={}
></input>
}
export default FoodInput;