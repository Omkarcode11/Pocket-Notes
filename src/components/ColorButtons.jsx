import React, { useState } from "react";

const ColorRadioButtons = ({ selectedColor, handleColorChange }) => {
  return (
    <div className='flex flex-wrap gap-1 '>
      {["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"].map(
        (color) => (
          <label key={color} className='flex items-center space-x-2'>
            <input
              type='radio'
              name='color'
              value={color}
              checked={selectedColor === color}
              onChange={() => handleColorChange(color)}
              className='hidden'
            />
            <span
              className={`w-10 h-10 rounded-full cursor-pointer ${
                selectedColor === color ? "ring-2 ring-offset-2" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            />
          </label>
        )
      )}
    </div>
  );
};

export default ColorRadioButtons;
