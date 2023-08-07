import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Button, Input, Text } from "UI_Components";
import Footer from "Layout/Footer/Footer";
import Navbar from "Layout/Navbar/Navbar";




const ContactUs = () => {
  const navigate = useNavigate();
  // Form fields variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  // Function to handle Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

      // Form validation:
      if (name && email && message){
        //construct email data:
        const emailData = {
          to: 'atienoobwanda@gmail.com',
          subject: 'New Message from HeartString Entertainment',
          body: 'Name: ${name}\nEmail: ${email\n\nMessage: ${message}',
        };

        //Send the email using your preferred method:
        sendEmail(emailData);

        // Clear the form fields.
        setName('');
        setEmail('');
        setMessage('');
      } else{
        alert('Please fill in all the required fields.');
      }
  };

  return (
    <>
    <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        {/* Navbar Section */}
        <Navbar
          className="flex flex-row items-center justify-center md:px-5 w-full"
          buyTicketS="Buy ticket (s)"
          streamPlays="Stream plays"
          account="Account"
        />

        
        {/* Main Page Section */}
          <div className="flex flex-col gap-12 items-center justify-start mt-20 md:px-5 self-stretch w-auto sm:w-full">              
          <div className="flex flex-col items-center justify-center mt-20 md:px-5 self-stretch w-full">
            <div className="flex flex-col gap-6 items-center justify-center w-full">
              <Text
                className="text-center text-white_A700"
                as="h2"
                variant="h2"
              >
                Contact Heartstrings Entertainment
              </Text>
              <Text
                className="font-normal not-italic text-center text-gray_300"
                as="h5"
                variant="h5"
              >
                Our team will get back to you in a jiffy.
              </Text>
            </div>
            {/* <div> */}
            <form className="mt-10 flex flex-col gap-12 items-center justify-center w-full max-w-[480px]">
              
            

              <div className="flex flex-col gap-8 items-start justify-start self-stretch w-full">
                
                {/* Contact Form */}

                  <div className="flex flex-col gap-2 items-start justify-start self-stretch w-full">
                    <Text className="font-normal not-italic text-left text-white_A700" variant="body4">
                      Full name
                    </Text>
                    
                    <Input
                      wrapClassName="flex h-12 w-full"
                      className="p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                      value={name} onChange={(e) => setEmail(e.target.value)}
                      name="name"
                      type="text"
                      placeholder="Name"
                      shape="RoundedBorder4"
                      variant="FillGray800"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start self-stretch w-full">
                    <Text className="font-normal not-italic text-left text-white_A700" variant="body4">
                      Email address
                    </Text>
                    <Input
                      wrapClassName="flex h-12 w-full"
                      className="p-0 pl-4 w-full text-white_A700 border-2 border-transparent focus:border-white_A700 rounded-md"
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      type="email"
                      placeholder="Email"
                      shape="RoundedBorder4"
                      variant="FillGray800"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start self-stretch w-full">
                    <Text className="font-normal not-italic text-left text-white_A700" variant="body4">
                      Message
                    </Text>
                    <Input
                      wrapClassName="flex flex-col justify-center h-48 w-full p-0 rounded"
                      className="bg-gray_800 border-2 border-transparent focus:border-white_A700 rounded-md font-normal h-full not-italic pl-4 sm:pr-5 py-3.5 rounded text-left text-white_A700"
                      value={message} onChange={(e) => setEmail(e.target.value)}
                      name="message"
                      type="text"
                      // placeholder="Enter your message here"
                      shape="RoundedBorder4"
                      variant="FillGray800"
                    />
                  </div>
                  <Button
                    className="cursor-pointer font-bold text-center text-white_A700 text-xl w-full mt-10"
                    shape="RoundedBorder8"
                    size="lg"
                    variant="FillRed90001"
                    type="submit"
                  >
                    Send message
                  </Button>

              </div>
              {/* </div> */}
               </form>

          
        
        
      </div>

      </div>


        {/* Footer Section*/}
        <Footer className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center mt-24 md:px-5 w-full"
          copyrightheartsOne="Copyright Heartstrings Entertainment"
        />

      </div>
    </>
  )
}

export default ContactUs