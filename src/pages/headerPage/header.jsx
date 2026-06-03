import { NavLink } from "react-router-dom";
import "./header.css";
import { useState, useEffect } from "react";
import { bookAppointment } from "../../utiliy/getappoint.js";

const HeaderSection = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "If you need a haircut, book your appointment now.",
    "Need a fresh cut? Book now.",
    "Get your next haircut booked today.",
    "Looking sharp starts here: book your haircut now.",
    "Don’t wait for a fresh look: book now.",
    "Your next fresh cut is one click away : book now.",
    "Stay sharp, stay confident: book your haircut today.",
    "Premium cuts, clean fades: book your appointment now.",
    "Look your best every day: book now.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="header-main">
      <div className="header-container">
        <div className="logo">
          <img className="bwis-logo" src="./bwislogo.PNG" />
        </div>

        <div className="nav-container">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/services"
          >
            <span>Services</span>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/testimonials"
          >
            <span>Testimonals</span>
          </NavLink>
        </div>

        <button className="booking-button" onClick={bookAppointment}>
          Book Appointment
        </button>
      </div>

      <p className="hero-message">{messages[messageIndex]}</p>
    </div>
  );
};

export { HeaderSection };
