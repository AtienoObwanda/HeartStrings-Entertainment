import React from "react";

import { Button, Img, Input, Line, Text } from "Components";
import SignupColumnlogotwo from "Components/SignupColumn";
import SignupColumnsearchone from "Components/SignupColumnsearchone";

const SignUp = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto pb-[85px] w-full">
        <div className="flex flex-col justify-start w-full">
          <SignupColumnlogotwo className="flex flex-col items-center justify-start p-8 sm:px-5 w-full" />
          <Text
            className="font-bold md:ml-[0] ml-[682px] mt-[29px] text-left text-white_A700 w-auto"
            as="h5"
            variant="h5"
          >
            Signup
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between ml-auto mt-[49px] md:px-5 w-[45%] md:w-full">
            <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                <div className="flex flex-col gap-12 items-center justify-center self-stretch w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Name
                      </Text>
                      <Text
                        className="bg-gray_800 border border-solid border-white_A700 font-normal h-12 not-italic pl-3 sm:pr-5 pr-[35px] py-3.5 rounded text-left text-white_A700 w-[430px]"
                        variant="body4"
                      >
                        |
                      </Text>
                    </div>
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
                        Phone number
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
                        name="rectangleNine_Two"
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
                        Confirm password
                      </Text>
                      <Input
                        wrapClassName="flex h-12 w-full"
                        className="p-0 w-full"
                        name="rectangleNine_Three"
                        placeholder=""
                        shape="RoundedBorder4"
                        variant="FillGray800"
                      ></Input>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[430px]"
                    shape="RoundedBorder8"
                    size="lg"
                    variant="FillRed900"
                  >
                    Signup
                  </Button>
                </div>
                <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto sm:w-full">
                  <Text
                    className="font-normal leading-[175.00%] not-italic text-left text-white_A700"
                    variant="body4"
                  ></Text>
                  <Line className="bg-gray_900_63 h-px w-full" />
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto sm:w-full">
                <a
                  href="javascript:"
                  className="font-normal not-italic text-base text-left text-white_A700 w-auto"
                >
                  <Text className="">Already have an account?</Text>
                </a>
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Button
                    className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[430px]"
                    shape="RoundedBorder8"
                    size="lg"
                    variant="OutlineWhiteA700_1"
                  >
                    Login
                  </Button>
                  <SignupColumnsearchone
                    className="flex flex-col items-center justify-start w-full"
                    loginwithgoogleOne="Login with google"
                  />
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp