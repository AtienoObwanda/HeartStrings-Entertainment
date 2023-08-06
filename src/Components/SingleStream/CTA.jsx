import React from 'react'

import { Button, Img, PagerIndicator, Slider, Text } from "UI_Components";
import DetailsPagePlayColumn from "UI_Components/DetailsPagePlayColumn";

const CTA = ({ stream }) =>  {
  return (
    <>
    <div className="flex flex-col items-center justify-start max-w-[1140px] mt-24 mx-auto md:px-5 w-full">
          <div className="h-[570px] relative w-full">
            <div className="h-[570px] m-auto w-full">
              <Img
                src={stream.image}
                className="h-[570px] m-auto object-cover rounded-lg w-full"
                alt="rectangleEight"
              />
              <Img
                src="images/img_materialsymbolsplaycircle_black_900.svg"
                className="absolute h-[164px] inset-[0] justify-center m-auto w-[164px]"
                alt="materialsymbols"
              />
            </div>
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
              <Img
                src="images/img_settings.svg"
                className="h-6 mt-6 w-6"
                alt="settings"
              />
            </div>
          </div>
        </div>
    </>
  )
}

export default CTA