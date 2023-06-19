import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import moment from 'moment';

import { Button, Img, List, Text } from "UI_Components";
import Footer from "Layout/Footer/Footer";
import Navbar from "Layout/Navbar/Navbar";
import SelectingShowTimeColumn from "UI_Components/SelectingShowTimeColumn";
import SelectingShowTimeColumn1 from "UI_Components/SelectingShowTimeColumn1";
import BookingCalendar from 'Components/Users/BookingCalendar';
import SeatSelection from 'Components/Users/SeatSelection';



const BuyingTicket = () => {

  return (
    <>
      <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <Navbar
          className="flex flex-row items-center justify-center md:px-5 w-full"
          buyTicketS="Buy ticket (s)"
          streamPlays="Stream plays"
          account="Account"
        />

        <div className="flex flex-col gap-12 items-start justify-start max-w-[1186px] mt-[155px] mx-auto md:px-5 self-stretch w-full">
        {/* Calendar: */}
         <BookingCalendar/>
         {/* Seat Selection */}
         <SeatSelection/>
          {/* Checkout: */}
          <div className="flex flex-col gap-6 items-start justify-center self-stretch w-auto md:w-full">
            <Text
              className="text-left text-white_A700 w-auto"
              as="h2"
              variant="h2"
            >
              Checkout
            </Text>
            <div className="bg-black_900_01 flex flex-col items-start justify-start max-w-[1183px] sm:px-5 px-8 py-12 rounded-bl-lg rounded-br-none rounded-tl-lg rounded-tr-lg w-full">
              <div className="flex flex-col gap-8 items-start justify-center self-stretch w-auto md:w-full">
                <div className="flex md:flex-col flex-row gap-12 items-start justify-start self-stretch w-auto md:w-full">
                  <Text
                    className="font-bold text-left text-white_A700 w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Ticket details
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                    <div className="flex flex-row gap-[11px] items-center justify-center self-stretch w-auto">
                      <Text
                        className="font-normal not-italic text-gray_300 text-left w-auto"
                        variant="body4"
                      >
                        Date:
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Sun, April 02 2023{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[11px] items-center justify-center self-stretch w-auto">
                      <Text
                        className="font-normal not-italic text-gray_300 text-left w-auto"
                        variant="body4"
                      >
                        Time:
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        6:30 PM
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[11px] items-center justify-center self-stretch w-auto">
                      <Text
                        className="font-normal not-italic text-gray_300 text-left w-auto"
                        variant="body4"
                      >
                        Seats:
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        A1, A2
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end self-stretch w-auto">
                    <div className="flex flex-col gap-[9px] items-start justify-center self-stretch w-auto">
                      <Text
                        className="font-normal not-italic text-gray_300 text-left w-auto"
                        variant="body4"
                      >
                        Total Amount{" "}
                      </Text>
                      <div className="flex flex-col items-center justify-start w-auto md:w-full">
                        <Text
                          className="text-left text-white_A700 w-auto"
                          as="h2"
                          variant="h2"
                        >
                          KSH 500
                        </Text>
                      </div>
                      <Text
                        className="not-italic text-left text-light_blue_500 w-auto"
                        variant="body5"
                      >
                        1 free ticket, 1 paid for BOGOF (Buy One Get One Free)
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold text-center text-white_A700 text-xl w-[315px]"
                  shape="RoundedBorder8"
                  size="lg"
                  variant="FillRed900"
                >
                  Proceed to payment
                </Button>
              </div>
            </div>
          </div>

        </div>

        <Footer
          className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center mt-[91px] md:px-5 w-full"
          copyrightheartsOne="Copyright Heartstrings Entertainment"
        />
      </div>
    </>
  );
};

export default BuyingTicket;