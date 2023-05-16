import React from "react";
import { Img, List, Text } from "Components";
import WhiteIcon from "Components/WhiteIcon";
import LibrarySmallnoicon from "Components/LibrarySmallnoicon";
import Sidebar from "Components/Sidebar";

const MyStreamLibrary = () => {
  return (
    <>
      <div className="bg-black_900_01 font-roboto h-[1024px] mx-auto relative w-full">
        <div className="absolute bottom-[0] flex flex-col items-start justify-start p-4 md:px-5 right-[0] w-[83%]">
          <div className="flex flex-col items-start justify-center ml-8 md:ml-[0] self-stretch w-auto">
            <Text
              className="font-normal not-italic text-gray_300 text-left w-auto"
              variant="body4"
            >
              Streamed plays that you have purchased.
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-start justify-center ml-8 md:ml-[0] mt-6 self-stretch w-auto md:w-full">
            <Text
              className="font-bold text-left text-white_A700 w-auto"
              as="h5"
              variant="h5"
            >
              Recently purchased
            </Text>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start self-stretch w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                <div className="h-[200px] relative w-full">
                  <Img
                    src="images/img_rectangle4_200x256.png"
                    className="h-[200px] m-auto object-cover rounded-lg w-full"
                    alt="rectangleFour"
                  />
                  <Img
                    src="images/img_materialsymbolsplaycircle_white_a700.svg"
                    className="absolute h-12 inset-[0] justify-center m-auto w-12"
                    alt="materialsymbols"
                  />
                </div>
                <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                  <div className="flex flex-col items-center justify-start self-stretch w-auto">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Bridegroom for sale
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
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
                    <div className="flex flex-col items-start justify-start self-stretch w-auto">
                      <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                        <Img
                          src="images/img_iconsaxboldtimer.svg"
                          className="h-6 w-6"
                          alt="iconsaxboldtime"
                        />
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          7 days to go
                        </Text>
                      </div>
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
                <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                  <div className="flex flex-col items-center justify-start self-stretch w-auto">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Bridegroom for sale
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
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
                    <div className="flex flex-col items-start justify-start self-stretch w-auto">
                      <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                        <Img
                          src="images/img_iconsaxboldtimer.svg"
                          className="h-6 w-6"
                          alt="iconsaxboldtime"
                        />
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          7 days to go
                        </Text>
                      </div>
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
                <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                  <div className="flex flex-col items-center justify-start self-stretch w-auto">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Bridegroom for sale
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
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
                    <div className="flex flex-col items-start justify-start self-stretch w-auto">
                      <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                        <Img
                          src="images/img_iconsaxboldtimer.svg"
                          className="h-6 w-6"
                          alt="iconsaxboldtime"
                        />
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          7 days to go
                        </Text>
                      </div>
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
                    className="absolute h-12 inset-[0] justify-center m-auto w-12"
                    alt="materialsymbols"
                  />
                </div>
                <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                  <div className="flex flex-col items-center justify-start self-stretch w-auto">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Bridegroom for sale
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
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
                    <div className="flex flex-col items-start justify-start self-stretch w-auto">
                      <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                        <Img
                          src="images/img_iconsaxboldtimer.svg"
                          className="h-6 w-6"
                          alt="iconsaxboldtime"
                        />
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          7 days to go
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-4 items-start justify-center mb-[108px] ml-8 md:ml-[0] mt-12 self-stretch w-auto">
            <Text
              className="font-bold text-left text-white_A700 w-auto"
              as="h5"
              variant="h5"
            >
              Watched
            </Text>
            <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
              <div className="h-[200px] relative w-full">
                <Img
                  src="images/img_rectangle4_4.png"
                  className="absolute h-[200px] inset-[0] justify-center m-auto object-cover rounded-lg w-full"
                  alt="rectangleFour"
                />
                <Img
                  src="images/img_materialsymbolsplaycircle_black_900.svg"
                  className="absolute h-12 inset-[0] justify-center m-auto w-12"
                  alt="materialsymbols"
                />
                <div className="absolute flex flex-col gap-[35px] h-max inset-[0] items-center justify-start m-auto self-stretch w-auto">
                  <LibrarySmallnoicon
                    className="bg-red_900 flex flex-col gap-2.5 items-center justify-center px-4 py-2.5 rounded-lg w-[154px] sm:w-full"
                    gettickets="Rent again"
                  />
                  <WhiteIcon
                    className="bg-white_A700 border border-solid border-white_A700 flex flex-col gap-4 items-center justify-center px-5 py-2.5 rounded-lg self-stretch w-auto sm:w-full"
                    streamplays="Watch trailer"
                  />
                </div>
                <Img
                  src="images/img_settings.svg"
                  className="absolute bottom-[0] h-6 right-[3%] w-6"
                  alt="settings"
                />
              </div>
              <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                <div className="flex flex-col items-center justify-start self-stretch w-auto">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Bridegroom for sale
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center self-stretch w-auto">
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
            </div>
          </div>
        </div>
        <Sidebar className="absolute bg-black_900 flex flex-col md:hidden inset-y-[0] justify-start left-[0] my-auto md:px-5 w-[18%]" />
        <div className="absolute flex flex-row md:gap-10 items-center justify-between max-w-[1193px] p-7 md:px-5 right-[0] top-[0] w-full">
          <div className="flex flex-col items-center justify-center ml-5 self-stretch w-auto">
            <Text
              className="text-left text-white_A700 w-auto"
              as="h2"
              variant="h2"
            >
              My streams
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
        <div className="absolute bg-white_A700_63 flex flex-col h-full inset-[0] items-end justify-center m-auto p-12 md:px-10 sm:px-5 w-full">
          <div className="h-[690px] md:h-[927px] mb-[121px] mt-[117px] relative w-[82%] md:w-full">
            <div className="absolute h-[689px] inset-[0] justify-center m-auto w-full">
              <Img
                src="images/img_rectangle4_200x256.png"
                className="h-[689px] m-auto object-cover rounded-lg w-full"
                alt="rectangleFour_One"
              />
              <Img
                src="images/img_materialsymbolsplaycircle_white_a700.svg"
                className="absolute h-16 inset-[0] justify-center m-auto w-16"
                alt="materialsymbols_One"
              />
            </div>
            <Img
              src="images/img_tube1.png"
              className="absolute bottom-[0] h-[29px] inset-x-[0] mx-auto object-cover w-[44%]"
              alt="tubeOne"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStreamLibrary;