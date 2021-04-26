import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

// Counter Component
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  // actions
  const countUp = { type: "COUNT_UP" };
  const countDown = { type: "COUNT_DOWN" };
  const countReset = { type: "COUNT_RESET", value: 0 };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(countUp)}>Count Up</button>
      <button onClick={() => dispatch(countDown)}>Count Down</button>
      <button onClick={() => dispatch(countReset)}>Count Reset</button>
    </>
  );
};

// reducer
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "COUNT_UP":
      return { ...state, count: state.count + 1 };
    case "COUNT_DOWN":
      return { ...state, count: state.count - 1 };
    case "COUNT_RESET":
      return { ...state, count: action.value };
    default:
      return state;
  }
};

// store
const store = createStore(reducer);

// App Component
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
