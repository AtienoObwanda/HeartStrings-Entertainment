import React from "react";

import { Text } from "UI_Components";

const SelectingShowTimeColumn = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_group39896.svg')" }}
      >
        <div className="flex flex-col gap-[8.56px] items-center justify-center mb-2.5 w-[25px]">
          <Text
            className="font-roboto not-italic text-black_900_01 text-left w-auto"
            variant="body7"
          >
            {props?.language}
          </Text>
          <Text
            className="font-roboto text-black_900_01 text-left w-auto"
            variant="body3"
          >
            {props?.p1st}
          </Text>
        </div>
      </div>
    </>
  );
};

SelectingShowTimeColumn.defaultProps = { language: "Sat ", p1st: "1st" };

export default SelectingShowTimeColumn;
