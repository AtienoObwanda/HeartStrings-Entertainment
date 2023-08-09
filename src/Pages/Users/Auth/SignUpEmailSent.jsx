import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Line, Text } from "UI_Components";
import SignupColumnlogotwo from "UI_Components/SignupColumn";


const SignUpEmailSent = () => {
    const navigate = useNavigate();

  return (
    <div className="bg-black_900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-6 items-center justify-start mx-auto pb-[850px] w-full md:pr-4 md:pl-4 md:pt-10 sm:pr-8 sm:pl-8">
    <SignupColumnlogotwo className="flex flex-col mt-8 items-center justify-start p-8 sm:px-5 w-full" />
    <div className="h-40"></div>
    <div className="bg-black_900_01 border border-gray_300 border-solid flex flex-col items-center justify-center px-40 md:px-5 py-12 rounded-lg self-stretch w-1/2 md:w-90% md:mt-[130px] sm:w-full  mx-auto">

      <div className="flex flex-col items-center justify-start self-stretch w-auto sm:w-full">
        <div className="flex flex-col gap-4 items-center justify-center self-stretch w-auto sm:w-full">
          <Text
            className="text-gray_300 text-left w-auto"
            as="h3"
            variant="h3"
          >
            {/* Sign up successful! */}
          </Text>
          <div className="flex flex-col items-center justify-start self-stretch w-auto sm:w-full">
            <Text
              className="font-normal leading-[175.00%] max-w-[458px] md:max-w-full not-italic text-center text-gray_300_a2"
              as="h6"
              variant="h6"
            >
              <>
              Account Created Successfully. An activation email has been sent to the registered email.
              </>
            </Text>
          </div>

        </div>
      </div>
    </div>
  
  
  </div>
  )
}

export default SignUpEmailSent