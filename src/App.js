import "./App.css";
import { useState } from "react";

export const replaceCameWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
};

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [isEnabled, setIsEnabled] = useState(true);
  const newButtonColor = buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  const onClickHandler = () => {
    setButtonColor(newButtonColor);
  };

  return (
    <div className="App">
      <button onClick={onClickHandler} style={{ backgroundColor: !isEnabled ? "gray" : buttonColor }} disabled={!isEnabled}>
        Change to {replaceCameWithSpaces(newButtonColor)}
      </button>
      <input
        aria-checked={!isEnabled}
        type="checkbox"
        id="Disable button"
        onChange={() => {
          setIsEnabled(!isEnabled);
        }}
      />
      <label htmlFor="Disable button">Disable button</label>
    </div>
  );
}

export default App;
