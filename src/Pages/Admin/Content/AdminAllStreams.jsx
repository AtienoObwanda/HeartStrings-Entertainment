import React from 'react'

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "UI_Components";

const AdminAllStreams = () => {

  const navigate = useNavigate();

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
            className="common-pointer flex flex-row gap-2 items-center justify-center ml-6 md:ml-[0] mr-4 mt-16 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 self-stretch w-auto"
            onClick={() => navigate("/admindashboard")}
          >
            <Img
              src="images/img_iconsaxboldactivity_gray_300.svg"
              className="h-6 w-6"
              alt="iconsaxboldacti"
            />
            <Text
              className="font-normal not-italic text-gray_300 text-left w-auto"
              variant="body4"
            >
              Dashboard
            </Text>
          </div>
          <div
            className="common-pointer flex flex-row gap-2 items-center justify-start mt-4 mx-auto pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 w-[199px]"
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
          <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-4 mx-auto pl-6 md:pr-10 pr-[83px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto">
            <Img
              src="images/img_iconsaxboldvideoplay_white_a700.svg"
              className="h-6 w-6"
              alt="iconsaxboldvide"
            />
            <Text
              className="font-normal not-italic text-left text-white_A700 w-auto"
              variant="body4"
            >
              Streams
            </Text>
          </div>
          <div className="flex flex-col gap-9 items-start justify-start md:ml-[0] ml-[50px] mr-[34px] mt-9 self-stretch w-auto">
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
          <Line className="bg-gray_800 h-px mt-16 mx-auto w-[81%]" />
          <div className="flex flex-row gap-2 items-center justify-center mb-[420px] md:ml-[0] ml-[50px] mr-[115px] mt-[63px] self-stretch w-auto">
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
        <div className="flex-1 h-[1024px] md:h-[1198px] sm:h-[1776px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col gap-6 inset-x-[0] items-center justify-center mx-auto p-[46px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-row md:gap-10 gap-[788px] items-center justify-between mt-0.5 self-stretch w-auto md:w-full">
              <div className="flex flex-col items-start justify-center self-stretch w-auto">
                <div className="flex flex-col items-start justify-center self-stretch w-auto">
                  <Text
                    className="font-bold text-left text-white_A700 w-auto"
                    as="h5"
                    variant="h5"
                  >
                    All Streams
                  </Text>
                </div>
              </div>
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[184px] w-auto"
                onClick={() => navigate("/adminaddstream")}
                leftIcon={
                  <Img
                    src="images/img_iconsax_bold_addcircle.svg"
                    className="mt-px"
                    alt="Iconsax/Bold/addcircle"
                  />
                }
                shape="RoundedBorder8"
                size="lg"
                variant="FillRed900"
              >
                <div className="font-bold text-left text-white_A700 text-xl">
                  Add stream
                </div>
              </Button>
            </div>
            <div className="md:h-[1025px] sm:h-[1603px] h-[275px] mb-[472px] relative w-full">
              <div className="flex flex-row h-full items-center justify-between ml-[104px] mt-[59px] w-[56%]">
                <Img
                  src="images/img_materialsymbolsplaycircle_black_900.svg"
                  className="h-12 w-12"
                  alt="materialsymbols"
                />
                <Img
                  src="images/img_materialsymbolsplaycircle_white_a700.svg"
                  className="h-12 w-12"
                  alt="materialsymbols_One"
                />
                <Img
                  src="images/img_materialsymbolsplaycircle_white_a700.svg"
                  className="h-12 w-12"
                  alt="materialsymbols_Two"
                />
              </div>
              <List
                className="absolute sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 inset-[0] justify-start m-auto self-stretch w-auto"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                  <div className="h-[200px] relative w-full">
                    <Img
                      src="images/img_rectangle8_570x1140.png"
                      className="h-[200px] m-auto object-cover rounded-lg w-full"
                      alt="rectangleFour"
                    />
                    <Button
                      className="absolute flex h-11 items-center justify-center right-[6%] top-[5%] w-11"
                      shape="icbRoundedBorder2"
                      size="smIcn"
                      variant="icbFillGray800"
                    >
                      <Img
                        src="images/img_camera.svg"
                        className="h-6"
                        alt="camera"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center self-stretch w-auto">
                    <div className="flex flex-col items-center justify-start self-stretch w-auto">
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Bridegroom for sale
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                      <Img
                        src="images/img_mdiclocktimenine.svg"
                        className="h-6 w-6"
                        alt="mdiclocktimenin"
                      />
                      <div className="flex flex-col items-start justify-start self-stretch w-auto">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          1hr 20mins
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                  <div className="h-[200px] relative w-full">
                    <Img
                      src="images/img_rectangle8_300x557.png"
                      className="h-[200px] m-auto object-cover rounded-lg w-full"
                      alt="rectangleFour"
                    />
                    <Img
                      src="images/img_materialsymbolsplaycircle_white_a700.svg"
                      className="absolute h-12 inset-[0] justify-center m-auto w-12"
                      alt="materialsymbols"
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center self-stretch w-auto">
                    <div className="flex flex-col items-center justify-start self-stretch w-auto">
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Bridegroom for sale
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                      <Img
                        src="images/img_mdiclocktimenine.svg"
                        className="h-6 w-6"
                        alt="mdiclocktimenin"
                      />
                      <div className="flex flex-col items-start justify-start self-stretch w-auto">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          1hr 20mins
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                  <div className="h-[200px] relative w-full">
                    <Img
                      src="images/img_rectangle8_1.png"
                      className="h-[200px] m-auto object-cover rounded-lg w-full"
                      alt="rectangleFour"
                    />
                    <Img
                      src="images/img_materialsymbolsplaycircle_white_a700.svg"
                      className="absolute h-12 inset-[0] justify-center m-auto w-12"
                      alt="materialsymbols"
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center self-stretch w-auto">
                    <div className="flex flex-col items-center justify-start self-stretch w-auto">
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Bridegroom for sale
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                      <Img
                        src="images/img_mdiclocktimenine.svg"
                        className="h-6 w-6"
                        alt="mdiclocktimenin"
                      />
                      <div className="flex flex-col items-start justify-start self-stretch w-auto">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          1hr 20mins
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                  <div className="h-[200px] relative w-full">
                    <Img
                      src="images/img_rectangle8_191x332.png"
                      className="h-[200px] m-auto object-cover rounded-lg w-full"
                      alt="rectangleFour"
                    />
                    <Img
                      src="images/img_materialsymbolsplaycircle_white_a700.svg"
                      className="absolute h-12 inset-x-[0] mx-auto top-[30%] w-12"
                      alt="materialsymbols"
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-center self-stretch w-auto">
                    <div className="flex flex-col items-center justify-start self-stretch w-auto">
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Bridegroom for sale
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                      <Img
                        src="images/img_mdiclocktimenine.svg"
                        className="h-6 w-6"
                        alt="mdiclocktimenin"
                      />
                      <div className="flex flex-col items-start justify-start self-stretch w-auto">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          1hr 20mins
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="absolute flex flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto p-[29px] sm:px-5 top-[0] w-full">
            <Text
              className="ml-[19px] text-left text-white_A700 w-auto"
              as="h2"
              variant="h2"
            >
              Streams
            </Text>
            <div className="flex flex-row gap-[21px] items-center justify-start mr-[19px] self-stretch w-auto">
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
        </div>
      </div>
    </>
  );
};

export default AdminAllStreams