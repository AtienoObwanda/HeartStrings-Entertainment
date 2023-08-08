import React from "react";
import { Text } from "UI_Components";

const SelectingShowTimeColumn = (props) => {
  // const { isCurrentDate } = props;
  const { isCurrentDate, onClick, day } = props;
  const handleClick = () => {
    onClick(day); // Pass the selected date to the onClick handler
  };


  return (
    <>
       <div
      className={props.className}
      style={{
        backgroundImage: isCurrentDate
          ? "url('https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927651/HeartStrings/SVG/img_group39897_yskmrp.svg')"
          : "url('https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927650/HeartStrings/SVG/img_group39896_ze66d9.svg')",
      }}
      onClick={handleClick} // Attach the onClick handler
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

SelectingShowTimeColumn.defaultProps = {
  language: "Sat ",
  p1st: "1st",
};

export default SelectingShowTimeColumn;
