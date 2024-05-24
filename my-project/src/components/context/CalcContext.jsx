import { createContext, useEffect } from "react";
import UseCalc from "../UseCalc";

export const CalcContext = createContext();

const CalcContext = ({ children }) => {
  const { calcList, getCalc, addCalc } = UseCalc();

  useEffect(() => {
    getCalc();
  }, []);

  const contextValue = { calcList, getCalc, addCalc };

  return (
    <CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>
  );
};

export default CalcContext;
