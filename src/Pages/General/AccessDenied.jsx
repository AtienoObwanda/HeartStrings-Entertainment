import React from 'react'
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "UI_Components";
import SignupColumnlogotwo from "UI_Components/SignupColumn";

const AccessDenied = () => {
  const navigate = useNavigate();

  return (
    <>
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


        {/* Display Medium Screens  */}
        <div className="md:mt-[300px] sm:mt-[200px] hidden md:flex flex-col gap-4 items-center justify-center md:px-5 self-stretch w-auto md:w-full">
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

        <div className="hidden md:flex gap-6  justify-center">
          <Text
              className="text-left text-white_A700 w-auto"
              as="h1"
              variant="h1"
            >
              4
            </Text>
            <Img
              src="images/img_iconsaxboldlock1.svg"
              className="h-10 w-10"
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

    </>
  )
}

export default AccessDenied