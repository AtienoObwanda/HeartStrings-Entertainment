import React, { useEffect, useState } from "react";
import { Img, List, Text } from "UI_Components";

const Seat = ({ id, color, onClick }) => {
  return (
    <div onClick={() => onClick(id)} style={{ display: 'inline-block', margin: '5px', width: '10px', textAlign: 'center' }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 9.15V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7V9.16C17.84 9.57 17 10.67 17 11.97V14H7V11.96C7 10.67 6.16 9.56 5 9.15ZM20 10C18.9 10 18 10.9 18 12V15H6V12C6 11.4696 5.78929 10.9609 5.41421 10.5858C5.03914 10.2107 4.53043 10 4 10C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12V17C2 18.1 2.9 19 4 19V21H6V19H18V21H20V19C21.1 19 22 18.1 22 17V12C22 10.9 21.1 10 20 10Z" fill={color} />
      </svg>
    </div>
  );
};




const NairobiCinema = (props) => {
  
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (id) => {
    const updatedSelectedSeats = [...selectedSeats];
    const seatIndex = updatedSelectedSeats.indexOf(id);
  
    if (seatIndex !== -1) {
      updatedSelectedSeats.splice(seatIndex, 1);
    } else {
      updatedSelectedSeats.push(id);
    }
  
    setSelectedSeats(updatedSelectedSeats);
  };




  return (
    <>
    <div className={props.className}>
    <div className="flex flex-col md:gap-10 gap-24 items-center justify-start w-auto md:w-full">
          {/* Stage Layout */}
          <div
            className="bg-cover bg-no-repeat flex flex-col h-60 w-[800px] md:w-600 items-center justify-start p-[52px] md:px-10 sm:px-5 w-auto md:w-full"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_group40109_pbzc2u.png')",
            }}
          >
            <Text
              className="font-roboto text-left text-white_A700 w-auto"
              as="h1"
              variant="h1"
            >
              {props?.stage}
            </Text>
          </div>

    <div className="flex flex-row">
       {/* Wing One */}
       <div className="flex flex-col md:gap-10 gap-10 items-center justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row mt-[13.6em] gap-[35px] items-start justify-center w-auto md:w-full">
            <div className="flex flex-col gap-4 items-end justify-center w-auto">
               {/* Row D */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pr-5 pr-8 w-auto">
                <Seat
                id="A1" // Replace with actual seat ID
                color={selectedSeats ? '#C81B1B' : 'white'}
                onClick={handleSeatClick}
              />
                <Seat
                  id="A2" // Replace with actual seat ID
                  color={selectedSeats ? '#C81B1B' : 'white'}
                  onClick={handleSeatClick}
                />
                <Seat
                  id="A3" // Replace with actual seat ID
                  color={selectedSeats ? '#C81B1B' : 'white'}
                  onClick={handleSeatClick}
                />
                <Seat
                  id="A4" // Replace with actual seat ID
                  color={selectedSeats ? '#C81B1B' : 'white'}
                  onClick={handleSeatClick}
                />
                <Seat
                  id="A5" // Replace with actual seat ID
                  color={selectedSeats ? '#C81B1B' : 'white'}
                  onClick={handleSeatClick}
                />
                </div>

                {/* Row E */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pr-5 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row F */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pr-5 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>
               

                {/* Row G */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pr-5 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row H */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pr-5 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>
               

                {/* Row I */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pr-5 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>
                

                {/* Row J */}
                <div className="flex flex-row gap-2 mt-1 items-center justify-center sm:pr-5 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>
                

                {/* Row K */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pr-5 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row L */}
                <div className="flex flex-row gap-2 mt-1 items-center justify-center sm:pr-5 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>
                

                {/* Row M */}
                <div className="flex flex-row gap-2 mt-1 items-center justify-center sm:pr-5 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row N */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pr-5 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>
                

                {/* Row O */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pr-5 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>
                

                {/* Row P */}
                <div className="flex flex-row gap-2 mt-1 items-center justify-center sm:pr-5 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>
                

                </div>
            </div>
            </div>
            
      

      {/* Divider One */}
      <div className="flex flex-col  gap-[19.5px] items-start justify-start md:mt-0 w-auto">
          <Text className="font-roboto text-sm text-white_A700 mt-10 pt-4 w-auto">{}</Text>
          {/* <Text className="font-roboto text-sm text-white_A700 w-auto">{}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{}</Text> */}
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.a}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.b}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.c}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.d}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.e}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.f}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.g}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.h}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.i}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.j}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.k}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.l}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.m}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.n}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.o}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.p}</Text>

        </div>

      {/* Wing Two */}
      <div className="flex flex-col md:gap-10 gap-10 items-center justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row mt-[4.8em] gap-[35px] items-start justify-center w-auto md:w-full">
            <div className="flex flex-col gap-4 items-center justify-center w-auto">
               {/* Row A */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pl-8 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>
                {/* Row B */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pl-5 pl-8 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row C */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pl-5 pl-8 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row D */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pl-5 pl-8 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row E */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pl-8 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row F */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pl-5 pl-8 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row G */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pl-5 pl-8 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row H */}
                <div className="flex flex-row gap-2 mt-1 items-center justify-center sm:pl-5 pl-8 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row I */}
                <div className="flex flex-row mt-2 gap-2 items-center justify-center sm:pl-5 pl-8 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row J */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pl-5 pl-8 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row K */}
                <div className="flex flex-row gap-2 mt-1 items-center justify-center sm:pl-5 pl-8 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row L */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pl-8 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row M */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pl-5 pl-8 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row N */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pl-5 pl-8 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row O */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pl-5 pl-8 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row P */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pl-5 pl-8 pr-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                </div>
                </div>
                </div>


      {/* Divider Two */}
      <div className="flex flex-col  gap-[19.5px] items-start justify-start md:mt-0 w-auto">
          <Text className="font-roboto text-sm text-white_A700 mt-10 pt-4 w-auto">{}</Text>
        {/* <Text className="font-roboto text-sm text-white_A700 w-auto">{}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{}</Text> */}
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.aOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.bOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.cOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.dOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.eOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.fOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.gOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.hOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.iOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.jOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.kOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.lOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.mOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.nOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.oOne}</Text>
          <Text className="font-roboto text-sm text-white_A700 w-auto">{props?.pOne}</Text>

        </div>

      {/* Wing Three */}
      <div className="flex flex-col md:gap-10 gap-10 items-center justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row mt-[13.6em] gap-[35px] items-start justify-center w-auto md:w-full">
            <div className="flex flex-col gap-4 items-start justify-center w-auto">
               {/* Row D */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pl-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row E */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pl-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row F */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pl-5 pl-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>
               

                {/* Row G */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pl-5 pl-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row H */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pl-5 pl-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>
               

                {/* Row I */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pl-5 pl-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>
                

                {/* Row J */}
                <div className="flex flex-row gap-2 mt-1 items-center justify-center sm:pr-l pl-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>
                

                {/* Row K */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pl-5 pl-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row L */}
                <div className="flex flex-row gap-2 mt-1 items-center justify-center sm:pl-5 pl-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>
                

                {/* Row M */}
                <div className="flex flex-row gap-2 mt-1 items-center justify-center sm:pl-5 pl-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>

                {/* Row N */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pl-5 pl-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>
                

                {/* Row O */}
                <div className="flex flex-row gap-2 mt-2 items-center justify-center sm:pl-5 pl-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>
                

                {/* Row P */}
                <div className="flex flex-row gap-2 mt-1 items-center justify-center sm:pl-5 pl-8 w-auto">
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                <Seat
        id="#" // Replace with actual seat ID
        color={selectedSeats ? '#C81B1B' : 'white'}
        onClick={handleSeatClick}
      />
                </div>
                

                </div>
            </div>
            </div>
    </div>
         
     

    </div>



    </div>
    </>
  )
}
NairobiCinema.defaultProps = {
  a: "A",
  b: "B",
  c: "C",
  d: "D",
  e: "E",
  f: "F",
  g: "G",
  h: "H",
  i: "I",
  j: "J",
  k: "K",
  l: "L",
  m: "M",
  n: "N",
  o: "O",
  p: "P",
  stage: "STAGE",
  available: "Available",
  reserved: "Reserved",
  selected: "Selected",
  aOne: "A",
  bOne: "B",
  cOne: "C",
  dOne: "D",
  eOne: "E",
  fOne: "F",
  gOne: "G",
  hOne: "H",
  iOne: "I",
  jOne: "J",
  kOne: "K",
  lOne: "L",
  mOne: "M",
  nOne: "N",
  oOne: "O",
  pOne: "P",
  
};

export default NairobiCinema