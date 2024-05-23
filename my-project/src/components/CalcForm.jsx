import React from "react";
import { useState } from "react";

const CalcForm = ({ addCalc }) => {
  const [input, setInput] = useState({ input1: "", input2: "" });

  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  const doCalc = (operator) => {
    const { input1, input2 } = input;
    const result = operations[operator](input1, input2);
    addCalc(input1, operator, input2, result);
    setInput({ input1: "", input2: "" });
  };

  return (
    <div>
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
    </div>
  );
};

export default CalcForm;
