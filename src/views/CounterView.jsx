import React, { useEffect, useState } from "react";
import CounterIntent from "../intent/CounterIntent";
import CounterModel from "../model/CounterModel";
import "./CounterView.css";

const CounterView = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const model = CounterModel();
  const intent = CounterIntent(model);
  const toggleAutoIncrement = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    } else {
      const id = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };
  useEffect(() => {
    model.addListener(setCount);
    return () => {
      model.removeListener(setCount);
    };
  }, [model]);

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <button onClick={() => intent.decrease()} disabled={count === 0}>-</button>
      <button onClick={() => intent.increase()} disabled={count === 100}>+</button>
      <button onClick={() => toggleAutoIncrement()} disabled={count === 100}>Auto Increment</button>
      <button onClick={toggleAutoIncrement} className="auto-update-button">
        {isRunning ? 'Stop Auto Update' : 'Start Auto Update'}
      </button>
    </div>
  );
};

export default CounterView;
