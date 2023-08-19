import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Line, List, Switch, Text } from "UI_Components";
import PlaysAddPlayAddshift from "UI_Components/PlaysAddPlay";
import PlaysAddPlayColumniconparkoutli from "UI_Components/PlaysAddPlayColumnIcon";
import PlayAddPlayVideo from "UI_Components/PlayAddPlayVideo"


import close from "../../../assets/close.svg";
import  menu from "../../../assets/menu.svg";


import { apiUrl } from '../../../../env'

const YOUR_ACCESS_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxNTkwMjg0LCJpYXQiOjE2OTE1ODYxODksImp0aSI6IjliNTMxMDU3ZGNmZTRhOWE4N2EwNTE0MjE0MjczMzc1IiwidXNlcl9pZCI6MX0.BJzwxGxuV4TNmXxc9fEv3j-zM4o1mEKSKmC3B6aBln8';

const AdminAddStream = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const [availability, setAvailability] = React.useState(false);

  const handleSwitchChange = (newValue) => {
    setAvailability(newValue);
  };

  // Toggle Casts:
  function toggleMoreCasts() {
    const hiddenCasts = document.getElementById("hidden-casts");
  
    if (hiddenCasts) {
      hiddenCasts.classList.toggle("hidden");
    }
  }
  
 


// Streams
const [title, setTitle] = useState('');
const [synopsis, setSynopsis] = useState('');
const [poster, setPoster] = useState(null);
const [trailer, setTrailer] = useState(null);
const [video, setVideo] =useState('');
const [castMembers, setCastMembers] = useState(
  Array.from({ length: 20 }, () => ({ real_name: "", cast_name: "" }))
);
const [video_available, setvideo_available] = useState([
  { three_days: '', three_price: '', seven_days: '', seven_price: '', fourteen_days: '', fourteen_price: '' },
]);




const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};


  // Cast Change:
  const handleCastChange = (index, field, value) => {
    const updatedCastMembers = [...castMembers];
    updatedCastMembers[index][field] = value;
    setCastMembers(updatedCastMembers);
  };

// handling cast image preview:
const handleImageChange = (index, event) => {
  const file = event.target.files[0];
  if (file) {
    const updatedCastMembers = [...castMembers];
    updatedCastMembers[index].imagePreview = URL.createObjectURL(file);
    setCastMembers(updatedCastMembers);
  }
};

const handleSubmit = async (e) => {
  console.log("Submitting........");

  e.preventDefault();

  // Check if the user is authenticated before submitting the play
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    // User is not authenticated, handle accordingly (e.g., show an error message)
    console.log("User is not authenticated");
    return;
  }


  const formData = new FormData();
  formData.append("title", title);
  formData.append("synopsis", synopsis);
  formData.append("poster", posterFile);
  formData.append("infotrailer", infotrailerFile);
  formData.append("video", videoFile);
  formData.append("theater", selectedTheatre);
  formData.append("is_available", isAvailableString);
  formData.append("play_cast_list", JSON.stringify(castMembers));

 

 
  console.log('POST Request Payload:', formData); // Log the payload you're sending
  console.log('Headers:', {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'multipart/form-data', // Make sure to set the content type if required
  });


  try {
    const response = await axios.post(`${apiUrl}/api/videos/`, formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data', // Make sure to set content type

      },
    });

    const responseBody = response.data;
    console.log(responseBody);
    navigate('/admin-allstreams');

  } catch (error) {
    // Handle error
    console.error('Error submitting play:', error);
if (error.response) {
  console.log('API Response:', error.response.data);
}
  }
};





const castMembersPerPage = 5;
const totalCastMembers = castMembers.length;
const [castDisplayCount, setCastDisplayCount] = useState(castMembersPerPage);
const showLoadMoreButton = castDisplayCount < totalCastMembers;



console.log(
  "Data: ", title, synopsis,poster,trailer,video, castMembers,video_available
)

