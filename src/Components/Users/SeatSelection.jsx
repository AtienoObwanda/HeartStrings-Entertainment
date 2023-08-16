import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import { io } from "socket.io-client";

import Alliance from "UI_Components/SelectingShowTimeRow/Alliance";
import KNT from "UI_Components/SelectingShowTimeRow/KNT";
import NairobiCinema from "UI_Components/SelectingShowTimeRow/NairobiCinema";

import { Button, Img, List, Text } from "UI_Components";



// Theaters:
const theaters = {
  alliance: <Alliance 
  className="bg-black_900_01 flex flex-row items-start justify-between pb-8 sm:px-5 px-8 w-full"
          a="A"
          b="B"
          c="C"
          d="D"
          e="E"
          f="F"
          g="G"
          h="H"
          i="I"
          stage="STAGE"
          available="Available"
          reserved="Reserved"
          selected="Selected"/>,


  knt: <KNT 
  className="bg-black_900_01 flex flex-row items-start justify-between pb-8 sm:px-5 px-8 w-full"
          a="A"
          b="B"
          c="C"
          d="D"
          e="E"
          f="F"
          g="G"
          h="H"
          i="I"
          stage="STAGE"
          available="Available"
          reserved="Reserved"
          selected="Selected"/>,


  nairobi: <NairobiCinema 
  className="bg-black_900_01 flex flex-row items-start justify-between pb-8 sm:px-5 px-8 w-full"
          a="A"
          b="B"
          c="C"
          d="D"
          e="E"
          f="F"
          g="G"
          h="H"
          i="I"
          stage="STAGE"
          available="Available"
          reserved="Reserved"
          selected="Selected"/>
};



const SeatSelection = () => {
  const [selectedTheater, setSelectedTheater] = useState('alliance');

  const handleTheaterChange = (event) => {
      setSelectedTheater(event.target.value);
  };

  return (
    <>
      {/* Seat selection */}
      <div className="flex flex-col gap-6 items-start justify-center self-stretch w-auto md:w-full">
        <div className="bg-black_900 flex flex-col gap-8 items-start justify-start max-w-[725px] mt-7 sm:px-5 px-6 py-12 rounded-lg w-full">
          <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto sm:w-full">
            <Text
              className="font-normal not-italic text-left text-white_A700 w-auto"
              as="h5"
              variant="h5"
            >
              Select Theatre
            </Text>

            <div className="flex flex-row gap-4 items-start justify-start w-auto">
              <div className="flex flex-row gap-4 items-center justify-center w-auto">
                <input
                  type="radio"
                  class="h-6 w-6 checked:bg-red-900 text-red-900 p-3 my-4"
                  id="theatre1"
                  name="theatre"
                  value="alliance"
                        checked={selectedTheater === 'alliance'}
                        onChange={handleTheaterChange}
                />
                <label htmlFor="theatre1">
                  <Text
                    className="text-white_A700 w-auto"
                    size="txtRobotoRomanRegular14WhiteA700"
                  >
                    Alliance Française
                  </Text>
                </label>
              </div>

              <div className="flex flex-row gap-4 items-center justify-center w-auto">
                <input
                  type="radio"
                  class="h-6 w-6 checked:bg-red-900 text-red-900 p-3 my-4"
                  id="theatre2"
                  name="theatre"
                  value="nairobi"
                        checked={selectedTheater === 'nairobi'}
                        onChange={handleTheaterChange}
                />
                <label htmlFor="Nairobi Cinema">
                  <Text
                    className="text-white_A700 w-auto"
                    size="txtRobotoRomanRegular14WhiteA700"
                  >
                    Nairobi Cinema
                  </Text>
                </label>
              </div>

              <div className="flex flex-row gap-4 items-center justify-center w-auto">
                <input
                  type="radio"
                  class="h-6 w-6 checked:bg-red-900 text-red-900 p-3 my-4"
                  id="theatre3"
                  name="theatre"
                  value="knt"
                  checked={selectedTheater === 'knt'}
                  onChange={handleTheaterChange}
                />
                <label htmlFor="KNT">
                  <Text
                    className="text-white_A700 w-auto"
                    size="txtRobotoRomanRegular14WhiteA700"
                  >
                    Kenya National Theatre
                  </Text>
                </label>
              </div>
            </div>
          </div>
        </div>

        <Text className="text-left text-white_A700 w-auto" as="h2" variant="h2">
          Select seat (s)
        </Text>

        {/* <NairobiCinema
          className="bg-black_900_01 flex flex-row items-start justify-between pb-8 sm:px-5 px-8 w-full"
          a="A"
          b="B"
          c="C"
          d="D"
          e="E"
          f="F"
          g="G"
          h="H"
          i="I"
          stage="STAGE"
          available="Available"
          reserved="Reserved"
          selected="Selected"
        /> */}
        {theaters[selectedTheater]}
      </div>
    </>
  );
};

export default SeatSelection;
