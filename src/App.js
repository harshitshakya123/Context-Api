import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CountContext } from "./store/countStore";

const App = () => {
  const { countC, dispatchCount } = CountContext();
  const increement = () => {
    dispatchCount({ type: "INCREMENT", payload: 1 });
  };
  const decreement = () => {
    dispatchCount({ type: "DECREMENT", payload: 1 });
  };
  const reset = () => {
    dispatchCount({ type: "RESET" });
  };
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Count</h1>
        Count is: {countC.count}
        <div className="d-flex m-5">
          <button type="button" class="btn btn-success" onClick={increement}>
            INCREMENT
          </button>
          <button type="button" class="btn btn-warning" onClick={decreement}>
            DECREMENT
          </button>
          <button type="button" class="btn btn-info" onClick={reset}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
