import React, { useEffect, useState } from "react";
import { Img, List, Text } from "UI_Components";



// Alliance Francaise
const SelectingShowTimeRowa = (props) => {
  const { className, a, b, c, d, e, f, g, h, i, stage, available, reserved, selected } = props;

  const SeatIcons = {
    Selected:(
      <Img
        src="images/img_mdiloveseat_red_900.svg"
        className="h-6 w-6"
        alt="mdiloveseat_Three"
      />
    ),
  
    Available:(
      <Img
      src="images/img_mdiloveseat.svg"
      className="h-6 w-6"
      alt="mdiloveseat_Five"
      />
  
    ),
  
    Reserved:(
    <Img
      src="images/img_mdiloveseat_gray_800.svg"
      className="h-6 w-6"
      alt="mdiloveseat"
      />
       )
  
  };


  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start md:mt-0 mt-72 self-stretch w-auto">
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.a}
          </Text>
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.b}
          </Text>
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.c}
          </Text>
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.d}
          </Text>
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.e}
          </Text>
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.f}
          </Text>
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.g}
          </Text>
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.h}
          </Text>
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.i}
          </Text>
        </div>
        
        <div className="flex flex-col md:gap-10 gap-24 items-center justify-start self-stretch w-auto md:w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-48 items-center justify-start p-[52px] md:px-10 sm:px-5 w-auto md:w-full"
            style={{ backgroundImage: "url('images/img_group40109.png')" }}
          >
            <Text
              className="font-roboto text-left text-white_A700 w-auto"
              as="h1"
              variant="h1"
            >
              {props?.stage}
            </Text>
          </div>

          <div className="flex flex-col md:gap-10 gap-16 items-center justify-start self-stretch w-auto md:w-full">
            <div className="flex md:flex-col flex-row gap-[35px] items-start justify-center self-stretch w-auto md:w-full">
              <div className="flex flex-col gap-4 items-start justify-center self-stretch w-auto">
    
{/* ***************************************************************************** */}
{/* Left Wing */}
                
                <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pl-8 self-stretch w-auto">
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                </div>
                
                <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pl-6 self-stretch w-auto">
                {SeatIcons[selected]}
                {SeatIcons[selected]}
                {SeatIcons[selected]}
                {SeatIcons[selected]}
                </div>
                <List
                  className="flex-col gap-4 grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-row gap-2 items-center justify-center pl-[18px] self-stretch w-auto">
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center pl-3 self-stretch w-auto">
                    
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center pl-1.5 self-stretch w-auto">
                  {/* {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]} */}
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                    
                  {/* {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]}
                  {SeatIcons[selected]} */}
                  {/* {SeatIcons[selected]} */}
                  </div>
                </List>
              </div>



{/* ************************************************************************************** */}
{/* END OF LEFT WING */}














{/* ********************************************************************************************************* */}
{/* Mid Wing */}
              <div className="flex flex-col items-center justify-start self-stretch w-auto sm:w-full">
                <List
                  className="flex-col gap-4 grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center self-stretch w-auto sm:w-full">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  </div>
                  {/* End of first row-Second row begins */}
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center self-stretch w-auto sm:w-full">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  </div>
                  {/* End of second row */}
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center self-stretch w-auto sm:w-full">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}

                  </div>
                  {/* End of third row-Fourth row begins */}
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center self-stretch w-auto sm:w-full">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}

                  
                  </div>
                  {/* End of fourth row-Fifth row begins */}
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center self-stretch w-auto sm:w-full">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                 
                  

                  </div>
                  {/* End Of Fifth row, sixth row begins */}
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center self-stretch w-auto sm:w-full">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  
                  
                  </div>
                  {/* End of sixth row - Seventh row begins */}
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center self-stretch w-auto sm:w-full">
                  {/* {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]} */}
                 
                   
                  </div>
                  {/* End of Seventh row- eighth row begins */}
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center self-stretch w-auto sm:w-full">
                  
                  {/* {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]} */}

                  </div>
                  {/* End of seventh row, eigth row begins */}
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-center self-stretch w-auto sm:w-full">
                  {/* {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]} */}
                  </div>
                </List>
              </div>

