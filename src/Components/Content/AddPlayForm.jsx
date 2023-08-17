import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


import { Button, Img, Input, Line, List, Switch, Text } from "UI_Components";
import PlaysAddPlayAddshift from "UI_Components/PlaysAddPlay";
import PlaysAddPlayColumniconparkoutli from "UI_Components/PlaysAddPlayColumnIcon";
import PlayAddPlayVideo from "UI_Components/PlayAddPlayVideo"
import {InputRadio} from "UI_Components/InputRadio"

import DatePickerCal from "Components/Admin/DatePickerCal";
import LiveShowCal from "Components/Admin/LiveShowCal";


import { apiUrl } from '../../../env'

const YOUR_ACCESS_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxNTkwMjg0LCJpYXQiOjE2OTE1ODYxODksImp0aSI6IjliNTMxMDU3ZGNmZTRhOWE4N2EwNTE0MjE0MjczMzc1IiwidXNlcl9pZCI6MX0.BJzwxGxuV4TNmXxc9fEv3j-zM4o1mEKSKmC3B6aBln8';

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
  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [posterFile, setPosterFile] = useState(null);
  const [infotrailerFile, setInfotrailerFile] = useState(null);
  const [theater, setTheater] = useState('');
  const [castList, setCastList] = useState([]);
  const [offersList, setOffersList] = useState([]);
  const [selectedTheatre, setSelectedTheatre] = useState('');
  const [castMembers, setCastMembers] = useState(
    Array.from({ length: 20 }, () => ({ real_name: '', cast_name: '' }))
  );
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);

//   const handleTheatreSelection = (theatre) => {
//     setSelectedTheatre(theatre);
//   };

// Handle Submit
const handleSubmit = async (e) => {
  e.preventDefault();
  const apiUrl = 'http://127.0.0.1:8000/api/plays/';

  const formData = new FormData();
  formData.append('title', title);
  formData.append('synopsis', synopsis);
  formData.append('poster', posterFile);
  formData.append('infotrailer', infotrailerFile);
  formData.append('theater', selectedTheatre);
  formData.append('play_cast_list', JSON.stringify(castMembers));
  formData.append('play_offers_list', JSON.stringify(offersList));
  
  // ... Append other data like date

  const response = await fetch(apiUrl, {
    method: 'POST',
    body: formData,
  });

  const responseBody = await response.json();
  console.log(responseBody);
};

  // console.log('Data: ',title, synopsis, selectedTheatre, posterFile, infotrailerFile,castMembers)
// Cast Display(Loading):
// const castMembersPerPage = 5;
const castMembersPerPage = 5;
const totalCastMembers = castMembers.length;
const [castDisplayCount, setCastDisplayCount] = useState(castMembersPerPage);
const showLoadMoreButton = castDisplayCount < totalCastMembers;
  
// handling cast image preview:
const handleImageChange = (index, event) => {
  const file = event.target.files[0];
  if (file) {
    const updatedCastMembers = [...castMembers];
    updatedCastMembers[index].imagePreview = URL.createObjectURL(file);
    setCastMembers(updatedCastMembers);
  }
};


// Handle date and time select:
const handleDateSelection = (selectedDates, selectedTimes) => {
  setSelectedDates(selectedDates);
  setSelectedTimes(selectedTimes);
};


