import React from 'react'
import { Img, Text } from "UI_Components";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  return (
    <>
    <div className="flex flex-col gap-6 items-center justify-center self-stretch w-auto md:w-full">
            <Text
              className="font-normal not-italic text-gray_300 text-left w-auto"
              as="h5"
              variant="h5"
            >
              About us
            </Text>
            <Text
              className="leading-[175.00%] max-w-[1159px] md:max-w-full text-center text-white_A700"
              as="h1"
              variant="h1"
            >
              Multi award winners and the most popular authority in Kenyan
              theater and live stagecomedy in Kenya!{" "}
            </Text>
          </div>

          <Text
            className="font-normal leading-[175.00%] not-italic text-center text-gray_300"
            as="h6"
            variant="h6"
          >
            <>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              voluptate aute id deserunt nisi.Nulla Lorem mollit cupidatat
              irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
              exercitation inAliqua id fugiat nostrud irure ex duis ea quis id
              quis ad et. <br />
              Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
              tempor enim. Elit aute irure tempor cupidatat incididunt sint
              deserunt ut voluptate aute id deserunt nisi.Nulla Lorem mollit
              cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
              Voluptate exercitation in
            </>
          </Text>
    </>
  )
}

export default Hero