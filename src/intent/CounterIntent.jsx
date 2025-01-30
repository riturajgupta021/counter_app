const CounterIntent = (model) => {
    const increase = () => {
      model.increment();
    };
  
    const decrease = () => {
      model.decrement();
    };
  
    const startAutoIncrement = () => {
      model.autoIncrementStart();
    };
  
    const stopAutoIncrement = () => {
      model.autoIncrementStop();
    };
  
    return {
      increase,
      decrease,
      startAutoIncrement,
      stopAutoIncrement,
    };
  };
  
  export default CounterIntent;
  