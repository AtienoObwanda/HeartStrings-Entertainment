import React from 'react'
import { useNavigate } from "react-router-dom";
import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";

import { Button, Img, Text } from "Components";
import SignupColumnlogotwo from "Components/SignupColumn";


const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="bg-black_900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[77px] items-center justify-start mx-auto pb-[77px] w-full">

     {/* Main Page Section */}
     <div className="bg-black_900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[77px] items-center justify-start mx-auto pb-[30px] w-full  md:h-[1200px] sm:h-[900px]">
        <SignupColumnlogotwo className="flex flex-col items-center justify-start p-8 sm:px-5 w-full" />
        
        
        {/* Display on Large Screens  */}
        <div className="md:hidden flex flex-col gap-4 items-center justify-center md:px-5 self-stretch w-auto md:w-full">
        <Text
            className="text-left text-white_A700 w-auto"
            as="h1"
            variant="h1"
          >
            Page not found
          </Text>
          <Text
            className="font-normal leading-[175.00%] not-italic text-center text-white_A700"
            as="h6"
            variant="h6"
          >
            <>
              Whoopsie! It looks like the page you were looking for has gone
              missing. <br />
              We&#39;ll keep an eye out for it.
            </>
          </Text>

        <div className="flex justify-center">
          <div className="flex md:flex-col flex-row gap-[45px] items-center justify-start self-stretch w-auto md:w-full">
            <Text
              className="text-left text-white_A700 w-auto"
              as="h4"
              variant="h4"
            >
              4
            </Text>
            <Img
              src="images/img_unsplashpd4lo70ldbi.png"
              className="h-[346px]"
              alt="iconsaxboldlock"
            />

             {/* <Img
              src="images/img_unsplashpd4lo70ldbi.png"
              className="h-[346px] sm:h-auto object-cover w-[299px] md:w-full"
              alt="unsplashpd4loSeventy"
            /> */}

            <Text
              className="text-left text-white_A700 w-auto"
              as="h4"
              variant="h4"
            >
              4
            </Text>
          </div>
        </div>

          <Button
            className="cursor-pointer font-bold min-w-[293px] text-center text-white_A700 text-xl w-auto"
            shape="RoundedBorder8"
            size="lg"
            variant="FillRed900"
          >
            Go back Home
          </Button>
        </div> 


        {/* Display Medium Screens  */}
        <div className="md:mt-[300px] sm:mt-[200px] hidden md:flex flex-col gap-4 items-center justify-center md:px-5 self-stretch w-auto md:w-full">
        <Text
            className="text-left text-white_A700 w-auto"
            as="h1"
            variant="h1"
          >
            Page not found
          </Text>
          <Text
            className="font-normal leading-[175.00%] not-italic text-center text-white_A700"
            as="h6"
            variant="h6"
          >
            <>
              Whoopsie! It looks like the page you were looking for has gone
              missing. <br />
              We&#39;ll keep an eye out for it.
            </>
          </Text>

        <div className="hidden md:flex gap-6  justify-center mt-10 mb-10">
          <Text
              className="text-left text-white_A700 w-auto"
              as="h1"
              variant="h1"
            >
              4
            </Text>
            <Img
              src="images/img_unsplashpd4lo70ldbi.png"
              className="h-[70px] w-[70px] mt-[-15px]"
              alt="iconsaxboldlock"
            />            

            <Text
              className="text-left text-white_A700 w-auto"
              as="h4"
              variant="h4"
            >
              4
            </Text>
        </div>

          <Button
            className="mt-15 cursor-pointer font-bold min-w-[293px] text-center text-white_A700 text-xl w-auto"
            shape="RoundedBorder8"
            size="lg"
            variant="FillRed900"
          >
            Go back Home
          </Button>
        </div> 

       </div>

      </div>
    </>
  )
}

export default NotFound