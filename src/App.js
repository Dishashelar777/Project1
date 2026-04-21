
import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import TourPacksPage from "./pages/TourPacksPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import BookingPage from "./pages/BookingPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import AdminBookings from "./pages/AdminBookings";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
  <Route path="/admin" element={<AdminBookings />} />
  <Route path="/home" element={<HomePage />} />
  <Route path="/services" element={<ServicesPage />} />
  <Route path="/tour-packs" element={<TourPacksPage />} />
  <Route path="/about-us" element={<AboutUsPage />} />
  <Route path="/contact-us" element={<ContactUsPage />} />
  <Route path="/booking" element={<BookingPage />} />
  <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
  <Route path="/" element={<HomePage />} />  {/* LAST */}
</Routes>
    </div>
  );
}export default App;