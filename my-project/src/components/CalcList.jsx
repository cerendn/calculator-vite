import React from "react";
import CalcCard from "./CalcCard";

const CalcList = ({ calcList }) => {
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
