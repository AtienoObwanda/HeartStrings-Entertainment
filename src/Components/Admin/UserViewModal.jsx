import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BiSolidUserX} from 'react-icons/bi'
import { FaEdit } from 'react-icons/fa';
import {AiFillCloseCircle} from 'react-icons/ai'
import ConfirmationModal from './ConfirmationModal';
import { useNavigate,useParams } from "react-router-dom";

import { apiUrl } from '../../../env';
import { Img, Input, Text } from "UI_Components";



const UserViewModal = ({ isOpen, onClose, item, onDelete }) => {



  const navigate = useNavigate();
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const accessToken = localStorage.getItem('accessToken');
  const [userInfo, setUserInfo] = useState({});


// Access Token:

useEffect(() => {
  if (accessToken) {
    fetchUserInfo();
  } else {
    // Redirect to login if no access token
    navigate('/admin-login');
  }
}, [accessToken]);

const fetchUserInfo = async () => {
  try {
    const response = await axios.get(`${apiUrl}/auth/users/me/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    setUserInfo(response.data);

  } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
        console.error('Status code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        console.error('Request was made but no response was received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
    console.error('Error fetching user info:', error);
  }
};


  // Modal
  const openConfirmation = () => {
    setIsConfirmationOpen(true);
  };
  
  const closeConfirmation = () => {
    setIsConfirmationOpen(false);
  };
      
  

// Populate data


const [userData, setUserData] = useState({
  name: `${item.first_name} ${item.last_name}`,
  email: item.email,
  phonenumber: item.phone,
});

// const [userData, setUserData] = useState({
//   name: '',
//   email: '',
//   phonenumber: '',
// });



const handleItemChange = (key, value) => {
  setUserData(prevUserData => ({
    ...prevUserData,
    [key]: value
  }));
};


// HandleEditSubmit:
const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name,email, phonenumber } = userData;
  
    const data = {
      id: userInfo.id,
      first_name: name.split(' ')[0],
      last_name: name.split(' ')[1],
      email,
      // email: userData.email,
      phone: phonenumber,
    };
    // const data = {
    //   first_name: userData.name.split(' ')[0],
    //   last_name: userData.name.split(' ')[1],
    //   email: userData.email,
    //   phone: userData.phonenumber,
    // };
  


  try {
    console.log('Data to send:', data);
    //     const response = await axios.put(`${apiUrl}/api/update-user/${userInfo.id}/`, data, {
    const response = await axios.put(`${apiUrl}/api/update-user/`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log('Updated user data:', response.data);
    console.log('UPDATE SUCCESSFUL!!!!');
    navigate('/user-management');
  } catch (error) {
    console.error('Error updating user data:', error);
    // Handle error, show error message, etc.
  }
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
                        <div className="bg-black_900_01 flex flex-col gap-2.5 items-start justify-start mt-[50px] p-[110px] md:px-5 rounded-lg w-auto md:w-full">
                        <AiFillCloseCircle className="h-12 w-12 text-white_A700" src="#" alt="Close" 
                                  onClick={onClose}
                                  />
                        <div className="flex flex-col gap-12 items-start justify-center w-auto">
                            <div className="flex flex-col items-start justify-center w-auto">
                            <Text className="font-bold text-white-A700 text-xl w-auto">Edit User information</Text>
                            </div>
                            <form onSubmit={handleSubmit}>

                            <div className="flex flex-col items-start justify-start w-auto sm:w-full">

                            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
          
                                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                                <Text className="text-base text-white-A700 w-auto">Name</Text>
                                <Input
                                    name="name"
                                    value={userData.name}
                                    onChange={(value) => handleItemChange('name', value)}
                                    className="p-0 placeholder:text-gray_300 sm:pr-5 text-base text-gray-300 text-left w-[400px]"
                                    wrapClassName="bg-gray_800 pl-3 pr-[35px] py-3.5 rounded w-full"
                                ></Input>
                                </div>
                                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                                <Text className="text-base text-white-A700 w-auto">Email address</Text>
                                <Input
                                   
                                   name="email"
                                  //  placeholder={userData.email}
                                  //  disabled  
                                  value={userData.email}
                                  onChange={(value) => handleItemChange('email', value)}  
                                  className="p-0 placeholder:text-gray_300 sm:pr-5 text-base text-gray-300 text-left w-[400px]"
                                  wrapClassName="bg-gray_800 pl-3 pr-[35px] py-3.5 rounded w-full"
                                  type="email"
                                ></Input>
                                </div>
                                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                                <Text className="text-base text-white-A700 w-auto">Phone number</Text>
                                <Input
                                  name="phonenumber"
                                  value={userData.phonenumber}
                                  onChange={(value) => handleItemChange('phonenumber', value)}
                                  // onChange={(e) => handleItemChange('phonenumber', e.target.value)}
                                   className="p-0 placeholder:text-gray_300 sm:pr-5 text-base text-gray-300 text-left w-[400px]"
                                   wrapClassName="bg-gray_800 pl-3 pr-[35px] py-3.5 rounded w-full"
                                ></Input>
                                </div>
                            </div>
                            </div>
                            <br></br>
                           
                            <div className="flex gap-4">
                              <button
                                type="submit"
                                className="bg-gray_800 hover:bg-gray-400 flex flex-row gap-2 items-center justify-center sm:pl-5 pl-6 pr-3 py-2.5 rounded-lg w-full cursor-pointer"
                              >
                                <FaEdit className="h-6 w-6 text-white_A700" />
                                <Text className="text-base text-white_A700 w-auto">Edit User</Text>
                              </button>

                              <div className="bg-red_900 flex flex-row gap-2 items-center justify-center sm:pl-5 pl-6 pr-3 py-2.5 rounded-lg w-full cursor-pointer" onClick={openConfirmation}>
                                <BiSolidUserX className="h-6 w-6 text-white_A700" />
                                <Text className="text-base text-white_A700 w-auto">Delete user</Text>
                              </div>
                            </div>

                            </form>

                           

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
