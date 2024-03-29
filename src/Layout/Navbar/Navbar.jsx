import React, { useEffect, useState } from 'react';
import { useNavigate,useLocation } from "react-router-dom";
import { Button, Img, Text } from "UI_Components";
import close from "../../assets/close.svg";
import  menu from "../../assets/menu.svg";

const Navbar = (props) => {
    const navigate = useNavigate();
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    const location = useLocation();

    
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {

        if (accessToken) {
        setIsAuthenticated(true);
        } else {
        setIsAuthenticated(false);
        }
    }, [])




  return (
    <>
    <header className={props.className}>
    <nav className="mt-2 w-full flex justify-between items-center navbar">
    <div className="h-50">
    {/* <img  
      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
      className="h-[30%] w-[6em] md:ml-[0] ml-[150px] my-2 w-auto md:h-20 md:w-full md:mb-4"
    // className="h-[30%] w-[4em] md:w-full md:ml-[0] ml-[150px] my-2 w-auto md:h-30 sm:object-fit: scale-down"

      alt="Heart Strings Entertainment logo"
      onClick={() => navigate("/")} 
      /> */}
       <img  
      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
      className="h-[80px] w-[80px]  md:ml-[0] ml-[150px] my-2 w-auto md:h-20 md:w-full md:mb-4 mt-[3em]"
      alt="Heart Strings Entertainment logo"
      onClick={() => navigate("/")} 
      />
    </div>
        {/* Display on Large Screens  */}
        <div className="md:hidden flex gap-8 items-center justify-center mr-[100px] ml-[411px] mr-[150px] mt-4 my-4 self-stretch w-auto">
            <Button
                        className="common-pointer cursor-pointer flex items-center justify-center min-w-[135px] w-auto pt-[10px] pb-[10px] pr-[20px] pl-[20px]"
                        onClick={() => navigate("/all-plays")}
                        rightIcon={
                        <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927662/HeartStrings/SVG/img_materialsymbolsarrowoutward_dxpbee.svg"
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
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[178px] w-auto pt-[10px] pb-[10px]"
                    onClick={() => navigate("/all-streams")}
                    rightIcon={
                        <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927662/HeartStrings/SVG/img_materialsymbolsarrowoutward_black_900_dk3qnb.svg"
                        className="mb-px ml-4"
                        alt="material-symbols:arrow-outward"
                        />
                    }
                    shape="RoundedBorder8"
                    size="sm"
                    variant="OutlineWhiteA700"
                    >
                    <div className="font-bold font-roboto text-black_900 text-left text-xl">
                        {props?.onlinePlays}
                    </div>
            </Button>
            {!isAuthenticated && (
        <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto cursor-pointer"
                            onClick={() => navigate("/login")}
                            >
                    {/* <Img src="images/img_user.svg" className="h-6 w-6" alt="user" /> */}
                    <Text
                    className="font-bold font-roboto text-left text-white_A700 w-auto"
                    as="h6"
                    variant="h6"
                    >
                    {props?.signIn}
                    </Text>
                    <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927662/HeartStrings/SVG/img_materialsymbolsarrowoutward_dxpbee.svg"
                            className="h-6 w-6"
                    alt="Heartstrings Entertainment user account"
                    />
        </div>
            )}

            {/* Logged in users */}
            {isAuthenticated && (
                    

                    
                    <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto cursor-pointer"
                            onClick={() => navigate("/my-streams")}
                            >
                        <Text
                    className="font-bold font-roboto text-left text-white_A700 w-auto"
                    as="h6"
                        variant="h6"
                        >
                        My Account
                        </Text>
                        <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927749/HeartStrings/SVG/img_user_boknn6.svg"
                        className="h-6 w-6"
                        alt="materialsymbol"
                        />
                    </div>
                        
            
               
                    )}
        </div>
        

        {/* Display Medium Screens  */}
        <div className="hidden md:flex gap-6 mb-19">
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
                        onClick={() => navigate("/all-plays")}
                        rightIcon={
                        <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927662/HeartStrings/SVG/img_materialsymbolsarrowoutward_dxpbee.svg"
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
                    onClick={() => navigate("/all-streams")}
                    rightIcon={
                        <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927662/HeartStrings/SVG/img_materialsymbolsarrowoutward_black_900_dk3qnb.svg"
                        className="mb-px ml-4"
                        alt="material-symbols:arrow-outward"
                        />
                    }
                    shape="RoundedBorder8"
                    size="sm"
                    variant="OutlineWhiteA700"
                    >
                    <div className="font-bold font-roboto text-black_900 text-left text-xl">
                        {props?.onlinePlays}
                    </div>
                    </Button>
                    </li>

                    {!isAuthenticated && (
                    <li className="py-3 text-white font-poppins font-normal cursor-pointer text-16">
                    <a href="/login">

                    
                    <div className="flex flex-row gap-3 items-center justify-center self-stretch w-auto"
                        onClick={() => navigate("/login")}
                        >
                        <Text
                        className="font-bold font-roboto text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                        >
                        {props?.signIn}
                        </Text>
                        <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927662/HeartStrings/SVG/img_materialsymbolsarrowoutward_dxpbee.svg"
                        className="h-6 w-6"
                        alt="materialsymbol"
                        />
                    </div>
                        
            
                </a>
                    </li>
                    )}
                    {/* Logged in users */}
                    {isAuthenticated && (
                    <li className="py-3 text-white font-poppins font-normal cursor-pointer text-16">
                    <a href="/my-streams">

                    
                    <div className="flex flex-row gap-3 items-center justify-center self-stretch w-auto"
                        onClick={() => navigate("/my-streams")}
                        >
                        <Text
                        className="font-bold font-roboto text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                        >
                        My Account
                        </Text>
                        <Img
                        src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927749/HeartStrings/SVG/img_user_boknn6.svg"
                        className="h-6 w-6"
                        alt="materialsymbol"
                        />
                    </div>

                        
            
                </a>
                    </li>
                    

                    
                    )}
                    </ul>

                </div>
                
        </div>




    </nav>    
        </header>
    </>
  );
};

Navbar.defaultProps = {
  buyTicketS: "Buy ticket (s)",
  onlinePlays: "Online Plays",
  signIn: "Sign In",
};

export default Navbar;






