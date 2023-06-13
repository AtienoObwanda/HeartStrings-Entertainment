import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Content Routes */}
          <Route path="/play-details" element={<PlayDetails />} />
          <Route path="/stream-details" element={<StreamDetails />} />
          <Route path="/all-streams" element={<AllStreams />} />

          {/* UserRoutes */}
          {/* Authentication Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-successful" element={<SignUpSuccessful />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-complete" element={<ResetComplete />} />
            
          {/* Authenticated UserRoutes */}
          {/* Account Route */}
          <Route path="/edit-my-password" element={<EditMyAccount />} />
          <Route path="/edit-my-account" element={<MyAccount />} />

          {/* User Content */}
          <Route path="/my-stream-library" element={<MyStreamLibrary />} />
          <Route path="/my-streams" element={<MyStreamLibrary />} />
          {/* <Route path="/my-streams" element={<MyStreams />} /> */}
          <Route path="/my-tickets" element={<MyTickets />} />
          <Route path="/ticket-popup" element={<TicketPopUp />} />


          {/* Plays */}
          <Route path="/renting-play" element={<RentingPlay />} />

          {/* Tickets */}
          <Route path="/buying-tickets" element={<BuyingTickets />} />
          <Route path="/buying-ticket" element={<BuyingTicket />} />

          {/* Payments */}
          <Route path="/renting-play-payment" element={<RentingPlayPayment />} />
          {/* <Route path="/rent-play-payment-confirmation" element={<RentPlayPaymentConfirmation />}/> */}
          {/* <Route path="/credit-card-payments" element={<CreditCardPayments />} /> */}
          {/* <Route path="/renting-play-payment-confirmation" element={<RentingPlayPaymentConfirmation />}/> */}
          <Route path="/paynow" element={<PayNow />} />
          <Route path="/credit-card-payment" element={<CreditCardPayment />} />
          {/* <Route path="/renting-play-payment-confirmation" element={<RentingPlayPaymentConfirmation />} /> */}
          <Route path="/play-ticket-payment-confirmation" element={<PlayTicketPaymentConfirmation />}/>
          
          
         

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
