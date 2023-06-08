import React from "react";

import { Img, Text } from "UI_Components";

const PlaysAddPlayColumniconparkoutli = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_iconparkoutli.svg"
          className="h-6 w-6"
          alt="iconparkoutli"
        />
        <Text
          className="font-normal font-roboto not-italic text-center text-white_A700 w-auto"
          variant="body4"
        >
          {props?.dropanimagehereOne}
        </Text>
      </div>
    </>
  );
};

PlaysAddPlayColumniconparkoutli.defaultProps = {
  dropanimagehereOne: "Drop an image here or click to browse.",
};

export default PlaysAddPlayColumniconparkoutli;
