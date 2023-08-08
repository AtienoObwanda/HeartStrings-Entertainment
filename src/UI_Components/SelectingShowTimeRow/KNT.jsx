import React from 'react'
import { Img, List, Text } from "UI_Components";

const KNT = (props) => {
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
          {/* Layout Plan */}
          <div className="flex flex-col">

            {/* Section One */}

            <div className="flex flex-row">
              
            {/* Left Wing */}
            <div className="flex flex-col gap-4 items-start justify-center w-auto pr-4">
              {/* Row A */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pl-6 w-auto">
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                </div>

                {/* Row B */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pl-6 w-auto">
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

                {/* Row C */}
                <div className="flex flex-row gap-2 items-center justify-center pl-6 w-auto">
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

                {/* Row D */}
                <div className="flex flex-row gap-2 items-center justify-center pl-6 w-auto">
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

                {/* Row E */}
                <div className="flex flex-row gap-2 items-center justify-center pl-6 w-auto">
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

                {/* Row F */}
                <div className="flex flex-row gap-2 items-center justify-center pl-6 w-auto">
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

                {/* Row G */}
                <div className="flex flex-row gap-2 items-center justify-center pl-6 w-auto">
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


                  {/* Row H  */}
                  <div className="flex flex-row gap-2 items-center justify-center pl-6 w-auto">
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


                  {/* Row I */}
                  <div className="flex flex-row gap-2 items-center justify-center pl-6 w-auto">
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


                  {/* Row J */}
                  <div className="flex flex-row gap-2 items-center justify-center pl-6 w-auto">
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


                  {/* Row K */}
                  <div className="flex flex-row gap-2 items-center justify-center pl-6 w-auto">
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


                  {/* Row L */}
                  <div className="flex flex-row gap-2 items-center justify-center pl-6 w-auto">
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


                  {/* Row M */}
                  <div className="flex flex-row gap-2 items-center justify-center pl-6 w-auto">
                    {SeatIcons[available]}
                    {SeatIcons[available]}
                    {SeatIcons[available]}
                    {SeatIcons[available]}
                    {SeatIcons[available]}
                    {SeatIcons[available]}
                    </div>


                  {/* Row N */}
                  <div className="flex flex-row gap-2 items-center justify-center pl-6 w-auto">
                    {SeatIcons[available]}
                    {SeatIcons[available]}
                    {SeatIcons[available]}
                    {SeatIcons[available]}
                    {SeatIcons[available]}
                    </div>
                  
              </div>


            
            {/* Divider/Way */}
            <div className="flex flex-col items-center justify-center pr-2 md:mt-0 w-[4em] bg-white_A700 ">

                
                <Text className="font-roboto text-center text-red_900 pt-4 pb-4 w-auto" as="h2" variant="h2">G</Text>
                <Text className="font-roboto text-center text-red_900 pt-4 pb-4 w-auto" as="h2" variant="h2">A</Text>
                <Text className="font-roboto text-center text-red_900 pt-4 pb-4 w-auto" as="h2" variant="h2">N</Text>
                <Text className="font-roboto text-center text-red_900 pt-4 pb-4 w-auto" as="h2" variant="h2">G</Text>
                <Text className="font-roboto text-center text-red_900 pt-4 pb-4 w-auto" as="h2" variant="h2">W</Text>
                <Text className="font-roboto text-center text-red_900 pt-4 pb-4 w-auto" as="h2" variant="h2">A</Text>
                <Text className="font-roboto text-center text-red_900 pt-4 pb-4 w-auto" as="h2" variant="h2">Y</Text>


              </div>



            {/* Right Wing */}
            <div className="flex flex-col gap-4 items-end justify-center w-auto pl-4">
              {/* Row A */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pr-5 pr-6 w-auto">
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                </div>

                {/* Row B */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pr-5 pr-6 w-auto">
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

                {/* Row C */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pr-5 pr-6 w-auto">
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

                {/* Row D */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pr-5 pr-6 w-auto">
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

                {/* Row E */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pr-5 pr-6 w-auto">
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

                {/* Row F */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pr-5 pr-6 w-auto">
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

                {/* Row G */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pr-6 w-auto">
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

                {/* Row H */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pr-6 w-auto">
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

                {/* Row I */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pr-6 w-auto">
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

                {/* Row J */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pr-5 pr-6 w-auto">
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


                {/* Row K */}
                <div className="flex flex-row gap-2 items-center justify-center  sm:pr-5 pr-6 w-auto">
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
                
                {/* Row L */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pr-5 pr-6 w-auto">
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


                {/* Row M */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pr-5 pr-6 w-auto">
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                </div>


                {/* Row N */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pr-5 pr-6 w-auto">
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                

              
                </div>

                </div>
            </div>


            {/* Balcony */}
            <div className="bg-white_A700 h-[5em] mt-8 w-full">
            <Text
              className="font-roboto text-center text-red_900 pt-4 pb-4 w-auto"
              as="h2"
              variant="h2"
            >
              BALCONY
            </Text>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col items-start justify-center gap-4 mt-8 w-auto">
              {/* Row O*/}
                <div className="flex flex-row gap-[8.1px] pl-5 items-center justify-center w-auto">
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
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                </div>
              {/* Row P */}
              <div className="flex flex-row gap-[8.4px] pl-4 items-center justify-center sm:pl-5 w-auto">
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
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                </div>
              {/* Row Q */}
              <div className="flex flex-row gap-[8.4px] pl-4 items-left justify-center sm:pl-5 w-auto">
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
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                </div>


                </div>


          </div>


          </div>
          </div>

</>
  )
}

export default KNT