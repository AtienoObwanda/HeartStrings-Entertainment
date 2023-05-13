import React from "react";

import { Text } from "Components";

const SelectingShowTimeColumn1 = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_group39897.svg')" }}
      >
        <div className="flex flex-col gap-[8.58px] items-center justify-center mb-[13px] mt-0.5 w-[33px]">
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body6"
          >
            {props?.language}
          </Text>
          <Text
            className="font-roboto text-left text-white_A700 w-auto"
            variant="body2"
          >
            {props?.p2nd}
          </Text>
        </div>
      </div>
    </>
  );
};

SelectingShowTimeColumn1.defaultProps = { language: "Sun ", p2nd: "2nd" };

export default SelectingShowTimeColumn1;
