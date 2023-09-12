import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route,useNavigate } from "react-router-dom";
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store';

// import Layout from './hocs/Layout';

// General Pages
import HomePage from "Pages/General/HomePage";
const AboutUs = React.lazy(() => import("Pages/General/AboutUs"));
const ContactUs = React.lazy(() => import("Pages/General/ContactUs"));
const TermsAndConditions = React.lazy(() => import("Pages/General/Terms&Conditions"));
const AccessDenied = React.lazy(() => import("Pages/General/AccessDenied"));
const NotFound = React.lazy(() => import("Pages/General/NotFound"));
const PrivacyPolicy = React.lazy(() => import("Pages/General/PrivacyPolicy"));
// Content
const AllStreams = React.lazy(() => import("Pages/Content/AllStreams"));
const AllPlays = React.lazy(() => import("Pages/Content/AllPlays"));
const StreamDetails = React.lazy(() => import("Pages/Content/StreamDetails"));
const PlayDetails = React.lazy(() => import("Pages/Content/PlayDetails"));

// Users 
// Authentication
const Signup = React.lazy(() => import("Pages/Users/Auth/SignUp"));
const SignUpSuccessful = React.lazy(() => import("Pages/Users/Auth/SignUpSuccessful"));
const Login = React.lazy(() => import("Pages/Users/Auth/Login"));
const GoogleCallback = React.lazy(() => import("Components/Users/GoogleCallback"))
const ForgotPassword = React.lazy(() => import("Pages/Users/Auth/ForgotPassword"));
const ResetPassword = React.lazy(() => import("Pages/Users/Auth/ResetPassword"));
const ResetComplete = React.lazy(() => import("Pages/Users/Auth/ResetComplete"));
const SignUpEmailSent = React.lazy(() => import("Pages/Users/Auth/SignUpEmailSent"))
const AccountActivation = React.lazy(() => import("Pages/Users/Auth/AccountActivation"))
const ResetEmailSent = React.lazy(() => import("Pages/Users/Auth/ResetEmailSent"))
const NewActivation = React.lazy(() => import("Pages/Users/Auth/NewActivation"))

// User Account
const EditMyAccount = React.lazy(() => import("Pages/Users/Account/EditMyAccount"));
const MyAccount = React.lazy(() => import("Pages/Users/Account/MyAccount"));

// User Content
const MyTickets = React.lazy(() => import("Pages/Users/MyContent/MyTickets"));
const TicketPopUp = React.lazy(() => import("Pages/Users/MyContent/TicketPopUp"));
const MyStreams = React.lazy(() => import("Pages/Users/MyContent/MyStreams"));
const MyStreamLibrary = React.lazy(() => import("Pages/Users/MyContent/MyStreamLibrary"));

// Ticket
const BuyingTickets = React.lazy(() => import("Pages/Users/BuyTickets/BuyingTickets"));
const BuyingTicket = React.lazy(() => import("Pages/Users/BuyTickets/BuyTicket"));

// Renting Play
const RentingPlay = React.lazy(() => import("Pages/Users/RentingPlay/RentingPlay"));


// Payments
const CreditCardPayments = React.lazy(() => import("Pages/Users/Payments/CreditCardPayments"));
const PlayTicketPaymentConfirmation = React.lazy(() => import("Pages/Users/Payments/PlayTicketPaymentConfirmation") );
const RentPlayPaymentConfirmation = React.lazy(() => import("Pages/Users/Payments/RentPlayPaymentConfirmation") );
const CreditCardPayment = React.lazy(() => import("Pages/Users/Payments/CreditCardPayment"));
const PayNow = React.lazy(() => import("Pages/Users/Payments/PayNow"));
const RentingPlayPayment = React.lazy(() => import("Pages/Users/Payments/RentingPlayPayment"));

const Calendar=React.lazy(() => import("Pages/Users/BuyTickets/Calendar"))

