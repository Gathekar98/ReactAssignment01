import css from "./App.module.css";
import ButtonContainer from "./ButtonContainer";
import Display from "./components/Display";

function App() {
  return (
    <div className={css.calculator}>
      <Display />
      <ButtonContainer />
    </div>
  );
}

export default App;