console.log("Data:  ", title, synopsis,"Date: ",selectedDates,"Time: ",selectedTimes)



  return (
<>
<div className="w-[94%] md:w-full">
    
<form onSubmit={handleSubmit}>

{/* Content Form */}

                  <div className="flex md:flex-col flex-row gap-4 items-start justify-between mt-6 w-full">
                    <div className="bg-black_900 w-[725px] flex sm:flex-1 flex-col gap-6 items-center justify-center mb-8 sm:px-5 px-6 py-12 rounded-lg md:w-[535px] sm:w-full">
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
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border border-gray_800 border-dashed rounded-lg cursor-pointer bg-black_900 hover:bg-black_900_01">
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
                             <label htmlFor="infotrailer-file" className="flex flex-col items-center justify-center w-full h-64 border border-gray_800 border-dashed rounded-lg cursor-pointer bg-black_900 hover:bg-black_900_01">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Img
                                    src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconparkoutli_dznpma.svg"
                                    className="h-6 w-6 mb-4"
                                    alt="iconparkoutli"
                                    />
                                    <p className="mb-2 text-sm text-white_A700 font-semibold">Drop a video here or click to upload</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">MP4, WebM (MAX. 800x400px)</p>
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


                      
                       
                    </div>
                    {/* Calendar */}
                    <div className="bg-black_900 w-[725px] flex sm:flex-1 flex-col items-start justify-start mb-[51px] md:px-10 px-12 sm:px-5 py-6 rounded-lg md:w-[535px] sm:w-full">
                    <Text
                              className="text-2xl md:text-[22px] text-white_A700 sm:text-xl w-auto"
                              size="txtRobotoRomanRegular24WhiteA700"
                            >
                              Select show time
                            </Text>
                            {/* Calendar: */}
                            <LiveShowCal
                            onDateSelection={handleDateSelection}
                            />


                    </div>


                  </div>



                  {/* Theatre */}
                  <div className="bg-black_900 flex flex-col gap-8 items-start justify-start max-w-[725px] mt-7 sm:px-5 px-6 py-12 rounded-lg w-full">
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
                                <input type="radio" 
                                    className="h-6 w-6 checked:bg-red-900 
                                        text-red-900 p-3 my-4"
                                        id="theatre1"
                                        name="theatre"
                                        value="Alliance Française"
                                        checked={selectedTheatre === 'Alliance Française'}
                                        onChange={() => setSelectedTheatre('Alliance Française')} 
                                
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
                              <input type="radio" 
                                    className="h-6 w-6 checked:bg-red-900 text-red-900 p-3 my-4" 
                                    id="theatre2"
                                    name="theatre"
                                    value="Nairobi Cinema"
                                    checked={selectedTheatre === 'Nairobi Cinema'}
                                    onChange={() => setSelectedTheatre('Nairobi Cinema')}
                            
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
                              <input type="radio" 
                                        className="h-6 w-6 checked:bg-red-900 text-red-900 p-3 my-4" 
                                        id="theatre3"
                                        name="theatre"
                                        value="Kenya National Theatre"
                                        checked={selectedTheatre === 'Kenya National Theatre'}
                                        onChange={() => setSelectedTheatre('Kenya National Theatre')}
                
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

                            <div className="flex flex-col gap-2 items-start justify-start w-full sm:w-full">
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
                      </div>
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
                      {/* <div className="flex flex-col gap-8 items-start justify-start self-stretch w-full">
                        <div className="flex flex-col h-[200px] items-center justify-start w-[200px]">
                          <Img
                            src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927679/HeartStrings/SVG/img_rectangle4_200x200_j1rxou.png"
                            className="h-[200px] md:h-auto object-cover rounded-lg w-[200px]"
                            alt="rectangleFour"
                          />
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-start self-stretch w-auto">
                          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Real name
                            </Text>
                            <Input
                              wrapClassName="w-full"
                              className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                              name="groupFourteen"
                              placeholder="Anne Gitau"
                              shape="RoundedBorder4"
                              size="md"
                              variant="FillGray800"
                            ></Input>

                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Cast name
                            </Text>
                            <Input
                              wrapClassName="w-full"
                              className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                              name="groupFourteen"
                              placeholder="Anne Gitau"
                              shape="RoundedBorder4"
                              size="md"
                              variant="FillGray800"
                            ></Input>
                          </div>
                        </div>
                      </div> */}
                      {/* {castMembers.map((castMember, index) => ( */}
                      {/* {castMembers.slice(0, showAllCasts ? castMembers.length : 5).map((castMember, index) => ( */}
                      {castMembers.slice(0, castDisplayCount).map((castMember, index) => (


                        <div key={index} className="flex flex-col gap-8 items-start justify-start self-stretch w-full">
                          <div className="flex flex-col items-start justify-start w-[200px]">
                            {/* Drag and Drop */}
                            <div className="flex items-center justify-center w-full">
                            <label htmlFor={`dropzone-file-${index}`} className="flex flex-col items-center justify-center w-full h-64 border border-gray_800 border-dashed rounded-lg cursor-pointer bg-black_900 hover:bg-black_900_01">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  {castMember.imagePreview ? (
                                    <img src={castMember.imagePreview} className="h-24 w-24 mb-4" alt="Preview" />
                                  ) : (
                                    <Img
                                      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconparkoutli_dznpma.svg"
                                      className="h-6 w-6 mb-4"
                                      alt="iconparkoutli"
                                    />
                                  )}
                                  <p className="mb-2 text-sm text-white_A700 font-semibold">Drop an image here or click to browse</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or WEBP (MAX. 800x400px)</p>
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
                              <Input
                                wrapClassName="w-full"
                                className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                                name={`real_name_${index}`}
                                placeholder="Anne Gitau"
                                shape="RoundedBorder4"
                                size="md"
                                variant="FillGray800"
                                value={castMember.real_name}
                                onChange={(e) => handleCastChange(index, 'real_name', e.target.value)}
                              />
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-auto"
                                variant="body4"
                              >
                                Cast name
                              </Text>
                              <Input
                                wrapClassName="w-full"
                                className="font-normal not-italic p-0 placeholder:text-gray_300 text-base text-gray_300 text-left w-full"
                                name={`cast_name_${index}`}
                                placeholder="Anne Gitau"
                                shape="RoundedBorder4"
                                size="md"
                                variant="FillGray800"
                                value={castMember.cast_name}
                                onChange={(e) => handleCastChange(index, 'cast_name', e.target.value)}
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
                          {castDisplayCount === totalCastMembers ? "Show Less" : "Load More Casts"}
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
                        Save Live Show
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
                        Post Live Show
                      </div>
                    </Button>
                  </div>

      </form>
      {/* {error && <p>{error}</p>} */}

</div>
</>  )
}

export default AddPlayForm