import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "Components";
import SignupColumnlogotwo from "Components/SignupColumn";
import SignupColumnsearchone from "Components/SignupColumnsearchone";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto pb-[242px] w-full">
        <SignupColumnlogotwo className="flex flex-col items-center justify-start p-8 sm:px-5 w-full" />
        <a
          href="javascript:"
          className="font-bold mt-[29px] text-2xl md:text-[22px] text-left text-white_A700 sm:text-xl w-auto"
        >
          <Text className="">Login</Text>
        </a>
        <div className="flex flex-col gap-8 items-start justify-start mt-[49px] md:px-5 self-stretch w-auto sm:w-full">
          <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
            <div className="flex flex-col gap-12 items-center justify-center self-stretch w-auto sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    Email address
                  </Text>
                  <Input
                    wrapClassName="flex h-12 w-full"
                    className="p-0 w-full"
                    name="rectangleNine"
                    placeholder=""
                    shape="RoundedBorder4"
                    variant="FillGray800"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    Password
                  </Text>
                  <Input
                    wrapClassName="flex h-12 w-full"
                    className="p-0 w-full"
                    name="rectangleNine_One"
                    placeholder=""
                    shape="RoundedBorder4"
                    variant="FillGray800"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                <Button
                  className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[430px]"
                  shape="RoundedBorder8"
                  size="lg"
                  variant="FillRed900"
                >
                  Login
                </Button>
                <SignupColumnsearchone
                  className="flex flex-col items-center justify-start w-full"
                  loginwithgoogleOne="Login with google"
                />
              </div>
            </div>
            <div
              className="common-pointer flex flex-col gap-4 items-center justify-start self-stretch w-auto sm:w-full"
              onClick={() => navigate("/forgotpassword")}
            >
              <a
                href="javascript:"
                className="font-normal not-italic text-base text-left text-white_A700 underline w-auto"
              >
                <Text className="">Forgot your password?</Text>
              </a>
              <Line className="bg-gray_900_63 h-px w-full" />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto sm:w-full">
            <a
              href="javascript:"
              className="font-normal not-italic text-base text-left text-white_A700 w-auto"
            >
              <Text className="">Don’t have an account?</Text>
            </a>
            <Button
              className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[430px]"
              shape="RoundedBorder8"
              size="lg"
              variant="OutlineWhiteA700_1"
            >
              Sign up for a new account
            </Button>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default Login