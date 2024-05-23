import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState({ input1: "", input2: "" });
  const [calcList, setCalcList] = useState([]);

  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  const doCalc = (operator) => {
    const { input1, input2 } = input;
    const result = operations[operator](input1, input2);
    setCalcList([
      ...calcList,
      { input1, input2, result, operator, id: Date.now().toString() },
    ]);
    setInput({ input1: "", input2: "" });
  };

  return (
    <>
      <header>
        <h1>Basic Calculator</h1>
      </header>
      <main>
        <div className="calc-form">
          <input
            value={input.input1}
            type="number"
            onChange={(event) =>
              setInput({ ...input, input1: parseInt(event.target.value) })
            }
          />
          <input
            value={input.input2}
            type="number"
            onChange={(event) =>
              setInput({ ...input, input2: parseInt(event.target.value) })
            }
          />
          <div className="buttons">
            {Object.keys(operations).map((operator) => (
              <button onClick={() => doCalc(operator)} key={operator}>
                {operator}
              </button>
            ))}
          </div>
        </div>
        <div className="calc-list">
          {calcList.map((calc) => (
            <div className="calc-card" key={calc.id}>
              <span> {calc.input1} </span>
              <span> {calc.operator} </span>
              <span> {calc.input2} </span>
              <span> = </span>
              <span>{calc.result}</span>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
