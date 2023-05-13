import React from "react";

import { Text } from "Components";

const LibrarySmallnoicon = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-bold font-roboto text-left text-white_A700 w-auto"
          as="h6"
          variant="h6"
        >
          {props?.gettickets}
        </Text>
      </div>
    </>
  );
};

LibrarySmallnoicon.defaultProps = { gettickets: "Rent again" };

export default LibrarySmallnoicon;
