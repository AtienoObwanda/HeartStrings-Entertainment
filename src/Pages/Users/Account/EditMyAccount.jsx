import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Line, Text } from "Components";


const EditMyAccount = () => {
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
            <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-16 mx-auto pl-6 md:pr-10 pr-[58px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto">
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
              className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[50px] mr-[81px] mt-8 self-stretch w-auto"
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
              className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[50px] mr-[88px] mt-8 self-stretch w-auto"
              onClick={() => navigate("/mytickets")}
            >
              <Img
                src="images/img_iconsaxboldreceipt1.svg"
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
            <Line className="bg-gray_800 h-px mt-[60px] mx-auto w-[81%]" />
            <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[50px] mr-[132px] mt-[63px] self-stretch w-auto">
              <Img
                src="images/img_iconsaxboldmessagequestion.svg"
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
            <div className="flex flex-row gap-2 items-center justify-center mb-[476px] md:ml-[0] ml-[50px] mr-[115px] mt-8 self-stretch w-auto">
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
          <div className="flex-1 h-[1024px] md:h-[917px] sm:h-[952px] md:px-5 relative w-full">
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[47px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-12 items-start justify-start mb-[223px] mt-[13px] w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col gap-2 items-start justify-center self-stretch w-auto">
                    <Text
                      className="font-bold text-left text-white_A700 w-auto"
                      as="h6"
                      variant="h6"
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
                  <div className="flex flex-row gap-[25px] items-start justify-start self-stretch w-auto">
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
            <div className="absolute flex sm:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto p-[38px] sm:px-5 top-[0] w-full">
              <Text
                className="sm:ml-[0] ml-[9px] text-left text-white_A700 w-auto"
                as="h2"
                variant="h2"
              >
                Account overview
              </Text>
              <div className="flex flex-row gap-[21px] items-center justify-start mr-[9px] self-stretch w-auto">
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
          </div>
        </div>
      </>
    );
  };
  

export default EditMyAccount