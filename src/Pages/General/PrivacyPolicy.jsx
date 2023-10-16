import React from 'react'
import { useNavigate } from "react-router-dom";
import Footer from "Layout/Footer/Footer";
import Navbar from "Layout/Navbar/Navbar";
import { Text } from "UI_Components";


const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="bg-black_900 flex flex-col font-roboto items-start justify-start mx-auto w-full">
   
        <Navbar
          className="flex flex-row items-center justify-center md:px-5 w-full"
          buyTicketS="Buy ticket (s)"
          streamPlays="Stream plays"
          account="Account"
        />
        {/* Main Page Content Section */}

        <div className="flex flex-col gap-5 h-[800px] md:h-auto items-start justify-start md:ml-[0] ml-[150px] mr-20 mt-24 md:px-5 self-stretch w-auto md:w-full">
          <Text
            className="text-left text-white_A700 w-auto md:ml-5 sm:ml-10"
            as="h2"
            variant="h2"
          >
            Privacy Policy
          </Text>
          <Text
            className="font-normal leading-[175.00%] not-italic text-left text-white_A700 md:ml-5 sm:ml-10"
            as="h6"
            variant="h6"
          >
            A privacy statement for a ticketing and online streaming platform COULD include the following information:
            <br  />
            <br  />

            <>
              
            <strong>Information Collection:</strong> Explain what types of personal information you collect from users, such as names, email addresses, payment details, and any additional information necessary for ticketing and streaming services.
            <br  />  <br  />

            <strong>Use of Information:</strong> Clarify how you use the collected information, such as processing ticket orders, providing customer support, personalizing user experiences, and delivering streaming content.
            <br  />  <br  />

            <strong>Data Security:</strong> Highlight the measures you take to protect users' personal information, including encryption, secure storage, and access controls, to ensure the confidentiality and integrity of the data.
            <br  />  <br  />

            <strong>Third-Party Sharing:</strong> Disclose whether you share users' personal information with third parties, such as event organizers or streaming service providers, and provide details on the purpose and extent of such sharing.
            <br  />  <br  />

            <strong>Cookies and Tracking Technologies:</strong> Explain your use of cookies and similar tracking technologies, including their purpose and how users can manage their preferences or opt out if desired.
            <br  />  <br  />

            <strong>User Rights:</strong> Inform users about their rights regarding their personal information, such as the right to access, correct, or delete their data, as well as the process for exercising these rights.
            <br  />  <br  />

            <strong>Retention Period:</strong> Specify how long you retain users' personal information and the criteria used to determine the retention period.
            <br  />  <br  />

            <strong>Legal Basis:</strong> Identify the legal basis for processing users' personal information, such as the necessity for contract performance, compliance with legal obligations, or legitimate interests.
            <br  />  <br  />

            <strong>International Transfers:</strong> If applicable, explain whether you transfer users' personal information to countries outside their own and provide information about the safeguards you have in place to protect the data during such transfers.
            <br  />  <br  />

            <strong>Updates to the Privacy Statement:</strong> State that the privacy statement may be updated periodically and inform users about how they will be notified of any material changes.
            <br  />  <br  />

            <strong>Contact Information:</strong> Provide contact details for users to reach out with questions, concerns, or requests regarding their privacy or personal information.
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

export default PrivacyPolicy