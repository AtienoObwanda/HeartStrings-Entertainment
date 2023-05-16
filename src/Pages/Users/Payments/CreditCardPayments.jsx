import React from "react";

import { useNavigate } from "react-router-dom";

import { Img } from "Components";
import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";

const CreditCardPayments = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black_900 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-24 items-center justify-start mx-auto w-full">
        <Navbar
          className="flex flex-row items-center justify-center md:px-5 w-full"
          buyTicketS="Buy ticket (s)"
          streamPlays="Stream plays"
          account="Account"
        />
        <Img
          src="images/img_whatsappimage20230419.png"
          className="common-pointer h-[558px] md:h-auto object-cover w-[44%]"
          alt="whatsappimageTwenty"
          onClick={() => navigate("/playticketpaymentconfirmation")}
        />
        <Footer
          className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center md:px-5 w-full"
          copyrightheartsOne="Copyright Heartstrings Entertainment"
        />
      </div>
    </>
  );
};

export default CreditCardPayments;

//Credit Card Payment intergration method 2