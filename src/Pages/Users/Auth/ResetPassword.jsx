import React from 'react'
import { useNavigate } from "react-router-dom";

import { Button, Input, Line, Text } from "UI_Components";
import SignupColumnlogotwo from "UI_Components/SignupColumn";

const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black_900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-6 items-center justify-start mx-auto pb-[680px] w-full">
        <SignupColumnlogotwo className="flex flex-col items-center justify-start p-8 sm:px-5 w-full" />
        <div className="flex flex-col gap-12 items-center justify-start md:px-5 self-stretch w-auto sm:w-full">
          <a
            className="font-bold text-2xl md:text-[22px] text-left text-white_A700 sm:text-xl w-auto"
          >
            <Text 
            className="">Reset password</Text>
          </a>
          <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
            <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto sm:w-full">
            <a
            href="javascript:"
            className="font-normal md:text-[15px] text-left text-white_A700 sm:text-xl w-auto"
          >
            <Text 
            className="">Enter your email address to reset password.</Text>
          </a>
          
              {/* <Line className="bg-gray_900_63 h-px w-full" /> */}
            </div>
            <div className="flex flex-col gap-8 items-center justify-center self-stretch w-auto sm:w-full">
              <div className="flex flex-col gap-6 items-center justify-center self-stretch w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                 
                <div className="flex flex-col gap-2 items-start justify-start self-stretch w-[430px] sm:w-full mt-2 mx-auto">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      New password
                    </Text>
                    <Input
                      wrapClassName="flex h-12 w-full"
                      className="p-0 pl-4 w-full"
                      name="rectangleNine"
                      placeholder=""
                      shape="RoundedBorder4"
                      variant="FillGray800"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start self-stretch w-[430px] sm:w-full mt-2 mx-auto">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Confirm password
                    </Text>
                    <Input
                      wrapClassName="flex h-12 w-full"
                      className="p-0 pl-4 w-full"
                      name="rectangleNine_One"
                      placeholder=""
                      shape="RoundedBorder4"
                      variant="FillGray800"
                    ></Input>
                  </div>

                </div>
                <Button
                      className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[430px] sm:w-full mt-2"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillRed900"
                      type="submit"
                    >
                      Reset Password
                    </Button>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start self-stretch w-auto"
                onClick={() => navigate("/login")}
              >
                <Text
                  className="font-normal not-italic text-left text-white_A700 underline w-auto"
                  variant="body4"
                >
                  Remembered my password
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default ResetPassword