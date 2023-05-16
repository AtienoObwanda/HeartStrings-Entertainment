import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Img, Line, ReactTable, Text } from "Components";

const TicketPopUp = () => {
  const table1Data = React.useRef([
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
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("play", {
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
      table1ColumnHelper.accessor("dateandtime", {
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
      table1ColumnHelper.accessor("seats", {
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
      table1ColumnHelper.accessor("location", {
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
      table1ColumnHelper.accessor("priceSix", {
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
      <div className="bg-black_900_01 flex flex-col font-roboto mx-auto relative w-full">
        <div className="flex flex-col md:gap-10 gap-[350px] justify-start max-w-[1390px] mt-[-NaNpx] mx-auto md:px-5 w-full z-[1]">
          <div className="flex flex-row md:gap-10 gap-[809px] items-center justify-end ml-auto p-7 sm:px-5 w-[86%] md:w-full">
            <div className="flex flex-col items-center justify-center self-stretch w-auto">
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
          <div className="flex flex-col gap-8 items-start justify-start w-[6%] md:w-full">
            <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
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
            <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
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
        </div>
        <div className="overflow-auto ml-auto mt-[-439px] md:px-5 w-[83%] z-[1]">
          <ReactTable
            columns={table1Columns}
            data={table1Data.current}
            rowClass={""}
            headerClass=""
          />
        </div>
        <div className="h-[1024px] md:h-[NaNpx] mb-auto mt-[-NaNpx] mx-auto md:px-5 w-full z-[1]">
          <aside className="bg-black_900 flex flex-col md:hidden justify-start my-auto w-[18%]">
            <Img
              src="images/img_dummylogo02.svg"
              className="h-14 ml-6 md:ml-[0] mr-[87px] mt-12 w-auto"
              alt="dummylogoTwo"
            />
            <div className="flex flex-row gap-2 items-center justify-center ml-6 md:ml-[0] mr-[9px] mt-16 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 self-stretch w-auto">
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
            <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] mt-3 mx-6 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 w-[199px]">
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
            <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mb-[678px] md:ml-[0] mt-[22px] mx-6 pl-6 md:pr-10 pr-[66px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto">
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
          </aside>
          <div className="absolute bg-white_A700_63 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[115px] md:px-10 sm:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[793px] items-center justify-start pb-6 w-[38%] md:w-full"
              style={{ backgroundImage: "url('images/img_ticket.svg')" }}
            >
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-red_900 flex flex-row items-center justify-center pb-8 sm:px-5 px-8 rounded-bl-none rounded-br-none rounded-tl-[40px] rounded-tr-[40px] w-full">
                    <div className="bg-white_A700 h-[76px] ml-[336px] mr-2.5 p-2.5 rounded-bl-lg rounded-br-lg rounded-tl-none rounded-tr-none w-[13%]"></div>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-6 self-stretch w-auto">
                    <div className="h-7 w-[87%]"></div>
                  </div>
                  <div className="flex flex-row gap-6 items-center justify-center mt-5 self-stretch w-auto">
                    <div className="h-[87px] w-[16%]"></div>
                    <div className="h-[87px] w-[32%]"></div>
                    <div className="h-[87px] w-[38%]"></div>
                  </div>
                  <div className="flex flex-col h-7 md:h-auto items-center justify-center mt-[430px] w-[108px]">
                    <div className="h-7 w-full"></div>
                  </div>
                </div>
                <div className="h-7 w-[31%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketPopUp;