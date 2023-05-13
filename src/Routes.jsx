import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// General Pages
import HomePage from "Pages/General/HomePage";
const AboutUs = React.lazy(() => import("Pages/General/AboutUs"));
const ContactUs = React.lazy(() => import("Pages/General/ContactUs"));
const TermsAndConditions = React.lazy(() => import("Pages/General/Terms&Conditions"));
const AccessDenied = React.lazy(() => import("Pages/General/AccessDenied"));
const NotFound = React.lazy(() => import("Pages/General/NotFound"));

// Content
const AllStreams = React.lazy(() => import("Pages/Content/AllStreams"));
const StreamDetails = React.lazy(() => import("Pages/Content/StreamDetails"));
const PlayDetails = React.lazy(() => import("Pages/Content/PlayDetails"));

// Users 
// Authentication
const Signup = React.lazy(() => import("Pages/Users/Auth/SignUp"));
const SignUpSuccessful = React.lazy(() => import("Pages/Users/Auth/SignUpSuccessful"));
const Login = React.lazy(() => import("Pages/Users/Auth/Login"));
const ForgotPassword = React.lazy(() => import("Pages/Users/Auth/ForgotPassword"));
const ResetPassword = React.lazy(() => import("Pages/Users/Auth/ResetPassword"));
const ResetComplete = React.lazy(() => import("Pages/Users/Auth/ResetComplete"));
// User Account
const MyAccount = React.lazy(() => import("Pages/Users/Account/MyAccount"));
const EditMyAccount = React.lazy(() => import("Pages/Users/Account/EditMyAccount"));
// User Content
const MyTickets = React.lazy(() => import("Pages/Users/MyContent/MyTickets"));
const TicketPopUp = React.lazy(() => import("Pages/Users/MyContent/TicketPopUp"));
const MyStreams = React.lazy(() => import("Pages/Users/MyContent/MyStreams"));
const MyStreamLibrary = React.lazy(() => import("Pages/Users/MyContent/MyStreamLibrary"));

// Payments


// Renting Play

// Ticket


// const RentingPlayPayment = React.lazy(() => import("pages/RentingPlayPayment"));
// const RentingPlay = React.lazy(() => import("pages/RentingPlay"));

// const CreditCardPayment1 = React.lazy(() => import("pages/CreditCardPayment1"));
// const BuyingTickets = React.lazy(() => import("pages/BuyingTickets"));

// const PlayTicketPaymentConfirmation = React.lazy(() =>
//   import("pages/PlayTicketPaymentConfirmation")
// );
// const RentPlayPaymentConfirmation = React.lazy(() =>
//   import("pages/RentPlayPaymentConfirmation")
// );
// const CreditCardPayment = React.lazy(() => import("pages/CreditCardPayment"));
// const PayNow = React.lazy(() => import("pages/PayNow"));
// const BuyingTicket = React.lazy(() => import("pages/BuyingTicket"));


// Admin Pages

// const AdminUserManagement = React.lazy(() =>
//   import("pages/AdminUserManagement")
// );
// const AdminTicketManagement = React.lazy(() =>
//   import("pages/AdminTicketManagement")
// );
// const AdminAddStream = React.lazy(() => import("pages/AdminAddStream"));
// const AdminAllStreams = React.lazy(() => import("pages/AdminAllStreams"));
// const AdminAddPlay = React.lazy(() => import("pages/AdminAddPlay"));
// const AdminAllPlays = React.lazy(() => import("pages/AdminAllPlays"));
// const AdminDashboard = React.lazy(() => import("pages/AdminDashboard"));
// const AdminPasswordResetComplete = React.lazy(() =>
//   import("pages/AdminPasswordResetComplete")
// );
// const AdminPasswordReset = React.lazy(() => import("pages/AdminPasswordReset"));
// const AdminForgotPassword = React.lazy(() =>
//   import("pages/AdminForgotPassword")
// );
// const AdminLogin = React.lazy(() => import("pages/AdminLogin"));
// const AdminSignUp = React.lazy(() => import("pages/AdminSignUp"));
// const RentingPlayPaymentConfirmation = React.lazy(() =>
//   import("pages/RentingPlayPaymentConfirmation")
// );

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          {/* General Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Content Routes */}
          <Route path="/play-details" element={<PlayDetails />} />
          <Route path="/stream-details" element={<StreamDetails />} />
          <Route path="/all-streams" element={<AllStreams />} />

          {/* UserRoutes */}
          {/* Authentication Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-complete" element={<ResetComplete />} />
          <Route path="/signup-successful" element={<SignUpSuccessful />} />
            
          {/* Authenticated UserRoutes */}
          {/* Account Route */}
          <Route path="/edit-my-account" element={<EditMyAccount />} />
          <Route path="/my-account" element={<MyAccount />} />


          {/* 
         
          <Route path="/buyingticket" element={<BuyingTicket />} />
          <Route path="/paynow" element={<PayNow />} />
          <Route path="/creditcardpayment" element={<CreditCardPayment />} />
          <Route
            path="/rentplaypaymentconfirmation"
            element={<RentPlayPaymentConfirmation />}
          />
          <Route
            path="/playticketpaymentconfirmation"
            element={<PlayTicketPaymentConfirmation />}
          />
          
          <Route path="/buyingtickets" element={<BuyingTickets />} />
          <Route path="/creditcardpayment1" element={<CreditCardPayment1 />} />
          
          <Route path="/mystreams" element={<MyStreams />} />
          <Route path="/mytickets" element={<MyTickets />} />
          <Route path="/ticketpopup" element={<TicketPopUp />} />
          <Route path="/mystreamlibrary" element={<MyStreamLibrary />} />
          <Route path="/rentingplay" element={<RentingPlay />} />
          <Route path="/rentingplaypayment" element={<RentingPlayPayment />} />
          <Route
            path="/rentingplaypaymentconfirmation"
            element={<RentingPlayPaymentConfirmation />}
          /> */}

          {/* Admin Routes */}

          {/* <Route path="/adminsignup" element={<AdminSignUp />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route
            path="/adminforgotpassword"
            element={<AdminForgotPassword />}
          />
          <Route path="/adminpasswordreset" element={<AdminPasswordReset />} />
          <Route
            path="/adminpasswordresetcomplete"
            element={<AdminPasswordResetComplete />}
          />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminallplays" element={<AdminAllPlays />} />
          <Route path="/adminaddplay" element={<AdminAddPlay />} />
          <Route path="/adminallstreams" element={<AdminAllStreams />} />
          <Route path="/adminaddstream" element={<AdminAddStream />} />
          <Route
            path="/adminticketmanagement"
            element={<AdminTicketManagement />}
          />
          <Route
            path="/adminusermanagement"
            element={<AdminUserManagement />}
          /> */}
          
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
