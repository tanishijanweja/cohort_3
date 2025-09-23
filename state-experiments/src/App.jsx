import { useState } from "react";
import "./App.css";

function App() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <Light bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  );
}

function Light() {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
}

function LightBulb({ bulbOn, a }) {
  const bulbOn = getBulbOn();
  return (
    <div>
      {bulbOn ? "Bulb Onn" : "Bulb Of"} {a}
    </div>
  );
}

function LightSwitch({ bulbOn, setBulbOn }) {
  function toggle() {
    // setBulbOn((currentState) => !currentState);
    setBulbOn(!bulbOn);
  }
  return (
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  );
}

export default App;
