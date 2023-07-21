import React from "react";

import { Text } from "UI_Components";

const ColumnPrice = (props) => {
  return (
    <>
      <div className={props.className}>
      {props.items.map((item, index) => (
          <Text
            key={index}
            className="font-bold font-roboto leading-[175.00%] max-w-[307px] md:max-w-full text-left text-white_A700"
            variant="body4"
          >
            {item}
          </Text>
        ))}
        {/* <Text
          className="font-bold font-roboto leading-[175.00%] max-w-[307px] md:max-w-full text-left text-white_A700"
          variant="body4"
        >
          {props?.item}
        </Text> */}
      </div>
    </>
  );
};

ColumnPrice.defaultProps = {
  items: [
    "Price 1: KES 1000",
    "Price 2: KES 1500",
    "Price 3: KES 2000",
    // Add more items here if needed
  ],
};

export default ColumnPrice;
