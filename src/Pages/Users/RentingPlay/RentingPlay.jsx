import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom'

import { Button, Img, Input, Line, List, Text } from "UI_Components";
import close from "../../../assets/close.svg";
import menu from "../../../assets/menu.svg";

import { apiUrl } from "../../../../env";

const RentingPlay = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();
  const {id} = useParams()
  const [videoData, setvideoData] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  // const [response, setResponse] = useState(null);
  const [selectedTipOption, setSelectedTipOption] = useState("no_tip");
  const [customTip, setCustomTip] = useState('0');


  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    fetchPlay();
  }, []);

  async function fetchPlay() {
    try {
      const response = await axios.get(`${apiUrl}/api/videos/${id}`);
      const data = response.data;
      if (!data.error) {
        setvideoData(data.data);
      } else {
        console.error('Error fetching play:', data.message);
      }
    } catch (error) {
      console.error('Error fetching play:', error);
    }
  }

  // UserInfo:
  useEffect(() => {
    if (accessToken) {
      fetchUserInfo();
    } else {
      // Redirect to login if no access token
      navigate('/login');
    }
  }, [accessToken]);

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`${apiUrl}/auth/users/me/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
  
      // Update the user information state
      setUserInfo(response.data);
  
      // Console log the user information
      console.log('User Info:', response.data);
    } catch (error) {
      console.error('Error fetching user info:', error);
      // Handle error (e.g., redirect to an error page)
    }
  };
  
  useEffect(() => {

    if (accessToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [])
  

  useEffect(() => {

    if (accessToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [])
  
  const clearAccessToken = () => {
    localStorage.removeItem('accessToken');
  };

  const handleLogout = () => {
    localStorage.clear();
    clearAccessToken(); 
    setIsAuthenticated(false);
    navigate('/login');
  };




  // PAYMENT:

  const tipButtons = [
    { label: "No tip", value: "no_tip" },
    { label: "100", value: "100" },
    { label: "200", value: "200" },
    { label: "500", value: "500" },
    { label: "1000", value: "1000" },
    
  ];

  const selectedPlanPrice = parseInt(selectedAmount);
  

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
    console.log(accessToken)
    // 
    const url = `${apiUrl}/api/video-payments/initiate_payment/`;
    // const url = `${apiUrl}/api/video-payments/initiate_payment/`
    console.log('URL:', `${apiUrl}/api/video-payments/initiate_payment/`)
  
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  
    const body = {
      video_id: videoData.id, // Use the ID from videoData
      amount:  totalAmount.toString()
    };
  
    try {
      const response = await axios.post(url, body, { headers });
      console.log('Response:', response.data);
      navigate('/my-streams');
    } catch (error) {
      console.error('Error initiating video payment:', error);
      // alert('Failed to initiate payment. Please ensure your registered phone number is linked with M-Pesa.');

    }
  };
  
  useEffect(() => {
    console.log('Video Data:', videoData);
  }, [videoData]);
  


  return (
    <>
      <div className="bg-black_900_01 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <aside className="md:hidden flex bg-black_900 justify-start md:px-5 w-[247px]">
            <div className="flex flex-col justify-start mb-[476px] mt-12 mx-auto w-[81%]">
            <Img
              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
              className="common-pointer h-[25%] w-[35%]"
              alt="Heart Strings Entertainment Logo"
              onClick={() => navigate("/")}
            />
              <div 
              className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
              onClick={() => navigate("/my-account")}
              >
                {/* <div className="flex flex-row gap-2 items-center justify-center ml-6 md:ml-[0] mr-[9px] mt-16 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 self-stretch w-auto"> */}
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927660/HeartStrings/SVG/img_iconsaxbolduser_cixk7a.svg"
                  className="h-6 w-6"
                  alt="iconsaxbolduser"
                />
                <Text
                  className="font-normal not-italic text-left text-gray_300 w-auto"
                  variant="body4"
                >
                  My Account
                </Text>
              </div>

              <div className="bg-gray_800 flex flex-row gap-2 items-center justify-start md:ml-[0] mt-3 mx-6 pl-6 md:pr-10 pr-[55px] sm:px-5 py-2.5 rounded-lg w-[199px]">
                <Img
                  src=" https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldelement2_white_a700_f8nhvw.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldelem"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  My streams
                </Text>
              </div>

              {/* <div
                className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
                onClick={() => navigate("/my-tickets")}
              >
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldreceipt1_gray_300_gdkye8.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldrece"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  My Tickets
                </Text>
              </div> */}

              <Line className="bg-gray_800 h-px mt-[60px] w-full" />
              <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-[63px] self-stretch w-auto hover:border border-white rounded-md p-2"
              onClick={() => navigate("/contact-us")}>
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldmessagequestion_gray_300_nml9u7.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldmess"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Help
                </Text>
              </div>
              <div
              onClick={handleLogout}
               className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto transition-colors duration-300 ease-in-out group-hover:bg-icon-hover group-hover:rotate-12">
              <Img
                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldlogout_cmxo47.svg"
                className="h-6 w-6"
                alt="iconsaxboldlogo"
              />
               
                  <Text className="text-white"
                  >Logout</Text>
              </div>
            </div>
          </aside>

          {/* Display Medium Screens  */}
          <aside className="hidden md:flex justify-start md:px-5 w-[247px]">
            <div className="flex flex-col justify-start mb-[476px] mt-12 mx-auto w-[81%]">
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <img
                  src={toggle ? close : menu}
                  alt="menu"
                  className="w-[28px] h-[28px] object-contain pt-3"
                  onClick={() => setToggle((prev) => !prev)}
                />
                <Img
                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
                className="common-pointer h-18 w-[35%]"
                alt="Heart Strings Entertainment Logo"
                onClick={() => navigate("/")}
                />
              </div>
              <div
                className={`${toggle ? "flex" : "hidden"}
                      p-6 bg-black_900 absolute top-20 left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
              >
                <ul className="list-none justify-start items-center flex-1">
                  <li className="py-3 cursor-pointer text-16">
                  <div 
              className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
              onClick={() => navigate("/edit-my-account")}
              >                      <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927660/HeartStrings/SVG/img_iconsaxbolduser_cixk7a.svg"
                        className="h-6 w-6"
                        alt="iconsaxbolduser"
                      />
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        My Account
                      </Text>
                    </div>
                  </li>

                  <li className="py-3 cursor-pointer text-16">
                    <div className="bg-gray_800 flex flex-row gap-2 items-center justify-start md:ml-[0] mt-3 mx-6 pl-6 md:pr-10 pr-[55px] sm:px-5 py-2.5 rounded-lg w-[199px]">
                      <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldelement2_white_a700_f8nhvw.svg"
                        className="h-6 w-6"
                        alt="iconsaxboldelem"
                      />
                      <Text
                        className="font-normal not-italic text-gray_300 text-left w-auto"
                        variant="body4"
                      >
                        My streams
                      </Text>
                    </div>
                  </li>

                  <li className="py-3 cursor-pointer text-16">
                    <div
                      className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto"
                      onClick={() => navigate("/mytickets")}
                    >
                      <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldreceipt1_gray_300_gdkye8.svg"
                        className="h-6 w-6"
                        alt="iconsaxboldrece"
                      />
                      <Text
                        className="font-normal not-italic text-gray_300 text-left w-auto"
                        variant="body4"
                      >
                        My Tickets
                      </Text>
                    </div>
                  </li>

                  <Line className="bg-gray_800 h-px mt-[60px] w-full" />

                  <li className="py-3 cursor-pointer text-16">
                    <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto">
                      <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldmessagequestion_gray_300_nml9u7.svg"
                        className="h-6 w-6"
                        alt="iconsaxboldmess"
                      />
                      <Text
                        className="font-normal not-italic text-gray_300 text-left w-auto"
                        variant="body4"
                      >
                        Help
                      </Text>
                    </div>
                  </li>

                  <li className="py-3 cursor-pointer text-16">
                    <div 
                    onClick={handleLogout}
                    className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto">
                      <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldlogout_cmxo47.svg"
                        className="h-6 w-6"
                        alt="iconsaxboldlogo"
                      />
                      
                        <Text className="text-white">Logout</Text>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* End Of Sidebar */}
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
                    Hi, {userInfo.first_name}
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
          <Button
          className="bg-black_900 cursor-pointer min-w-[149px] py-3.5 rounded-lg text-base text-center text-white_A700 hover:border border-white rounded-md p-2"
          onClick={() => {
            initiateVideoPayment(videoData?.video_available[0]?.three_price);
            setSelectedAmount(videoData?.video_available[0]?.three_price);
          }}
        >
          3 days (Kes {videoData?.video_available[0]?.three_price})
        </Button>
        
        <Button
          className="bg-black_900 cursor-pointer min-w-[149px] py-3.5 rounded-lg text-base text-center text-white_A700 hover:border border-white rounded-md p-2"
          onClick={() => {
            initiateVideoPayment(videoData?.video_available[0]?.seven_price);
            setSelectedAmount(videoData?.video_available[0]?.seven_price);
          }}
        >
          7 days (Kes {videoData?.video_available[0]?.seven_price})
        </Button>
        
        <Button
          className="bg-black_900 cursor-pointer min-w-[158px] py-3.5 rounded-lg text-base text-center text-white_A700 hover:border border-white rounded-md p-2"
          onClick={() => {
            initiateVideoPayment(videoData?.video_available[0]?.fourteen_price);
            setSelectedAmount(videoData?.video_available[0]?.fourteen_price);
          }}
        >
          14 days (Kes {videoData?.video_available[0]?.fourteen_price})
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
                    className={`bg-black-900 cursor-pointer h-12 py-3.5 min-w-[100px] rounded-lg text-base text-center text-white_A700 w-[47px] hover:border border-white rounded-md p-2 ${
                      selectedTipOption === button.value ? 'bg-red_900' : ''
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
                
                {/* <input className="bg-gray_800 justify-center pl-4 sm:pr-5 pr-[29px] py-3 rounded-lg text-base text-gray_300_87 w-auto h-12" 
                placeholder="Other Amount"
                value={customTip}
                onChange={handleCustomTipChange}
                /> */}

                
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
            <Button 
            onClick={initiateVideoPayment}
            className="bg-red_900 cursor-pointer font-bold py-[15px] rounded-lg text-center text-white_A700 text-xl w-[430px]">
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