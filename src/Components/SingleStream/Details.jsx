import React from 'react'

import { Button, Img, PagerIndicator, Slider, Text } from "UI_Components";
import DetailsPagePlayColumn from "UI_Components/DetailsPagePlayColumn";

const Details = ({ stream }) =>  {
  return (
    <>
     <div className="flex flex-col gap-4 items-start justify-start mt-10 md:ml-[0] ml-[150px] md:px-5 self-stretch w-auto md:w-full">
        <Text
          className="text-left text-white_A700 w-auto"
          as="h2"
          variant="h2"
        >
          {stream.title}
        </Text>

        <div className="flex flex-row gap-2 items-left justify-left self-stretch w-auto">
          <Img
            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927664/HeartStrings/SVG/img_mdiclocktimenine_wcpsyc.svg"
            className="h-6 w-6"
            alt="mdiclocktimenin"
          />
          {/* <div className="flex flex-col items-start justify-start self-stretch w-auto"> */}
            <Text
              className="font-normal not-italic text-left text-white_A700 w-auto"
              variant="body4"
            >
              {/* {stream.duration} */}
              1 hr  40 Mins
            </Text>
          {/* </div> */}
        </div>
        <Text
          className="font-normal leading-[175.00%] max-w-[631px] md:max-w-full not-italic text-gray_300 text-left"
          as="h6"
          variant="h6"
        >
          {stream.synopsis}
        </Text>
      </div>
      </>
  )
}

export default Details