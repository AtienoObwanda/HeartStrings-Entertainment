import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import {FiEdit} from 'react-icons/fi'
import {BiSolidUserX} from 'react-icons/bi'
import {IoEyeSharp} from 'react-icons/io5'
import { FaEdit } from 'react-icons/fa';
import TicketViewModal from './TicketViewModal';

// import axios from 'axios';
import Select from 'react-select';

import { apiUrl } from '../../../env';
import { Button, Img, Input, List, Line,Text } from "UI_Components";


const TicketManagement = () => {


const accessToken = localStorage.getItem('accessToken');
const [openModalId, setOpenModalId] = useState(null);
const [showSuccessAlert, setShowSuccessAlert] = useState(false);
const [tickets, setTickets] = useState([]);
useEffect(() => {
  const headers = {
    Authorization: `Bearer ${accessToken}`
  };
  
  axios.get(`${apiUrl}/api/tickets/`, { headers })
    .then(response => {
      console.log('API Response:', response.data);
      setTickets(response.data.data); // Access the data array
    })
    .catch(error => {
      console.error('Error fetching tickets:', error);
    });
}, []);


const [currentPage, setCurrentPage] = useState(1);
const [resultsPerPage, setResultsPerPage] = useState(10); 
const startIndex = (currentPage - 1) * resultsPerPage;
const endIndex = startIndex + resultsPerPage;
// const visibleData = tickets.slice(startIndex, endIndex);
const visibleData = Array.isArray(tickets) ? tickets.slice(startIndex, endIndex) : [];
console.log(visibleData)

const handleResultsPerPageChange = (newResultsPerPage) => {
  setResultsPerPage(newResultsPerPage);
  setCurrentPage(1); 
};

const totalPages = Math.ceil(tickets.length / resultsPerPage);

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




  return (
    <>
        
<div class="sm:hidden relative overflow-x-auto w-full">
    <table class="w-full text-sm text-left text-white_400">
        <thead class="text-xs uppercase bg-gray_800 text-white_A700">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone Number
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Payment Method
                </th>
                <th scope="col" class="px-6 py-3">
                  Purchase  Date & Time
                </th>
                <th scope="col" class="px-6 py-3">
                 Seats
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
        {visibleData.map((item, index) => (
    <tr key={index} className="border-b bg-transparent border-gray_800 text-white_A700">
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {item.user.first_name} {item.user.last_name}
      </th>
      <td className="px-6 py-4">{item.user.email}</td>
      <td className="px-6 py-4">{item.user.phone}</td>
      <td className="px-6 py-4">{item.purchased ? "Purchased" : "Not Purchased"}</td>
      <td className="px-6 py-4">{item.ticket_type}</td>
      <td className="px-6 py-4">{item.added_on}</td>
      <td className="px-6 py-4">{item.seat_numbers}</td>

      <td className="px-6 py-4">
      <IoEyeSharp
            className="h-5 w-5 text-white_A700"
            onClick={() => setOpenModalId(item.id)}
            />
            <TicketViewModal
       
        key={item.id}
        isOpen={openModalId === item.id}
        onClose={() => setOpenModalId(null)}
        item={item}
        // onDelete={handleDeleteUser}
      />
      </td>

      <td className="px-6 py-4">
      <FaEdit
            className="h-6 w-6 text-white_A700"
            // onClick={() => setOpenModalId(item.id)}

            />      </td>



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
                            disabled={endIndex >= tickets.length}>
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
  )
}

export default TicketManagement