import React from "react";
import { Button, Img, Text } from "UI_Components";



const StreamCards = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
        <div className="h-[191px] relative w-full">
          <Img
              src={props?.playPoster}
              className="absolute h-[191px] inset-[0] justify-center m-auto object-cover rounded-lg w-full"
              alt="rectangleEight"
            />
            <Img
              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927751/HeartStrings/SVG/img_vector_lu51mj.svg"
              className="absolute bottom-[31%] h-10 inset-x-[0] mx-auto w-10"
              alt="vector"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 items-start justify-start w-auto">
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="text-2xl md:text-[22px] text-white sm:text-xl w-auto"
              size="txtRobotoRomanBold24"
            >
              {props?.playTitle}
            </Text>
            <Text
              className="leading-[175.00%] max-w-[332px] md:max-w-full text-gray-300 text-xl"
              size="txtRobotoRomanRegular20Gray300"
            >
              {props?.playDescription}
            </Text>
          </div>
          <div className="flex flex-row gap-[103px] items-center justify-between w-auto">
            <Button 
            className="cursor-pointer font-bold font-roboto min-w-[116px] text-center text-white_A700 text-xl w-auto"
                          shape="RoundedBorder8"
                          size="lg"
                          variant="FillGray900"
            >
              {props?.userbuttonlabel}
            </Button>
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Img
                className="h-6 w-6"
                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927664/HeartStrings/SVG/img_mdiclocktimenine_wcpsyc.svg"
                alt="clock icon"
              />
              <div className="flex flex-col items-start justify-start w-auto text-white">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtRobotoRomanRegular16"
                >
                  {props?.usertime}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

StreamCards.defaultProps = {
  playPoster: "images/img_rectangle8.png",
  playTitle: "Bridegroom for sale.",
  playDescription:
    "The synopsis goes here and here and here, once it starts overflowing it goes here ,the synopsis goes here and here and here, once it starts overflowing it goes here..",
  userbuttonlabel: "Rent play",
  usertime: "1hr 20mins",
};


export default StreamCards;
