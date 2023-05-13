import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "Components";

const LandingPageNavbarhifi = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Img
          src="images/img_dummylogo02.svg"
          className="h-14 md:ml-[0] ml-[150px] md:mt-0 my-8 w-auto"
          alt="dummylogoTwo"
        />

        
        <div className="flex md:flex-col flex-row gap-8 items-center justify-center md:ml-[0] ml-[411px] mr-[150px] md:mt-0 my-8 self-stretch w-auto sm:w-full">
          <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-start self-stretch w-auto sm:w-full">
            
            <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[150px] w-auto"
                onClick={() => navigate("/buyingtickets")}
                rightIcon={
                  <Img
                    src="images/img_materialsymbolsarrowoutward.svg"
                    className="mb-px ml-4"
                    alt="material-symbols:arrow-outward"
                  />
                }
                shape="RoundedBorder8"
                size="md"
                variant="FillRed900"
              >
                <div className="font-bold font-roboto text-left text-white_A700 text-xl">
                  {props?.buyTicketS}
                </div>
              </Button> 

            <Button
              className="common-pointer cursor-pointer flex items-center justify-center min-w-[198px] w-auto"
              onClick={() => navigate("/allstreams")}
              rightIcon={
                <Img
                  src="images/img_materialsymbolsarrowoutward_black_900.svg"
                  className="mb-px ml-4"
                  alt="material-symbols:arrow-outward"
                />
              }
              shape="RoundedBorder8"
              size="md"
              variant="OutlineWhiteA700"
            >
              <div className="font-bold font-roboto text-black_900 text-left text-xl">
                {props?.streamPlays}
              </div>
            </Button>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
            <Img src="images/img_user.svg" className="h-6 w-6" alt="user" />
            <Text
              className="font-bold font-roboto text-left text-white_A700 w-auto"
              as="h6"
              variant="h6"
            >
              {props?.account}
            </Text>
            <Img
              src="images/img_materialsymbolsarrowoutward.svg"
              className="h-6 w-6"
              alt="materialsymbol"
            />
          </div>
        </div>
      </header>
    </>
  );
};

LandingPageNavbarhifi.defaultProps = {
  buyTicketS: "Buy ticket (s)",
  streamPlays: "Stream plays",
  account: "Account",
};

export default LandingPageNavbarhifi;