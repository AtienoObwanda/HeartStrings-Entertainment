import React from "react";

import { Img, Text } from "UI_Components";

const DetailsPagePlayColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[267px] items-center justify-start w-[267px]">
          <Img
            src={props?.rectanglefour}
            className="h-[267px] md:h-auto object-cover rounded-lg w-[267px]"
            alt="rectangleFour"
          />
        </div>
        <div className="flex flex-col gap-2 items-start justify-center self-stretch w-auto">
          <Text
            className="font-bold font-roboto text-left text-white_A700 w-auto"
            as="h6"
            variant="h6"
          >
            {props?.realname}
          </Text>
          <Text
            className="font-normal font-roboto not-italic text-gray_300 text-left w-auto"
            variant="body4"
          >
            {props?.ascastname}
          </Text>
        </div>
      </div>
    </>
  );
};

DetailsPagePlayColumn.defaultProps = {
  rectanglefour: "images/img_rectangle4_267x267.png",
  realname: "Real name ",
  ascastname: "as cast name ",
};

export default DetailsPagePlayColumn;
