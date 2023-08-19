import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Switch, Text } from "UI_Components";
import PlaysAddPlayAddshift from "UI_Components/PlaysAddPlay";
import PlaysAddPlayColumniconparkoutli from "UI_Components/PlaysAddPlayColumnIcon";
import PlayAddPlayVideo from "UI_Components/PlayAddPlayVideo";
import { InputRadio } from "UI_Components/InputRadio";

import DatePickerCal from "Components/Admin/DatePickerCal";
import LiveShowCal from "Components/Admin/LiveShowCal";

import { apiUrl } from "../../../env";

console.log('API: ', apiUrl)

const YOUR_ACCESS_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxNTkwMjg0LCJpYXQiOjE2OTE1ODYxODksImp0aSI6IjliNTMxMDU3ZGNmZTRhOWE4N2EwNTE0MjE0MjczMzc1IiwidXNlcl9pZCI6MX0.BJzwxGxuV4TNmXxc9fEv3j-zM4o1mEKSKmC3B6aBln8";

const AddPlayForm = () => {
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

  // Plays
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [posterFile, setPosterFile] = useState(null);
  const [infotrailerFile, setInfotrailerFile] = useState(null);
  const [selectedPlayOffer, setSelectedPlayOffer] = useState(null);
  const [selectedOtherOffers, setSelectedOtherOffers] = useState([]);
  const [selectedTheatre, setSelectedTheatre] = useState("");
  const isAvailableString = availability ? "true" : "false";
  const [castMembers, setCastMembers] = useState(
    Array.from({ length: 20 }, () => ({ real_name: "", cast_name: "" }))
  );
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const playDateTimes = selectedDates.map((date, index) => ({
    date: date.toISOString().split("T")[0], // Format: "YYYY-MM-DD"
    time1: selectedTimes[index].time1,
    time2: selectedTimes[index].time2,
  }));
  const [bogofOffer, setBogofOffer] = useState({
    bogof: false,
    offer_day: '',
    number_of_tickets: '',
    promo_code: '',
  });
  const [otherOffers, setOtherOffers] = useState([{ offers_name: '', offer_day: '', promo_code: '', percentage: '', number_of_tickets: '' }]);
  const [offerDates, setOfferDates] = useState(['']);



  // Handle date and time select:
  const handleDateSelection = (selectedDates, selectedTimes) => {
    setSelectedDates(selectedDates);
    setSelectedTimes(selectedTimes);
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

  // Handle offers:
  const handleOfferChange = (index, field, value) => {
    const updatedOffers = [...otherOffers];
    updatedOffers[index][field] = value;
    setOtherOffers(updatedOffers);
  };
  // Bogof
  const handleBogofChange = (field, value) => {
    setBogofOffer((prevBogofOffer) => ({
      ...prevBogofOffer,
      [field]: value,
    }));
  };

  // New Handle Submit:
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
    console.log("TOKEN: ",accessToken);

  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("synopsis", synopsis);
    formData.append("poster", posterFile);
    formData.append("infotrailer", infotrailerFile);
    formData.append("theater", selectedTheatre);
    formData.append("is_available", isAvailableString);
  
    formData.append("play_cast_list", JSON.stringify(castMembers));
    formData.append("play_dateTime", JSON.stringify(playDateTimes));
  
    // Append BOGOF offer if selected
    if (bogofOffer.bogof) {
      formData.append('play_offers', JSON.stringify([{
        bogof: bogofOffer.bogof,
        offer_day: bogofOffer.offer_day,
        number_of_tickets: bogofOffer.number_of_tickets,
        promo_code: bogofOffer.promo_code,
      }]));
    }
  
    // Append other_offers
    const offersToSend = otherOffers.slice(0, 5).map((offer, index) => ({
      offers_name: offer.offers_name,
      offer_day: offerDates[index], // Use the selected date from offerDates array
      promo_code: offer.promo_code,
      percentage: offer.percentage,
      number_of_tickets: offer.number_of_tickets,
    }));
    formData.append("other_offers", JSON.stringify(offersToSend));

    console.log(formData);

  
    try {
      const response = await axios.post(`${apiUrl}/api/plays/`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data', // Make sure to set content type
        },
      });
  
      const responseBody = response.data;
      console.log(responseBody);
      // Handle success 
      navigate('/admin-allplays');

    } catch (error) {
      // Handle error
      console.error('Error submitting play:', error);
    }
  };
  
  
  // Handle Submit
  // const handleSubmit = async (e) => {
  //   const userInfoUrl = `${apiUrl}/auth/users/me/`;
  //   const userInfoResponse = await fetch(userInfoUrl, {
  //     headers: {
  //       Authorization: `Bearer ${yourAuthenticationToken}`, // Replace with the actual token
  //     },
  //   });
  
  //   if (userInfoResponse.status === 401) {
  //     // User is not authenticated, handle accordingly (e.g., show an error message)
  //     console.log("User is not authenticated");
  //     return;
  //   }

  //   e.preventDefault();  
  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("synopsis", synopsis);
  //   formData.append("poster", posterFile);
  //   formData.append("infotrailer", infotrailerFile);
  //   formData.append("theater", selectedTheatre);
  //   formData.append("is_available", isAvailableString);

  //   formData.append("play_cast_list", JSON.stringify(castMembers));
  //   formData.append("play_dateTime", JSON.stringify(playDateTimes));
  
  //   // Append BOGOF offer if selected
  //   if (bogofOffer.bogof) {
  //     formData.append('play_offers', JSON.stringify([{
  //       bogof: bogofOffer.bogof,
  //       offer_day: bogofOffer.offer_day,
  //       number_of_tickets: bogofOffer.number_of_tickets,
  //       promo_code: bogofOffer.promo_code,
  //     }]));
  //   }
  
  //   // Append other_offers
  //   const offersToSend = otherOffers.slice(0, 5).map((offer, index) => ({
  //     offers_name: offer.offers_name,
  //     offer_day: offerDates[index], // Use the selected date from offerDates array
  //     promo_code: offer.promo_code,
  //     percentage: offer.percentage,
  //     number_of_tickets: offer.number_of_tickets,
  //   }));
  //   formData.append("other_offers", JSON.stringify(offersToSend));
  
  //   const response = await fetch(`${apiUrl}/api/videos/`, {
  //     method: "POST",
  //     body: formData,
  //   });
  
  //   const responseBody = await response.json();
  //   console.log(responseBody);
  // };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const apiUrl = "http://127.0.0.1:8000/api/plays/";
  
  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("synopsis", synopsis);
  //   formData.append("poster", posterFile);
  //   formData.append("infotrailer", infotrailerFile);
  //   formData.append("theater", selectedTheatre);
  //   formData.append("play_cast_list", JSON.stringify(castMembers));
  //   formData.append("play_dateTime", JSON.stringify(playDateTimes));
  //   if (bogofOffer.bogof) {
  //     formData.append('play_offers', JSON.stringify([bogofOffer]));
  //   }
  //   const offersToSend = otherOffers.slice(0, 5).map((offer, index) => ({
  //     offers_name: offer.offers_name,
  //     offer_day: offerDates[index], // Use the selected date from offerDates array
  //     promo_code: offer.promo_code,
  //     percentage: offer.percentage,
  //     number_of_tickets: offer.number_of_tickets,
  //   }));
  //   formData.append("other_offers", JSON.stringify(offersToSend));
  
  //   const response = await fetch(apiUrl, {
  //     method: "POST",
  //     body: formData,
  //   });
  
  //   const responseBody = await response.json();
  //   console.log(responseBody);
  // };
  
  // Cast Display(Loading):
  const castMembersPerPage = 5;
  const totalCastMembers = castMembers.length;
  const [castDisplayCount, setCastDisplayCount] = useState(castMembersPerPage);
  const showLoadMoreButton = castDisplayCount < totalCastMembers;

  


    const [offersDisplayCount, setOffersDisplayCount] = useState(1);
    const otherOffersPerPage = 1; // Adjust the number of offers per page


 

  console.log(
    "Data: ",
    title,
    synopsis,
    selectedTheatre,
    posterFile,
    'Availability: ', isAvailableString,
    infotrailerFile,
    castMembers,
    playDateTimes,
    'Bogof: ',bogofOffer,
    'Other Offers:  ',otherOffers,
  );

  return (
    <>
      <div className="w-[94%] md:w-full">
        <form onSubmit={handleSubmit}>
          {/* Content Form */}

          <div className="flex md:flex-col flex-row gap-4 items-start justify-between mt-6 w-full">
            <div className="bg-black_900 w-[1725px] flex sm:flex-1 flex-col gap-6 items-center justify-center mb-8 sm:px-5 px-6 py-12 rounded-lg md:w-[535px] sm:w-full">
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

              {/* synopsis */}
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
                    onChange={(e) => setSynopsis(e.target.value)}
                  />
                </div>
                <Text
                  className="not-italic text-gray_300 text-left w-auto"
                  variant="body5"
                >
                  Do not exceed 100 characters when entering the play’s synopsis
                </Text>
              </div>

              {/* Media Upload */}
              <div className="flex flex-col gap-2 items-start justify-start self-stretch w-full sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-center my-0 w-full sm:w-full">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    Play poster
                  </Text>
                  {/* Drag and Drop */}
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-64 border border-gray_800 border-dashed rounded-lg cursor-pointer bg-black_900 hover:bg-black_900_01"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Img
                          src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconparkoutli_dznpma.svg"
                          className="h-6 w-6 mb-4"
                          alt="iconparkoutli"
                        />
                        <p className="mb-2 text-sm text-white_A700 font-semibold">
                          Drop an image here or click to upload
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or WEBP (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => setPosterFile(e.target.files[0])}
                      />
                    </label>
                    <div id="image-preview">
                      {posterFile && (
                        <img
                          id="preview-image"
                          className="w-64 h-32"
                          src={URL.createObjectURL(posterFile)}
                          alt="Poster Preview"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Info Trailer */}
                <div className="flex flex-col gap-6 items-start mt-4 justify-center my-0 w-full sm:w-full">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    Infotrailer
                  </Text>
                  {/* Drag and Drop */}
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="infotrailer-file"
                      className="flex flex-col items-center justify-center w-full h-64 border border-gray_800 border-dashed rounded-lg cursor-pointer bg-black_900 hover:bg-black_900_01"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Img
                          src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconparkoutli_dznpma.svg"
                          className="h-6 w-6 mb-4"
                          alt="iconparkoutli"
                        />
                        <p className="mb-2 text-sm text-white_A700 font-semibold">
                          Drop a video here or click to upload
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          MP4, WebM (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="infotrailer-file"
                        type="file"
                        accept="video/*"
                        className="hidden"
                        onChange={(e) => setInfotrailerFile(e.target.files[0])}
                      />
                    </label>
                    {/* Preview area for infotrailer */}

                    <div id="infotrailer-preview">
                      {infotrailerFile && (
                        <video
                          controls
                          className="w-64 h-32"
                          src={URL.createObjectURL(infotrailerFile)}
                          alt="Trailer Preview"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Theatre */}
              <div className="bg-black_900 flex flex-col gap-8 items-start justify-start max-w-[550px] sm:px-5 px-6 py-12 rounded-lg w-full">
                <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto sm:w-full">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Select Theatre
                  </Text>

                  <div className="flex flex-row gap-4 items-start justify-start w-auto">
                    <div className="flex flex-row gap-4 items-center justify-center w-auto">
                      <input
                        type="radio"
                        className="h-6 w-6 checked:bg-red-900 
                                        text-red-900 p-3 my-4"
                        id="theatre1"
                        name="theatre"
                        value="Alliance Française"
                        checked={selectedTheatre === "Alliance Française"}
                        onChange={() =>
                          setSelectedTheatre("Alliance Française")
                        }
                      />
                      <label htmlFor="theatre1">
                        <Text
                          className="text-white_A700 w-auto"
                          size="txtRobotoRomanRegular14WhiteA700"
                        >
                          Alliance Française
                        </Text>
                      </label>
                    </div>

                    <div className="flex flex-row gap-4 items-center justify-center w-auto">
                      <input
                        type="radio"
                        className="h-6 w-6 checked:bg-red-900 text-red-900 p-3 my-4"
                        id="theatre2"
                        name="theatre"
                        value="Nairobi Cinema"
                        checked={selectedTheatre === "Nairobi Cinema"}
                        onChange={() => setSelectedTheatre("Nairobi Cinema")}
                      />
                      <label htmlFor="Nairobi Cinema">
                        <Text
                          className="text-white_A700 w-auto"
                          size="txtRobotoRomanRegular14WhiteA700"
                        >
                          Nairobi Cinema
                        </Text>
                      </label>
                    </div>

                    <div className="flex flex-row gap-4 items-center justify-center w-auto">
                      <input
                        type="radio"
                        className="h-6 w-6 checked:bg-red-900 text-red-900 p-3 my-4"
                        id="theatre3"
                        name="theatre"
                        value="Kenya National Theatre"
                        checked={selectedTheatre === "Kenya National Theatre"}
                        onChange={() =>
                          setSelectedTheatre("Kenya National Theatre")
                        }
                      />
                      <label htmlFor="KNT">
                        <Text
                          className="text-white_A700 w-auto"
                          size="txtRobotoRomanRegular14WhiteA700"
                        >
                          Kenya National Theatre
                        </Text>
                      </label>
                    </div>
                  </div>

                  {/* <div className="flex flex-col gap-2 items-start justify-start w-full sm:w-full">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Location
                    </Text>
                    <Input
                      name="frame40146"
                      placeholder="Search"
                      className="p-0 placeholder:text-gray-300 sm:pr-5 text-base text-gray-300 text-left w-full"
                      wrapClassName="bg-gray_800 pl-[13px] pr-[35px] py-4 rounded w-full"
                    ></Input>
                  </div> */}
                  <div className="flex flex-row gap-6 h-7 md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-white_A700 w-auto"
                      size="txtRobotoRomanRegular16"
                    >
                      Ticket availability status
                    </Text>
                    <div className="flex flex-row gap-4 items-center justify-center w-auto">
                      <Switch
                        value={availability}
                        onChange={handleSwitchChange}
                        onColor="#3d3d3d"
                        offColor="#3d3d3d"
                        onHandleColor="#ffffff"
                        offHandleColor="#ffffff"
                        className="w-[29%]"
                      />
                      <Text
                        className="ml-6 text-base text-gray-300 w-auto"
                        size="txtRobotoRomanRegular16Gray300"
                      >
                        {availability ? "Available" : "Not available"}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar & Offers */}
            <div className="flex md:flex-1 flex-col gap-6 items-center justify-start md:mt-0 w-[49%] md:w-full">
              {/* Calendar */}
              <div className="bg-black_900 flex flex-col items-start justify-start md:px-10 px-12 sm:px-5 py-6 rounded-lg w-[535px] sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white_A700 sm:text-xl w-auto"
                  size="txtRobotoRomanRegular24WhiteA700"
                >
                  Select show time
                </Text>
                {/* Calendar: */}
                {/* <LiveShowCal
                            onDateSelection={handleDateSelection}
                            /> */}
                <LiveShowCal onDateSelection={handleDateSelection} />

                {/* Offers: */}
              </div>

              {/* Offers */}
              <div className="bg-black_900 flex flex-col gap-8 items-start justify-center p-6 sm:px-5 rounded-lg w-[535px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text className="font-bold text-2xl md:text-[22px] text-white_A700 sm:text-xl w-auto">
                    Offers
                  </Text>
                </div>
                {/* Bogof */}
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
                    {/* <Img className="h-6 w-6" src="images/img_carbonradiobutton.svg" alt="carbonradiobutt_Two" /> */}

                    <label>
                      <input
                        type="radio"
                        className="h-6 w-6 checked:bg-red-900 
                          text-red-900 p-3 my-4"
                          onChange={(e) => handleBogofChange('bogof', e.target.checked)}
                          checked={bogofOffer.bogof}
                      />
                      <Text className="text-sm text-white_A700 w-auto pl-3">
                        BOGOF
                      </Text>
                    </label>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text className="text-base text-white_A700 w-auto ">
                        Day
                      </Text>
                      <div className="bg-gray_800 flex flex-col h-12 md:h-auto items-start justify-center rounded w-[162px] sm:w-full">
                        <select
                          className="p-0 placeholder:text-gray_300 text-base bg-gray_800 text-gray_300 rounded w-full text-left h-12 pl-4"
                          name="selectedDate"
                          value={bogofOffer.offer_day}
                          onChange={(e) => handleBogofChange('offer_day', e.target.value)}
                        >
                          <option value="" disabled>
                            Select a date
                          </option>
                          {selectedDates.map((selectedDate, index) => (
                            <option key={index} value={selectedDate}>
                              {new Date(selectedDate).toLocaleDateString(
                                "en-US"
                              )}{" "}
                              {/* Format the date */}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-auto">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text className="text-base text-white_A700 w-auto">
                          Number of tickets
                        </Text>
                        <input
                          name="groupThirty"
                          placeholder="Enter number"
                          className="p-0 placeholder:text-gray_300 text-base bg-gray_800 text-gray_300 rounded w-[115px] text-left h-12 pl-4 pr-2"
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-auto sm:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text className="text-base text-white_A700 w-auto">
                        Promo code
                      </Text>
                      <input
                        name="groupThirtyOne"
                        placeholder="Enter code"
                        className="p-0 placeholder:text-gray_300 text-base bg-gray_800 text-gray_300 rounded w-[400px] text-left h-12 pl-4 pr-4"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                {/* other offers */}
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text className="font-bold text-white_A700 text-xl w-auto">
                    Other offers
                  </Text>
                </div>

               
                  {otherOffers.map((offer, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full"
                    >
                      <div className="flex flex-col items-center justify-center w-auto sm:w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text className="text-base text-white_A700 w-auto">
                            Offer name
                          </Text>
                         
                          <input
                            placeholder="Enter name"
                            className="p-0 placeholder:text-gray_300 text-base bg-gray_800 text-gray_300 rounded w-[400px] text-left h-12 pl-4"
                            type="text"
                            value={offer.offers_name}
                            onChange={(e) => handleOfferChange(index, "offers_name", e.target.value)}                          
                          />
                        </div>
                      </div>

                      <div className="flex sm:flex-col flex-row gap-6 items-end justify-center w-auto sm:w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text className="text-base text-white_A700 w-auto">
                            Day
                          </Text>
                          <div className="bg-gray_800 flex flex-col h-12 md:h-auto items-start justify-center rounded w-[162px] sm:w-full">

                            <select
                                className="p-0 placeholder:text-gray_300 text-base bg-gray_800 text-gray_300 rounded w-full text-left h-12 pl-4"
                                name="selectedDate"
                                 value={offerDates[index]}
                                onChange={(e) => {
                                const updatedDates = [...offerDates];
                                updatedDates[index] = e.target.value;
                                setOfferDates(updatedDates);
                              }}
                            >
                              <option value="" disabled>Select a date</option>
                              {selectedDates.map((selectedDate, index) => (
                                <option key={index} value={selectedDate}>
                                  {new Date(selectedDate).toLocaleDateString("en-US")} 
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text className="text-base text-white_A700 w-auto">
                            % off
                          </Text>
                          <div className="bg-gray-800 flex flex-col h-12 md:h-auto items-start justify-center rounded w-[94px] sm:w-full">
                            <input
                              className="p-0 placeholder:text-gray_300 text-base text-center bg-gray_800 text-gray_300 rounded w-[100px] text-left h-12 pl-4"
                              isMulti={false}
                              isSearchable={false}
                              placeholder="%"
                              value={offer.percentage} // Use the percentage value from the state
                              onChange={(e) => {
                                const updatedOffers = [...otherOffers];
                                updatedOffers[index].percentage = e.target.value;
                                setOtherOffers(updatedOffers);
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-auto">
                          <div className="flex flex-col gap-2 items-start justify-start w-auto">
                            <Text className="text-base text-white_A700 w-auto">
                              Number of tickets
                            </Text>
                            <input
                              placeholder="Enter number"
                              className="p-0 placeholder:text-gray_300 text-base bg-gray_800 text-gray_300 rounded w-[115px] text-left h-12 pl-4 pr-2"
                              type="number"
                              value={offer.number_of_tickets} // Use the number of tickets value from the state
                              onChange={(e) => {
                                const updatedOffers = [...otherOffers];
                                updatedOffers[index].number_of_tickets = e.target.value;
                                setOtherOffers(updatedOffers);
                              }}
                            />
                          </div>
                        </div>
                        
                      </div>
                      <div className="flex flex-col items-center justify-center w-auto sm:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text className="text-base text-white_A700 w-auto">
                        Promo code
                      </Text>
                      <input
                        placeholder="Enter code"
                        className="p-0 placeholder:text-gray_300 text-base bg-gray_800 text-gray_300 rounded w-[400px] text-left h-12 pl-4"
                        type="text"
                        value={offer.promo_code} 
                        onChange={(e) => {
                          const updatedOffers = [...otherOffers];
                          updatedOffers[index].promo_code = e.target.value;
                          setOtherOffers(updatedOffers);
                        }}
                      />
                    
                    </div>
                  </div>
                    </div>
                  ))}

             

                <div className="flex flex-col items-center justify-start pt-[3px]">
                <Text
                  className="text-sm text-white_A700 underline"
                  onClick={() => {
                    if (otherOffers.length < 5) {
                      setOtherOffers([...otherOffers, { offers_name: '', offer_day: '', promo_code: '', percentage: '', number_of_tickets: '' }]);
                      setOfferDates([...offerDates, '']);
                    }
                  }}
                >
                  Load More Offers
                </Text>
              </div>

              </div>
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

                        {/* preview */}
                        {/* <div id={`image-preview-${index}`} className="hidden mt-4">
                                <img id={`preview-image-${index}`} className="w-64 h-32" src="#" alt="Preview" />
                              </div> */}
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
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
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
            // type="submit"
            // name="action"
            // value="draft" 
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
                Save Live Show
              </div>
            </Button>

            <Button
            type="submit"
            // name="action"
            // value="post" // Value indicating "Post Live Show"
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
                Post Live Show
              </div>
            </Button>
          </div>
        </form>
        {/* {error && <p>{error}</p>} */}
      </div>
    </>
  );
};

export default AddPlayForm;
