import React from 'react'
import { useNavigate } from "react-router-dom";

import { Button, Input, Line, Text } from "Components";
import SignupColumnlogotwo from "Components/SignupColumn";



const ResetComplete = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-24 items-center justify-start mx-auto pb-[850px] w-full">
        <SignupColumnlogotwo className="flex flex-col items-center justify-start p-8 sm:px-5 w-full" />
       
        <div className="bg-black_900_01 border border-gray_300 border-solid flex flex-col items-center justify-center px-40 md:px-5 py-12 rounded-lg self-stretch w-3/4 md:w-90% md:mt-[150px] sm:w-full  mx-auto">
      {/* <div className="bg-black_900_01 border border-gray_300 border-solid flex flex-col items-center justify-center px-40 md:px-5 py-12 rounded-lg self-stretch w-3/4 md:w-full mx-auto md:mr-4 md:ml-4"> */}

        <div className="flex flex-col items-center justify-start self-stretch w-auto sm:w-full">
          <div className="flex flex-col gap-4 items-center justify-center self-stretch w-auto sm:w-full">
            <Text
              className="text-gray_300 text-left w-auto"
              as="h3"
              variant="h3"
            >
                Password Reset completed!
            </Text>
            {/* <div className="flex flex-col items-center justify-start self-stretch w-auto sm:w-full">
              <Text
                className="font-normal leading-[175.00%] max-w-[458px] md:max-w-full not-italic text-center text-gray_300_a2"
                as="h6"
                variant="h6"
              >
                <>
                  Hooray! You&#39;re officially one of us now. Let&#39;s
                  explore what we have in store!
                </>
              </Text>
            </div> */}
            <Button
              className="mt-5 cursor-pointer font-bold min-w-[166px] text-center text-gray_300 text-xl w-auto"
              shape="RoundedBorder8"
              size="lg"
              variant="FillRed900"
            >
                Return to login
            </Button>
          </div>
        </div>
      </div>
        
      </div>
    </>
  );
};

export default ResetComplete