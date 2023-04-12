import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter initialValue={100} changeValue={10} />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
