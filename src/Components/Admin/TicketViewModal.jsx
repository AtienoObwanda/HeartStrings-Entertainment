import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BiSolidUserX} from 'react-icons/bi'
import { FaEdit } from 'react-icons/fa';
import {AiFillCloseCircle} from 'react-icons/ai'
import ConfirmationModal from './ConfirmationModal';
import { useNavigate,useParams } from "react-router-dom";
import { TiExport } from 'react-icons/ti';
import { apiUrl } from '../../../env';
import { Img, Input, Text } from "UI_Components";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// import "jspdf-autotable";



const TicketViewModal = ({ isOpen, onClose, item, onDelete }) => {



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


  

// Outside Modal:
useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.ticketModal')) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);


// DOWNLOAD TICKET:
// const handleExportAllClick = () => {
//   const doc = new jsPDF();
 
//   doc.setProperties({
//     title: "Ticket Details",
//     subject: "HeartStrings Ticket",
//     author: "HeartStrings",
//   });

// const content = document.getElementById("ticketContent").innerHTML;
// html2canvas(content).then((canvas) => {
//   const imgData = canvas.toDataURL("image/png");
//   const pdf = new jsPDF();
//   pdf.addImage(imgData, "PNG", 0, 0, 210, 297); 
//   pdf.save("Heart Strings Entertainment.pdf");
// });

// doc.save("Heart Strings Entertainment.pdf");
// };

  

// const handleExportAllClick = () => {
//   const content = document.getElementById('ticketContent');

//   html2canvas(content).then((canvas) => {
//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF('p', 'mm', 'a4'); 
//     const imgWidth = 210;
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;

//     pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
//     pdf.save('Heart Strings Entertainment.pdf');
//   });
// };






const handleExportAllClick = () => {
  const content = document.getElementById("ticketContent");
  
  html2canvas(content, { useCORS: true }).then(canvas => {
    let img = new Image();
    img.src = canvas.toDataURL('image/png');
    img.onload = function () {
      let pdf = new jsPDF('landscape', 'mm', 'a4');
      pdf.addImage(img, 'PNG', 100, 10, 100, 150);
      pdf.save('Heart_Strings_Entertainment.pdf');
    };
  });
};







  return (
    <>
   

     

      {/* User View Modal */}
      {isOpen && (
       


<div className="fixed inset-0 flex items-center justify-center z-50 "
>

  <div className="absolute bg-black bg-opacity-50 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[115px] md:px-10 sm:px-5 w-full" >
 
    {/* <div
      className="bg-cover bg-no-repeat bg-black_900 flex flex-col h-[793px] items-center justify-start pb-6 w-[38%] md:w-full ticketModal"
    > */}
   <div className="bg-cover bg-no-repeat flex flex-col h-[97vh] items-center justify-start pb-6 w-[26rem] md:w-full ticketModal" 
    style={{ backgroundImage: "url('https://res.cloudinary.com/dyiuol5sx/image/upload/v1695804653/img_ticket_od7pjo.svg')",
             backgroundSize: "contain"
     }}
     id="ticketContent"
    >
        <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-red_900 flex flex-row items-center justify-center  h-[110px] pb-10 sm:px-5 px-8 rounded-tl-[28px] rounded-tr-[28px] w-full">
                {/* 
                  
                */}
                <Text className="text-base text-White_A700 w-auto ml-5 pt-[2em]">
                {item.play.title}
                </Text>
                <div className="bg-white_A700 h-[80px] ml-[196px] mr-2.5 rounded-bl-lg rounded-br-lg w-[4%] mt-[-0em] fixed">
                <br />
                <br />
                <Text className="text-base text-black_900 w-auto ml-5 pt-[2em]">
                    SUN
                </Text>
                <br />
                <Text className="text-base text-black_900 w-auto ml-5">
                    2ND
                </Text>
                </div>
                
            </div>
            <div className="flex h-7 mt-6 w-auto">
      <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689927662/HeartStrings/SVG/img_materialsymbolslocationon_vleymq.svg" alt="Theatre Tag" className="h-4 w-4" />
      <Text className="text-base text-White_A700 ml-2">{item.play.theater}</Text>
    </div>

    <div className="flex flex-row gap-6 items-center justify-center w-full pl-6 pr-6">
    <div className="h-[57px] w-[33%] flex flex-col items-center justify-center">
      <div>SEATS</div>
      <div className='flex mt-4'>{item.seat_numbers}</div>
    </div>
    <div className="h-[57px] w-[33%] flex flex-col items-center justify-center">
      <div>TIME</div>
      <div className='flex mt-4'>12:00</div>
    </div>
    <div className="h-[57px] w-[33%] flex flex-col items-center justify-center">
      <div>PRICE</div>
      <div className='flex mt-4'>KSH {item.price}</div>
    </div>
  </div>

  <div className="flex flex-col items-start justify-start w-auto mt-2">
    <Text className="text-base text-White_A700 w-auto ml-5">
      {item.ticket_type}
    </Text>
  </div>

  <Text className="text-base text-red_900_01 w-full ml-[4em]  backdrop-blur-sm">
    --------------------------------------------------------------------------------
  </Text>
 </div>
 <div className="flex flex-col items-center justify-center w-auto mt-4">
 <div className="flex flex-col items-center justify-center w-full">
      <img src="https://res.cloudinary.com/dyiuol5sx/image/upload/v1689933646/HeartStrings/logo/HeartStringsLogo.png"
       alt="HeartStrings Logo" 
      className="h-[5em] w-[5em]" />
    </div>

    <div className="flex flex-col items-center justify-start w-full mt-2">
  <Text
            className="font-normal not-italic text-left text-white_A700 w-auto text-sm"
            >
  Ticket Number: {item.ticket_number}
  </Text>
</div>
    <div className="flex items-center justify-center w-full mt-2">
      
      <img src={item.qr_code} alt="QR Code" className="h-[13em] w-[20em]" />
    </div>

    <div className="w-full mt-2 items-center justify-center">
    <div className=" flex flex-row  items-center justify-center sm:pl-5 pl-6 pr-3 rounded-lg self-stretch w-auto"
      onClick={handleExportAllClick}
        >
        <TiExport
          className="h-6 w-6 text-white_A700"
          alt="Export"
        />
        <Text
          className="font-normal not-italic text-left text-white_A700 w-auto text-sm"
          // variant="body4"
        >
          Download
        </Text>
      </div>
    </div>

    <div className="w-full items-center justify-center">
    <div className=" flex flex-row items-center justify-center sm:pl-5 pl-6 pr-3 py-2.5 rounded-lg self-stretch w-auto"
        >
        
        <a
          href='/terms-and-conditions'
          target='_blank'
          rel='noopener noreferrer'
          >
        <Text
          className="font-normal not-italic text-left text-white_A700 w-auto text-sm"
          // variant="body4"
        >
          Terms & Conditions
        </Text>
        </a>
      </div>
    </div>

</div>



</div>

  </div>
</div>

      )}
        
 



      
      
    </>
  );
};

export default TicketViewModal;


{/* <div
className="m-auto !w-[47%]"
>
   <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
      <div className="bg-black_900_01 flex flex-col gap-2.5 items-start justify-start mt-[50px] p-[110px] md:px-5 rounded-lg w-auto md:w-full">
      <AiFillCloseCircle className="h-8 w-8 text-white_A700 mt-[-9.5em] ml-[-10em]" src="#" alt="Close" 
                onClick={onClose}
                />
          <div className="flex flex-col gap-12 items-start justify-center w-auto">
          <div className="flex flex-col items-center justify-center w-auto">
          <Text className="font-bold text-white-A700 text-xl w-auto">Ticket information</Text>
          </div>

     



         

      </div>
      </div>
  </div>
  

</div> */}


