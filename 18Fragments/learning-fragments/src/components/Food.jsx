/* eslint-disable react/prop-types */
import styles from "./Food.module.css";
const Food = ({fooditem, activebuy, handleBuyButton}) => {
 
  return (
    <>
      <li className={`${styles['ag-item']} list-group-item ${activebuy && "active"}`}>{fooditem} 
      <button className={`${styles.button} btn`}
      onClick={handleBuyButton}
      >Buy</button>
      </li>
    </>
  );
};
export default Food;
