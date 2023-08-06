import React from 'react'

import { Button, Img, PagerIndicator, Slider, Text } from "UI_Components";
import DetailsPagePlayColumn from "UI_Components/DetailsPagePlayColumn";

const Hero  = ({ stream }) => {
  
  return (
    <>
      <div className="h-[600px] md:px-5 relative w-full">
          <Img
            src={stream.titleImage}
            className="h-[600px] m-auto object-cover w-full"
            alt="rectangleTwo"
          />
          
          <div className="absolute bottom-[35%] flex flex-row sm:gap-10 items-start justify-between right-[3%] w-[56%]">
              <div className="flex flex-col gap-[35px] items-center justify-start self-stretch w-auto">
                <Button
                  className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[195px]"
                  shape="RoundedBorder8"
                  size="lg"
                  variant="FillRed900"
                >
                  Rent play
                </Button>
                <Button
                  className="cursor-pointer font-bold text-black_900 text-center text-xl w-[195px]"
                  shape="RoundedBorder8"
                  size="lg"
                  variant="OutlineWhiteA700"
                >
                  Watch trailer
                </Button>
              </div>
              
            </div>

          <div className="absolute bottom-[6%] flex flex-col gap-2 items-start justify-center left-[10%] self-stretch w-auto">
            <Text
              className="text-left text-white_A700 w-auto"
              as="h1"
              variant="h1"
            >
              {stream.title}
            </Text>
            <Text
              className="font-bold leading-[175.00%] text-gray_300 text-left"
              as="h6"
              variant="h6"
            >
              Directed by: <br></br>
              {stream.director}
            </Text>
          </div>
        </div>
    </>
  )
}

export default Hero


