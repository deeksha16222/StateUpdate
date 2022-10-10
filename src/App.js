import "./styles.css";
import { useState } from "react";
export default function App() {
  const [data, setData] = useState("Girl");
  function update() {
    setData("Deeksha");
  }
  return (
    <div className="App">
      <h1> Hi, I am {data}</h1>
      <button onClick={update}> Click to Update </button>
    </div>
  );
}
