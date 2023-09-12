import React, { useEffect, useState, useRef } from 'react';

// import { useState } from 'react';
import moment from 'moment';

import Footer from "Layout/Footer/Footer";
import Navbar from "Layout/Navbar/Navbar";
import SelectingShowTimeColumn from "UI_Components/SelectingShowTimeColumn";
import SelectingShowTimeColumn1 from "UI_Components/SelectingShowTimeColumn1";
import BookingCalendar from 'Components/Users/BookingCalendar';
import SeatSelection from 'Components/Users/SeatSelection';
import TicketDetails from 'Components/Users/TicketDetails';
import { useParams } from 'react-router-dom'



const BuyingTicket = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const accessToken = localStorage.getItem('accessToken');
  const [playData, setPlayData] = useState(null);
  const [playDates, setPlayDates] = useState([]);
  const { id } = useParams();




useEffect(() => {


  if (accessToken) {
    setIsAuthenticated(true);
  } else {
    setIsAuthenticated(false);
  }
}, [])

const handleLogout = () => {
  setIsAuthenticated(false);
  
 navigate('/login');
};
  

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

          {/* Ticket Details Checkout: */}
          <TicketDetails/>
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