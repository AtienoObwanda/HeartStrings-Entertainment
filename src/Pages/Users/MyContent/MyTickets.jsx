import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createColumnHelper } from "@tanstack/react-table";
import {FiEdit} from 'react-icons/fi'
import {IoEyeSharp} from 'react-icons/io5'
import { Img, Line, ReactTable, Text } from "UI_Components";
import axios from 'axios'

import { apiUrl } from '../../../../env';
// import { Button, Img, Input, Line, List, Text } from "Components";
import close from "../../../assets/close.svg";
import menu from "../../../assets/menu.svg";

const MyTickets = () => {
  const tableData = React.useRef([
    {
      play: "KSH 3,000",
      dateandtime: "Monday 4 -17 - 2023 | 1:23 PM",
      seats: "A1, A2, A3, A4",
      location: "Alliance Francaise",
      // priceSix: <FiEdit/>,
      priceSix: "https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927649/HeartStrings/SVG/img_frame40131_gjvsxq.svg",
    },
    {
      play: "KSH 3,000",
      dateandtime: "Monday 4 -17 - 2023 | 1:23 PM",
      seats: "A1, A2, A3, A4",
      location: "Alliance Francaise",
      priceSix: "https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927649/HeartStrings/SVG/img_frame40131_gjvsxq.svg",
    },
    {
      play: "KSH 3,000",
      dateandtime: "Monday 4 -17 - 2023 | 1:23 PM",
      seats: "A1, A2, A3, A4",
      location: "Alliance Francaise",
      priceSix: "https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927649/HeartStrings/SVG/img_frame40131_gjvsxq.svg",
    },
    {
      play: "KSH 3,000",
      dateandtime: "Monday 4 -17 - 2023 | 1:23 PM",
      seats: "A1, A2, A3, A4",
      location: "Alliance Francaise",
      priceSix: "https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927649/HeartStrings/SVG/img_frame40131_gjvsxq.svg",
    },
    {
      play: "KSH 3,000",
      dateandtime: "Monday 4 -17 - 2023 | 1:23 PM",
      seats: "A1, A2, A3, A4",
      location: "Alliance Francaise",
      priceSix: "https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927649/HeartStrings/SVG/img_frame40131_gjvsxq.svg",
    },
    {
      play: "KSH 3,000",
      dateandtime: "Monday 4 -17 - 2023 | 1:23 PM",
      seats: "A1, A2, A3, A4",
      location: "Alliance Francaise",
      priceSix: "https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927649/HeartStrings/SVG/img_frame40131_gjvsxq.svg",
    },
  ]);

  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("play", {
        cell: (info) => (
          <Text
            className="font-normal not-italic pb-[27px] pr-[-713px] pt-[35px] text-gray_300 text-left"
            as="p"
            variant="body4"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="font-normal min-w-[269px] not-italic sm:pl-5 pl-[35px] text-left text-white_A700"
            as="p"
            variant="body4"
          >
            Play
          </Text>
        ),
      }),
      tableColumnHelper.accessor("dateandtime", {
        cell: (info) => (
          <Text
            className="font-normal not-italic pb-[26px] pt-[35px] text-gray_300 text-left"
            as="p"
            variant="body4"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="font-normal min-w-[280px] not-italic text-left text-white_A700"
            as="p"
            variant="body4"
          >
            Date and time
          </Text>
        ),
      }),
      tableColumnHelper.accessor("seats", {
        cell: (info) => (
          <Text
            className="font-normal not-italic pb-[27px] pt-[35px] text-gray_300 text-left"
            as="p"
            variant="body4"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="font-normal min-w-[164px] not-italic text-left text-white_A700"
            as="p"
            variant="body4"
          >
            Seats
          </Text>
        ),
      }),
      tableColumnHelper.accessor("location", {
        cell: (info) => (
          <Text
            className="font-normal not-italic pb-7 pt-[35px] text-gray_300 text-left"
            as="p"
            variant="body4"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="font-normal min-w-[194px] not-italic text-left text-white_A700"
            as="p"
            variant="body4"
          >
            Location
          </Text>
        ),
      }),
      tableColumnHelper.accessor("priceSix", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center p-[26px] sm:px-5">
            <Img
              src={info?.getValue()}
              className="h-6 mt-[29px] w-[72px]"
              alt="frame40131"
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="font-normal min-w-[286px] not-italic text-center text-white_A700"
            as="p"
            variant="body4"
          >
            Price
          </Text>
        ),
      }),
    ];
  }, []);

const [isAuthenticated, setIsAuthenticated] = useState(true);
const accessToken = localStorage.getItem('accessToken');
const [userInfo, setUserInfo] = useState({});


// User Info:
useEffect(() => {
  if (accessToken) {
    fetchUserInfo();
  } else {
    navigate('/admin-login');
  }
}, [accessToken]);

