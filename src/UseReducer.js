import React, { useReducer } from "react";

export default function UseReducer() {
  const initialState = 0;

  const reducer = (cstate, action) => {
    switch (action) {
      case "Increment":
        return cstate + 1;
      case "Decrement":
        return cstate > 0 ? cstate - 1 : 0;
      default:
        return cstate;
    }
  };

  const [cstate, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {cstate}</h1>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </div>
  );
}
