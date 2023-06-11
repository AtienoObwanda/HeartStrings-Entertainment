import React from 'react'
import { Img, Text } from "UI_Components";
import { useNavigate } from "react-router-dom";


const Stats = () => {
  return (
    <>
    {/* Stats Section */}
<div className="flex sm:flex-col flex-row sm:gap-10 gap-[79px] items-center justify-center self-stretch w-auto sm:w-full">
  <div className="flex flex-col gap-6 items-center justify-center self-stretch w-auto">
    <div className="flex flex-col gap-10 items-center justify-start w-auto md:w-full">
      <Text
        className="font-normal not-italic text-gray_300 text-left w-auto"
        as="h5"
        variant="h5"
      >
        Actors
      </Text>
      <Text
        className="text-center text-white_A700 w-auto"
        as="h2"
        variant="h2"
      >
        50+
      </Text>
    </div>
    <Text
      className="font-normal not-italic text-gray_300 text-left w-auto"
      variant="body4"
    >
      <a href='#'>Join our team</a>
    </Text>
  </div>
  <div className="flex flex-col gap-6 items-center justify-center self-stretch w-auto">
    <Text
      className="font-normal not-italic text-gray_300 text-left w-auto"
      as="h5"
      variant="h5"
    >
      Locations
    </Text>
    <Text
      className="text-center text-white_A700 w-auto"
      as="h2"
      variant="h2"
    >
      3
    </Text>
    <Text
      className="font-normal not-italic text-gray_300 text-left w-auto"
      variant="body4"
    >
      <a href='#'> Find near you</a>
    </Text>
  </div>
  <div className="flex flex-col gap-6 items-center justify-center self-stretch w-auto">
    <Text
      className="font-normal not-italic text-gray_300 text-left w-auto"
      as="h5"
      variant="h5"
    >
      Plays
    </Text>
    <Text
      className="text-center text-white_A700 w-auto"
      as="h2"
      variant="h2"
    >
      100+
    </Text>
    <Text
      className="font-normal not-italic text-gray_300 text-left w-auto"
      variant="body4"
    >
      <a href='#'>Stream our plays</a>
    </Text>
  </div>
</div>


    </>
  )
}

export default Stats