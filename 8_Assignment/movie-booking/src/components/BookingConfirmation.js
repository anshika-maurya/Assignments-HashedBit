import React from "react";
import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const { name, email, mobile } = location.state || {};
  const bookingId = Math.floor(Math.random() * 1000000); // Generate Random ID

  return (
    <div className="container">
      <h2>Booking Confirmed!🎉</h2>
      <p><strong>Booking ID:</strong> {bookingId}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Mobile:</strong> {mobile}</p>
    </div>
  );
};

export default BookingConfirmation;
