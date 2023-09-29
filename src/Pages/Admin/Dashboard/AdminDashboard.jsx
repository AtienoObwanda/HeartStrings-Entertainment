import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import UserManagement from "Components/Admin/UserManagement";

import { Button, Img, Input, List, Line,Text } from "UI_Components";


import close from "../../../assets/close.svg";
import  menu from "../../../assets/menu.svg";
import LineGraph from "Components/Admin/LineGraph";
import PieChart from "Components/Admin/PieChart";
import ListData from "Components/Admin/ListData";
import DashboardTable from "Components/Admin/DashboardTable";

import { apiUrl } from "../../../../env";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);



// User info:
  const [userInfo, setUserInfo] = useState({});
  const[HomeInfo, setHomeInfo] = useState({})
  const accessToken = localStorage.getItem('accessToken');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // console.log(accessToken)

 useEffect(() => {
    if (accessToken) {
      fetchUserInfo();
      fetchHomeInfo();

    } else {
      navigate('/admin-login');
    }
  }, [accessToken]);

  console.log(accessToken)


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
  const [weeklyTickets, setWeeklyTickets] = useState(null);


  const fetchHomeInfo = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/home_api/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
  
      setHomeInfo(res.data);
      setWeeklyTickets(response.data.weekly_tickets[0]);
  
      console.log('Home Info:', res.data);
    } catch (error) {
      console.error('Error fetching home info:', error);
    }
  };
  
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
    navigate('/admin-login');
  };




  return (
    <>
      <div className="bg-black_900_01 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
         {/* Large screen */}
         <aside className="md:hidden flex justify-start md:px-5 w-[247px]">
          {/* <aside className="flex flex-col md:hidden justify-start md:px-5 w-[247px]"> */}
            <div className="flex flex-col justify-start mb-[420px] mt-12 mx-auto  w-[81%]">
              <Img
                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
                className="common-pointer h-[40%] w-[40%]"
                alt="Heart Strings Entertainment Logo"
                onClick={() => navigate("/")}
              />
              
          <div
                className="bg-gray_800 common-pointer flex flex-row gap-2 items-center justify-center  mt-6 pl-6 md:pr-10 pr-[6px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto"
                onClick={() => navigate("/admin-dashboard")}
              >                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927654/HeartStrings/SVG/img_iconsaxboldactivity_vlojze.svg"
                  className="h-10 w-10"
                  alt="iconsaxboldacti"
                />
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-auto"
                  variant="body4"
                >
                  Dashboard
                </Text>
              </div>

              <div 
                className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"

              onClick={() => navigate("/admin-allplays")}>
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldelement2_white_a700_f8nhvw.svg"
                  className="h-10 w-10"
                  alt="Play Icon"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Live Shows
                </Text>
              </div>

              <div
                className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
                onClick={() => navigate("/admin-allstreams")}
              >
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927661/HeartStrings/SVG/img_iconsaxboldvideoplay_white_a700_z0bppl.svg"
                  className="h-10 w-10"
                  alt="Streams Icon"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Online Plays
                </Text>
              </div>


              <div
                className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
                onClick={() => navigate("/ticket-management")}
              >
                <Img
                    src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldreceipt1_gray_300_gdkye8.svg"
                    className="h-10 w-10"
                  alt="Streams Icon"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                 Ticket Management
                </Text>
              </div>

              <div
                  className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
                onClick={() => navigate("/user-management")}
              >
                <Img
                    src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldprofile2user_white_a700_qdp6it.svg"
                    className="h-10 w-10"
                  alt="Streams Icon"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  User Management
                </Text>
              </div>

              <Line className="bg-gray_800 h-px mt-16 w-full" />


                <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto group">
                      <div 
                        onClick={handleLogout}
                        className="h-10 w-10 transition-colors duration-300 ease-in-out group-hover:bg-icon-hover group-hover:rotate-12">
                          <Img
                              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldlogout_cmxo47.svg"
                              className="h-full w-full hover:fill-red-500 svg"
                              alt="iconsaxboldlogo"
                                  />

                         
                            </div>
                              
                                  <Text className="text-white">Logout</Text>
                      </div>




            </div>
          </aside>


            {/* Display Medium Screens  */}
<aside className="hidden md:flex justify-start md:px-5 w-[247px]">

<div className="flex flex-col justify-start mb-[476px] mt-12 mx-auto w-[81%] ">

    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain pt-3"
        onClick={() => setToggle((prev) => !prev)}
      />
      <Img
      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
      className="common-pointer h-[60%] w-[80%] ml-[20em]"
      alt="Heart Strings Entertainment Logo"
      onClick={() => navigate("/")}
    />
    </div>
    <div className={`${toggle ? 'flex' : 'hidden'}
      p-6 bg-black_900_01 absolute top-20 left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
      <ul className="list-none justify-start items-center flex-1">

        
          <li className="py-3 cursor-pointer text-16">
            
          <div className="bg-gray_800 common-pointer flex flex-row gap-2 items-center justify-center  mt-6 pl-6 md:pr-10 pr-[6px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto"

                onClick={() => navigate("/admin-dashboard")}
              >
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927654/HeartStrings/SVG/img_iconsaxboldactivity_vlojze.svg"
                  className="h-10 w-10"
                  alt="Admin Dashboard Icon"
                />
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-auto"
                  variant="body4"
                >
                  Dashboard
                </Text>
              </div>
          </li>

          <li className="py-3 cursor-pointer text-16">
          <div className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
          onClick={() => navigate("/admin-allplays")}
          > 
        
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldelement2_white_a700_f8nhvw.svg"
                  className="h-10 w-10"
                  alt="Plays Icon"
                />

                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Live Shows
                </Text>
              </div>
          </li>

          <li className="py-3 cursor-pointer text-16">
          <div className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-0 self-stretch w-auto"
                onClick={() => navigate("/admin-allstreams")}
              >
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927661/HeartStrings/SVG/img_iconsaxboldvideoplay_white_a700_z0bppl.svg"
                  className="h-10 w-10"
                  alt="Stream Icon"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Online Plays
                </Text>
              </div>
          </li>


          <li className="py-3 cursor-pointer text-16">
              <div
                  className="common-pointer flex flex-row gap-2 items-center justify-center self-stretch w-auto"
                  onClick={() => navigate("/ticket-management")}
                >
                  <Img
                    src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldreceipt1_gray_300_gdkye8.svg"
                    className="h-10 w-10"
                    alt="iconsaxboldrece"
                  />
                  <Text
                    className="font-normal not-italic text-gray_300 text-left w-auto"
                    variant="body4"
                  >
                    Tickets
                  </Text>
                </div>
            </li>


            <li className="py-3 cursor-pointer text-16">
            <div
                  className="common-pointer flex flex-row gap-2 items-center justify-center self-stretch w-auto"
                  onClick={() => navigate("/user-management")}
                >
                  <Img
                    src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldprofile2user_white_a700_qdp6it.svg"
                    className="h-10 w-10"
                    alt="User Management Icon"
                  />
                  <Text
                    className="font-normal not-italic text-gray_300 text-left w-auto"
                    variant="body4"
                  >
                    User management
                  </Text>
                </div>
            </li>

          <Line className="bg-gray_800 h-px mt-[60px] w-full" />

          <li className="py-3 cursor-pointer text-16">                     
           
           
          <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto group">
                      <div 
                        onClick={handleLogout}
                        className="h-10 w-10 transition-colors duration-300 ease-in-out group-hover:bg-icon-hover group-hover:rotate-12">
                          <Img
                              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldlogout_cmxo47.svg"
                              className="h-full w-full hover:fill-red-500 svg"
                              alt="iconsaxboldlogo"
                                  />

                         
                            </div>
                                  <Text className="text-white">Logout</Text>
                      </div>

            

          </li>
        </ul>
</div>
</div>

</aside>
        
{/* Navbar Area/Header */}
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full md:mt-[-30em] sm:mt-[-30em]">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between p-7 sm:px-5 w-full">
              {/* 
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-center justify-center ml-5 md:ml-[0] self-stretch w-auto sm:w-full">
              */}
              {/* Small and tablet only */}
              
              <div className="hidden md:flex flex-row gap-[21px] items-center justify-start mr-5 self-stretch w-auto mt-[-16em]">
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927649/HeartStrings/SVG/img_ellipse1_jfdd8k.png"
                  className="h-[61px] md:h-auto rounded-[50%] w-[61px]"
                  alt="ellipseOne"
                />
                <div className="flex flex-col gap-2.5 items-start justify-center self-stretch w-auto">
                  <Text
                    className="font-bold text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    {userInfo.first_name} {userInfo.last_name}
                  </Text>
                  <Text
                    className="not-italic text-gray_300 text-left w-auto"
                    variant="body5"
                  >
                    {/* {userInfo.email} */}
                    System administrator
                  </Text>
                </div>
              </div>
              {/* End */}

              <div className="flex sm:flex-1 flex-row gap-6 items-center justify-center ml-5 md:ml-[0] self-stretch w-auto sm:w-full">
                <Text
                  className="text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  Dashboard
                </Text>
                <Input
                  wrapClassName="flex w-1/2 sm:w-full"
                  className="font-normal not-italic p-0 placeholder:text-white_A700 text-left text-sm text-white_A700 w-full"
                  name="duration"
                  placeholder="Last 7 days"
                  prefix={
                    <Img
                      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927653/HeartStrings/SVG/img_iconsax_bold_calendar_vdwpso.svg"
                      className="my-auto"
                      alt="Iconsax/Bold/calendar"
                    />
                  }
                  suffix={
                    <Img
                      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927653/HeartStrings/SVG/img_iconsax_bold_arrowdown2_bxl9th.svg"
                      className="my-auto"
                      alt="Iconsax/Bold/arrowdown2"
                    />
                  }
                  shape="RoundedBorder8"
                  size="sm"
                  variant="FillGray800"
                ></Input>

              </div>
              <div className="md:hidden flex flex-row gap-[21px] items-center justify-start mr-5 self-stretch w-auto">
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927649/HeartStrings/SVG/img_ellipse1_jfdd8k.png"
                  className="h-[61px] md:h-auto rounded-[50%] w-[61px]"
                  alt="ellipseOne"
                />
                <div className="flex flex-col gap-2.5 items-start justify-center self-stretch w-auto">
                  <Text
                    className="font-bold text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    {userInfo.first_name} {userInfo.last_name}
                  </Text>
                  <Text
                    className="not-italic text-gray_300 text-left w-auto"
                    variant="body5"
                  >
                    System administrator
                  </Text>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-start p-[47px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start mb-[74px] w-full">
                {/* ListData */}
                <ListData  homeStat={HomeInfo}/>
{/* End of Navbar area/Header */}

<div className="flex md:flex-col flex-row font-mulish gap-6 items-center justify-between mt-6 w-full">
{/*Start of Bar Graph */}
<LineGraph />

  {/* <LineGraph homeStat={HomeInfo}/>    analytics={analytics} */}

{/* End Of Bar Graph Section*/}
{/* Start Of PieChart */}
<PieChart  />
{/* <PieChart weeklyTickets={weeklyTickets} />  */}

{/* EndOfPieChart */}
                </div>
                <div className="md:h-[1305px] sm:h-[600px] h-[850px] relative w-[92%] md:w-full">

                <div className="font-roboto h-full md:h-[394px] sm:h-[112px] mt-[23px] relative w-full">
                  <div className="absolute bg-black_900 flex flex-col h-full inset-[0] items-start justify-start m-auto py-[17px] rounded w-full">
                    <Text
                      className="sm:hidden font-bold ml-6 md:ml-[0] mt-[5px] text-left text-white_A700 w-auto mb-4"
                      as="h6"
                      variant="h6"
                    >
                      Recent activities
                    </Text>
                    <Text
                      className="hidden md:hidden lg:hidden sm:block text-sm font-bold ml-6 md:ml-[0] mt-[5px] text-center text-white_A700 w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Use your Desktop or Tablet to see Recent Activities
                    </Text>


                    {/* Table */}
                    {/* <DashboardTable/> */}
                    <UserManagement/>

                   
                  </div>
                  
                  
                </div>
                </div>

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default AdminDashboard

