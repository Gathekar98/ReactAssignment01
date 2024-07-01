/* eslint-disable react/prop-types */
import css from "./ButtonContainer.module.css";
const ButtonContainer = ({onButtonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={css.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button key="buttonName" className={css.buttonCal} onClick={()=>  onButtonClick(buttonName)}>
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
