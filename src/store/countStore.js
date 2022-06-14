import { createContext, useContext, useReducer } from "react";
const countContext = createContext(null);

const initialVal = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      console.log("new", state, action.payload);
      return { ...state, count: state.count + action.payload };
    }
    case "DECREMENT": {
      return { ...state, count: state.count - action.payload };
    }
    case "RESET": {
      return { ...state, count: 0 };
    }

    default:
      break;
  }
};
export const CountProvider = (props) => {
  const [countC, dispatchCount] = useReducer(reducer, initialVal);
  return <countContext.Provider value={{ countC, dispatchCount }} {...props}></countContext.Provider>;
};

export const CountContext = () => {
  const context = useContext(countContext);
  if (!context) {
    throw new Error("Please use the context inside parent scope");
  }
  return context;
};
