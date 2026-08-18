import React, { useState } from "react";
import "./ColorChanger.css";

function ColorChanger() {
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div
      className="color-page"
      style={{ backgroundColor: color }}
    >
      <div className="color-card">
        <h1>Background Color Changer</h1>

        <p>Select a color to change the background:</p>

        <input
          className="color-input"
          type="color"
          value={color}
          onChange={handleColorChange}
        />

        <div className="selected-color">
          <p>
            Selected Color:
            <strong>{color}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ColorChanger;