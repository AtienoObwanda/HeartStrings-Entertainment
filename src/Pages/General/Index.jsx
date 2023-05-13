import React from "react";

import { Button, Input, Text } from "components";
import HowToEncouragePeopleToSignUpFooter from "components/HowToEncouragePeopleToSignUpFooter";
import LandingPageNavbarhifi from "components/LandingPageNavbarhifi";

const ContactUsPage = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-24 items-center justify-start mx-auto w-full">
        <LandingPageNavbarhifi
          className="flex flex-row items-center justify-center md:px-5 w-full"
          buyTicketS="Buy ticket (s)"
          streamPlays="Stream plays"
          account="Account"
        />

        
        <div className="flex flex-col gap-12 items-center justify-start md:px-5 self-stretch w-auto sm:w-full">
          <div className="flex flex-col gap-6 items-center justify-center self-stretch w-auto sm:w-full">
            <Text
              className="text-left text-white_A700 w-auto"
              as="h2"
              variant="h2"
            >
              Contact Heartstrings Entertainment
            </Text>
            <Text
              className="font-normal not-italic text-center text-gray_300 w-auto"
              as="h5"
              variant="h5"
            >
              Our team will to get back to you in a jiffy.
            </Text>
          </div>
          <div className="flex flex-col gap-12 items-center justify-center self-stretch w-auto sm:w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start self-stretch w-auto sm:w-full">
              <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-auto"
                  variant="body4"
                >
                  Full name
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
                  Message
                </Text>
                <div className="bg-gray_800 flex flex-col items-start justify-start p-3 rounded w-full">
                  <Text
                    className="font-normal mb-[89px] mt-[5px] not-italic text-gray_800 text-left w-auto"
                    variant="body4"
                  >
                    Enter your message here
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[430px]"
              shape="RoundedBorder8"
              size="lg"
              variant="FillRed90001"
            >
              Send message
            </Button>
          </div>
        </div>
        <HowToEncouragePeopleToSignUpFooter
          className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center md:px-5 w-full"
          copyrightheartsOne="Copyright Heartstrings Entertainment"
        />
      </div>
    </>
  );
};

export default ContactUsPage;