{/* End of Mid-wing */}
{/* ********************************************************************************************************************** */}










{/* Right-Wing Begins */}
              {/* <div className="flex flex-col gap-4 items-start justify-center rotate-[180deg] self-stretch w-auto"> */}
            <div className="flex flex-col gap-4 items-start justify-center self-stretch w-auto">
              <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pl-8 self-stretch w-auto">
              {SeatIcons[available]}
              {SeatIcons[available]}
              {SeatIcons[available]}
                </div>
                {/* EndOfFirstRow */}
                <div className="flex flex-row gap-2 items-center justify-center sm:pl-5 pl-6 self-stretch w-auto">
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                {SeatIcons[available]}
                </div>
                {/* EndOfSecondRow */}
                <List
                  className="flex-col gap-4 grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-row gap-2 items-center justify-center pl-[18px] self-stretch w-auto">
                  
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  </div>
                  {/* EndOfThirdRow */}

                  <div className="flex flex-row gap-2 items-center justify-center pl-3 self-stretch w-auto">
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  </div>
                  {/* EndOfFourthRow */}
                  <div className="flex flex-row gap-2 items-center justify-center pl-1.5 self-stretch w-auto">
                  
                  {/* {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]} */}

                  </div>
                  {/* EndOfFifthRow */}

                  <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                  {/* {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]}
                  {SeatIcons[available]} */}

                  </div>
                  {/* EndOfSixthRow */}
                </List>
              </div>

{/* End Of Right Wing */}
</div>








{/* Seat Desription Section */}

<div className="flex flex-row gap-6 items-center justify-center self-stretch w-auto">
              <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                <Img
                  src="images/img_mdiloveseat.svg"
                  className="h-6 w-6"
                  alt="mdiloveseat_Fourteen"
                />
                <Text
                  className="font-normal font-roboto not-italic text-left text-white_A700 w-auto"
                  variant="body4"
                >
                  {props?.available}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                <Img
                  src="images/img_mdiloveseat_gray_800.svg"
                  className="h-6 w-6"
                  alt="mdiloveseat_Fifteen"
                />
                <Text
                  className="font-normal font-roboto not-italic text-left text-white_A700 w-auto"
                  variant="body4"
                >
                  {props?.reserved}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                <Img
                  src="images/img_mdiloveseat_red_900.svg"
                  className="h-6 w-6"
                  alt="mdiloveseat_Sixteen"
                />
                <Text
                  className="font-normal font-roboto not-italic text-left text-white_A700 w-auto"
                  variant="body4"
                >
                  {props?.selected}
                </Text>
              </div>
            </div>
          </div>
        </div>

{/* End Of Stage Section */}

        <div className="flex flex-col gap-4 items-start justify-start md:mt-0 mt-72 self-stretch w-auto">
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.aOne}
          </Text>
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.bOne}
          </Text>
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.cOne}
          </Text>
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.dOne}
          </Text>
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.eOne}
          </Text>
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.fOne}
          </Text>
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.gOne}
          </Text>
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.hOne}
          </Text>
          <Text
            className="font-roboto not-italic text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.iOne}
          </Text>
        </div>


      </div>
    </>
  );
};

SelectingShowTimeRowa.defaultProps = {
  a: "A",
  b: "B",
  c: "C",
  d: "D",
  e: "E",
  f: "F",
  g: "G",
  h: "H",
  i: "I",
  stage: "STAGE",
  available: "Available",
  reserved: "Reserved",
  selected: "Selected",
};
  // aOne: "A",
  // bOne: "B",
  // cOne: "C",
  // dOne: "D",
  // eOne: "E",
  // fOne: "F",
  // gOne: "G",
  // hOne: "H",
  // iOne: "I",
// };

export default SelectingShowTimeRowa;
