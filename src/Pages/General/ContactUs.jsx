import React from 'react'
import { useNavigate } from "react-router-dom";

import { Button, Input, Text } from "Components";
import Footer from "Components/HowToEncouragePeopleToSignUpFooter/Footer";
import Navbar from "Components/LandingPageNavbarhifi/Navbar";




const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        {/* Navbar Section */}
        <Navbar
          className="flex flex-row items-center justify-center md:px-5 w-full"
          buyTicketS="Buy ticket (s)"
          streamPlays="Stream plays"
          account="Account"
        />
        {/* Main Page Section */}
         
        <div className="flex flex-col gap-12 items-center justify-start mt-20 md:px-5 self-stretch w-auto sm:w-full">
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

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <div className="mt-10 flex flex-col gap-12 items-center justify-center self-stretch w-auto sm:w-full">
            {/* Contact Form */}
            <div className="flex flex-col gap-3.5 items-start justify-start self-stretch w-auto w-[430px]">
              <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                <Text className="font-normal not-italic text-left text-white_A700 w-auto" variant="body4">
                  Full name
                </Text>
                <Input
                  wrapClassName="flex h-12 w-full"
                  className="p-0 w-full"
                  name="name"
                  placeholder=""
                  shape="RoundedBorder4"
                  variant="FillGray800"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                <Text className="font-normal not-italic text-left text-white_A700 w-auto" variant="body4">
                  Email address
                </Text>
                <Input
                  wrapClassName="flex h-12 w-full"
                  className="p-0 w-full"
                  name="email"
                  placeholder=""
                  shape="RoundedBorder4"
                  variant="FillGray800"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                <Text className="font-normal not-italic text-left text-white_A700 w-auto" variant="body4">
                  Message
                </Text>
                {/* <Input
                  wrapClassName="flex h-48 w-full"
                  className="p-0 w-full p-3 rounded m-3 mt-[-130px]"
                  // className="bg-gray_800 flex flex-col items-start justify-start p-3 rounded w-full"
                  name="message"
                  placeholder="Enter your message here"
                  shape="RoundedBorder4"
                  variant="FillGray800"
                /> */}
                <Input
                    wrapClassName="flex flex-col justify-center h-48 w-[430px] p-3 rounded"
                    className="bg-gray_800 border border-solid border-white_A700 font-normal h-full not-italic pl-3 sm:pr-5 py-3.5 rounded text-left text-white_A700"
                    name="message"
                    placeholder="Enter your message here"
                    shape="RoundedBorder4"
                    variant="FillGray800"
                  />
              </div>
              <Button
                className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[430px]"
                shape="RoundedBorder8"
                size="lg"
                variant="FillRed90001"
                type="submit"
              >
                Send message
              </Button>
            </div>
          </div>
        </div>



        </div>

        {/* Footer Section*/}
        <Footer className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center mt-24 md:px-5 w-full"
          copyrightheartsOne="Copyright Heartstrings Entertainment"
        />

      </div>
    </>
  )
}

export default ContactUs