return (
      <>
        <div className="bg-black_900_01 flex flex-col font-roboto items-center justify-start mx-auto pb-[109px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
             {/* Large screen */}
             <aside className="md:hidden flex justify-start md:px-5 w-[247px]">
          {/* <aside className="flex flex-col md:hidden justify-start md:px-5 w-[247px]"> */}
            <div className="flex flex-col justify-start mb-[420px] mt-12 mx-auto  w-[81%]">
              <Img
                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
                className="common-pointer h-[40%] w-[40%]"
                alt="Heart Strings Entertainment Logo"
                onClick={() => navigate("/")}
              />
              
          <div
                className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
                onClick={() => navigate("/admin-dashboard")}
              >                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927654/HeartStrings/SVG/img_iconsaxboldactivity_vlojze.svg"
                  className="h-10 w-10"
                  alt="iconsaxboldacti"
                />
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-auto"
                  variant="body4"
                >
                  Dashboard
                </Text>
              </div>

              <div className="bg-gray_800 common-pointer flex flex-row gap-2 items-center justify-center  mt-6 pl-6 md:pr-10 pr-[6px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto"

              onClick={() => navigate("/admin-allplays")}>
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldelement2_white_a700_f8nhvw.svg"
                  className="h-10 w-10"
                  alt="Play Icon"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Live Shows
                </Text>
              </div>

              <div
                className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
                onClick={() => navigate("/admin-allstreams")}
              >
                <Img
                  src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927661/HeartStrings/SVG/img_iconsaxboldvideoplay_white_a700_z0bppl.svg"
                  className="h-10 w-10"
                  alt="Streams Icon"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  Online Plays
                </Text>
              </div>


              <div
                className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
                onClick={() => navigate("/ticket-management")}
              >
                <Img
                    src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldreceipt1_gray_300_gdkye8.svg"
                    className="h-10 w-10"
                  alt="Streams Icon"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                 Ticket Management
                </Text>
              </div>

              <div
                  className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[16px] mt-9 self-stretch w-auto hover:border border-white rounded-md p-2"
                onClick={() => navigate("/user-management")}
              >
                <Img
                    src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldprofile2user_white_a700_qdp6it.svg"
                    className="h-10 w-10"
                  alt="Streams Icon"
                />
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-auto"
                  variant="body4"
                >
                  User Management
                </Text>
              </div>

              <Line className="bg-gray_800 h-px mt-16 w-full" />


                <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto group">
                      <div className="h-10 w-10 transition-colors duration-300 ease-in-out group-hover:bg-icon-hover group-hover:rotate-12">
                          <Img
                              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldlogout_cmxo47.svg"
                              className="h-full w-full hover:fill-red-500 svg"
                              alt="iconsaxboldlogo"
                                  />

                         
                            </div>
                              <a
                                  href="#:"
                                  className="font-normal not-italic text-base text-gray-300 text-left w-auto"
                              >
                                  <Text className="">Logout</Text>
                              </a>
                      </div>




            </div>
          </aside>


            {/* Display Medium Screens  */}
        <aside className="hidden md:flex justify-start md:px-5 w-[247px]">

        <div className="flex flex-col justify-start mb-[476px] mt-12 mx-auto w-[81%] ">

            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain pt-3"
                onClick={() => setToggle((prev) => !prev)}
              />
              <Img
              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
              className="common-pointer h-[60%] w-[80%] ml-[20em]"
              alt="Heart Strings Entertainment Logo"
              onClick={() => navigate("/")}
            />
            </div>
            <div className={`${toggle ? 'flex' : 'hidden'}
              p-6 bg-black_900_01 absolute top-20 left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
              >
              <ul className="list-none justify-start items-center flex-1">

                
                  <li className="py-3 cursor-pointer text-16">
                    
                  <div className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-2 self-stretch w-auto"
                        onClick={() => navigate("/admin-dashboard")}
                      >
                        <Img
                          src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927654/HeartStrings/SVG/img_iconsaxboldactivity_vlojze.svg"
                          className="h-10 w-10"
                          alt="Admin Dashboard Icon"
                        />
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Dashboard
                        </Text>
                      </div>
                  </li>

                  <li className="py-3 cursor-pointer text-16">
                  <div className="bg-gray_800 flex flex-row gap-2 items-center justify-center mt-6 pl-6 md:pr-10 pr-[73px] sm:px-5 py-2.5 rounded-lg self-stretch w-auto"
                  onClick={() => navigate("/admin-allplays")}
                  > 
                
                        <Img
                          src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldelement2_white_a700_f8nhvw.svg"
                          className="h-10 w-10"
                          alt="Plays Icon"
                        />

                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-auto"
                          variant="body4"
                        >
                          Live Shows
                        </Text>
                      </div>
                  </li>

                  <li className="py-3 cursor-pointer text-16">
                  <div className="common-pointer flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-0 self-stretch w-auto"
                        onClick={() => navigate("/admin-allstreams")}
                      >
                        <Img
                          src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927661/HeartStrings/SVG/img_iconsaxboldvideoplay_white_a700_z0bppl.svg"
                          className="h-10 w-10"
                          alt="Stream Icon"
                        />
                        <Text
                          className="font-normal not-italic text-gray_300 text-left w-auto"
                          variant="body4"
                        >
                          Online Plays
                        </Text>
                      </div>
                  </li>


                  <li className="py-3 cursor-pointer text-16">
                      <div
                          className="common-pointer flex flex-row gap-2 items-center justify-center self-stretch w-auto"
                          onClick={() => navigate("/ticket-management")}
                        >
                          <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldreceipt1_gray_300_gdkye8.svg"
                            className="h-10 w-10"
                            alt="iconsaxboldrece"
                          />
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-auto"
                            variant="body4"
                          >
                            Tickets
                          </Text>
                        </div>
                    </li>


                    <li className="py-3 cursor-pointer text-16">
                    <div
                          className="common-pointer flex flex-row gap-2 items-center justify-center self-stretch w-auto"
                          onClick={() => navigate("/user-management")}
                        >
                          <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927659/HeartStrings/SVG/img_iconsaxboldprofile2user_white_a700_qdp6it.svg"
                            className="h-10 w-10"
                            alt="User Management Icon"
                          />
                          <Text
                            className="font-normal not-italic text-gray_300 text-left w-auto"
                            variant="body4"
                          >
                            User management
                          </Text>
                        </div>
                    </li>

                  <Line className="bg-gray_800 h-px mt-[60px] w-full" />

                  <li className="py-3 cursor-pointer text-16">                     
                  
                  
                  <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[26px] mt-8 self-stretch w-auto group">
                              <div className="h-10 w-10 transition-colors duration-300 ease-in-out group-hover:bg-icon-hover group-hover:rotate-12">
                                  <Img
                                      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927657/HeartStrings/SVG/img_iconsaxboldlogout_cmxo47.svg"
                                      className="h-full w-full hover:fill-red-500 svg"
                                      alt="iconsaxboldlogo"
                                          />

                                
                                    </div>
                                      <a
                                          href="#:"
                                          className="font-normal not-italic text-base text-gray-300 text-left w-auto"
                                      >
                                          <Text className="">Logout</Text>
                                      </a>
                              </div>

                    

                  </li>
                </ul>
        </div>
        </div>

        </aside>

            <div className="flex md:flex-1 flex-col items-center justify-start md:px-5 w-[83%] md:w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between p-6 sm:px-5 w-full">
                <div className="flex flex-col items-center justify-center ml-6 sm:ml-[0] sm:mt-0 mt-[9px] self-stretch w-auto">
                  <Text
                    className="text-left text-white_A700 w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Online Plays
                  </Text>
                </div>
                <div className="flex flex-row gap-[21px] items-center justify-start mr-6 self-stretch w-auto">
                  <Img
                    src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927649/HeartStrings/SVG/img_ellipse1_jfdd8k.png"
                    className="h-[61px] md:h-auto rounded-[50%] w-[61px]"
                    alt="ellipseOne"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center self-stretch w-auto">
                    <Text
                      className="font-bold text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Cameron Williamson
                    </Text>
                    <Text
                      className="not-italic text-gray_300 text-left w-auto"
                      variant="body5"
                    >
                      System administrator
                    </Text>
                  </div>
                </div>
              </div>
          
              <div className="flex flex-col items-center justify-end p-2.5 w-full">
                <div className="flex flex-col items-start justify-start mt-[38px] w-[94%] md:w-full">
                  <div
                    className="common-pointer flex flex-row gap-4 items-left justify-left self-stretch w-auto"
                    onClick={() => navigate("/admin-allplays")}
                  >
                    <Img
                      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927647/HeartStrings/SVG/img_arrowleft_rjkqfd.svg"
                      className="h-6 w-6"
                      alt="ictwotonearrowr"
                    />
                    <Text
                      className="font-bold text-left text-white_A700 w-auto"
                      variant="body4"
                    >
                      Go back to all online plays
                    </Text>
                  </div>

          <div className="w-[96%] md:w-full">

              <form onSubmit={handleSubmit}>

                  <div className="flex md:flex-col flex-row gap-4 items-start justify-between mt-6 w-full">
                    <div className="bg-black_900 w-[725px] flex sm:flex-1 flex-col gap-6 items-center justify-center mb-8 sm:px-5 px-6 py-12 rounded-lg md:w-[535px] sm:w-full">
                      {/* Content Form */}

                      {/* title */}
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                      <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Play title
                        </Text>
                        <textarea 
                        className="bg-gray_800 text-gray_300 rounded w-full"
                        type="text"
                        // placeholder="Enter play title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />

                      </div>

                      {/* Synopsis */}
                      <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                        <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                        <Text
                            className="font-normal not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            Synopsis
                          </Text>
                          <textarea 
                            className="bg-gray_800 h-[200px] text-gray_300 rounded w-full"
                            value={synopsis}
                            onChange={(e) => setSynopsis(e.target.value)}/>
                        </div>
                        <Text
                          className="not-italic text-gray_300 text-left w-auto"
                          variant="body5"
                        >
                          Do not exceed 100 characters when entering the play’s
                          synopsis
                        </Text>
                      </div>

                      
                    {/* Time */}
                  <div className="bg-black_900 flex flex-col gap-8 items-start justify-start  mt-7 sm:px-5 px-6 py-12 rounded-lg w-full">
                  <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto sm:w-full">
                        <div className="flex flex-col gap-6 items-start justify-start self-stretch w-auto sm:w-full">
                          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-start text-white_A700 w-auto"
                              as="h5"
                              variant="h5"
                            >
                              Play Availability Status and Price
                            </Text>

                          </div>

                          {/* 3 Days */}
                           {video_available.map((availability, index) => (
                              <div key={index} className=" gap-6 items-center justify-start w-full">
                                {/* 3 Days */}
                                
                                    <div className="flex flex-row gap-4 items-center justify-start self-stretch w-full">
                                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-full">
                                      <Text
                                        className="font-normal not-italic text-left text-white_A700 w-auto"
                                        variant="body4"
                                      >
                                        Number Of Days
                                      </Text>
                                    
                                      <input
                                        className="bg-gray_800 h-12 p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                                        type="number"
                                        // onChange={(e) => setLast_name(e.target.value)}
                                        name={`video_available[${index}].three_days`}
                                        placeholder="3"
                                        value={availability.three_days}
                                        onChange={(event) => handleAvailabilityChange(index, 'three_days', event.target.value)}
                                      />

                                    </div>
                                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-full">
                                      <Text
                                        className="font-normal not-italic text-left text-white_A700 w-auto"
                                        variant="body4"
                                      >
                                        Price
                                      </Text>
                                      <input
                                        className="bg-gray_800 h-12 p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                                        type="text"
                                        placeholder="KES XXXX"
                                        name={`video_available[${index}].three_price`}
                                        value={availability.three_price}
                                        onChange={(event) => handleAvailabilityChange(index, 'three_price', event.target.value)}
                                      />
                                    </div>
                                  </div>


                                {/* 7 Days */}
                                
                                <div className="flex flex-row gap-4 mt-4 items-center justify-start self-stretch w-full">
                                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-full">
                                      <Text
                                        className="font-normal not-italic text-left text-white_A700 w-auto"
                                        variant="body4"
                                      >
                                        Number Of Days
                                      </Text>
                                    
                                      <input
                                        className="bg-gray_800 h-12 p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                                        type="number"
                                        name={`video_available[${index}].seven_days`}
                                        placeholder="7"
                                        value={availability.seven_days}
                                        onChange={(event) => handleAvailabilityChange(index, 'seven_days', event.target.value)}
                                      />

                                    </div>
                                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-full">
                                      <Text
                                        className="font-normal not-italic text-left text-white_A700 w-auto"
                                        variant="body4"
                                      >
                                        Price
                                      </Text>
                                      <input
                                        className="bg-gray_800 h-12 p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                                        type="text"
                                        placeholder="KES XXXX"
                                        name={`video_available[${index}].seven_price`}
                                        value={availability.seven_price}
                                        onChange={(event) => handleAvailabilityChange(index, 'seven_price', event.target.value)}
                                      />
                                    </div>
                                  </div>


                              {/* Fourteen */}
                              
                              <div className="flex flex-row gap-4 mt-4 items-center justify-start self-stretch w-full">
                                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-full">
                                      <Text
                                        className="font-normal not-italic text-left text-white_A700 w-auto"
                                        variant="body4"
                                      >
                                        Number Of Days
                                      </Text>
                                    
                                      <input
                                        className="bg-gray_800 h-12 p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                                        type="number"
                                        name={`video_available[${index}].fourteen_days`}
                                        placeholder="14"
                                        value={availability.fourteen_days}
                                        onChange={(event) => handleAvailabilityChange(index, 'fourteen_days', event.target.value)}
                                      />

                                    </div>
                                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-full">
                                      <Text
                                        className="font-normal not-italic text-left text-white_A700 w-auto"
                                        variant="body4"
                                      >
                                        Price
                                      </Text>
                                      <input
                                        className="bg-gray_800 h-12 p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                                        type="text"
                                        placeholder="KES XXXX"
                                        name={`video_available[${index}].fourteen_price`}
                                        value={availability.fourteen_price}
                                        onChange={(event) => handleAvailabilityChange(index, 'fourteen_price', event.target.value)}
                                      />
                                    </div>
                                  </div>


                              </div>
                           ))}

                  
                        
                        </div>

                        
                       {/* Offer Tag */}
                          <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto sm:w-full">
                          <Img
                            className="h-6 w-6"
                              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1690006490/qq6v5rnin6clkdm7r9n_qmylz6.svg"
                            alt="iconsaxboldinfo"
                          />
                          <Text
                            className="leading-[175.00%] max-w-[402px] md:max-w-full text-gray-300 text-sm"
                            size="txtRobotoRomanRegular14Gray300"
                          >
                            Once purchased, the stream will be available for that
                            number of days to the customer.
                          </Text>
                        </div>

                      </div>

                    </div>
                       
                    </div>
                    {/* Content */}
                    <div className="bg-black_900 w-[725px] flex sm:flex-1 flex-col items-start justify-start mb-[51px] md:px-10 px-12 sm:px-5 py-6 rounded-lg md:w-[535px] sm:w-full">
                    <List
                        className="flex-col gap-8 grid items-start w-[443px] md:w-full"
                        orientation="vertical"
                      >
                        {/* Play Poster */}
                        <div className="flex flex-col gap-4 items-start justify-center my-0 w-[443px] sm:w-full">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            Play poster
                          </Text>
                          <div className="flex items-center justify-center w-full">
                                <label htmlFor="poster-file" className="flex flex-col items-center justify-center w-full h-64 border border-gray_800 border-dashed rounded-lg cursor-pointer bg-black_900 hover:bg-black_900_01">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Img
                                    src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconparkoutli_dznpma.svg"
                                    className="h-6 w-6 mb-4"
                                    alt="iconparkoutli"
                                    />
                                    <p className="mb-2 text-sm text-white_A700 font-semibold">Drop an image here or click to upload</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or WEBP (MAX. 800x400px)</p>
                                </div>
                                <input
                                    id="poster-file"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => setPoster(e.target.files[0])}
                                />
                                </label>
                                <div id="image-preview">
                                    {poster && (
                                        <img
                                        id="preview-image"
                                        className="w-64 h-32"
                                        src={URL.createObjectURL(poster)}
                                        alt="Poster Preview"
                                        />
                                    )}
                                </div>
                            </div>

                        </div>

                        {/* Info Trailer */}
                        <div className="flex flex-col gap-6 items-start justify-center my-0 w-[443px] sm:w-full">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            Infotrailer
                          </Text>
                          <div className="flex items-center justify-center w-full">
                                <label htmlFor="trailer-file" className="flex flex-col items-center justify-center w-full h-64 border border-gray_800 border-dashed rounded-lg cursor-pointer bg-black_900 hover:bg-black_900_01">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Img
                                    src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconparkoutli_dznpma.svg"
                                    className="h-6 w-6 mb-4"
                                    alt="iconparkoutli"
                                    />
                                    <p className="mb-2 text-sm text-white_A700 font-semibold">Drop an infotrailer here or click to upload</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or WEBP (MAX. 800x400px)</p>
                                </div>
                                <input
                                    id="trailer-file"
                                    type="file"
                                    accept="video/*"
                                    className="hidden"
                                    onChange={(e) => setTrailer(e.target.files[0])}
                                />
                                </label>
                                <div id="image-preview">
                                    {trailer && (
                                        <img
                                        id="preview-image"
                                        className="w-64 h-32"
                                        src={URL.createObjectURL(trailer)}
                                        alt="Infotrailer Preview"
                                        />
                                    )}
                                </div>
                            </div>

                        </div>

                        {/* Video */}
                        <div className="flex flex-col gap-6 items-start justify-center my-0 w-[443px] sm:w-full">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            Play Video
                          </Text>
                          <div className="flex items-center justify-center w-full">
                                <label htmlFor="video-file" className="flex flex-col items-center justify-center w-full h-64 border border-gray_800 border-dashed rounded-lg cursor-pointer bg-black_900 hover:bg-black_900_01">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Img
                                    src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconparkoutli_dznpma.svg"
                                    className="h-6 w-6 mb-4"
                                    alt="iconparkoutli"
                                    />
                                    <p className="mb-2 text-sm text-white_A700 font-semibold">Drop a video here or click to upload</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or WEBP (MAX. 800x400px)</p>
                                </div>
                                <input
                                    id="video-file"
                                    type="file"
                                    accept="video/*"
                                    className="hidden"
                                    onChange={(e) => setVideo(e.target.files[0])}
                                />
                                </label>
                                <div id="image-preview">
                                    {video && (
                                        <img
                                        id="preview-image"
                                        className="w-64 h-32"
                                        src={URL.createObjectURL(video)}
                                        alt="Poster Preview"
                                        />
                                    )}
                                </div>
                            </div>

                        </div>

                        



                      </List>
                    </div>
                    

                  </div>

                  




                 
                   {/* Cast */}
          <div className="bg-black_900 flex flex-col gap-8 items-start justify-start max-w-[1450px] mt-7 sm:px-5 px-6 py-12 rounded-lg w-full">
            <Text
              className="font-bold text-left text-white_A700 w-auto"
              as="h5"
              variant="h5"
            >
              Add cast
            </Text>
            <Text
              className="font-normal not-italic text-gray_300 text-left w-auto"
              variant="body4"
            >
              Cast picture
            </Text>
            <div className="gap-2 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-start justify-start self-stretch w-auto md:w-full">
              {castMembers
                .slice(0, castDisplayCount)
                .map((castMember, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-8 items-start justify-start self-stretch w-full"
                  >
                    <div className="flex flex-col items-start justify-start w-[200px]">
                      {/* Drag and Drop */}
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor={`dropzone-file-${index}`}
                          className="flex flex-col items-center justify-center w-full h-64 border border-gray_800 border-dashed rounded-lg cursor-pointer bg-black_900 hover:bg-black_900_01"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            {castMember.imagePreview ? (
                              <img
                                src={castMember.imagePreview}
                                className="h-24 w-24 mb-4"
                                alt="Preview"
                              />
                            ) : (
                              <Img
                                src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconparkoutli_dznpma.svg"
                                className="h-6 w-6 mb-4"
                                alt="iconparkoutli"
                              />
                            )}
                            <p className="mb-2 text-sm text-white_A700 font-semibold">
                              Drop an image here or click to browse
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or WEBP (MAX. 800x400px)
                            </p>
                          </div>
                          <input
                            id={`dropzone-file-${index}`}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleImageChange(index, e)}
                          />
                        </label>

                       
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Real name
                        </Text>
                        <input
                          className="bg-gray_800 h-12 p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                          name={`real_name_${index}`}
                          placeholder="Anne Gitau"
                          shape="RoundedBorder4"
                          size="md"
                          variant="FillGray800"
                          value={castMember.real_name}
                          onChange={(e) =>
                            handleCastChange(index, "real_name", e.target.value)
                          }
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto mb-8">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Cast name
                        </Text>
                        <input
                          className="bg-gray_800 h-12 p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                          name={`cast_name_${index}`}
                          placeholder="Anne Gitau"
                          shape="RoundedBorder4"
                          size="md"
                          variant="FillGray800"
                          value={castMember.cast_name}
                          onChange={(e) =>
                            handleCastChange(index, "cast_name", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            {/* More Casts */}
            {/* Show "Load More" or "Show Less" button */}
            <button
              onClick={() => {
                if (castDisplayCount === totalCastMembers) {
                  setCastDisplayCount(castMembersPerPage);
                } else {
                  setCastDisplayCount(castDisplayCount + castMembersPerPage);
                }
              }}
              className="text-red_900 hover:text-red_900_01 underline cursor-pointer"
            >
              {castDisplayCount === totalCastMembers
                ? "Show Less"
                : "Load More Casts"}
            </button>
          </div>

                  {/* Save Play */}
                  <div className="flex flex-row gap-[25px] items-start justify-start ml-auto mt-6 self-stretch w-auto">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[166px] w-auto"
                      leftIcon={
                        <Img
                          src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927654/HeartStrings/SVG/img_iconsax_bold_save2_bgaabn.svg"
                          className="mb-px mr-3"
                          alt="Save"
                        />
                      }
                      shape="RoundedBorder8"
                      size="lg"
                      variant="OutlineWhiteA700_1"
                    >
                      <div className="font-bold text-left text-white_A700 text-xl">
                        Save Stream
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[164px] w-auto"
                      leftIcon={
                        <Img
                          src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1690007593/circle_gsm6z1.svg"
                          className="mb-px mr-3"
                          alt="Save Icon"
                        />
                      }
                      shape="RoundedBorder8"
                      size="lg"
                      variant="FillRed900"
                    >
                      <div className="font-bold text-left text-white_A700 text-xl">
                        Add Online Play
                      </div>
                    </Button>
                  </div>

              </form>
              
              </div>
























                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  

export default AdminAddStream