import React, { useState } from 'react';
import { Img, Input, Text } from "UI_Components";

const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) {
    return null;
  }

  return (
  
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-black_900_01 flex flex-col items-start justify-start p-[10px] pl-[10px] pr-[100px] pb-[60px] md:px-5 rounded-lg w-auto md:w-full">

        {/* <Img className="h-12 w-12" src="#" alt="Close" 
            onClick={onCancel}
            /> */}
            
            <div className="flex flex-col gap-12 items-center pl-[110px] text-center justify-center w-auto">
                <div className="flex flex-col items-center justify-center text-center w-auto">
                <Text className="font-bold text-white-A700 text-xl w-auto">Delete User</Text>
                 </div>
         </div>
        <div className="bg-black_900_01 rounded-lg p-6 gap-4 pl-[60px]">
            <Text className="text-base text-white_A700 w-auto">Are you sure you want to delete this user?</Text>
            <br></br>
            <button
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded mr-[40px] mt-[3em]"

            >
            Cancel
            </button>
            <button
                onClick={onConfirm}
                className="bg-red_900 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
            Delete
            </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
