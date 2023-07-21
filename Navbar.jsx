import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "UI_Components";
import close from "../../assets/close.svg";
import  menu from "../../assets/menu.svg";
import HSLogo from"../../assets/HeartStringsLogo.png"

const Navbar = (props) => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <>
    <header className={props.className}>
    <nav className="mt-2 w-full flex justify-between items-center navbar">
    <img 
      src="images/HeartStringsLogo.png"
      className="h-40 md:ml-[0] ml-[150px] my-2 w-auto w-200"
      alt="Heart Strings Entertainment logo" 
      />



        {/* Display on Large Screens  */}
        <div className="md:hidden flex gap-8 items-center justify-center mr-[100px] ml-[411px] mr-[150px] mt-4 my-4 self-stretch w-auto">
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
                        size="sm"
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
                    size="sm"
                    variant="OutlineWhiteA700"
                    >
                    <div className="font-bold font-roboto text-black_900 text-left text-xl">
                        {props?.streamPlays}
                    </div>
            </Button>

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
                    alt="Heartstrings Entertainment user account"
                    />
        </div>
        </div>

        {/* Display Medium Screens  */}
        <div className="hidden md:flex gap-6">
        <img src = {toggle ? close : menu} alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle((prev) => !prev)} />
                <div className={`${toggle ? 'flex' : 'hidden'}
                p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                <ul className="list-none justify-end items-center flex-1">
                    <li className="py-3 cursor-pointer text-16">
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
                        size="sm"
                        variant="FillRed900"
                    >
                        <div className="font-bold font-roboto text-left text-white_A700 text-xl">
                        {props?.buyTicketS}
                        </div>
                    </Button> 
                    </li>


                    <li className="py-3 text-white font-poppins font-normal cursor-pointer text-16">
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
                    size="sm"
                    variant="OutlineWhiteA700"
                    >
                    <div className="font-bold font-roboto text-black_900 text-left text-xl">
                        {props?.streamPlays}
                    </div>
                    </Button>
                    </li>


                    <li className="py-3 text-white font-poppins font-normal cursor-pointer text-16">
                    <div className="flex flex-row gap-3 items-center justify-center self-stretch w-auto">
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
                
                    </li>
                    </ul>

                </div>
                
        </div>


{/*Display Small Screen */}
    {/* <div className="hidden sm:flex flex-1 justify-end items-center">


        <img src = {toggle ? close : menu} alt="menu"
        className="w-[28px] h-[28px] object-contain"
        onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'}
        p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul>
            <l>
                
            </l>
          </ul>

        </div>

      </div> */}

    </nav>    
        </header>
    </>
  );
};

Navbar.defaultProps = {
  buyTicketS: "Buy ticket (s)",
  streamPlays: "Stream plays",
  account: "Account",
};

export default Navbar;






