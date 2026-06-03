import { HeaderSection } from "../headerPage/header";
import "./services.css";
import { bookAppointment } from "../../utiliy/getappoint.js";

const Services = () => {
  return (
    <div className="services-page">
      <HeaderSection />

      <div className="services-intro">
        <h1>Our Services</h1>

        <h2>
          At Bwis Salon, we provide clean, professional haircuts designed to
          help men look sharp and feel confident for every occasion—from
          business meetings and job interviews to church services, special
          events, and everyday life. Explore our services below and find the
          perfect grooming experience for you.
        </h2>
      </div>

      <div className="service-card">
        <div className="service-item">
          <p className="service-title">Classic Haircut</p>
          <p className="service-desc">Precision haircut tailored to your style</p>
          <p className="service-price">Price: $25</p>
        </div>

        <div className="service-item">
          <p className="service-title">Skin Fade</p>
          <p className="service-desc">Sharp fade with clean finishing</p>
          <p className="service-price">Price: $35</p>
        </div>

        <div className="service-item">
          <p className="service-title">Beard Grooming</p>
          <p className="service-desc">Professional beard trim and shaping</p>
          <p className="service-price">Price: $15</p>
        </div>

        <div className="service-item">
          <p className="service-title">Haircut + Beard Combo</p>
          <p className="service-desc">Complete grooming experience</p>
          <p className="service-price">Price: $40</p>
        </div>

        <div className="service-item">
          <p className="service-title">Kids Haircut</p>
          <p className="service-desc">Stylish cuts for children</p>
          <p className="service-price">Price: $20</p>
        </div>

        <div className="service-item">
          <p className="service-title">Hot Towel Shave</p>
          <p className="service-desc">Traditional hot towel shave and grooming</p>
          <p className="service-price">Price: $30</p>
        </div>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose Us</h2>

        <ul>
          <li>Experienced barbers</li>
          <li>Attention to detail</li>
          <li>Clean environment</li>
          <li>Personalized service</li>
          <li>Modern techniques</li>
        </ul>
      </div>

      <div className="services-cta">
        <button onClick={bookAppointment}>Book Your Appointment Today</button>
      </div>
    </div>
  );
};

export { Services };