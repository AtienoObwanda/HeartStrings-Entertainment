import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Line,Text } from "UI_Components";


import close from "../../../assets/close.svg";
import  menu from "../../../assets/menu.svg";
import LineGraph from "Components/Admin/LineGraph";
import PieChart from "Components/Admin/PieChart";
import ListData from "Components/Admin/ListData";



const AdminDashboard = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="bg-black_900_01 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
         {/* Large screen */}
         <aside className="md:hidden flex justify-start md:px-5 w-[247px]">
          {/* <aside className="flex flex-col md:hidden justify-start md:px-5 w-[247px]"> */}
            <div className="flex flex-col justify-start mb-[420px] mt-12 mx-auto w-[81%]">
              <Img
                src="images/img_dummylogo02.svg"
                className="common-pointer h-14 w-auto"
                alt="dummylogoTwo"
                onClick={() => navigate("/")}
              />
              <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-16 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto"
              onClick={() => navigate("/admin-dashboard")}>
                <Img
                  src="images/img_iconsaxboldactivity.svg"
                  className="h-6 w-6"
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
                className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-9 self-stretch w-auto"
                onClick={() => navigate("/admin-allplays")}
              >
                <Img
                  src="images/img_iconsaxboldelement2.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldelem"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Plays
                </Text>
              </div>
              <div
                className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-9 self-stretch w-auto"
                onClick={() => navigate("/admin-allstreams")}
              >
                <Img
                  src="images/img_iconsaxboldvideoplay.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldvide"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Streams
                </Text>
              </div>
              <div className="flex flex-col gap-9 items-start justify-start md:ml-[0] ml-[26px] mt-9 self-stretch w-auto">
                <div
                  className="common-pointer flex flex-row gap-2 items-center justify-center self-stretch w-auto"
                  onClick={() => navigate("/ticket-management")}
                >
                  <Img
                    src="images/img_iconsaxboldreceipt1_gray_300.svg"
                    className="h-6 w-6"
                    alt="iconsaxboldrece"
                  />
                  <Text
                    className="font-normal not-italic text-gray_300 text-left w-auto"
                    variant="body4"
                  >
                    Tickets
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-2 items-center justify-center self-stretch w-auto"
                  onClick={() => navigate("/user-management")}
                >
                  <Img
                    src="images/img_iconsaxboldprofile2user.svg"
                    className="h-6 w-6"
                    alt="iconsaxboldprof"
                  />
                  <Text
                    className="font-normal not-italic text-gray_300 text-left w-auto"
                    variant="body4"
                  >
                    User management
                  </Text>
                </div>
              </div>
              {/* <Line className="bg-gray_800 h-px mt-16 w-full" /> */}
              <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-[63px] self-stretch w-auto">
                <Img
                  src="images/img_iconsaxboldlogout.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldlogo"
                />
                <a
                  href="javascript:"
                  className="font-normal not-italic text-base text-gray_300 text-left w-auto"
                >
                  <Text className="">Logout</Text>
                </a>
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
        src="images/img_dummylogo02.svg"
        className="md:ml-[580px] sm:ml-[200px] common-pointer h-14 w-auto"
        alt="dummylogoTwo"
        onClick={() => navigate("/")}
      />
    </div>
    <div className={`${toggle ? 'flex' : 'hidden'}
      p-6 bg-black_900_01 absolute top-20 left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
      <ul className="list-none justify-start items-center flex-1">

        
          <li className="py-3 cursor-pointer text-16">
            
          <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-2 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto"
              onClick={() => navigate("/admin-dashboard")}
              >
                <Img
                  src="images/img_iconsaxboldactivity.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldacti"
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
          <div className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-6 self-stretch w-auto"
                onClick={() => navigate("/admin-allplays")}
              >
                <Img
                  src="images/img_iconsaxboldelement2.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldelem"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Plays
                </Text>
              </div>
          </li>

          <li className="py-3 cursor-pointer text-16">
          <div className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-0 self-stretch w-auto"
                onClick={() => navigate("/admin-allstreams")}
              >
                <Img
                  src="images/img_iconsaxboldvideoplay.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldvide"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Streams
                </Text>
              </div>
          </li>

        

          <li className="py-3 cursor-pointer text-16">
              <div
                  className="common-pointer flex flex-row gap-2 items-center justify-center self-stretch w-auto"
                  onClick={() => navigate("/ticket-management")}
                >
                  <Img
                    src="images/img_iconsaxboldreceipt1_gray_300.svg"
                    className="h-6 w-6"
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
                    src="images/img_iconsaxboldprofile2user.svg"
                    className="h-6 w-6"
                    alt="iconsaxboldprof"
                  />
                  <Text
                    className="font-normal not-italic text-gray_300 text-left w-auto"
                    variant="body4"
                  >
                    User management
                  </Text>
                </div>
            </li>

          {/* <Line className="bg-gray_800 h-px mt-[60px] w-full" /> */}

          <li className="py-3 cursor-pointer text-16">                     
            <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto">
              <Img
                src="images/img_iconsaxboldlogout.svg"
                className="h-6 w-6"
                alt="iconsaxboldlogo"
              />
              <a
                href="javascript:"
                className="font-normal not-italic text-base text-gray_300 text-left w-auto"
              >
                <Text className="">Logout</Text>
              </a>
            </div>
          </li>
        </ul>
</div>
</div>

</aside>

        
{/* Navbar Area/Header */}
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full sm:mt-[-30em]">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between p-7 sm:px-5 w-full">
              {/* 
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-center justify-center ml-5 md:ml-[0] self-stretch w-auto sm:w-full">
              */}
              {/* Small and tablet only */}
              <div className="hidden md:flex flex-row gap-[21px] items-center justify-start mr-5 self-stretch w-auto">
                <Img
                  src="images/img_ellipse1.png"
                  className="h-[61px] md:h-auto rounded-[50%] w-[61px]"
                  alt="ellipseOne"
                />
                <div className="flex flex-col gap-2.5 items-start justify-center self-stretch w-auto">
                  <Text
                    className="font-bold text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    Cameron Williamson
                  </Text>
                  <Text
                    className="not-italic text-gray_300 text-left w-auto"
                    variant="body5"
                  >
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
                      src="images/img_iconsax_bold_calendar.svg"
                      className="my-auto"
                      alt="Iconsax/Bold/calendar"
                    />
                  }
                  suffix={
                    <Img
                      src="images/img_iconsax_bold_arrowdown2.svg"
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
                  src="images/img_ellipse1.png"
                  className="h-[61px] md:h-auto rounded-[50%] w-[61px]"
                  alt="ellipseOne"
                />
                <div className="flex flex-col gap-2.5 items-start justify-center self-stretch w-auto">
                  <Text
                    className="font-bold text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    Cameron Williamson
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
                <ListData/>
{/* End of Navbar area/Header */}

                <div className="flex md:flex-col flex-row font-mulish gap-6 items-center justify-between mt-6 w-full">




{/*Start of Bar Graph */}
  <LineGraph/>
{/* End Of Bar Graph Section*/}
{/* Start Of PieChart */}
<PieChart/>
{/* EndOfPieChart */}
                </div>
                <div className="font-roboto h-[372px] md:h-[394px] sm:h-[912px] mt-[23px] relative w-full">
                  <div className="absolute bg-black_900 flex flex-col h-full inset-[0] items-start justify-center m-auto py-[17px] rounded w-full">
                    <Text
                      className="font-bold ml-6 md:ml-[0] mt-[5px] text-left text-white_A700 w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Recent activities
                    </Text>
                    <div className="bg-gray_800 flex flex-row md:gap-10 items-start justify-between mt-6 p-2.5 w-full">
                      <Text
                        className="font-normal ml-[13px] not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Activity ID
                      </Text>
                      <Text
                        className="font-normal mt-0.5 not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Event type
                      </Text>
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        User ID
                      </Text>
                      <Text
                        className="font-normal mt-0.5 not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        User type
                      </Text>
                      <Text
                        className="font-normal mr-3 not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Date and time
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row md:gap-10 gap-[480px] items-center justify-between ml-6 md:ml-[0] mt-[204px] self-stretch w-auto md:w-full">
                      <div className="flex flex-row gap-6 items-center justify-center self-stretch w-auto">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Results per page
                        </Text>
                        <div className="bg-red_900 flex flex-row gap-6 items-center justify-center px-2.5 py-[5px] rounded self-stretch w-auto">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            3
                          </Text>
                          <Img
                            src="images/img_iconsax_bold_arrowdown2.svg"
                            className="h-6 w-6"
                            alt="iconsaxboldarro"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
                        <Img
                          src="images/img_iconsaxboldarrowleft2.svg"
                          className="h-6 w-6"
                          alt="iconsaxboldarro_One"
                        />
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Previous
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_800 text-left w-auto"
                          variant="body4"
                        >
                          |
                        </Text>
                        <Button
                          className="cursor-pointer font-normal min-w-[29px] not-italic text-base text-center text-white_A700 w-auto"
                          shape="RoundedBorder4"
                          size="sm"
                          variant="FillRed900"
                        >
                          3
                        </Button>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          out of 3
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_800 text-left w-auto"
                          variant="body4"
                        >
                          |
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Next
                        </Text>
                        <Img
                          src="images/img_iconsaxboldarrowright2.svg"
                          className="h-6 w-6"
                          alt="iconsaxboldarro_Two"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[19%] flex flex-col inset-x-[0] items-center justify-start mx-auto self-stretch w-auto">
                    <List
                      className="flex-col gap-4 grid items-start self-stretch w-auto md:w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-col gap-4 items-center justify-start my-0 self-stretch w-auto md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[96%] md:w-full">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            100
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[216px] not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            LOG_IN
                          </Text>
                          <Text
                            className="font-normal ml-48 md:ml-[0] not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            HS 41723
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[153px] not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            Viewer
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[133px] not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          ></Text>
                        </div>
                        {/* <Line className="bg-gray_800 h-px w-full" /> */}
                      </div>
                      <div className="flex flex-col gap-4 items-center justify-start my-0 self-stretch w-auto md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[96%] md:w-full">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            101
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[218px] not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            LOG_OUT
                          </Text>
                          <Text
                            className="font-normal ml-44 md:ml-[0] not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            HS 51823
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[153px] not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            Admin
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[135px] not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          ></Text>
                        </div>
                        {/* <Line className="bg-gray_800 h-px w-full" /> */}
                      </div>
                      <div className="flex flex-col gap-4 items-center justify-start my-0 self-stretch w-auto md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[96%] md:w-full">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            102
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[216px] not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            UPDATE
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[186px] not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            HS 41529
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[153px] not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            Viewer
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[133px] not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          ></Text>
                        </div>
                        {/* <Line className="bg-gray_800 h-px w-full" /> */}
                      </div>
                    </List>
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

