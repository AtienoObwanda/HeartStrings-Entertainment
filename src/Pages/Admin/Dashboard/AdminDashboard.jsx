import React from 'react'

import { CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "UI_Components";

import "react-circular-progressbar/dist/styles.css";

const AdminDashboard = () => {


  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black_900_01 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <aside className="flex flex-col md:hidden justify-start md:px-5 w-[247px]">
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
                  Dahboard
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
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between p-7 sm:px-5 w-full">
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-center justify-center ml-5 md:ml-[0] self-stretch w-auto sm:w-full">
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
              <div className="flex flex-row gap-[21px] items-center justify-start mr-5 self-stretch w-auto">
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
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start self-stretch w-auto md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-black_900 flex flex-col items-start justify-start p-5 rounded w-full">
                    <div className="flex flex-row gap-4 items-start justify-center ml-1 md:ml-[0] self-stretch w-auto">
                      <Button
                        className="flex h-14 items-center justify-center w-14"
                        shape="icbRoundedBorder2"
                        size="mdIcn"
                        variant="icbFillRed900"
                      >
                        <Img
                          src="images/img_iconsaxboldelement2_white_a700.svg"
                          className="h-6"
                          alt="iconsaxboldelem"
                        />
                      </Button>
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                        <Text
                          className="font-bold text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Active plays
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          10
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black_900 flex flex-col items-start justify-start p-5 rounded w-full">
                    <div className="flex flex-row gap-4 items-start justify-center ml-1 md:ml-[0] self-stretch w-auto">
                      <Button
                        className="flex h-14 items-center justify-center w-14"
                        shape="icbRoundedBorder2"
                        size="mdIcn"
                        variant="icbFillRed900"
                      >
                        <Img
                          src="images/img_iconsaxboldvideoplay.svg"
                          className="h-6"
                          alt="iconsaxboldvide"
                        />
                      </Button>
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                        <Text
                          className="font-bold text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Active streams
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-auto"
                          variant="body4"
                        >
                          150
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black_900 flex flex-col items-start justify-start p-5 rounded w-full">
                    <div className="flex flex-row gap-4 items-start justify-center ml-1 md:ml-[0] self-stretch w-auto">
                      <Button
                        className="flex h-14 items-center justify-center w-14"
                        shape="icbRoundedBorder2"
                        size="mdIcn"
                        variant="icbFillRed900"
                      >
                        <Img
                          src="images/img_iconsaxboldprofile2user.svg"
                          className="h-6"
                          alt="iconsaxboldprof"
                        />
                      </Button>
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                        <Text
                          className="font-bold text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Number of users
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-auto"
                          variant="body4"
                        >
                          150
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black_900 flex flex-col items-start justify-start p-5 rounded w-full">
                    <div className="flex flex-row gap-4 items-start justify-center ml-1 md:ml-[0] self-stretch w-auto">
                      <Button
                        className="flex h-14 items-center justify-center w-14"
                        shape="icbRoundedBorder2"
                        size="mdIcn"
                        variant="icbFillRed900"
                      >
                        <Img
                          src="images/img_iconsaxboldreceipt1_gray_300.svg"
                          className="h-6"
                          alt="iconsaxboldrece"
                        />
                      </Button>
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                        <Text
                          className="font-bold text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Tickets sold
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-auto"
                          variant="body4"
                        >
                          150
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-col flex-row font-mulish gap-6 items-center justify-between mt-6 w-full">
                  <div className="bg-black_900 flex md:flex-1 flex-col items-center justify-start p-[17px] rounded-lg w-[61%] md:w-full">
                    <div className="flex flex-col items-start justify-start my-[5px] w-[99%] md:w-full">
                      <div className="flex flex-row sm:gap-10 gap-[300px] items-center justify-start w-[620px] md:w-full">
                        <Text
                          className="font-semibold text-left text-white_A700 w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Sales
                        </Text>
                        <div className="flex flex-row font-roboto gap-6 items-center justify-start self-stretch w-auto">
                          <div className="flex flex-row gap-[21px] items-center justify-center self-stretch w-auto">
                            <div className="bg-red_900 h-2.5 rounded-[50%] w-2.5"></div>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Ticket sales
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[21px] items-center justify-center self-stretch w-auto">
                            <div className="bg-light_blue_500 h-2.5 rounded-[50%] w-2.5"></div>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Stream sales
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row font-roboto gap-4 items-center justify-between mt-6 w-full">
                        <div className="flex flex-col gap-6 items-start justify-center w-[37px]">
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-auto"
                            variant="body4"
                          >
                            100k
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-auto"
                            variant="body4"
                          >
                            80k
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-auto"
                            variant="body4"
                          >
                            60k
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-auto"
                            variant="body4"
                          >
                            40k
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-auto"
                            variant="body4"
                          >
                            20k
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-auto"
                            variant="body4"
                          >
                            0k
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-3 items-center justify-start w-[92%] md:w-full">
                          <Img
                            src="images/img_vector175.svg"
                            className="h-px w-auto"
                            alt="vector175"
                          />
                          <div className="md:h-52 sm:h-60 h-[247px] relative w-full">
                            <div className="absolute bottom-[0] h-[230px] inset-x-[0] mx-auto w-full">
                              <div className="bg-light_blue_500 h-6 mb-[-2.5px] ml-auto mr-[177px] rounded-[12px] w-[23px] z-[1]"></div>
                              <div className="h-52 sm:h-60 mt-auto mx-auto w-full">
                                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                                  <div className="flex flex-col gap-[51px] items-center justify-start w-full">
                                    <Img
                                      src="images/img_vector175.svg"
                                      className="h-px w-auto"
                                      alt="vector176"
                                    />
                                    <Img
                                      src="images/img_vector175.svg"
                                      className="h-px w-auto"
                                      alt="vector177"
                                    />
                                  </div>
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pt-[18px] w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group21.png')",
                                  }}
                                >
                                  <div
                                    className="bg-cover bg-no-repeat flex sm:flex-col flex-row sm:gap-5 h-[190px] items-start justify-center pt-[68px] md:px-10 sm:px-5 px-[68px] w-full"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group22.png')",
                                    }}
                                  >
                                    <div className="sm:h-24 md:h-[100px] h-[118px] sm:ml-[0] ml-[41px] sm:mt-0 mt-1 relative w-[6%] sm:w-full">
                                      <Line className="absolute bg-red_900 bottom-[0] h-24 inset-x-[0] mx-auto w-px" />
                                      <div className="absolute bg-red_900 border border-red_900 border-solid h-6 inset-x-[0] mx-auto rounded-[12px] top-[0] w-[23px]"></div>
                                    </div>
                                    <div className="h-[38px] ml-0.5 sm:ml-[0] mr-[247px] relative rotate-[-90deg] w-[28%] sm:w-full">
                                      <div className="h-[38px] m-auto w-full">
                                        <div className="absolute h-[38px] inset-[0] justify-center m-auto rotate-[-90deg] shadow-bs1 w-full"></div>
                                        <Img
                                          src="images/img_offer.svg"
                                          className="absolute h-3.5 inset-y-[0] left-[0] my-auto rotate-[-45deg] rounded-[50%] w-3.5"
                                          alt="offer"
                                        />
                                      </div>
                                      <Button
                                        className="absolute cursor-pointer font-normal h-full inset-y-[0] min-w-[112px] my-auto not-italic right-[0] text-base text-center text-white_A700 w-auto"
                                        shape="RoundedBorder4"
                                        size="sm"
                                        variant="FillRed900"
                                      >
                                        KES 38,000
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute h-[38px] right-[9%] rotate-[-90deg] top-[0] w-[21%]">
                              <div className="h-[38px] m-auto w-full">
                                <div className="absolute h-[38px] inset-[0] justify-center m-auto rotate-[-90deg] shadow-bs1 w-full"></div>
                                <Img
                                  src="images/img_offer_light_blue_500.svg"
                                  className="absolute h-3.5 inset-y-[0] left-[0] my-auto rotate-[-45deg] rounded-[50%] w-3.5"
                                  alt="offer_One"
                                />
                              </div>
                              <Button
                                className="absolute cursor-pointer font-normal h-full inset-y-[0] min-w-[112px] my-auto not-italic right-[0] text-base text-center text-white_A700 w-auto"
                                shape="RoundedBorder4"
                                size="sm"
                                variant="FillLightblue500"
                              >
                                KES 80,000
                              </Button>
                            </div>
                            <Line className="absolute bg-light_blue_500 bottom-[0] h-52 right-[33%] w-px" />
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-mulish sm:gap-10 gap-16 items-center justify-center ml-auto mt-3 w-[589px] sm:w-full">
                        <Text
                          className="font-normal not-italic text-black_900_02 text-left w-auto"
                          variant="body4"
                        >
                          Sun
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_02 text-left w-auto"
                          variant="body4"
                        >
                          Mon
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_02 text-left w-auto"
                          variant="body4"
                        >
                          Tue
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_02 text-left w-auto"
                          variant="body4"
                        >
                          Wed
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_02 text-left w-auto"
                          variant="body4"
                        >
                          Thur
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_02 text-left w-auto"
                          variant="body4"
                        >
                          Fri
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_02 text-left w-auto"
                          variant="body4"
                        >
                          Sat
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black_900 flex md:flex-1 flex-col font-roboto gap-4 items-start justify-start p-4 rounded w-[37%] md:w-full">
                    <div className="flex flex-col gap-4 items-start justify-center ml-2 md:ml-[0] self-stretch w-auto">
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Order/Ticket status
                      </Text>
                      <div className="flex flex-row gap-12 items-center justify-center self-stretch w-auto">
                        <div className="h-[180px] relative w-[180px]">
                          <div className="!w-[180px] h-[180px] m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[180px] h-[180px] m-auto overflow-visible"
                              value={42}
                              strokeWidth={16}
                              styles={{
                                trail: { strokeWidth: 17, stroke: "#00acee" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(45deg)",
                                  stroke: "#c71a1a",
                                },
                              }}
                            ></CircularProgressbar>
                          </div>
                          <div className="!w-[180px] absolute h-[180px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[180px] absolute h-[180px] inset-[0] justify-center m-auto overflow-visible"
                              value={24}
                              counterClockwise
                              strokeWidth={17}
                              styles={{
                                trail: { strokeWidth: 16, stroke: "#c71a1a" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(45deg)",
                                  stroke: "#0b0c0f",
                                },
                              }}
                            ></CircularProgressbar>
                          </div>
                        </div>
                        <div className="flex flex-col gap-6 items-start justify-center self-stretch w-auto">
                          <div className="flex flex-row gap-[21px] items-center justify-center self-stretch w-auto">
                            <div className="bg-red_900 h-2.5 rounded-[50%] w-2.5"></div>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Sold
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[21px] items-center justify-center self-stretch w-auto">
                            <div className="bg-light_blue_500 h-2.5 rounded-[50%] w-2.5"></div>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Reserved
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[21px] items-center justify-center self-stretch w-auto">
                            <div className="bg-black_900_01 h-2.5 rounded-[50%] w-2.5"></div>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Available
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black_900_01 flex flex-col gap-4 items-start justify-center ml-2 md:ml-[0] pl-4 sm:pr-5 pr-8 py-2 rounded-lg self-stretch w-auto">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        Comparison
                      </Text>
                      <div className="flex flex-col gap-3 items-start justify-center self-stretch w-auto">
                        <div className="flex flex-row gap-[39px] items-center justify-start self-stretch w-auto">
                          <Text
                            className="not-italic text-gray_300 text-left w-auto"
                            variant="body5"
                          >
                            Last Week
                          </Text>
                          <Text
                            className="font-bold text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            150 tickets sold
                          </Text>
                        </div>
                        <div className="flex flex-row gap-10 items-center justify-start self-stretch w-auto">
                          <Text
                            className="not-italic text-gray_300 text-left w-auto"
                            variant="body5"
                          >
                            This Week
                          </Text>
                          <Text
                            className="font-bold text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            800 tickets sold
                          </Text>
                          <Text
                            className="not-italic text-left text-light_blue_500 w-auto"
                            variant="body5"
                          >
                            +4.5%
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        <Line className="bg-gray_800 h-px w-full" />
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
                        <Line className="bg-gray_800 h-px w-full" />
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
                        <Line className="bg-gray_800 h-px w-full" />
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

