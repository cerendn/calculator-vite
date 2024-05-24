import React, { createContext } from "react";
import CalcCard from "./CalcCard";

const CalcList = () => {
  const { calcList } = createContext();
  return (
    <div>
      <div className="calc-list">
        {calcList.map((calc) => (
          <CalcCard calc={calc} key={calc.id} />
        ))}
      </div>
    </div>
  );
};

export default CalcList;
