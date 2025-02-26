import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: { ...formData, movieId: id } });
  };

  return (
    <div className="container">
      <h2>Book Your Seat!</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="tel" name="mobile" placeholder="Mobile" required onChange={handleChange} />
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
