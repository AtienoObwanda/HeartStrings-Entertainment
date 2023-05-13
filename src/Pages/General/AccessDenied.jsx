import React from 'react'
import { useNavigate } from "react-router-dom";
// import Footer from "Components/HowToEncouragePeopleToSignUpFooter/Footer";
// import Navbar from "Components/LandingPageNavbarhifi/Navbar";

import { Button, Img, Text } from "Components";
import SignupColumndummylogotwo from "Components/SignupColumndummylogotwo";

const AccessDenied = () => {
  const navigate = useNavigate();

  return (
    <>
    {/* <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto w-full"> */}
        {/* Navbar Section */}
        {/* <Navbar
          className="flex flex-row items-center justify-center md:px-5 w-full"
          buyTicketS="Buy ticket (s)"
          streamPlays="Stream plays"
          account="Account"
        /> */}

        {/* Main Page Section */}
        <div className="bg-black_900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[77px] items-center justify-start mx-auto pb-[77px] w-full">
        <SignupColumndummylogotwo className="flex flex-col items-center justify-start p-8 sm:px-5 w-full" />
       
        <div className="flex flex-col gap-4 items-center justify-center md:px-5 self-stretch w-auto md:w-full">
          <Text
            className="text-left text-white_A700 w-auto"
            as="h1"
            variant="h1"
          >
            Access denied
          </Text>
          <Text
            className="font-normal leading-[175.00%] not-italic text-center text-white_A700"
            as="h6"
            variant="h6"
          >
            <>
              We&#39;re sorry, but you don&#39;t have the necessary permissions
              to access this page. <br />
              Please log in or contact an administrator for help.
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
              src="images/img_iconsaxboldlock1.svg"
              className="h-56 w-56"
              alt="iconsaxboldlock"
            />
            <Text
              className="text-left text-white_A700 w-auto"
              as="h4"
              variant="h4"
            >
              3
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

       </div>

      
        
        {/* Footer Section*/}
        {/* <Footer className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center mt-24 md:px-5 w-full"
          copyrightheartsOne="Copyright Heartstrings Entertainment"
        /> */}

    </>
  )
}

export default AccessDenied