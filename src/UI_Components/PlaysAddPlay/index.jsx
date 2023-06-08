import React from "react";

import { Text } from "UI_Components";

const PlaysAddPlayAddshift = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-roboto not-italic text-left text-white_A700 underline w-auto"
          variant="body5"
        >
          {props?.addshift}
        </Text>
      </div>
    </>
  );
};

PlaysAddPlayAddshift.defaultProps = { addshift: "Add time" };

export default PlaysAddPlayAddshift;
