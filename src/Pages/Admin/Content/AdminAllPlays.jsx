import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Line, List, Text } from "UI_Components";

const AdminAllPlays = () => {

    const navigate = useNavigate();
  
    return (
      <>
        <div className="bg-black_900_01 flex sm:flex-col md:flex-col flex-row font-roboto sm:gap-5 md:gap-5 items-start mx-auto w-full">
          <aside className="flex flex-col md:hidden justify-start md:px-5 w-[247px]">
            <div className="flex flex-col items-start justify-start mb-[420px] ml-6 mr-4 mt-12 w-[84%]">
              <Img
                src="images/img_dummylogo02.svg"
                className="common-pointer h-14 w-auto"
                alt="dummylogoTwo"
                onClick={() => navigate("/")}
              />
              <div
                className="common-pointer flex flex-row gap-2 items-center justify-center mt-16 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 self-stretch w-auto"
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
              <div className="bg-gray_800 flex flex-row gap-2 items-center justify-start mt-4 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 rounded-lg w-[199px]">
                <Img
                  src="images/img_iconsaxboldelement2_white_a700.svg"
                  className="h-6 w-6"
                  alt="iconsaxboldelem"
                />
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-auto"
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
              <Line className="bg-gray_800 h-px mt-16 w-[97%]" />
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
          <div className="flex-1 h-[1123px] md:h-[175px] md:px-5 relative w-full">
            <div className="absolute bottom-[0] flex flex-col gap-6 inset-x-[0] items-center justify-start mx-auto p-12 md:px-10 sm:px-5 w-full">
              <div className="flex flex-row md:gap-10 gap-[840px] items-center justify-between self-stretch w-auto md:w-full">
                <Text
                  className="font-bold text-left text-white_A700 w-auto"
                  as="h5"
                  variant="h5"
                >
                  All plays
                </Text>
                <Button
                  className="common-pointer cursor-pointer flex items-center justify-center min-w-[164px] w-auto"
                  onClick={() => navigate("/adminaddplay")}
                  leftIcon={
                    <Img
                      src="images/img_iconsax_bold_addcircle.svg"
                      className="mb-px mr-4"
                      alt="Iconsax/Bold/addcircle"
                    />
                  }
                  shape="RoundedBorder8"
                  size="lg"
                  variant="FillRed900"
                >
                  <div className="font-bold text-left text-white_A700 text-xl">
                    Post play
                  </div>
                </Button>
              </div>
              <List
                className="flex-col md:gap-10 gap-16 grid items-center mb-[30px] w-full"
                orientation="vertical"
              >
                <div className="flex md:flex-1 md:flex-col flex-row gap-[25px] items-start justify-start self-stretch w-auto md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                    <div className="h-[299px] relative w-full">
                      <Img
                        src="images/img_rectangle4_200x256.png"
                        className="h-[299px] m-auto object-cover rounded-lg w-full"
                        alt="rectangleFour"
                      />
                      <Img
                        src="images/img_frame40161.svg"
                        className="absolute h-[104px] right-[6%] top-[5%] w-11"
                        alt="frame40161"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start self-stretch w-auto">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Bridegroom for sale
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        src="images/img_rectangle8_300x557.png"
                        className="h-[299px] md:h-auto object-cover rounded-lg w-full"
                        alt="rectangleFour_One"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start self-stretch w-auto">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Bridegroom for sale
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        src="images/img_rectangle8_1.png"
                        className="h-[299px] md:h-auto object-cover rounded-lg w-full"
                        alt="rectangleFour_Two"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start self-stretch w-auto">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Bridegroom for sale
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        src="images/img_rectangle8_191x332.png"
                        className="h-[299px] md:h-auto object-cover rounded-lg w-full"
                        alt="rectangleFour_Three"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start self-stretch w-auto">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Bridegroom for sale
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-6 items-start justify-start self-stretch w-auto md:w-full">
                  <div className="flex flex-col items-center justify-center self-stretch w-auto sm:w-full">
                    <CheckBox
                      className="font-bold text-2xl md:text-[22px] text-left text-white_A700 sm:text-xl"
                      inputClassName="mr-[5px]"
                      name="archivedplays"
                      id="archivedplays"
                      label="Archived plays"
                      size="sm"
                    ></CheckBox>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[25px] items-start justify-start self-stretch w-auto md:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                      <div className="h-[299px] relative w-full">
                        <Img
                          src="images/img_rectangle4_200x256.png"
                          className="h-[299px] m-auto object-cover rounded-lg w-full"
                          alt="rectangleFour"
                        />
                        <Button
                          className="absolute flex h-11 items-center justify-center right-[6%] top-[5%] w-11"
                          shape="icbRoundedBorder2"
                          size="smIcn"
                          variant="icbFillGray800"
                        >
                          <Img
                            src="images/img_file.svg"
                            className=""
                            alt="file"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start self-stretch w-auto">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Bridegroom for sale
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          src="images/img_rectangle8_300x557.png"
                          className="h-[299px] md:h-auto object-cover rounded-lg w-full"
                          alt="rectangleFour_One"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start self-stretch w-auto">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Bridegroom for sale
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          src="images/img_rectangle8.png"
                          className="h-[299px] md:h-auto object-cover rounded-lg w-full"
                          alt="rectangleFour_Two"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start self-stretch w-auto">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Bridegroom for sale
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          src="images/img_rectangle8_191x332.png"
                          className="h-[299px] md:h-auto object-cover rounded-lg w-full"
                          alt="rectangleFour_Three"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start self-stretch w-auto">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Bridegroom for sale
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="absolute flex flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto p-6 sm:px-5 top-[0] w-full">
              <div className="flex flex-col items-center justify-center ml-6 mt-[9px] self-stretch w-auto">
                <Text
                  className="text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  Plays
                </Text>
              </div>
              <div className="flex flex-row gap-[21px] items-center justify-start mr-6 self-stretch w-auto">
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
  

export default AdminAllPlays