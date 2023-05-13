import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// General Pages
import AboutUs from "Pages/General/AboutUs";
import AccessDenied from "Pages/General/AccessDenied";
import ContactUs from "Pages/General/ContactUs";
import HomePage from "Pages/General/HomePage";
import NotFound from "Pages/General/NotFound";
import TermsAndConditions from "Pages/General/Terms&Conditions";




// Users

// const RentingPlayPayment = React.lazy(() => import("pages/RentingPlayPayment"));
// const RentingPlay = React.lazy(() => import("pages/RentingPlay"));
// const MyStreamLibrary = React.lazy(() => import("pages/MyStreamLibrary"));
// const TicketPopUp = React.lazy(() => import("pages/TicketPopUp"));
// const MyTickets = React.lazy(() => import("pages/MyTickets"));
// const MyStreams = React.lazy(() => import("pages/MyStreams"));
// const MyAccount = React.lazy(() => import("pages/MyAccount"));
// const EditMyAccount = React.lazy(() => import("pages/EditMyAccount"));
// const CreditCardPayment1 = React.lazy(() => import("pages/CreditCardPayment1"));
// const BuyingTickets = React.lazy(() => import("pages/BuyingTickets"));
// const TermsAndConditions = React.lazy(() => import("pages/TermsAndConditions"));
// const AboutUs = React.lazy(() => import("pages/AboutUs"));
// const PlayTicketPaymentConfirmation = React.lazy(() =>
//   import("pages/PlayTicketPaymentConfirmation")
// );
// const ContactUs = React.lazy(() => import("pages/ContactUs"));
// const RentPlayPaymentConfirmation = React.lazy(() =>
//   import("pages/RentPlayPaymentConfirmation")
// );
// const CreditCardPayment = React.lazy(() => import("pages/CreditCardPayment"));
// const PayNow = React.lazy(() => import("pages/PayNow"));
// const BuyingTicket = React.lazy(() => import("pages/BuyingTicket"));
// const AllStreams = React.lazy(() => import("pages/AllStreams"));
// const StreamDetails = React.lazy(() => import("pages/StreamDetails"));
// const PlayDetails = React.lazy(() => import("pages/PlayDetails"));
// const HomePage = React.lazy(() => import("pages/HomePage"));
// const AccessDenied = React.lazy(() => import("pages/AccessDenied"));
// const NotFound1 = React.lazy(() => import("pages/NotFound1"));
// const SignUpSuccessful = React.lazy(() => import("pages/SignUpSuccessful"));
// const ResetComplete = React.lazy(() => import("pages/ResetComplete"));
// const ResetPassword = React.lazy(() => import("pages/ResetPassword"));
// const ForgotPassword = React.lazy(() => import("pages/ForgotPassword"));
// const Login = React.lazy(() => import("pages/Login"));
// const Signup = React.lazy(() => import("pages/Signup"));

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
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="/contactus" element={<ContactUs />} />

            {/* UserRoutes */}

          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/resetcomplete" element={<ResetComplete />} />
          <Route path="/signupsuccessful" element={<SignUpSuccessful />} />
             */}

            {/* Authenticated UserRoutes */}
          
          {/* <Route path="/playdetails" element={<PlayDetails />} />
          <Route path="/streamdetails" element={<StreamDetails />} />
          <Route path="/allstreams" element={<AllStreams />} />
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
          <Route path="/editmyaccount" element={<EditMyAccount />} />
          <Route path="/myaccount" element={<MyAccount />} />
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
