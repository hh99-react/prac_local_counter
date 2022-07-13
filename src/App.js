import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div>{number}</div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
