import React from "react";

import { Text } from "Components";

const ColumnPrice = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-bold font-roboto leading-[175.00%] max-w-[307px] md:max-w-full text-left text-white_A700"
          variant="body4"
        >
          {props?.price}
        </Text>
      </div>
    </>
  );
};

ColumnPrice.defaultProps = {
  price:
    "We’ve got a special offer for you: BOGOF show @ 3pm on Sat 1st . KES 1,000",
};

export default ColumnPrice;
