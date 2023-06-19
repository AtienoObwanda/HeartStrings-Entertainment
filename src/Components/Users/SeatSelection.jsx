import React from 'react'
// import { io } from "socket.io-client";

import SelectingShowTimeRowa from "UI_Components/SelectingShowTimeRow";
import { Button, Img, List, Text } from "UI_Components";






const SeatSelection = () => {
  return (
    <>
            {/* Seat selection */}
            <div className="flex flex-col gap-6 items-start justify-center self-stretch w-auto md:w-full">
            <Text
              className="text-left text-white_A700 w-auto"
              as="h2"
              variant="h2"
            >
              Select seat (s)
            </Text>
            <SelectingShowTimeRowa
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
              
            />
          </div>
    </>
  )
}

export default SeatSelection