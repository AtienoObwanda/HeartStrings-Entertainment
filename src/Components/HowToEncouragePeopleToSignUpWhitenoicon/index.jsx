import React from "react";

import { Text } from "Components";

const HowToEncouragePeopleToSignUpWhitenoicon = (props) => {
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

HowToEncouragePeopleToSignUpWhitenoicon.defaultProps = {
  streamplays: "Watch trailer",
};

export default HowToEncouragePeopleToSignUpWhitenoicon;