// Admin Pages
const AdminSignUp = React.lazy(() => import("Pages/Admin/Auth/AdminSignUp"));
// const AdminSignUpSuccessful = React.lazy() => import ("Pages/Admin/Auth/AdminSignUpSuccessful")
const AdminLogin = React.lazy(() => import("Pages/Admin/Auth/AdminLogin"));
const AdminForgotPassword = React.lazy(() => import("Pages/Admin/Auth/AdminForgotPassword"));
const AdminPasswordReset = React.lazy(() => import("Pages/Admin/Auth/AdminPasswordReset"));
const AdminPasswordResetComplete = React.lazy(() => import("Pages/Admin/Auth/AminPasswordResetComplete"));

const AdminUserManagement = React.lazy(() => import("Pages/Admin/UserManagement/AdminUserManagement"));
const AdminTicketManagement = React.lazy(() => import("Pages/Admin/TicketManagement/AdminTicketManagement"));
const AdminAddStream = React.lazy(() => import("Pages/Admin/Content/AdminAddStream"));
const AdminAllStreams = React.lazy(() => import("Pages/Admin/Content/AdminAllStreams"));
const AdminAddPlay = React.lazy(() => import("Pages/Admin/Content/AdminAddPlay"));
const AdminEditPlay = React.lazy(() => import("Pages/Admin/Content/AdminEditPlay"));
const AdminEditStream = React.lazy(() => import ("Pages/Admin/Content/AdminEditStream"))
const AdminAllPlays = React.lazy(() => import("Pages/Admin/Content/AdminAllPlays"));
const AdminDashboard = React.lazy(() => import("Pages/Admin/Dashboard/AdminDashboard"));
// const RentingPlayPaymentConfirmation = React.lazy(() => import("pages/RentingPlayPaymentConfirmation"));
import { apiUrl } from '../env';



