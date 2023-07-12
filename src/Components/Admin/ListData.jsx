import React from 'react'
import { Button, Img, Input, List, Line,Text } from "UI_Components";

const ListData = () => {
  return (
    <>

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
    </>

  )
}

export default ListData