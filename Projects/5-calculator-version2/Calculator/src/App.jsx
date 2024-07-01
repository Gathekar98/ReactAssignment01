import { useState } from "react";
import css from "./App.module.css";
import ButtonContainer from "./ButtonContainer";
import Display from "./components/Display";

function App() {

const [calVal,setCalVal]= useState("");
const onButtonClick = (buttonText)=> {
  if(buttonText === "C"){
// console.log("c");
setCalVal("");
  }
  else if(buttonText === "="){
// console.log("=");
const result = eval(calVal);
setCalVal(result);
  }
  else{
    const newDisplayValue = calVal + buttonText;
    setCalVal(newDisplayValue);
  }
}

  return (
    <div className={css.calculator}>
      <Display displayValue={calVal} ></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
