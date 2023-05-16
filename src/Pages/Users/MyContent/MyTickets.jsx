import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Img, Line, ReactTable, Text } from "Components";

const MyTickets = () => {
  const tableData = React.useRef([
    {
      play: "KSH 3,000",
      dateandtime: "Monday 4 -17 - 2023 | 1:23 PM",
      seats: "A1, A2, A3, A4",
      location: "Alliance Francaise",
      priceSix: "images/img_frame40131.svg",
    },
    {
      play: "KSH 3,000",
      dateandtime: "Monday 4 -17 - 2023 | 1:23 PM",
      seats: "A1, A2, A3, A4",
      location: "Alliance Francaise",
      priceSix: "images/img_frame40131.svg",
    },
    {
      play: "KSH 3,000",
      dateandtime: "Monday 4 -17 - 2023 | 1:23 PM",
      seats: "A1, A2, A3, A4",
      location: "Alliance Francaise",
      priceSix: "images/img_frame40131.svg",
    },
    {
      play: "KSH 3,000",
      dateandtime: "Monday 4 -17 - 2023 | 1:23 PM",
      seats: "A1, A2, A3, A4",
      location: "Alliance Francaise",
      priceSix: "images/img_frame40131.svg",
    },
    {
      play: "KSH 3,000",
      dateandtime: "Monday 4 -17 - 2023 | 1:23 PM",
      seats: "A1, A2, A3, A4",
      location: "Alliance Francaise",
      priceSix: "images/img_frame40131.svg",
    },
    {
      play: "KSH 3,000",
      dateandtime: "Monday 4 -17 - 2023 | 1:23 PM",
      seats: "A1, A2, A3, A4",
      location: "Alliance Francaise",
      priceSix: "images/img_frame40131.svg",
    },
  ]);
  const navigate = useNavigate();
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

  return (
    <>
      <div className="bg-black_900_01 flex sm:flex-col md:flex-col flex-row font-roboto sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <aside className="bg-black_900 flex flex-col md:hidden justify-start md:px-5 w-[247px]">
          <Img
            src="images/img_dummylogo02.svg"
            className="common-pointer h-14 ml-6 md:ml-[0] mr-[87px] mt-12 w-auto"
            alt="dummylogoTwo"
            onClick={() => navigate("/")}
          />
          <div
            className="common-pointer flex flex-row gap-2 items-center justify-center ml-6 md:ml-[0] mr-[9px] mt-16 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 self-stretch w-auto"
            onClick={() => navigate("/editmyaccount")}
          >
            <Img
              src="images/img_iconsaxbolduser_gray_300.svg"
              className="h-6 w-6"
              alt="iconsaxbolduser"
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
            onClick={() => navigate("/mystreams")}
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
              My streams
            </Text>
          </div>
          <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-[22px] mx-auto pl-6 md:pr-10 pr-[66px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto">
            <Img
              src="images/img_iconsaxboldreceipt1.svg"
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
          <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[50px] mr-[132px] mt-[63px] self-stretch w-auto">
            <Img
              src="images/img_iconsaxboldmessagequestion_gray_300.svg"
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
          <div className="flex flex-row gap-2 items-center justify-center mb-[466px] md:ml-[0] ml-[50px] mr-[115px] mt-8 self-stretch w-auto">
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
        </aside>
        <div className="flex-1 h-[1024px] md:px-5 relative w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between mb-[-1px] mx-auto p-7 sm:px-5 w-full z-[1]">
            <div className="flex flex-col items-center justify-center ml-5 self-stretch w-auto">
              <Text
                className="text-left text-white_A700 w-auto"
                as="h2"
                variant="h2"
              >
                My Tickets
              </Text>
            </div>
            <div className="flex flex-row gap-[21px] items-center justify-start mr-5 self-stretch w-auto">
              <Img src="images/img_share.svg" className="h-6 w-6" alt="share" />
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
          <div className="overflow-auto mt-auto mx-auto w-full">
            <ReactTable
              columns={tableColumns}
              data={tableData.current}
              rowClass={""}
              headerClass=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTickets;