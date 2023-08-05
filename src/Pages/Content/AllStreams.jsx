import React from "react";

import { Text } from "UI_Components";
import Footer from "Layout/Footer/Footer";
import StreamCards from "UI_Components/StreamCards/index";
// import WhitenIcon from "Components/WhiteIcon";
import Navbar from "Layout/Navbar/Navbar";

const AllStreams = () => {
  return (
    <>
    <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto w-full">
      {/* Navbar */}
      <Navbar
        className="flex flex-row items-center justify-center md:px-5 w-full"
        buyTicketS="Buy ticket (s)"
        streamPlays="Stream plays"
        account="Account"
      />




      {/* Streams */}
      <div className="flex flex-col gap-6 items-start justify-start max-w-[1140px] mt-24 mx-auto md:px-5 self-stretch w-full">
        <Text
          className="text-left text-white_A700 w-auto"
          as="h2"
          variant="h2"
        >
          Streamss
        </Text>
        <div className="flex flex-col items-center justify-center self-stretch w-auto md:w-full">
          <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
            <div className="h-[559px] relative w-full">
              
              <StreamCards
                className="absolute bg-black_900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-4 rounded-lg w-full"
                rectangleeight="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927711/HeartStrings/SVG/img_rectangle8_cb92hq.png"
                bridegroomforsaOne="Bridegroom for sale."
                description="The synopsis goes here and here and here, once it starts overflowing it goes here ,the synopsis goes here and here and here, once it starts overflowing it goes here.."
                rentPlay="Rent play"
              />
            </div>
            <StreamCards
              className="bg-black_900_01 flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full"
              rectangleeight="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927767/HeartStrings/SVG/img_rectangle8_570x1140_ot5kmw.png"
              bridegroomforsaOne="Bridegroom for sale."
              description="The synopsis goes here and here and here, once it starts overflowing it goes here ,the synopsis goes here and here and here, once it starts overflowing it goes here.."
              rentPlay="Rent play"
            />
            <StreamCards
              className="bg-black_900_01 flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full"
              rectangleeight="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927725/HeartStrings/SVG/img_rectangle8_1_cblvcv.png"
              bridegroomforsaOne="Bridegroom for sale."
              description="The synopsis goes here and here and here, once it starts overflowing it goes here ,the synopsis goes here and here and here, once it starts overflowing it goes here.."
              rentPlay="Rent play"
            />
            <div className="h-[559px] relative w-full">
             
              <StreamCards
                className="absolute bg-black_900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-4 rounded-lg w-full"
                rectangleeight="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927731/HeartStrings/SVG/img_rectangle8_300x557_xlnnpm.png"
                bridegroomforsaOne="Bridegroom for sale."
                description="The synopsis goes here and here and here, once it starts overflowing it goes here ,the synopsis goes here and here and here, once it starts overflowing it goes here.."
                rentPlay="Rent play"
              />
            </div>
            <StreamCards
              className="bg-black_900_01 flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full"
              rectangleeight="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927736/HeartStrings/SVG/img_rectangle8_191x332_ykeufx.png"
              bridegroomforsaOne="Bridegroom for sale."
              description="The synopsis goes here and here and here, once it starts overflowing it goes here ,the synopsis goes here and here and here, once it starts overflowing it goes here.."
              rentPlay="Rent play"
            />
            <StreamCards
              className="bg-black_900_01 flex flex-1 flex-col items-center justify-start p-4 rounded-lg w-full"
              rectangleeight="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927725/HeartStrings/SVG/img_rectangle8_1_cblvcv.png"
              bridegroomforsaOne="Bridegroom for sale."
              description="The synopsis goes here and here and here, once it starts overflowing it goes here ,the synopsis goes here and here and here, once it starts overflowing it goes here.."
              rentPlay="Rent play"
            />
          </div>
        </div>
      </div>




      {/* Footer */}
      <Footer
        className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center mt-[82px] md:px-5 w-full"
        copyrightheartsOne="Copyright Heartstrings Entertainment"
      />
    </div>
  </>

  );
};

export default AllStreams