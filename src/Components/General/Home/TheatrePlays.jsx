import React from 'react'
import { Button, Img, List, Text } from "UI_Components";
import ColumnPrice from "UI_Components/ColumnPrice/ColumnPrice";


const TheatrePlays = () => {
  return (
    <>
      {/* Plays At The Theatre Section */}

      <div className="flex flex-col gap-12 items-center justify-center max-w-[1140px] mt-10 mx-auto md:px-5 self-stretch w-full">
          <div className="flex flex-col gap-1 items-center justify-center self-stretch w-auto md:w-full">
          <Text
            className="text-left text-white_A700 w-auto font-roboto"
            as="h1"
            variant="h1"
            style={{ fontSize: '52px', lineHeight: '106px' }}
            >
            Plays at the theatre
            </Text>

            <Text
              className="font-normal not-italic text-gray_300 text-left w-auto"
              as="h5"
              variant="h5"
            >
              Our lineup is better than before!
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-black_900_01 flex md:flex-col flex-row md:gap-5 items-start justify-start p-6 sm:px-5 rounded-lg w-full">
                <div className="flex sm:flex-1 flex-col gap-6 items-start justify-center self-stretch w-auto sm:w-full mr-8">
                  <ColumnPrice
                    className="bg-black_900 border-2 border-red_900 border-solid flex flex-col gap-2.5 items-center justify-center px-5 py-2.5 rounded-lg self-stretch w-auto sm:w-full"
                    price="We’ve got a special offer for you: BOGOF show @ 3pm on Sat 1st . KES 1,000"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start self-stretch w-auto sm:w-full">
                    <Text
                      className="text-left text-white_A700 w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Bridegroom for sale.
                    </Text>
                    <div className="flex flex-col gap-4 mb-10 items-start justify-start self-stretch w-auto sm:w-full">
                      <Text
                        className="font-normal leading-[175.00%] max-w-[532px] md:max-w-full not-italic text-gray_300 text-left"
                        as="h6"
                        variant="h6"
                      >
                        The synopsis goes here and here and here, once it starts
                        overflowing it goes here ,the synopsis goes here and
                        here and here, once it starts overflowing it goes here.
                      </Text>
                      <div className="flex flex-col gap-2 items-start justify-center self-stretch w-auto">
                        <div className="flex flex-row gap-2 items-start justify-start self-stretch w-auto">
                          <Img
                            src="images/img_materialsymbol.svg"
                            className="h-6 w-6"
                            alt="materialsymbol_One"
                          />
                          <div className="flex flex-col gap-2.5 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-gray_300 text-left w-auto"
                              variant="body4"
                            >
                              Thur 30th & Fri 31st @ 6:30pm{" "}
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_300 text-left w-auto"
                              variant="body4"
                            >
                              Sat 1st, Sun 2nd@ 3pm, 6:30pm & 8:30pm
                            </Text>
                          </div>
                        </div>

                        <div className="flex flex-row gap-2 items-start justify-start self-stretch w-auto">
                          <Img
                            src="images/img_materialsymbolslocationon.svg"
                            className="h-6 w-6"
                            alt="materialsymbols"
                          />

                          <div className="flex flex-col items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-gray_300 text-left w-auto"
                              variant="body4"
                            >Kenya Cinema</Text>
                          </div>

                        </div>


                      </div>
                    </div>
                    <Button
                      className="md:hidden  mt-4 mb-4 cursor-pointer font-bold min-w-[149px] text-center text-white_A700 text-xl w-auto"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillRed900"
                    >
                      Get ticket (s)
                    </Button>
                  </div>
                </div>

                <div className="mb-[40px] flex sm:flex-1 flex-col h-[560px] sm:h-auto items-center justify-start w-[560px] sm:w-full">
                  <Img
                    src="images/img_rectangle4.png"
                    className="h-[560px] md:h-auto md:ml-[20px] object-cover rounded-lg w-[560px] sm:w-full"
                    alt="Heartstrings entertainment Play poster"
                  />
                </div>
                <Button
                      className="hidden md:flex  mb-4 cursor-pointer font-bold min-w-[149px] text-center text-white_A700 text-xl w-auto"
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillRed900"
                    >
                      Get ticket (s)
                    </Button>

              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray_900 h-[13px] mt-24 w-full"></div>
    </>
  )
}

export default TheatrePlays