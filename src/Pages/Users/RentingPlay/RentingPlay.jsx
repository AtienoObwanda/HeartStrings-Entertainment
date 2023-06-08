import React from "react";

import { Button, Img, Text } from "UI_Components";
import Sidebar from "UI_Components/Sidebar";

const RentingPlay = () => {
  return (
    <>
      <div className="bg-black_900_01 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="bg-black_900 flex flex-col md:hidden justify-start md:px-5 w-[247px]" />
          <div className="flex flex-1 flex-col md:gap-10 gap-24 justify-start md:px-5 w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between p-7 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-center ml-5 self-stretch w-auto">
                <Text
                  className="text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  My streams
                </Text>
              </div>
              <div className="flex flex-row gap-[21px] items-center justify-start mr-5 self-stretch w-auto">
                <Img
                  src="images/img_share.svg"
                  className="h-6 w-6"
                  alt="share"
                />
                <div className="flex flex-col items-start justify-center self-stretch w-auto">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    Hi, Gloria
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-black_900_01 flex flex-col items-center justify-center md:ml-[0] ml-[169px] mr-[415px] p-[60px] md:px-10 sm:px-5 rounded-lg self-stretch shadow-bs w-auto md:w-full">
              <div className="flex flex-col gap-12 items-start justify-center self-stretch w-auto">
                <div className="flex flex-col gap-3.5 items-start justify-start self-stretch w-auto sm:w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-center self-stretch w-auto">
                    <Text
                      className="font-normal not-italic text-gray_300 text-left w-auto"
                      variant="body4"
                    >
                      How many days would you like to rent the play for?
                    </Text>
                    <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
                      <Button
                        className="cursor-pointer font-normal min-w-[67px] not-italic text-base text-center text-white_A700 w-auto"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="FillBlack900"
                      >
                        3 days
                      </Button>
                      <Button
                        className="cursor-pointer font-normal min-w-[67px] not-italic text-base text-center text-white_A700 w-auto"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="FillBlack900"
                      >
                        7 days
                      </Button>
                      <Button
                        className="cursor-pointer font-normal min-w-[76px] not-italic text-base text-center text-white_A700 w-auto"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="OutlineWhiteA700_2"
                      >
                        14 days
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-center self-stretch w-auto">
                    <Text
                      className="font-normal not-italic text-gray_300 text-left w-auto"
                      variant="body4"
                    >
                      Amount due{" "}
                    </Text>
                    <div className="flex flex-col items-center justify-center self-stretch w-auto">
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        KSH 2,000
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    Would you like to support the theatre with a tip?
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-4 items-center justify-center self-stretch w-auto sm:w-full">
                    <Button
                      className="cursor-pointer font-normal min-w-[63px] not-italic text-base text-center text-white_A700 w-auto"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillBlack900"
                    >
                      No tip
                    </Button>
                    <Button
                      className="cursor-pointer font-normal h-12 not-italic text-base text-center text-white_A700 w-[47px]"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillBlack900"
                    >
                      100
                    </Button>
                    <Button
                      className="cursor-pointer font-normal h-12 not-italic text-base text-center text-white_A700 w-[47px]"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillBlack900"
                    >
                      200
                    </Button>
                    <Button
                      className="cursor-pointer font-normal h-12 not-italic text-base text-center text-white_A700 w-[47px]"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillBlack900"
                    >
                      500
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[60px] not-italic text-base text-center text-white_A700 w-auto"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="OutlineWhiteA700_2"
                    >
                      1,000
                    </Button>
                    <Text
                      className="bg-gray_800 font-normal h-11 not-italic pl-4 sm:pr-5 pr-[29px] py-3 rounded-lg text-gray_300_87 text-left w-[145px]"
                      variant="body4"
                    >
                      Other Amount
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-center self-stretch w-auto">
                    <Text
                      className="not-italic text-gray_300 text-left w-auto"
                      variant="body5"
                    >
                      Total Amount{" "}
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                      <Text
                        className="text-left text-white_A700 w-auto"
                        as="h2"
                        variant="h2"
                      >
                        KES 3,000
                      </Text>
                      <div className="flex flex-col items-start justify-center self-stretch w-auto">
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-auto"
                          variant="body4"
                        >
                          (Tickets + tip)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[430px]"
                  shape="RoundedBorder8"
                  size="lg"
                  variant="FillRed900"
                >
                  Pay now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentingPlay;