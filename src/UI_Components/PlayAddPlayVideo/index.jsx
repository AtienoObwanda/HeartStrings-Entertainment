import React, { useRef, useState } from "react";
import { Img, Text } from "UI_Components";

const PlayAddPlayVideo = (props) => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFileSelection(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    handleFileSelection(file);
  };

  const handleFileSelection = (file) => {
    if (file) {
      setSelectedFileName(file.name);
      // You can process the uploaded video file here (e.g., display the video or handle the file upload).
      console.log("Uploaded video file:", file);
    }
  };

  const handleClick = () => {
    // Trigger the click event of the hidden file input when the component is clicked.
    fileInputRef.current.click();
  };

  return (
    <>
      <label
        className={props.className}
        onDrop={handleDrop}
        onDragOver={handleDragOver} // Add the dragover event listener
        onClick={handleClick}
      >
        <Img
          src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconparkoutli_dznpma.svg"
          className="h-6 w-6"
          alt="iconparkoutli"
        />
        <Text
          className="font-normal font-roboto not-italic text-center text-white_A700 w-auto"
          variant="body4"
        >
          {selectedFileName ? selectedFileName : props?.dropanvideohereOne}
        </Text>
        <input
          key={selectedFileName} // Add key prop here
          ref={fileInputRef}
          type="file"
          accept="video/*"
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />
      </label>
    </>
  );
};

PlayAddPlayVideo.defaultProps = {
  dropanvideohereOne: "Drop a Video here or Click to Browse.",
};

export default PlayAddPlayVideo;
