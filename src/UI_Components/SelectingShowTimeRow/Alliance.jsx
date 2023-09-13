import React, { useEffect, useState } from "react";
import { Img, List, Text } from "UI_Components";


// Seats
// const Seat = ({ color, onClick }) => {
//   return (
//     <div onClick={onClick}>
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M5 9.15V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7V9.16C17.84 9.57 17 10.67 17 11.97V14H7V11.96C7 10.67 6.16 9.56 5 9.15ZM20 10C18.9 10 18 10.9 18 12V15H6V12C6 11.4696 5.78929 10.9609 5.41421 10.5858C5.03914 10.2107 4.53043 10 4 10C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12V17C2 18.1 2.9 19 4 19V21H6V19H18V21H20V19C21.1 19 22 18.1 22 17V12C22 10.9 21.1 10 20 10Z" fill={color} />
//       </svg>
//     </div>
//   );
// };



const Seat = ({ color, onClick }) => {
  return (
    <div onClick={onClick} style={{ display: 'inline-block', margin: '5px', width: '30px', textAlign: 'center' }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 9.15V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7V9.16C17.84 9.57 17 10.67 17 11.97V14H7V11.96C7 10.67 6.16 9.56 5 9.15ZM20 10C18.9 10 18 10.9 18 12V15H6V12C6 11.4696 5.78929 10.9609 5.41421 10.5858C5.03914 10.2107 4.53043 10 4 10C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12V17C2 18.1 2.9 19 4 19V21H6V19H18V21H20V19C21.1 19 22 18.1 22 17V12C22 10.9 21.1 10 20 10Z" fill={color} />
      </svg>
    </div>
  );
};

const Alliance = (props) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    const updatedSelectedSeats = [...selectedSeats];
    const seatIndex = updatedSelectedSeats.indexOf(seat);

    if (seatIndex !== -1) {
      updatedSelectedSeats.splice(seatIndex, 1);
    } else {
      updatedSelectedSeats.push(seat);
    }

    setSelectedSeats(updatedSelectedSeats);
  };

  const seatLayout = {
    Left: {
      A: 3,
      B: 4,
      C: 5,
      D: 6,
      E: 7,
      F: 8,
      G: 0,
      H: 0,
      I: 0,
    },
    Center: {
      A: 14,
      B: 15,
      C: 14,
      D: 15,
      E: 14,
      F: 15,
      G: 14,
      H: 15,
      I: 14,
    },
    Right: {
      A: 3,
      B: 4,
      C: 5,
      D: 6,
      E: 7,
      F: 8,
      G: 0,
      H: 0,
      I: 0,
    },
  };

  const renderSeats = () => {
    const seats = [];

const wingStyles = {
  display: 'inline-block', 
  marginRight: '40px', 
};

for (let wing in seatLayout) {
  const wingSeats = [];

  for (let row in seatLayout[wing]) {
    const cols = seatLayout[wing][row];
    if (cols > 0) {
      for (let i = 1; i <= cols; i++) {
        const seatId = `${wing}-${row}${i}`;
        wingSeats.push(
          <Seat
            key={seatId}
            color={selectedSeats.includes(seatId) ? '#C81B1B' : 'white'}
            onClick={() => handleSeatClick(seatId)}
          />
        );
      }
      wingSeats.push(<br key={`br${wing}${row}`} />); // Add a line break after each row
    }
  }

  seats.push(
    <div key={wing} style={wingStyles}>
      <h2>{wing}</h2>
      {wingSeats}
    </div>
  );
}

return seats;

  };

  return (
    <>
      

        <div className="flex flex-col md:gap-10 gap-24 items-center justify-start w-full md:w-full">
          {/* Stage Layout */}
          <div
            className="bg-cover bg-no-repeat flex flex-col mt-[2em] h-60 w-[900px] md:w-600 items-center justify-start p-[52px] md:px-10 sm:px-5 w-auto md:w-full"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_group40109_pbzc2u.png')",
            }}
          >
            <Text
              className="font-roboto text-left text-white_A700 w-auto"
              as="h1"
              variant="h1"
            >
              STAGE
            </Text>
          </div>

          {/* Seats Layout */}
          <div className="flex flex-col md:gap-10 gap-10 items-center justify-center w-[125em] md:w-full">
            <div className="flex md:flex-col flex-row gap-[35px] items-center justify-center w-auto md:w-full">
              <div>
              {renderSeats()}
            </div>

            

            </div>


            <div className="flex flex-row gap-6 items-center justify-center w-auto">
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Img className="h-6 w-6" src="images/img_mdiloveseat_white_a700.svg" alt="mdiloveseat_Fourteen" />
                <Text className="font-roboto text-base text-white_A700 w-auto">{props?.available}</Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Img className="h-6 w-6" src="images/img_mdiloveseat_gray_800.svg" alt="mdiloveseat_Fifteen" />
                <Text className="font-roboto text-base text-white_A700 w-auto">{props?.reserved}</Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Img className="h-6 w-6" src="images/img_mdiloveseat.svg" alt="mdiloveseat_Sixteen" />
                <Text className="font-roboto text-base text-white_A700 w-auto">{props?.selected}</Text>
              </div>
            </div>
          </div>
        </div>

     

    </>
  );
};



export default Alliance;