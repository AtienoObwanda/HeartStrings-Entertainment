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
              <div className="flex flex-col items-center justify-center ml-5 self-stretch w-auto mt-[2em]">
                <Text
                  className="text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  My Online Plays
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
              {/* Start */}

              <div className="flex flex-col gap-12 items-start justify-center w-auto">
            <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-[9px] items-start justify-center w-auto sm:w-full">
                <Text className="text-base text-gray_300 w-auto">
                  How many days would you like to rent the play for?
                </Text>
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-auto sm:w-full">
                  <Button className="bg-black_900 cursor-pointer min-w-[149px] py-3.5 rounded-lg text-base text-center text-white_A700 hover:border border-white rounded-md p-2">
                    3 days (Kes 2000)
                  </Button>
                  <Button className="bg-black-900 cursor-pointer min-w-[149px] py-3.5 rounded-lg text-base text-center text-white_A700 hover:border border-white rounded-md p-2">
                    7 days (Kes 3000)
                  </Button>
                  <Button className="bg-black-900 cursor-pointer min-w-[158px] py-3.5 rounded-lg text-base text-center text-white_A700 hover:border border-white rounded-md p-2">
                    14 days (Kes 4000)
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[9px] mt-[3em] mb-[2em] items-start justify-center w-auto">
                <Text className="text-base text-gray_300 w-auto">Amount due </Text>
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text className="font-bold text-2xl md:text-[22px] text-white_A700 sm:text-xl w-auto">KES 2,000</Text>
                </div>
              </div>
              <Text className="text-base text-white_A700 w-auto">
                <span className="text-white_A700 font-roboto text-left font-normal">Would you like to support Heartstrings with a tip?</span>  
              </Text>
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-auto sm:w-full">
                <Button className="bg-black_900 cursor-pointer min-w-[63px] py-3.5 rounded-lg text-base text-center text-white_A700 hover:border border-white rounded-md p-2">
                  No tip
                </Button>
                <Button className="bg-black-900 cursor-pointer h-12 py-3.5 rounded-lg text-base text-center text-white_A700 w-[47px] hover:border border-white rounded-md p-2">
                  100
                </Button>
                <Button className="bg-black-900 cursor-pointer h-12 py-3.5 rounded-lg text-base text-center text-white_A700 w-[47px] hover:border border-white rounded-md p-2">
                  200
                </Button>
                <Button className="bg-black-900 cursor-pointer h-12 py-3.5 rounded-lg text-base text-center text-white_A700 w-[47px] hover:border border-white rounded-md p-2">
                  500
                </Button>
                <Button className="bg-black-900 cursor-pointer min-w-[60px] py-3.5 rounded-lg text-base text-center text-white_A700 hover:border border-white rounded-md p-2">
                  1,000
                </Button>
                <input className="bg-gray_800 justify-center pl-4 sm:pr-5 pr-[29px] py-3 rounded-lg text-base text-gray_300_87 w-auto h-12" placeholder="Other Amount" />
                  {/* Other Amount */}
                {/* </Text> */}
              </div>
              <div className="flex flex-col gap-[9px] mt-[3em] items-start justify-center w-auto">
                <Text className="text-gray_300 text-sm w-auto">Total amount </Text>
                <div className="flex flex-row gap-2 items-center justify-center w-auto">
                  <Text className="font-bold text-4xl sm:text-[32px] md:text-[34px] text-white_A700 w-auto">
                    KES 3,000
                  </Text>
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text className="text-base text-gray-300 w-auto">(Rental + tip)</Text>
                  </div>
                </div>
              </div>
            </div>
            <Button className="bg-red_900 cursor-pointer font-bold py-[15px] rounded-lg text-center text-white_A700 text-xl w-[430px]">
              Pay now
            </Button>
          </div>

          {/* end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentingPlay;