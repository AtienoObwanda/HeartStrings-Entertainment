import React, { useState, useEffect } from 'react';
import { Text } from 'UI_Components'; // Import your UI components here

function TheatreSelection({ selectedTheatre, handleTheatreSelection }) {
  const [theatres, setTheatres] = useState([]);

  // Simulating fetching theatre data from an API
  useEffect(() => {
    // Replace this with your actual API fetch
    const mockApiData = ['Kenya National Theatre', 'Alliance', 'Nairobi Cinema'];
    setTheatres(mockApiData);
  }, []);

  return (
    <div>
      {theatres.map(theatre => (
        <div
          key={theatre}
          className="flex flex-row gap-4 items-center justify-center w-auto"
        >
          <input
            type="radio"
            className="h-6 w-6 checked:bg-red-900 text-red-900 p-3 my-4"
            id={theatre}
            name="theatre"
            value={theatre}
            checked={selectedTheatre === theatre}
            onChange={() => handleTheatreSelection(theatre)}
          />
          <label htmlFor={theatre}>
            <Text
              className="text-white_A700 w-auto"
              size="txtRobotoRomanRegular14WhiteA700"
            >
              {theatre}
            </Text>
          </label>
        </div>
      ))}
    </div>
  );
}

export default TheatreSelection;
