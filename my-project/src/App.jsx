import { useState } from "react";
import "./App.css";
import CalcList from "./components/CalcList";
import CalcForm from "./components/CalcForm";

function App() {
  const [calcList, setCalcList] = useState([]);

  const addCalc = (input1, operator, input2, result) => {
    setCalcList([
      ...calcList,
      { input1, operator, input2, result, id: Date.now().toString() },
    ]);
  };
  return (
    <>
      <header>
        <h1>Basic Calculator</h1>
      </header>
      <main>
        <CalcForm addCalc={addCalc} />
        <CalcList calcList={calcList} />
      </main>
    </>
  );
}

export default App;