const ProjectRoutes = () => {
  // const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate(); // Get the navigate function from React Router
  const accessToken = localStorage.getItem('accessToken');

  const [userType, setUserType] = useState('normal');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/auth/users/me/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
        });
        const userData = response.data;
        setUserType(userData.user_type);
        setIsLoggedIn(true); // Assuming successful login
      } catch (error) {
        // Handle error here
        console.error('Error fetching user data:', error);
        setIsLoggedIn(false);
      }
    };

    fetchUserData();
  }, [accessToken]);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //   const response = await axios.get(`${apiUrl}/auth/users/me/`, {
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`
  //   },
  // });
  //       const userData = response.data;
  //       setIsAdmin(userData.is_staff);
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  // const handleUnauthorizedAccess = () => {
  //   navigate('/access-denied');
  // };


//   const fetchUserData = async () => {
//   try {
//     const response = await axios.get(`${apiUrl}/auth/users/me/`, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`
//         },
//     });
//     const userData = response.data;
//     setIsAdmin(userData.is_staff);
//   } catch (error) {
//     if (error.response && error.response.status === 401) {
//       // Redirect the user to login or access denied page
//       navigate('/access-denied'); // Assuming you have a route for access denied
//     } else {
//       // Handle other errors
//       console.error('Error fetching user data:', error);
//     }
//   }
// };


  // Function to handle unauthorized access to admin routes
 

  return (
    <React.Suspense fallback={<>Loading...</>}>
      {/* <Router> */}
        <Routes>
          {/* General Routes */}

          <Route path='/cal' element={<Calendar/>}/>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Content Routes */}
          <Route path="/all-plays" element={<AllPlays />} />
          <Route path="/play/:id" element={<PlayDetails />} />
          <Route path="/stream/:id" element={<StreamDetails />} />
          {/*         <Route path="/play/:id" component={SinglePlayPage} />
 */}
          <Route path="/all-streams" element={<AllStreams />} />

          {/* TO DELETE: */}
                    <Route path="/renting-play" element={<RentingPlay />} />


          {/* UserRoutes */}
          {/* Authentication Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-successful" element={<SignUpSuccessful />} />
          <Route path="/activate-account" element={<SignUpEmailSent/>}/>
          <Route path="/activate-account/new_request" element={<NewActivation/>}/>
          <Route path="/activate/:uidb64/:token" element={<AccountActivation/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/google-callback" component={GoogleCallback} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password-confirm/:uidb64/:token" element={<ResetPassword />} />
          <Route path="/reset/email-sent" element={<ResetEmailSent/>}/>
          <Route path="/reset-complete" element={<ResetComplete />} />
            
          {/* Authenticated UserRoutes */}
          {isLoggedIn && userType === 'normal' && (
            <>
            {/* Account Route */}
          <Route path="/edit-my-password" element={<EditMyAccount />} />
          <Route path="/edit-my-account" element={<MyAccount />} />

          {/* User Content */}
          {/* <Route path="/my-stream-library" element={<MyStreamLibrary />} /> */}
          <Route path="/my-streams" element={<MyStreamLibrary />} />
          {/* <Route path="/my-streams" element={<MyStreams />} /> */}
          <Route path="/my-tickets" element={<MyTickets />} />
          <Route path="/ticket-popup" element={<TicketPopUp />} />


          {/* Plays */}
          {/* <Route path="/renting-play" element={<RentingPlay />} /> */}

          {/* Tickets */}
          {/* ***************************************8 */}
          <Route path="/buying-tickets" element={<BuyingTickets />} />
          <Route path="/buying-ticket" element={<BuyingTicket />} /> {/*Actual ticket details page */}
          {/* ***************************************8 */}

          {/* Payments */}
          <Route path="/renting-play-payment" element={<RentingPlayPayment />} />
          {/* <Route path="/rent-play-payment-confirmation" element={<RentPlayPaymentConfirmation />}/> */}
          {/* <Route path="/credit-card-payments" element={<CreditCardPayments />} /> */}
          {/* <Route path="/renting-play-payment-confirmation" element={<RentingPlayPaymentConfirmation />}/> */}
          <Route path="/paynow" element={<PayNow />} />
          <Route path="/credit-card-payment" element={<CreditCardPayment />} />
          {/* <Route path="/renting-play-payment-confirmation" element={<RentingPlayPaymentConfirmation />} /> */}
          <Route path="/play-ticket-payment-confirmation" element={<PlayTicketPaymentConfirmation />}/>
          
          
          </>
           )}


          {/* Admin Routes */}
          

          <Route path="/admin-signup" element={<AdminSignUp />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          {/* <Route path="/admin-forgot-password" element={<AdminForgotPassword />}/> */}
          {/* <Route path="/admin-password-reset" element={<AdminPasswordReset />} /> */}
          {/* <Route path="/admin-password-reset-complete" element={<AdminPasswordResetComplete />} /> */}

          {userType === 'admin' ? (
            <>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-allplays" element={<AdminAllPlays />} />
          <Route path="/add-play" element={<AdminAddPlay />} />
          <Route path="/edit-play/:id" element={<AdminEditPlay />} />
          <Route path="/admin-allstreams" element={<AdminAllStreams />} />
          <Route path="/edit-stream/:id" element={<AdminEditStream />} />
          <Route path="/add-stream" element={<AdminAddStream />} />
          <Route path="/ticket-management" element={<AdminTicketManagement />} />
          <Route path="/user-management" element={<AdminUserManagement />} />    
          {/* Buy Client a ticket
              Edit a ticket
                */}

        </>
         ) : (
          <>
          <Route path="/admin-dashboard" element={<AccessDenied />} />
          <Route path="/admin-allplays" element={<AccessDenied />} />
          <Route path="/add-play" element={<AccessDenied />} />
          <Route path="/admin-allstreams" element={<AccessDenied />} />
          <Route path="/add-stream" element={<AccessDenied />} />
          <Route path="/ticket-management" element={<AccessDenied />} />
          <Route path="/user-management" element={<AccessDenied />} />   
          </>

        )}
        </Routes>
     
      {/* </Router> */}
    </React.Suspense>
  );
};
export default ProjectRoutes;



// onClick={() => navigate("/all-streams")}
