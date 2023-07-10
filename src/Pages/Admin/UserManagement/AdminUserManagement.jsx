import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "UI_Components";

import close from "../../../assets/close.svg";
import  menu from "../../../assets/menu.svg";
  

const AdminUserManagement = () => {


  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
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
              <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-16 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto">
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
                onClick={() => navigate("/adminallplays")}
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
                onClick={() => navigate("/adminallstreams")}
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
                  onClick={() => navigate("/adminticketmanagement")}
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
                  onClick={() => navigate("/adminusermanagement")}
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
              <Line className="bg-gray_800 h-px mt-16 w-full" />
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
            
          <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-16 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto">
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
                onClick={() => navigate("/adminallplays")}
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
                onClick={() => navigate("/admin-all-streams")}
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
                  onClick={() => navigate("/adminticketmanagement")}
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
                  onClick={() => navigate("/adminusermanagement")}
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

          <Line className="bg-gray_800 h-px mt-[60px] w-full" />

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

          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between p-7 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-center ml-5 sm:ml-[0] self-stretch w-auto">
                <Text
                  className="text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  User management
                </Text>
              </div>
              <div className="flex flex-row gap-[21px] items-center justify-start mr-5 self-stretch w-auto">
                <Img
                  src="images/img_ellipse1.png"
                  className="h-[61px] md:h-auto rounded-[50%] w-[61px]"
                  alt="ellipseOne"
                />
                <div className="flex flex-col gap-2 items-start justify-center self-stretch w-auto">
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
            <div className="md:h-[262px] h-[850px] sm:h-[924px] relative w-[92%] md:w-full">
              <div className="absolute bg-black_900 flex flex-col h-full inset-[0] items-center justify-center m-auto py-3.5 rounded w-full">
                <div className="flex flex-col items-center justify-start mb-[33px] w-full">
                  <div className="flex flex-row md:gap-10 items-center justify-between w-[96%] md:w-full">
                    <Text
                      className="font-bold text-left text-white_A700 w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Users
                    </Text>
                    <div className="bg-red_900 flex flex-row gap-2 items-center justify-center sm:pl-5 pl-6 pr-3 py-2.5 rounded-lg self-stretch w-auto">
                      <Img
                        src="images/img_iconsaxbolddocumentupload.svg"
                        className="h-6 w-6"
                        alt="iconsaxbolddocu"
                      />
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Export
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_900 flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[13px] p-2.5 w-full">
                    <Text
                      className="font-normal sm:ml-[0] ml-[13px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Name
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[154px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Email
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[257px] sm:mt-0 mt-0.5 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      User type
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[63px] sm:mt-0 mt-0.5 not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Event type
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[121px] not-italic text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Date and time
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[43px] items-center justify-start mt-[21px] w-[96%] md:w-full">
                    <List
                      className="flex-col gap-6 grid items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start ml-0.5 my-0 w-full">
                        <Text
                          className="font-normal md:mt-0 mt-2 not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Jane Cooper
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[105px] md:mt-0 mt-2 not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          jessica.hanson@example.com
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[79px] md:mt-0 mt-1.5 not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Viewer
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[79px] md:mt-0 mt-[7px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          LOG_IN
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[88px] md:mt-0 mt-[7px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        ></Text>
                        <Img
                          src="images/img_qrcode.svg"
                          className="h-6 mb-[3px] md:ml-[0] ml-[65px] w-16"
                          alt="qrcode"
                        />
                      </div>
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start ml-0.5 my-0 w-full">
                        <Text
                          className="font-normal md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Wade Warren
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[102px] md:mt-0 mt-[7px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          alma.lawson@example.com
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[95px] md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Admin
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[81px] md:mt-0 mt-1.5 not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          LOG_OUT
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[72px] md:mt-0 mt-1.5 not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        ></Text>
                        <Img
                          src="images/img_qrcode.svg"
                          className="h-6 mb-0.5 md:ml-[0] ml-[65px] w-16"
                          alt="qrcode"
                        />
                      </div>
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                        <Text
                          className="font-normal md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Esther Howard
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[92px] md:mt-0 mt-[7px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          tim.jennings@example.com
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[99px] md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Admin
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[83px] md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          UPDATE
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[82px] md:mt-0 mt-1.5 not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        ></Text>
                        <Img
                          src="images/img_qrcode.svg"
                          className="h-6 mb-0.5 md:ml-[0] ml-[65px] w-16"
                          alt="qrcode"
                        />
                      </div>
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                        <Text
                          className="font-normal md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Cameron Williamson
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[49px] md:mt-0 mt-[7px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          debra.holt@example.com
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[114px] md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Admin
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[84px] md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          ENTER
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[91px] md:mt-0 mt-1.5 not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        ></Text>
                        <Img
                          src="images/img_qrcode.svg"
                          className="h-6 mb-0.5 md:ml-[0] ml-[65px] w-16"
                          alt="qrcode"
                        />
                      </div>
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                        <Text
                          className="font-normal md:mt-0 mt-[7px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Brooklyn Simmons
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[63px] md:mt-0 mt-[7px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          kenzi.lawson@example.com
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[94px] md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Admin
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[85px] md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          UPDATE
                        </Text>
                        <Text
                          className="font-normal ml-20 md:ml-[0] md:mt-0 mt-1.5 not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        ></Text>
                        <Img
                          src="images/img_qrcode.svg"
                          className="h-6 mb-0.5 md:ml-[0] ml-[65px] w-16"
                          alt="qrcode"
                        />
                      </div>

                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                        <Text
                          className="font-normal md:mt-0 mt-[7px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Brooklyn Simmons
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[63px] md:mt-0 mt-[7px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          kenzi.lawson@example.com
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[94px] md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Admin
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[85px] md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          UPDATE
                        </Text>
                        <Text
                          className="font-normal ml-20 md:ml-[0] md:mt-0 mt-1.5 not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        ></Text>
                        <Img
                          src="images/img_qrcode.svg"
                          className="h-6 mb-0.5 md:ml-[0] ml-[65px] w-16"
                          alt="qrcode"
                        />
                      </div>

                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                        <Text
                          className="font-normal md:mt-0 mt-[7px] not-italic text-left text-white_A700 w-auto"
                          variant="bo
                          dy4"
                        >
                          Brooklyn Simmons
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[63px] md:mt-0 mt-[7px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          kenzi.lawson@example.com
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[94px] md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Admin
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[85px] md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          UPDATE
                        </Text>
                        <Text
                          className="font-normal ml-20 md:ml-[0] md:mt-0 mt-1.5 not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        ></Text>
                        <Img
                          src="images/img_qrcode.svg"
                          className="h-6 mb-0.5 md:ml-[0] ml-[65px] w-16"
                          alt="qrcode"
                        />
                      </div>

                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                        <Text
                          className="font-normal md:mt-0 mt-[7px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Brooklyn Simmons
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[63px] md:mt-0 mt-[7px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          kenzi.lawson@example.com
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[94px] md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Admin
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[85px] md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          UPDATE
                        </Text>
                        <Text
                          className="font-normal ml-20 md:ml-[0] md:mt-0 mt-1.5 not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        ></Text>
                        <Img
                          src="images/img_qrcode.svg"
                          className="h-6 mb-0.5 md:ml-[0] ml-[65px] w-16"
                          alt="qrcode"
                        />
                      </div>


                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                        <Text
                          className="font-normal md:mt-0 mt-[7px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Brooklyn Simmons
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[63px] md:mt-0 mt-[7px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          kenzi.lawson@example.com
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[94px] md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Admin
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[85px] md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          UPDATE
                        </Text>
                        <Text
                          className="font-normal ml-20 md:ml-[0] md:mt-0 mt-1.5 not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        ></Text>
                        <Img
                          src="images/img_qrcode.svg"
                          className="h-6 mb-0.5 md:ml-[0] ml-[65px] w-16"
                          alt="qrcode"
                        />
                      </div>

                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                        <Text
                          className="font-normal md:mt-0 mt-[7px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Brooklyn Simmons
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[63px] md:mt-0 mt-[7px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          kenzi.lawson@example.com
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[94px] md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Admin
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[85px] md:mt-0 mt-[5px] not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          UPDATE
                        </Text>
                        <Text
                          className="font-normal ml-20 md:ml-[0] md:mt-0 mt-1.5 not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        ></Text>
                        <Img
                          src="images/img_qrcode.svg"
                          className="h-6 mb-0.5 md:ml-[0] ml-[65px] w-16"
                          alt="qrcode"
                        />
                      </div>
                    </List>
                    <div className="flex sm:flex-col flex-row md:gap-10 gap-[471px] items-center justify-between self-stretch w-auto md:w-full">
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
                            12
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
                </div>
              </div>
              <Line className="absolute bg-gray_800 h-px inset-x-[0] mx-auto top-[20%] w-full" />
              <Line className="absolute bg-gray_800 h-px inset-x-[0] mx-auto top-[26%] w-full" />
              <Line className="absolute bg-gray_800 h-px inset-x-[0] mx-auto top-[32%] w-full" />
              <Line className="absolute bg-gray_800 h-px inset-x-[0] mx-auto top-[38%] w-full" />
              <Line className="absolute bg-gray_800 h-px inset-x-[0] mx-auto top-[44%] w-full" />
              <Line className="absolute bg-gray_800 h-px inset-[0] justify-center m-auto w-full" />
              <Line className="absolute bg-gray_800 bottom-[44%] h-px inset-x-[0] mx-auto w-full" />
              <Line className="absolute bg-gray_800 bottom-[38%] h-px inset-x-[0] mx-auto w-full" />
              <Line className="absolute bg-gray_800 bottom-[32%] h-px inset-x-[0] mx-auto w-full" />
              <Line className="absolute bg-gray_800 bottom-[26%] h-px inset-x-[0] mx-auto w-full" />
              <Line className="absolute bg-gray_800 bottom-[20%] h-px inset-x-[0] mx-auto w-full" />
              <Line className="absolute bg-gray_800 bottom-[14%] h-px inset-x-[0] mx-auto w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUserManagement