import React, { useState, useEffect } from 'react';
import axios from 'axios';


import {BiSolidUserX} from 'react-icons/bi'
import {IoEyeSharp} from 'react-icons/io5'
import Select from 'react-select';

import ConfirmationModal from './confirmationModal';
import UserViewModal from './UserViewModal';
import { Button, Img, Input, List, Line,Text } from "UI_Components";
import { apiUrl } from '../../../env';


const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const accessToken = localStorage.getItem('accessToken');
  const [openModalId, setOpenModalId] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);


  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };

    axios.get(`${apiUrl}/auth/users/`, { headers })

      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10); 
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const visibleData = users.slice(startIndex, endIndex);
  
  const handleResultsPerPageChange = (newResultsPerPage) => {
    setResultsPerPage(newResultsPerPage);
    setCurrentPage(1); 
  };
  
  const totalPages = Math.ceil(users.length / resultsPerPage);

  // SELECT
  const customStyles = {
    control: provided => ({
      ...provided,
      backgroundColor: '#c71a1a', 
      boxShadow: 'none',
      color:'#ffffff', 
      border: 'none',
      borderRadius: '0', 

    }),
    option: (provided, state) => ({
      ...provided,
      color: state.menuIsOpen ? 'white' : 'black', 
      backgroundColor: state.menuIsOpen ? '#c71a1a' : 'transparent', 
      '&:hover': {
        backgroundColor: '#c71a1a', 
      },
      // paddingTop: state.menuIsOpen ? '90px' : '8px', 
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white', 
    }),
  };
  
  const options = [
    { value: 10, label: '10 per page' },
    { value: 20, label: '20 per page' },
    { value: 30, label: '30 per page' },
    { value: 40, label: '40 per page' },
    { value: 50, label: '50 per page' },
    { value: 60, label: '60 per page' },
    { value: 70, label: '70 per page' },
    { value: 80, label: '80 per page' },
    { value: 90, label: '90 per page' },
    { value: 100, label: '100 per page' },

  ];
  
  
  // Modal:
  
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);

  const openViewModal = () => {
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const openDeleteConfirmation = () => {
    setIsDeleteConfirmationOpen(true);
  };

  const closeDeleteConfirmation = () => {
    setIsDeleteConfirmationOpen(false);
  };

  

  const handleDeleteUser = async (userId) => {
    try {
      const headers = {
        Authorization: `Bearer ${accessToken}`, 
      };
  
      const response = await axios.delete(`${apiUrl}/api/delete-user/${userId}/`, { headers });

      if (response.status === 204) {
        console.log('User deleted successfully.');
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false); // Hide the success alert after a brief delay
        }, 3000); // Set  success alert visibility
      } else {
        console.log('Failed to delete user.');
       
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    } finally {
      closeViewModal(); 
      closeDeleteConfirmation(); 
    }
  };
  




  

  
  return (
    <>
    
    <div class="sm:hidden relative overflow-hidden w-full pb-[35em]">
       {/* Success Alert */}
    {showSuccessAlert && (
        <div class="relative flex flex-col sm:flex-row sm:items-center bg-white w-3/4 shadow rounded-md py-5 pl-6 pr-8 sm:pr-6">
                  <div class="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                    <div class="text-green-500">
                      <svg class="w-6 sm:w-5 h-6 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div class="text-sm font-medium ml-3">Success!.</div>
                  </div>
                  <div class="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">User Has been deleted Suceessfully!!!</div>
                 
                </div>
      )}
        <table class="w-full text-sm text-left text-white_400">
            <thead class="text-xs uppercase bg-gray_800 text-white_A700">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    {/* <th scope="col" class="px-6 py-3">
                        Category
                    </th> */}
                    <th scope="col" class="px-6 py-3">
                        User Type
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Event Type
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Date and Time
                    </th>
                    <th scope="col" class="px-6 py-3">
                        View
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Delete
                    </th>
                </tr>
            </thead>
            <tbody>
            {visibleData.map((item, index) => (
        <tr key={index} className="border-b bg-transparent border-gray_800 text-white_A700">
          <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
            {item.first_name} {item.last_name}
          </th>
          <td className="px-6 py-4">{item.email}</td>
          <td className="px-6 py-4">{item.user_type}</td>
          <td className="px-6 py-4">{item.eventType}</td>
          <td className="px-6 py-4">{item.last_login}</td>
          <td className="px-6 py-4">
            <IoEyeSharp
            className="h-5 w-5 text-white_A700"
            // onClick={openViewModal}
            onClick={() => setOpenModalId(item.id)}
            />
      <UserViewModal
        // isOpen={isViewModalOpen}
        // onClose={closeViewModal}
        // item={item}
        // onDelete={handleDeleteUser}
        key={item.id}
        isOpen={openModalId === item.id}
        onClose={() => setOpenModalId(null)}
        item={item}
        onDelete={handleDeleteUser}
      />
            
            </td>

          <td className="px-6 py-4">
            <BiSolidUserX
            className="h-6 w-6 text-white_A700"
            />
            </td>
         
        </tr>
      ))}
    
            </tbody>
            <tfoot>
                <tr class="font-semibold text-gray-900 dark:text-white">
                    <th scope="row" class="px-6 py-3 text-base">
                    <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Results per page
                            </Text>
                            </th>
                    <td class="px-6 py-3">
                            
                            <div className="bg-red_900 flex flex-row gap-6 items-center justify-center px-2.5 py-[5px] rounded self-stretch w-auto">
                            
                          <Select
                          className='bg-black'
                            options={options}
                            styles={customStyles}
                            value={{ value: resultsPerPage, label: `${resultsPerPage} per page` }}
                            onChange={option => handleResultsPerPageChange(option.value)}
                            components={{
                              IndicatorSeparator: () => null,
                              DropdownIndicator: () => (
                                <div className="custom-arrow">
                                  <img
                                      src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927653/HeartStrings/SVG/img_iconsax_bold_arrowdown2_bxl9th.svg"
                                      alt="Custom Arrow"
                                    className="h-4 w-4"
                                  />
                                </div>
                              )
                            }}
                          />
                          </div>




                    </td>
                    <td class="px-6 py-3">
                    <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto"
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}>
                            <Img
                              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927656/HeartStrings/SVG/img_iconsaxboldarrowleft2_zjxjcd.svg"
                              className="h-6 w-6"
                              alt="iconsaxboldarro_One"
                            />
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Previous
                            </Text>
                          </div>
                    </td>
    
                    <td class="px-6 py-3">
                    <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-gray_800 text-left w-auto"
                              variant="body4"
                            >
                              |
                            </Text>
                            <Button
                              className="cursor-pointer font-normal min-w-[29px] not-italic text-base text-center text-white_A700 w-auto"
                              shape="RoundedBorder4"
                              size="sm"
                              variant="FillRed900"
                            >
                              {currentPage}
                            </Button>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              out of {totalPages}
                            </Text>
                            
                            <Text
                              className="font-normal not-italic text-gray_800 text-left w-auto"
                              variant="body4"
                            >
                              |
                            </Text>
                          </div>
                    </td>
                    <td class="px-6 py-3">
                            
                            <div className="flex flex-row gap-4 items-center justify-center self-stretch w-auto"
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={endIndex >= users.length}>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              Next
                            </Text>
                            <Img
                              src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927656/HeartStrings/SVG/img_iconsaxboldarrowright2_hauua0.svg"
                              className="h-6 w-6"
                              alt="iconsaxboldarro_Two"
                            />
                            </div>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>

   
    
        </>
          );
}

export default UserManagement