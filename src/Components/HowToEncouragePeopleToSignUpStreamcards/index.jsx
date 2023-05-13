import React from "react";

import { Button, Img, Text } from "Components";

const HowToEncouragePeopleToSignUpStreamcards = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[191px] relative w-full">
            <Img
              src={props?.rectangleeight}
              className="absolute h-[191px] inset-[0] justify-center m-auto object-cover rounded-lg w-full"
              alt="rectangleEight"
            />
            <Img
              src="images/img_vector.svg"
              className="absolute bottom-[31%] h-10 inset-x-[0] mx-auto w-10"
              alt="vector"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto">
          <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto">
            <Text
              className="font-bold font-roboto text-left text-white_A700 w-auto"
              as="h5"
              variant="h5"
            >
              {props?.bridegroomforsaOne}
            </Text>
            <Text
              className="font-normal font-roboto leading-[175.00%] max-w-[332px] md:max-w-full not-italic text-gray_300 text-left"
              as="h6"
              variant="h6"
            >
              {props?.description}
            </Text>
          </div>
          <div className="flex flex-row gap-[103px] items-center justify-between self-stretch w-auto">
            <Button
              className="cursor-pointer font-bold font-roboto min-w-[116px] text-center text-white_A700 text-xl w-auto"
              shape="RoundedBorder8"
              size="lg"
              variant="FillGray900"
            >
              {props?.rentPlay}
            </Button>
            <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
              <Img
                src="images/img_mdiclocktimenine.svg"
                className="h-6 w-6"
                alt="mdiclocktimenin"
              />
              <div className="flex flex-col items-start justify-start self-stretch w-auto">
                <Text
                  className="font-normal font-roboto not-italic text-left text-white_A700 w-auto"
                  variant="body4"
                >
                  {props?.time}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HowToEncouragePeopleToSignUpStreamcards.defaultProps = {
  rectangleeight: "images/img_rectangle8.png",
  bridegroomforsaOne: "Bridegroom for sale.",
  description:
    "The synopsis goes here and here and here, once it starts overflowing it goes here ,the synopsis goes here and here and here, once it starts overflowing it goes here..",
  rentPlay: "Rent play",
  time: "1hr 20mins",
};

export default HowToEncouragePeopleToSignUpStreamcards;
