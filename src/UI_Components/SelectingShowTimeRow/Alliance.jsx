import React, { useEffect, useState } from "react";
import { Img, List, Text } from "UI_Components";


const Alliance = (props) => {
  const { className, a, b, c, d, e, f, g, h, i, stage, available, reserved, selected } = props;

  const SeatIcons = {
    Selected:(
      <Img
        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927665/HeartStrings/SVG/img_mdiloveseat_red_900_24x24_q3fq2e.svg"
        className="h-6 w-6"
        alt="mdiloveseat_Three"
      />
    ),
  
    Available:(
      <Img
      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927664/HeartStrings/SVG/img_mdiloveseat_f7ateu.svg"
      className="h-6 w-6"
      alt="mdiloveseat_Five"
      />
  
    ),
  
    Reserved:(
    <Img
      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927664/HeartStrings/SVG/img_mdiloveseat_gray_800_icconh.svg"
      className="h-6 w-6"
      alt="mdiloveseat"
      />
       )
  
  };

  return (
    <>
      <div className={props.className}>
        {/* Left Outline */}
        <div className="flex flex-col  gap-4 items-start justify-start md:mt-0 mt-72 w-auto">
          <Text className="font-roboto text-sm text-white_A700 w-auto">{}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.a}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.b}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.c}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.d}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.e}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.f}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.g}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.h}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.i}</Text>
        </div>

        <div className="flex flex-col md:gap-10 gap-24 items-center justify-start w-auto md:w-full">
          {/* Stage Layout */}
          <div
            className="bg-cover bg-no-repeat flex flex-col h-60 w-[800px] md:w-600 items-center justify-start p-[52px] md:px-10 sm:px-5 w-auto md:w-full"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_group40109_pbzc2u.png')",
            }}
          >
            <Text
              className="font-roboto text-left text-white_A700 w-auto"
              as="h1"
              variant="h1"
            >
              {props?.stage}
            </Text>
          </div>

          {/* Seats Layout */}
          <div className="flex flex-col md:gap-10 gap-10 items-center justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row gap-[35px] items-start justify-center w-auto md:w-full">

              {/* Left Wing */}
              <div className="flex flex-col gap-4 items-start justify-center w-auto">
                <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pl-8 w-auto">
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                </div>
                <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pl-6 w-auto">
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                </div>
                  <div className="flex flex-row gap-2 items-center justify-center pl-[18px] w-auto">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center pl-3 w-auto">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center pl-1.5 w-auto">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  </div>
              </div>

              {/* Center Wing*/}
              <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                <List className="flex flex-col gap-4 items-center w-full" orientation="vertical">
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center w-auto sm:w-full">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  </div>
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center w-auto sm:w-full">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  </div>
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center w-auto sm:w-full">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}

                  </div>
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center w-auto sm:w-full">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                    
                  </div>
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center w-auto sm:w-full">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                 
                  </div>
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center w-auto sm:w-full">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  </div>
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center w-auto sm:w-full">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  </div>
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center w-auto sm:w-full">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  </div>
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center w-auto sm:w-full">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}

                  </div>
                </List>
              </div>

              {/* Right Wing */}
              <div className="flex flex-col gap-4 items-right justify-center  w-auto">
                <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pl-8 w-auto">
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                </div>
                <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pl-6 w-auto">
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                </div>
                <div className="flex flex-row gap-2 items-center justify-center pl-[18px] w-auto">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  </div>
                <div className="flex flex-row gap-2 items-center justify-center pl-3 w-auto">
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                    </div>
                <div className="flex flex-row gap-2 items-center justify-center pl-1.5 w-auto">
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                 </div>
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  </div>
              </div>

            </div>
            <div className="flex flex-row gap-6 items-center justify-center w-auto">
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Img className="h-6 w-6" src="images/img_mdiloveseat_white_a700.svg" alt="mdiloveseat_Fourteen" />
                <Text className="font-roboto text-base text-white_A700 w-auto">{props?.available}</Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Img className="h-6 w-6" src="images/img_mdiloveseat_gray_800.svg" alt="mdiloveseat_Fifteen" />
                <Text className="font-roboto text-base text-white_A700 w-auto">{props?.reserved}</Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Img className="h-6 w-6" src="images/img_mdiloveseat.svg" alt="mdiloveseat_Sixteen" />
                <Text className="font-roboto text-base text-white_A700 w-auto">{props?.selected}</Text>
              </div>
            </div>
          </div>
        </div>

        {/* Right Outline */}
        <div className="flex flex-col gap-4 items-start justify-start md:mt-0 mt-72 w-auto">
        <Text className="font-roboto text-sm text-white_A700 w-auto">{}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.aOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.bOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.cOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.dOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.eOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.fOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.gOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.hOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.iOne}</Text>
        </div>

      </div>
    </>
  );
};

Alliance.defaultProps = {
  a: "A",
  b: "B",
  c: "C",
  d: "D",
  e: "E",
  f: "F",
  g: "G",
  h: "H",
  i: "I",
  stage: "STAGE",
  available: "Available",
  reserved: "Reserved",
  selected: "Selected",
  aOne: "A",
  bOne: "B",
  cOne: "C",
  dOne: "D",
  eOne: "E",
  fOne: "F",
  gOne: "G",
  hOne: "H",
  iOne: "I",
};

export default Alliance;