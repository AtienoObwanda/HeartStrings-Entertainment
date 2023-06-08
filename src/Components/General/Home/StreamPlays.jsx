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
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start self-stretch w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="h-[559px] relative w-full">
              <StreamCards
                className="absolute bg-black_900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-4 rounded-lg w-full"
                rectangleeight="images/img_rectangle8.png"
                bridegroomforsaOne="Bridegroom for sale."
                description="The synopsis goes here and here and here, once it starts overflowing it goes here ,the synopsis goes here and here and here, once it starts overflowing it goes here.."
                rentPlay="Rent play"
              />
            </div>
            <StreamCards
              className="bg-black_900_01 flex flex-col items-center justify-start p-4 rounded-lg w-full"
              rectangleeight="images/img_rectangle8_191x332.png"
              bridegroomforsaOne="Bridegroom for sale."
              description="vvv The synopsis goes here and here and here, once it starts overflowing it goes here ,the synopsis goes here and here and here, once it starts overflowing it goes here.."
              rentPlay="Rent play"
            />
            <StreamCards
              className="bg-black_900_01 flex flex-col items-center justify-start p-4 rounded-lg w-full"
              rectangleeight="images/img_rectangle8_1.png"
              bridegroomforsaOne="Bridegroom for sale."
              description="The synopsis goes here and here and here, once it starts overflowing it goes here ,the synopsis goes here and here and here, once it starts overflowing it goes here.."
              rentPlay="Rent play"
              
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