import "./App.css";
import CalcList from "./components/CalcList";
import CalcForm from "./components/CalcForm";
import CalcContext from "./components/context/CalcContext";

function App() {
  return (
    <>
      <header>
        <h1>Basic Calculator</h1>
      </header>
      <CalcContext.Provider>
        <main>
          <CalcForm addCalc={addCalc} />
          <CalcList calcList={calcList} />
        </main>
      </CalcContext.Provider>
    </>
  );
}

export default App;
