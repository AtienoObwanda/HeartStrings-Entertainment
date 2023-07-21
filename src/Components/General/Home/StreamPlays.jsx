import React from 'react'
import StreamCards from "UI_Components/StreamCards";
import { Button, Img, List, Text } from "UI_Components";




const StreamPlays = () => {
  return (
    <>
     {/* Streaming Plays */}
     <div className="flex flex-col gap-12 items-center justify-center max-w-[1140px] mt-[89px] mx-auto md:px-5 self-stretch w-full">
          <div className="flex flex-col gap-1 items-center justify-center self-stretch w-auto sm:w-full">
            <Text
              className="text-center text-white_A700 w-auto"
              as="h1"
              variant="h1"
            >
              Stream plays
            </Text>
            <Text
              className="font-normal not-italic text-gray_300 text-left w-auto"
              as="h5"
              variant="h5"
            >
              The world of theatre from the comfort of your home.
            </Text>
          </div>
          <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="relative w-full">
                <Button className="absolute bg-white-A700 border border-solid border-white-A700 cursor-pointer font-bold min-w-[155px] py-[15px] right-1/4 rounded-lg text-black-900 text-center text-xl top-[26%]">
                  Watch trailer
                </Button>
                <StreamCards className="bg-black_900_01 flex flex-col gap-4 items-center justify-start m-auto p-4 relative rounded-lg w-full" />
              </div>
              <StreamCards
                className="bg-black_900_01 flex flex-col gap-4 items-center justify-start p-4 rounded-lg w-full"
                rectangleeight="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927558/HeartStrings/Heartstrings_Ent_KE_2_kb2kdv.png"
                // rectangleeight="images/img_rectangle8_191x332.png"
              />
              <StreamCards
                className="bg-black_900_01 flex flex-col gap-4 items-center justify-start p-4 rounded-lg w-full"
                rectangleeight="images/img_rectangle8_1.png"
              />
            </List>
        </div>

        {/* Pre-footer CTA Button */}
        <Button
          className="common-pointer cursor-pointer font-bold mt-24 text-center text-white_A700 text-xl w-[200px]"
          onClick={() => navigate("/allstreams")}
          shape="RoundedBorder8"
          size="lg"
          variant="OutlineWhiteA700_1"
        >
          View all
        </Button>



    </>
  )
}

export default StreamPlays