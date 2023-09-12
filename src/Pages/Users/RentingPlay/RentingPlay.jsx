import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { Button, Img, Text } from "UI_Components";
import Sidebar from "UI_Components/Sidebar";

import { apiUrl } from "../../../../env";

const RentingPlay = () => {
  const {id} = useParams()
  const [videoData, setvideoData] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [response, setResponse] = useState(null);
  const [selectedTipOption, setSelectedTipOption] = useState("no_tip");
  const [customTip, setCustomTip] = useState('0');



  
  const videoAvailableData = [
    {
      three_days: "3",
      three_price: "200",
      seven_days: "7",
      seven_price: "500",
      fourteen_days: "14",
      fourteen_price: "900",
    }
  ];
  

  useEffect(() => {
    fetchPlay();
  }, []);

  async function fetchPlay() {
    try {
      const response = await axios.get(`${apiUrl}/api/videos/${id}`);
      const data = response.data;
      if (!data.error) {
        setvideoData(data.data); 
        setPlayDates(data.data.play_dates);

      } else {
        console.error('Error fetching play:', data.message);
      }
    } catch (error) {
      console.error('Error fetching play:', error);
    }
  }
  console.log(videoData)

  // PAYMENT:

  const tipButtons = [
    { label: "No tip", value: "no_tip" },
    { label: "100", value: "100" },
    { label: "200", value: "200" },
    { label: "500", value: "500" },
    { label: "1000", value: "1000" },
    
  ];

  const selectedPlanPrice = parseInt(selectedAmount);
  // const selectedTipAmount =
  // selectedTipOption !== "no_tip"
  //   ? parseInt(selectedTipOption)
  //   : customTip
  //   ? parseInt(customTip)
  //   : 0;



  // const handleCustomTipChange = (e) => {
  //   const value = e.target.value;
  //   setCustomTip(value);
  // };

  const handleCustomTipChange = (e) => {
    const value = e.target.value;
    setCustomTip(value);
    setSelectedTipOption('custom_tip'); 
  };
  
const customTipValue = customTip.trim(); 
console.log('Custom Tip Value:', customTipValue);

const isCustomTipValid = /^[0-9]+$/.test(customTipValue);

// ...



const selectedTipAmount =
  selectedTipOption !== "no_tip"
    ? parseInt(selectedTipOption)
    : isCustomTipValid
    ? parseInt(customTipValue)
    : 0;


    console.log('Amount: ', selectedAmount)
    console.log('Tip: ', selectedTipAmount)
    console.log('Custom Tip: ', customTipValue)
    console.log('Custom Tip Value Type:', typeof customTipValue);



// const totalAmount = selectedPlanPrice + selectedTipAmount;
const totalAmount = selectedAmount ? selectedPlanPrice + selectedTipAmount : 0;

console.log('Total Amount: ', totalAmount)

    // const totalAmount = selectedPlanPrice + selectedTipAmount + customTipAmount;



  const initiateVideoPayment = async (amount) => {
    const url = 'http://127.0.0.1:8000/api/video-payments/initiate_payment/';
  
    const headers = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0Njc4ODMyLCJpYXQiOjE2OTQyNDY4MzIsImp0aSI6ImVkMmE1YjI1ZTMyNjQ4NzFiYmM2Y2RlYWI4YTY3ZmI5IiwidXNlcl9pZCI6MX0.J5aWVp7BLZr5XMO3YjrJhOW8EWGJXZoG6dHPMtfv5hM'
    };
  
    const body = {
      videoData_id: videoData.id, // Use the ID from videoData
      amount:  totalAmount.toString()
    };
  
    try {
      const response = await axios.post(url, body, { headers });
      setResponse(response.data);
    } catch (error) {
      console.error('Error initiating video payment:', error);
    }
  };
  
  


  return (
    <>
      <div className="bg-black_900_01 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="bg-black_900 flex flex-col md:hidden justify-start md:px-5 w-[247px]" />
          <div className="flex flex-1 flex-col md:gap-10 gap-24 justify-start md:px-5 w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between p-7 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-center ml-5 self-stretch w-auto mt-[2em]">
                <Text
                  className="text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  My Online Plays
                </Text>
              </div>
              <div className="flex flex-row gap-[21px] items-center justify-start mr-5 self-stretch w-auto">
                <Img
                  src="images/img_share.svg"
                  className="h-6 w-6"
                  alt="share"
                />
                <div className="flex flex-col items-start justify-center self-stretch w-auto">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    Hi, Gloria
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-black_900_01 flex flex-col items-center justify-center md:ml-[0] ml-[169px] mr-[415px] p-[60px] md:px-10 sm:px-5 rounded-lg self-stretch shadow-bs w-auto md:w-full">
              {/* Start */}

              <div className="flex flex-col gap-12 items-start justify-center w-auto">
              <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-[9px] items-start justify-center w-auto sm:w-full">
                <Text className="text-base text-gray_300 w-auto">
                  How many days would you like to rent the play for?
                </Text>
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-auto sm:w-full">
                  <Button className="bg-black_900 cursor-pointer min-w-[149px] py-3.5 rounded-lg text-base text-center text-white_A700 hover:border border-white rounded-md p-2"
                    onClick={() => {
                      initiateVideoPayment(videoAvailableData[0].three_price);
                      setSelectedAmount(videoAvailableData[0].three_price);
                    }}
                  >
                    3 days (Kes {videoAvailableData[0].three_price})
                  </Button>

                  <Button className="bg-black-900 cursor-pointer min-w-[149px] py-3.5 rounded-lg text-base text-center text-white_A700 hover:border border-white rounded-md p-2"
                    onClick={() => {
                      initiateVideoPayment(videoAvailableData[0].seven_price);
                      setSelectedAmount(videoAvailableData[0].seven_price);
                    }}
                  >
                    3 days (Kes {videoAvailableData[0].seven_price})
                  </Button>

                  <Button className="bg-black-900 cursor-pointer min-w-[158px] py-3.5 rounded-lg text-base text-center text-white_A700 hover:border border-white rounded-md p-2"
                    onClick={() => {
                    initiateVideoPayment(videoAvailableData[0].fourteen_price);
                    setSelectedAmount(videoAvailableData[0].fourteen_price);
                  }}
                >
                  14 days (Kes {videoAvailableData[0].fourteen_price})
                </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[9px] mt-[3em] mb-[2em] items-start justify-center w-auto">
                <Text className="text-base text-gray_300 w-auto">Amount due </Text>
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text className="font-bold text-2xl md:text-[22px] text-white_A700 sm:text-xl w-auto">
                  {selectedAmount ? `KES ${selectedAmount}` : '0.00'}
                  </Text>
                </div>
              </div>
              <Text className="text-base text-white_A700 w-auto">
                <span className="text-white_A700 font-roboto text-left font-normal">Would you like to support Heartstrings with a tip?</span>  
              </Text>
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-auto sm:w-full">
                
                {tipButtons.map((button) => (
                  <Button
                    key={button.value}
                    className={`bg-black-900 cursor-pointer h-12 py-3.5 min-w-[60] rounded-lg text-base text-center text-white_A700 w-[47px] hover:border border-white rounded-md p-2 ${
                      selectedTipOption === button.value ? 'bg-green-500' : ''
                    }`}
                    // onClick={() => setSelectedTipOption(button.value)}
                    onClick={() => {
                      setSelectedTipOption(button.value);
                      setCustomTip(''); 
                    }}
                 
                    // disabled={selectedTipOption == 'custom_tip'}
                    >
                    {button.label}
                  </Button>
                ))}
                
                <input className="bg-gray_800 justify-center pl-4 sm:pr-5 pr-[29px] py-3 rounded-lg text-base text-gray_300_87 w-auto h-12" 
                placeholder="Other Amount"
                value={customTip}
                onChange={handleCustomTipChange}
                />

                
              </div>
              <div className="flex flex-col gap-[9px] mt-[3em] items-start justify-center w-auto">
                <Text className="text-gray_300 text-sm w-auto">Total Amount </Text>
                <div className="flex flex-row gap-2 items-center justify-center w-auto">
                  <Text className="font-bold text-4xl sm:text-[32px] md:text-[34px] text-white_A700 w-auto">
                  {selectedAmount ? `KES ${totalAmount}` : '0.00'}
                  </Text>
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text className="text-base text-gray-300 w-auto">(Rental + tip)</Text>
                  </div>
                </div>
              </div>
            </div>
            <Button className="bg-red_900 cursor-pointer font-bold py-[15px] rounded-lg text-center text-white_A700 text-xl w-[430px]">
              Pay now
            </Button>
          </div>

          {/* end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentingPlay;