import React from "react";

import { Button, Text } from "Components";
import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";

const PlayTicketPaymentConfirmation = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-24 items-center justify-start mx-auto w-full">
        <Navbar
          className="flex flex-row items-center justify-center md:px-5 w-full"
          buyTicketS="Buy ticket (s)"
          streamPlays="Stream plays"
          account="Account"
        />
        <div className="bg-black_900_01 border border-gray_300 border-solid flex flex-col items-center justify-center px-40 md:px-5 py-12 rounded-lg self-stretch w-auto md:w-full">
          <div className="flex flex-col items-center justify-start self-stretch w-auto sm:w-full">
            <div className="flex flex-col gap-4 items-center justify-center self-stretch w-auto sm:w-full">
              <Text
                className="text-gray_300 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Payment received
              </Text>
              <div className="flex flex-col items-start justify-start self-stretch w-auto sm:w-full">
                <Text
                  className="font-normal leading-[175.00%] max-w-[458px] md:max-w-full not-italic text-center text-gray_300_a2"
                  as="h6"
                  variant="h6"
                >
                  Hi Gloria! Thanks for joining us! Your e-ticket is on the way
                  to your inbox and has been saved in your library. Get ready
                  for an unforgettable show!
                </Text>
              </div>
              <Button
                className="cursor-pointer font-bold min-w-[132px] text-center text-gray_300 text-xl w-auto"
                shape="RoundedBorder8"
                size="lg"
                variant="FillRed900"
              >
                View ticket{" "}
              </Button>
            </div>
          </div>
        </div>
        <Footer
          className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center md:px-5 w-full"
          copyrightheartsOne="Copyright Heartstrings Entertainment"
        />
      </div>
    </>
  );
};

export default PlayTicketPaymentConfirmation;