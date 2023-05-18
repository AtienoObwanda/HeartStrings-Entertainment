import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Line, Text } from "Components";
import close from "../../../assets/close.svg";
import  menu from "../../../assets/menu.svg";

const EditMyAccount  = (props) => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

    return (
      <>
        <div className="bg-black_900_01 flex flex-col font-roboto items-center justify-start mx-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            {/* Side Bar */}
            {/* Display on Large Screens  */}
            {/* <aside className="flex flex-col md:hidden justify-start md:px-5 w-[247px]"> */}
            <aside className="md:hidden flex bg-black_900 justify-start md:px-5 w-[247px]">

              <div className="flex flex-col justify-start mb-[476px] mt-12 mx-auto w-[81%]">
                <Img
                  src="images/img_dummylogo02.svg"
                  className="common-pointer h-14 w-auto"
                  alt="dummylogoTwo"
                  onClick={() => navigate("/")}
                />
                <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-16 pl-6 md:pr-10 pr-[58px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto">
                  <Img
                    src="images/img_iconsaxbolduser.svg"
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
                <div
                  className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto"
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
                <div
                  className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto"
                  onClick={() => navigate("/mytickets")}
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
                    My Tickets
                  </Text>
                </div>
                <Line className="bg-gray_800 h-px mt-[60px] w-full" />
                <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-[63px] self-stretch w-auto">
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
              </div>

            </aside>

            {/* Display Medium Screens  */}
            <aside className="hidden md:flex justify-start md:px-5 w-[247px]">

                  <div className="flex flex-col justify-start mb-[476px] mt-12 mx-auto w-[81%]">
                  {/* 
                  Logo Coming First:

                  <div style={{ display: "flex" }}>
                      <Img
                        src="images/img_dummylogo02.svg"
                        className="common-pointer h-14 w-auto ml-auto"
                        alt="dummylogoTwo"
                        onClick={() => navigate("/")}
                      />
                      <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain ml-[200px] pt-3"
                        onClick={() => setToggle((prev) => !prev)}
                      />
                    </div> */}


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
                        p-6 bg-black_900 absolute top-20 left-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar`}
                        >
                        <ul className="list-none justify-start items-center flex-1">
                            <li className="py-3 cursor-pointer text-16">
                              
                              <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-16 pl-6 md:pr-10 pr-[58px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto">
                                <Img
                                  src="images/img_iconsaxbolduser.svg"
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
                                <div
                                    className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto"
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
                            </li>

                            <li className="py-3 cursor-pointer text-16">
                              <div
                                  className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto"
                                    onClick={() => navigate("/mytickets")}
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
                                      My Tickets
                                    </Text>
                              </div>
                            </li>

                            <Line className="bg-gray_800 h-px mt-[60px] w-full" />


                            <li className="py-3 cursor-pointer text-16"> 
                                  <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-[63px] self-stretch w-auto">
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
                            </li>

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

            {/* End Of Sidebar */}

            <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
              {/* User Nav */}
              <div className="flex sm:flex flex-row md:gap-10 items-center justify-between p-7 sm:px-5 w-full md:mt-[-400px]">
                
                <div className="flex flex-col items-start justify-center ml-5 sm:ml-0 self-stretch w-auto">
                  <Text
                    className="md:text-left text-white_A700 w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Account overview
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
                      Hi, Gloria
                    </Text>
                  </div>
                </div>
              </div>



                {/* End of nav */}

              <div className="flex flex-col items-center justify-start pb-[26px] sm:px-5 px-[26px] w-full">
                <div className="flex flex-col gap-12 items-start justify-start w-[97%] md:w-full">
                  
                  {/* Top Section */}
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col gap-3 items-start justify-center self-stretch w-auto sm:pt-5">
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        Personal information
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_300 text-left w-auto"
                        variant="body4"
                      >
                        Update your personal information
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] sm:gap-[120px] items-start justify-start self-stretch w-auto sm:pt-5">
                      <Button
                        className="cursor-pointer font-bold min-w-[94px] text-center text-white_A700 text-xl w-auto"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="OutlineWhiteA700_1"
                      >
                        Cancel
                      </Button>
                      <Button
                        className="cursor-pointer font-bold min-w-[76px] text-center text-white_A700 text-xl w-auto"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="FillGray900"
                      >
                        Save
                      </Button>
                    </div>
                </div>

                    {/* End of top Section */}

                  {/* Edit Details section */}
                <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Name
                      </Text>
                      <Input
                        wrapClassName="w-full"
                        className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                        name="groupTwentyFour"
                        placeholder="Wade Warren"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillGray800"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Email address
                      </Text>
                      <Input
                        wrapClassName="w-full"
                        className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                        type="email"
                        name="email"
                        placeholder="sara.cruz@example.com"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillGray800"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Phone number
                      </Text>
                      <Input
                        wrapClassName="w-full"
                        className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                        name="groupTwentySix"
                        placeholder="(205) 555-0100"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillGray800"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-auto"
                        variant="body4"
                      >
                        Password
                      </Text>
                      <Input
                        wrapClassName="w-full"
                        className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                        name="password_One"
                        placeholder="******************"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillGray800"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-bold text-left text-white_A700 w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Password settings
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[209px] w-auto"
                      onClick={() => navigate("/myaccount")}
                      leftIcon={
                        <Img
                          src="images/img_iconsax_linear_passwordcheck.svg"
                          className="mr-4"
                          alt="Iconsax/Linear/passwordcheck"
                        />
                      }
                      shape="RoundedBorder8"
                      size="md"
                      variant="OutlineWhiteA700_1"
                    >
                      <div className="font-bold text-base text-left text-white_A700">
                        Change password
                      </div>
                    </Button>
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
  

export default EditMyAccount