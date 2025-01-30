import React, { useState, useEffect, useCallback, useRef } from 'react';

const CounterModel = () => {
  const [value, setValue] = useState(0);
  const [listeners, setListeners] = useState([]);
  const [autoIncrementInterval, setAutoIncrementInterval] = useState(null);
  const valueRef = useRef(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  const notify = useCallback(() => {
    listeners.forEach(listener => listener(value));
  }, [listeners, value]);

  const increment = () => {
    if (valueRef.current < 100) {
      setValue(prevValue => {
        const newValue = prevValue + 1;
        notify();
        return newValue;
      });
    }
  };

  const decrement = () => {
    if (value > 0) {
      setValue(prevValue => {
        const newValue = prevValue - 1;
        notify();
        return newValue;
      });
    }
  };

  const autoIncrementStart = () => {
    if (autoIncrementInterval) return;

    const interval = setInterval(() => {
      if (valueRef.current < 100) {
        increment();
      }
    }, 1000);

    setAutoIncrementInterval(interval);
  };

  const autoIncrementStop = () => {
    if (autoIncrementInterval) {
      clearInterval(autoIncrementInterval);
      setAutoIncrementInterval(null);
    }
  };

  useEffect(() => {
    return () => {
      if (autoIncrementInterval) {
        clearInterval(autoIncrementInterval);
      }
    };
  }, [autoIncrementInterval]);

  return {
    value,
    increment,
    decrement,
    autoIncrementStart,
    autoIncrementStop,
    addListener: listener => setListeners([...listeners, listener]),
    removeListener: listener => setListeners(listeners.filter(l => l !== listener)),
  };
};

export default CounterModel;