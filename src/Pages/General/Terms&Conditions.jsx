import React from 'react'
import { useNavigate } from "react-router-dom";
import Footer from "Layout/Footer/Footer";
import Navbar from "Layout/Navbar/Navbar";
import { Text } from "UI_Components";


const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="bg-black_900 flex flex-col font-roboto items-start justify-start mx-auto w-full">
    {/* <div className="bg-black_900 flex flex-col font-roboto items-center justify-start mx-auto w-full"> */}
        {/* Navbar Section */}
        <Navbar
          className="flex flex-row items-center justify-center md:px-5 w-full"
          buyTicketS="Buy ticket (s)"
          streamPlays="Stream plays"
          account="Account"
        />
        {/* Main Page Content Section */}

        <div className="flex flex-col gap-5 h-[870px] md:h-auto items-start justify-start md:ml-[0] ml-[150px] mr-20 mt-24 md:px-5 self-stretch w-auto md:w-full">
          <Text
            className="text-left text-white_A700 w-auto md:m-5 sm:m-10"
            as="h2"
            variant="h2"
          >
            Terms & Conditions
          </Text>
          <Text
            className="font-normal leading-[175.00%] not-italic text-left text-white_A700 md:m-5 sm:m-10"
            as="h6"
            variant="h6"
          >Here are some key general guidelines, and you may need to consider or adapt to fit the specific procedures at heartstrings and considerations for your 
          ticketing and streaming platform. <br  /> 
          Points to consider include: <br  />
          <br  />

            <>
           

            <strong>Acceptance of Terms:</strong> Clearly state that by accessing or using the platform, users agree to be bound by the terms and conditions.

              <br  />
              <br />

              <strong>User Responsibilities:</strong> Outline the responsibilities and obligations of users, such as providing accurate information, complying with applicable laws, and respecting the intellectual property rights of others.
              <br /><br />

              <strong>Account Creation:</strong> Explain the process for creating an account, including age restrictions, username and password requirements, and the user's responsibility for maintaining the confidentiality of their account information.
              <br /> <br />

              <strong>Ticketing and Streaming Services:</strong> Describe the services provided by the platform, including the sale of tickets, availability of streaming content, and any limitations or restrictions.
              <br /> <br />

              <strong>Payment and Refunds:</strong> Provide details on payment methods accepted, pricing, refund policies, and any additional fees or charges.
              <br /> <br />

              <strong>Intellectual Property:</strong> Clarify the ownership of intellectual property rights, including copyrights, trademarks, and any user-generated content submitted to the platform
              <br />
              <br />

              <strong>Privacy and Data Protection:</strong> Explain how user data is collected, stored, and used, as well as any third-party services involved. Include a link to the platform's separate privacy policy for more detailed information.
              <br />
              <br />

              <strong>Prohibited Activities:</strong> Specify activities that are strictly prohibited on the platform, such as unauthorized access, fraud, spamming, or engaging in any illegal or harmful behavior.
              <br /> <br />

              <strong>Disclaimer of Liability:</strong> State that the platform is not responsible for any damages, losses, or injuries arising from the use of the services, including technical issues, interruptions, or content accuracy.
              <br /> <br />

              <strong>Termination of Access:</strong> Outline the circumstances under which the platform may suspend or terminate user access, such as violation of the terms, illegal activities, or any other breach of agreement.
              <br /> <br />

              <strong>Modifications to Terms:</strong> Reserve the right to modify or update the terms and conditions at any time, and explain how users will be notified of such changes.
              <br /> <br />

              <strong>Governing Law and Jurisdiction:</strong> Specify the applicable law and jurisdiction that govern the terms and conditions, as well as any dispute resolution mechanisms, such as arbitration or mediation.
              <br />        
            </>
          </Text>
        </div>
        

        {/* Footer Section*/}
        <Footer className="border-gray_800 border-solid border-t-[13px] flex items-center justify-center mt-5 md:px-5 w-full"
          copyrightheartsOne="Copyright Heartstrings Entertainment"
        />

      </div>
    </>
  )
}

export default TermsAndConditions