// console.log(accessToken)


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
// END OF USER INFO

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
  // BTN

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black_900_01 flex sm:flex-col md:flex-col flex-row font-roboto pb-[10em] md:gap-5 sm:gap-5 sm:pb-5 md:pb-[20em] items-center mx-auto w-full">
      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          {/* Side Bar */}
          {/* Large Screens */}
        <aside className="md:hidden flex bg-black_900 flex flex-col md:hidden justify-start md:px-5 w-[247px]">
        <div className="flex flex-col justify-start mt-12 mx-auto w-[81%]">
              <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
                  className="common-pointer h-[25%] w-[35%]"
                  alt="Heart Strings Entertainment Logo"
                  onClick={() => navigate("/")}
                />
            </div>
          <div
            className="common-pointer flex flex-row gap-2 items-center justify-center ml-6 md:ml-[0] mr-[9px] mt-16 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 self-stretch w-auto"
            onClick={() => navigate("/edit-my-account")}
          >
            <Img
              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927660/HeartStrings/SVG/img_iconsaxbolduser_cixk7a.svg"
              className="h-6 w-6"
              alt="User Icon"
            />
            <Text
              className="font-normal not-italic text-gray_300 text-left w-auto"
              variant="body4"
            >
              My Account
            </Text>
          </div>
          <div
            className="common-pointer flex flex-row gap-2 items-center justify-start mt-3 mx-auto pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 w-[199px]"
            onClick={() => navigate("/my-streams")}
          >
            <Img
              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldelement2_white_a700_f8nhvw.svg"
              className="h-6 w-6"
              alt="Streams"
            />
            <Text
              className="font-normal not-italic text-gray_300 text-left w-auto"
              variant="body4"
            >
              My Streams
            </Text>
          </div>
          <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-[22px] mx-auto pl-6 md:pr-10 pr-[66px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto"
                onClick={() => navigate("/my-tickets")}>
            <Img
              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldreceipt1_z01egp.svg"
              className="h-6 w-6"
              alt="iconsaxboldrece"
            />
            <Text
              className="font-normal not-italic text-left text-white_A700 w-auto"
              variant="body4"
            >
              My Tickets
            </Text>
          </div>
          <Line className="bg-gray_800 h-px mt-[60px] mx-auto w-[81%]" />
          <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[50px] mr-[132px] mt-[63px] self-stretch w-auto"
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
            className="flex flex-row gap-2 items-center justify-center mb-[466px] md:ml-[0] ml-[50px] mr-[115px] mt-8 self-stretch w-auto">
            <Img
              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldlogout_cmxo47.svg"
              className="h-6 w-6"
              alt="iconsaxboldlogo"
            />
            
              <Text className="text-white">Logout</Text>
          </div>
        </aside>

        {/* Medium and small screen */}
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
                    <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-16 pl-6 md:pr-10 pr-[58px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto"
                    onClick={() => navigate("/edit-my-account")}>
                      <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927660/HeartStrings/SVG/img_iconsaxbolduser_cixk7a.svg"
                        className="h-6 w-6"
                        alt="User Icon"
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
                    <div className="bg-gray_800 flex flex-row gap-2 items-center justify-start md:ml-[0] mt-3 mx-6 pl-6 md:pr-10 pr-[55px] sm:px-5 py-2.5 rounded-lg w-[199px]"
                    onClick={() => navigate("/my-streams")}>
                      <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldelement2_white_a700_f8nhvw.svg"
                        className="h-6 w-6"
                        alt="Stream"
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
                      onClick={() => navigate("/my-tickets")}
                    >
                      <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldreceipt1_z01egp.svg"
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
                    <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto"
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

      <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
           {/* User Nav */}
           <div className="flex sm:flex flex-row md:gap-10 items-center justify-between p-7 sm:px-5 w-full md:mt-[-450px]">
              <div className="flex flex-col items-start justify-center ml-8 md:ml-0 self-stretch w-auto">
                <Text
                  className="md:text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  My Streams
                </Text>
              </div>

              <div className="flex flex-row gap-[21px] items-center justify-start mr-5 self-stretch w-auto">
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927739/HeartStrings/SVG/img_share_obssio.svg"
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
            {/* End of nav */}

            {/* Tickets */}

            <div className="flex flex-col items-center justify-start pb-[26px] sm:px-5 px-[26px] w-full md:mb-[15em] sm:mb-[5em]">
            <div className="overflow-auto mt-auto mx-auto w-full pb-5">
            <ReactTable
              columns={tableColumns}
              data={tableData.current}
              rowClass={""}
              headerClass=""
              style={{ fontSize: "18px"}} // Add this line

            />
          </div>
              </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default MyTickets;