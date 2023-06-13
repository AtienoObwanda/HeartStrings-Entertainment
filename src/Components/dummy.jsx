import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";
import LandingPageColumnOne from "components/LandingPageColumnOne";
import LandingPageRowyoutubeone from "components/LandingPageRowyoutubeone";
import LandingPageStreamcards from "components/LandingPageStreamcards";

const LandingpagePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-24 items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="h-[760px] md:px-5 relative w-full">
            <Img
              className="h-[760px] m-auto object-cover w-full"
              src="images/img_c2p60a0o1.png"
              alt="c2p60a0oOne"
            />
            <Text
              className="absolute bottom-[13%] inset-x-[0] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-max"
              size="txtRobotoRomanBold32WhiteA700"
            >
              Add tagline here
            </Text>
          </div>
          <div className="bg-gray-900 h-[13px] w-full"></div>
        </div>

        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[55px] w-full">
          <div className="flex flex-col gap-12 items-center justify-center w-auto md:w-full">
            <div className="flex flex-col gap-1 items-center justify-center w-auto md:w-full">
              <Text
                className="md:text-5xl text-7xl text-white-A700 w-auto"
                size="txtRobotoRomanBold72"
              >
                Plays at the theatre
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-gray-300 sm:text-xl w-auto"
                size="txtRobotoRomanRegular24"
              >
                Our lineup is better than before!
              </Text>
            </div>

            <LandingPageColumnOne
              className="bg-cover bg-no-repeat flex flex-col h-[608px] items-center justify-start sm:pl-5 pl-6 py-6 w-full"
              style={{ backgroundImage: "url('images/img_component32.svg')" }}
              alliancefrancaiOne={
                <Text className="text-base text-gray-300 w-auto">
                  <span className="text-gray-300 font-roboto text-left font-normal">
                    Alliance Francaise , Wangari Mathai.{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-light_blue-500 font-roboto text-left font-bold underline"
                  >
                    View map
                  </a>
                </Text>
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="bg-gray-900 h-[13px] w-full"></div>
          <div className="flex flex-col gap-12 items-center justify-center max-w-[1140px] mt-[89px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-1 items-center justify-center w-auto sm:w-full">
              <Text
                className="md:text-5xl text-7xl text-center text-white-A700 w-auto"
                size="txtRobotoRomanBold72"
              >
                Online plays
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-gray-300 sm:text-xl w-auto"
                size="txtRobotoRomanRegular24"
              >
                The world of theatre from the comfort of your home.
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="relative w-full">
                <Button className="absolute bg-white-A700 border border-solid border-white-A700 cursor-pointer font-bold min-w-[155px] py-[15px] right-1/4 rounded-lg text-black-900 text-center text-xl top-[26%]">
                  Watch trailer
                </Button>
                <LandingPageStreamcards className="bg-black-900_01 flex flex-col gap-4 items-center justify-start m-auto p-4 relative rounded-lg w-full" />
              </div>
              <LandingPageStreamcards
                className="bg-black-900_01 flex flex-col gap-4 items-center justify-start p-4 rounded-lg w-full"
                rectangleeight="images/img_rectangle8_191x332.png"
              />
              <LandingPageStreamcards
                className="bg-black-900_01 flex flex-col gap-4 items-center justify-start p-4 rounded-lg w-full"
                rectangleeight="images/img_rectangle8_1.png"
              />
            </List>
          </div>
          <Button className="border border-solid border-white-A700 cursor-pointer font-bold mt-24 py-[15px] rounded-lg text-center text-white-A700 text-xl w-[200px]">
            View all
          </Button>
          
          <footer className="border-gray-800 border-solid border-t-[13px] flex items-center justify-center mt-24 md:px-5 w-full">
            <div className="flex flex-col items-center justify-center p-6 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-6 items-start justify-center w-auto md:w-full">
                <div className="flex flex-col gap-8 items-start justify-start max-w-[897px] w-full">
                  <div className="flex md:flex-col flex-row gap-2 items-start justify-start w-auto md:w-full">
                    <Button className="bg-transparent cursor-pointer min-w-[88px] py-0.5 text-center text-white-A700 text-xl">
                      Home
                    </Button>
                    <Button className="bg-transparent cursor-pointer min-w-[115px] py-0.5 text-center text-white-A700 text-xl">
                      About us
                    </Button>
                    <Button className="bg-transparent cursor-pointer min-w-[146px] py-0.5 text-center text-white-A700 text-xl">
                      Contact us
                    </Button>
                    <Button className="bg-transparent cursor-pointer min-w-[150px] py-0.5 text-center text-white-A700 text-xl">
                      Terms of use
                    </Button>
                    <div className="flex flex-col items-end justify-end">
                      <a
                        href="javascript:"
                        className="mt-[5px] text-white-A700 text-xl"
                      >
                        <Text size="txtRobotoRomanRegular20WhiteA700">
                          Privacy policy
                        </Text>
                      </a>
                    </div>
                  </div>
                  <Img
                    className="h-14 w-[135px]"
                    src="images/img_dummylogo02.svg"
                    alt="dummylogoTwo_One"
                  />
                </div>
                <div className="flex flex-col gap-12 items-end justify-start w-auto">
                  <LandingPageRowyoutubeone className="flex flex-row gap-2 items-start justify-start w-40" />
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-base text-right text-white-A700 w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Call us: 070000000
                    </Text>
                    <Text
                      className="text-base text-right text-white-A700 w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Copyright Heartstrings Entertainment
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LandingpagePage;