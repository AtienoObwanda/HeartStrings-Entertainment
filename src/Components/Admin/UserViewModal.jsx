import React, { useState } from 'react';
import { Img, Input, Text } from "UI_Components";

import ConfirmationModal from './ConfirmationModal';

import {BiSolidUserX} from 'react-icons/bi'




const UserViewModal = ({ isOpen, onClose, item, onDelete }) => {
   

      const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

      const openConfirmation = () => {
        setIsConfirmationOpen(true);
      };
      
      const closeConfirmation = () => {
        setIsConfirmationOpen(false);
      };
      



  return (
    <>
   

     

      {/* User View Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div
                  className="m-auto !w-[47%]"
                  >
                     <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
                        <div className="bg-black_900_01 flex flex-col gap-2.5 items-start justify-start mt-[91px] p-[120px] md:px-5 rounded-lg w-auto md:w-full">
                        <Img className="h-12 w-12" src="#" alt="Close" 
                                  onClick={onClose}
                                  />
                        <div className="flex flex-col gap-12 items-start justify-center w-auto">
                            <div className="flex flex-col items-start justify-center w-auto">
                            <Text className="font-bold text-white-A700 text-xl w-auto">User information</Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                                <Text className="text-base text-white-A700 w-auto">Name</Text>
                                <Input
                                    name="name_One"
                                    placeholder={`${item.first_name} ${item.last_name}`}
                                    disabled
                                    className="p-0 placeholder:text-gray_300 sm:pr-5 text-base text-gray-300 text-left w-[400px]"
                                    wrapClassName="bg-gray_800 pl-3 pr-[35px] py-3.5 rounded w-full"
                                ></Input>
                                </div>
                                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                                <Text className="text-base text-white-A700 w-auto">Email address</Text>
                                <Input
                                    name="email"
                                    placeholder={item.email}
                                    disabled
                                    className="p-0 placeholder:text-gray_300 sm:pr-5 text-base text-gray-300 text-left w-[400px]"
                                    wrapClassName="bg-gray_800 pl-3 pr-[35px] py-3.5 rounded w-full"
                                    type="email"
                                ></Input>
                                </div>
                                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                                <Text className="text-base text-white-A700 w-auto">Phone number</Text>
                                <Input
                                    name="phonenumber_One"
                                    placeholder={item.phone}
                                    disabled
                                    className="p-0 placeholder:text-gray_300 sm:pr-5 text-base text-gray-300 text-left w-[400px]"
                                    wrapClassName="bg-gray_800 pl-3 pr-[35px] py-3.5 rounded w-full"
                                ></Input>
                                </div>
                            </div>
                            </div>
                            <div className="bg-red_900 flex flex-row gap-2 items-center justify-center sm:pl-5 pl-6 pr-3 py-2.5 rounded-lg w-auto cursor-pointer"
                            onClick={openConfirmation}>
                            <BiSolidUserX
                            className="h-6 w-6 text-white_A700"/>
                            <Text className="text-base text-white_A700 w-auto">Delete user</Text>
                            </div>

                        </div>
                        </div>
                    </div>
                    

            </div>
       
        </div>
      )}
        
      {isConfirmationOpen && (
        <ConfirmationModal
          isOpen={isConfirmationOpen}
          onCancel={closeConfirmation}
          onConfirm={() => {
            onDelete(item.id); 
            closeConfirmation();
            onClose();
          }}
        />
      )}

      
      {/* jj */}
      
    </>
  );
};

export default UserViewModal;
