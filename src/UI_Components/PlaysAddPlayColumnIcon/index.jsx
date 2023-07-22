import React, { useRef, useState } from "react";
import { Img, Text } from "UI_Components";

const PlaysAddPlayColumniconparkoutli = (props) => {
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
      // You can process the uploaded file here (e.g., display the image or handle the file upload).
      console.log("Uploaded file:", file);
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
        onDragOver={handleDragOver}
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
          {selectedFileName ? selectedFileName : props?.dropanimagehereOne}
        </Text>
        <input
          key={selectedFileName} // Add key prop here
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />
      </label>
    </>
  );
};

PlaysAddPlayColumniconparkoutli.defaultProps = {
  dropanimagehereOne: "Drop an image here or click to browse.",
};

export default PlaysAddPlayColumniconparkoutli;




// import React from "react";

// import { Img, Text } from "UI_Components";

// const PlaysAddPlayColumniconparkoutli = (props) => {
//   return (
//     <>
//       <div className={props.className}>
//         <Img
//           src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927652/HeartStrings/SVG/img_iconparkoutli_dznpma.svg"
//           className="h-6 w-6"
//           alt="iconparkoutli"
//         />
//         <Text
//           className="font-normal font-roboto not-italic text-center text-white_A700 w-auto"
//           variant="body4"
//         >
//           {props?.dropanimagehereOne}
//         </Text>
//       </div>
//     </>
//   );
// };

// PlaysAddPlayColumniconparkoutli.defaultProps = {
//   dropanimagehereOne: "Drop an image here or click to browse.",
// };

// export default PlaysAddPlayColumniconparkoutli;
