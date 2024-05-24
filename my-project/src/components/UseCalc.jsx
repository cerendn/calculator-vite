import React from "react";
import { useState } from "react";

const UseCalc = () => {
  const [calcList, setCalcList] = useState([]);

  const addCalc = async (input1, operator, input2, result) => {
    try {
      const response = await axios.post("", {
        input1,
        operator,
        input2,
        result,
      });
    } catch (error) {}

    setCalcList([
      ...calcList,
      { input1, operator, input2, result, id: Date.now().toString() },
    ]);
  };

  const getCalc = async () => {
    try {
      const response = await axios("");
      setCalcList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { calcList, addCalc, getCalc };
};

export default UseCalc;
