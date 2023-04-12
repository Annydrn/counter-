import React, { useState } from "react";

const Counter = ({ initialValue = 0, changeValue = 1 }) => {
  //aca al colocarle el =0 o el =1
  //le asignamos un valor por defecto automaticamente para que no se cree un error
  // si esque el usuario no asigna valores

  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => setCounter(counter + changeValue);

  const handleRest = () => setCounter(counter - changeValue);

  const handleReset = () => setCounter(initialValue);
  console.log({ counter });

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleAdd}>+{changeValue}</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleRest}>-{changeValue}</button>
    </div>
  );
};

export default Counter;
