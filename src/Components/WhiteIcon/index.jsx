import React from "react";

import { Text } from "Components";

const WhiteIcon = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-bold font-roboto text-black_900 text-left w-auto"
          as="h6"
          variant="h6"
        >
          {props?.streamplays}
        </Text>
      </div>
    </>
  );
};

WhiteIcon.defaultProps = {
  streamplays: "Watch trailer",
};

export default WhiteIcon;
