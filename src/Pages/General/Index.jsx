import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import HowToEncouragePeopleToSignUpColumnprice from "components/HowToEncouragePeopleToSignUpColumnprice";
import HowToEncouragePeopleToSignUpFooter from "components/HowToEncouragePeopleToSignUpFooter";
import HowToEncouragePeopleToSignUpStreamcards from "components/HowToEncouragePeopleToSignUpStreamcards";
import HowToEncouragePeopleToSignUpWhitenoicon from "components/HowToEncouragePeopleToSignUpWhitenoicon";
import LandingPageNavbarhifi from "components/LandingPageNavbarhifi";

const HomePagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <LandingPageNavbarhifi
          className="flex flex-row items-center justify-center md:px-5 w-full"
          buyTicketS="Buy ticket (s)"
          streamPlays="Stream plays"
          account="Account"
        />

        <div className="h-[760px] md:px-5 relative w-full">
          <Img
            src="images/img_c2p60a0o1.png"
            className="h-[760px] m-auto object-cover w-full"
            alt="c2p60a0oOne"
          />
          <Text
            className="absolute bottom-[13%] inset-x-[0] mx-auto text-left text-white_A700 w-max"
            as="h3"
            variant="h3"
          >
            Add tagline here
          </Text>
        </div>

        <div className="bg-gray_900 h-[13px] w-full"></div>


        <div className="flex flex-col gap-12 items-center justify-center max-w-[1140px] mt-24 mx-auto md:px-5 self-stretch w-full">
          <div className="flex flex-col gap-1 items-center justify-center self-stretch w-auto md:w-full">
            <Text
              className="text-left text-white_A700 w-auto"
              as="h1"
              variant="h1"
            >
              Plays at the theatre
            </Text>
            <Text
              className="font-normal not-italic text-gray_300 text-left w-auto"
              as="h5"
              variant="h5"
            >
              Our lineup is better than before!
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-black_900_01 flex md:flex-col flex-row md:gap-5 items-start justify-start p-6 sm:px-5 rounded-lg w-full">
                <div className="flex sm:flex-1 flex-col gap-6 items-start justify-center self-stretch w-auto sm:w-full">
                  <HowToEncouragePeopleToSignUpColumnprice
                    className="bg-black_900 border-2 border-red_900 border-solid flex flex-col gap-2.5 items-center justify-center px-5 py-2.5 rounded-lg self-stretch w-auto sm:w-full"
                    price="We’ve got a special offer for you: BOGOF show @ 3pm on Sat 1st . KES 1,000"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start self-stretch w-auto sm:w-full">
                    <Text
                      className="text-left text-white_A700 w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Bridegroom for sale.
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="font-normal leading-[175.00%] max-w-[532px] md:max-w-full not-italic text-gray_300 text-left"
                        as="h6"
                        variant="h6"
                      >
                        The synopsis goes here and here and here, once it starts
                        overflowing it goes here ,the synopsis goes here and
                        here and here, once it starts overflowing it goes here.
                      </Text>
                      <div className="flex flex-col gap-2 items-start justify-center self-stretch w-auto">
                        <div className="flex flex-row gap-2 items-start justify-start self-stretch w-auto">
                          <Img
                            src="images/img_materialsymbol.svg"
                            className="h-6 w-6"
                            alt="materialsymbol_One"
                          />
                          <div className="flex flex-col gap-2.5 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-gray_300 text-left w-auto"
                              variant="body4"
                            >
                              Thur 30th & Fri 31st @ 6:30pm{" "}
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_300 text-left w-auto"
                              variant="body4"
                            >
                              Sat 1st, Sun 2nd@ 3pm, 6:30pm & 8:30pm
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2 items-start justify-start self-stretch w-auto">
                          <Img
                            src="images/img_materialsymbolslocationon.svg"
                            className="h-6 w-6"
                            alt="materialsymbols"
                          />
                          <div className="flex flex-col items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-gray_300 text-left w-auto"
                              variant="body4"
                            ></Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-bold min-w-[149px] text-center text-white_A700 text-xl w-auto"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillRed900"
                    >
                      Get ticket (s)
                    </Button>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col h-[560px] sm:h-auto items-center justify-start w-[560px] sm:w-full">
                  <Img
                    src="images/img_rectangle4.png"
                    className="h-[560px] md:h-auto object-cover rounded-lg w-[560px] sm:w-full"
                    alt="rectangleFour"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="bg-gray_900 h-[13px] mt-24 w-full"></div>


        <div className="flex flex-col gap-12 items-center justify-center max-w-[1140px] mt-[89px] mx-auto md:px-5 self-stretch w-full">
          <div className="flex flex-col gap-1 items-center justify-center self-stretch w-auto sm:w-full">
            <Text
              className="text-center text-white_A700 w-auto"
              as="h1"
              variant="h1"
            >
              Stream plays
            </Text>
            <Text
              className="font-normal not-italic text-gray_300 text-left w-auto"
              as="h5"
              variant="h5"
            >
              The world of theatre from the comfort of your home.
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start self-stretch w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="h-[559px] relative w-full">
              <HowToEncouragePeopleToSignUpWhitenoicon
                className="bg-white_A700 border border-solid border-white_A700 flex flex-col gap-4 h-full items-center justify-center ml-auto mr-[92px] mt-[148px] px-5 py-2.5 rounded-lg self-stretch w-auto sm:w-full"
                streamplays="Watch trailer"
              />
              <HowToEncouragePeopleToSignUpStreamcards
                className="absolute bg-black_900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-4 rounded-lg w-full"
                rectangleeight="images/img_rectangle8.png"
                bridegroomforsaOne="Bridegroom for sale."
                description="The synopsis goes here and here and here, once it starts overflowing it goes here ,the synopsis goes here and here and here, once it starts overflowing it goes here.."
                rentPlay="Rent play"
              />
            </div>
            <HowToEncouragePeopleToSignUpStreamcards
              className="bg-black_900_01 flex flex-col items-center justify-start p-4 rounded-lg w-full"
              rectangleeight="images/img_rectangle8_191x332.png"
              bridegroomforsaOne="Bridegroom for sale."
              description="The synopsis goes here and here and here, once it starts overflowing it goes here ,the synopsis goes here and here and here, once it starts overflowing it goes here.."
              rentPlay="Rent play"
            />
            <HowToEncouragePeopleToSignUpStreamcards
              className="bg-black_900_01 flex flex-col items-center justify-start p-4 rounded-lg w-full"
              rectangleeight="images/img_rectangle8_1.png"
              bridegroomforsaOne="Bridegroom for sale."
              description="The synopsis goes here and here and here, once it starts overflowing it goes here ,the synopsis goes here and here and here, once it starts overflowing it goes here.."
              rentPlay="Rent play"
            />
          </List>
        </div>
        <Button
          className="common-pointer cursor-pointer font-bold mt-24 text-center text-white_A700 text-xl w-[200px]"
          onClick={() => navigate("/allstreams")}
          shape="RoundedBorder8"
          size="lg"
          variant="OutlineWhiteA700_1"
        >
          View all
        </Button>





        
        <HowToEncouragePeopleToSignUpFooter
          className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center mt-24 md:px-5 w-full"
          copyrightheartsOne="Copyright Heartstrings Entertainment"
        />
      </div>
    </>
  );
};

export default HomePagePage;