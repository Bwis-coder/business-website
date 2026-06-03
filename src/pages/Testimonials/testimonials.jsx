import "./testimonials.css";
import { HeaderSection } from "../headerPage/header";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "James Okafor",
      role: "Business Executive",
      message:
        "Best haircut I've ever had. The attention to detail is unmatched. I always leave feeling like a new man.",
    },
    {
      id: 2,
      name: "Emeka Chukwu",
      role: "Student",
      message:
        "Clean, sharp, and professional. My go-to barber for every occasion. Highly recommended.",
    },
    {
      id: 3,
      name: "Tunde Adeyemi",
      role: "Entrepreneur",
      message:
        "The skin fade they gave me was perfect. Everyone at the office was asking where I got my hair done.",
    },
    {
      id: 4,
      name: "David Nwosu",
      role: "Teacher",
      message:
        "Very welcoming environment. The barber listened to exactly what I wanted and delivered perfectly.",
    },
    {
      id: 5,
      name: "Chidi Eze",
      role: "Engineer",
      message:
        "I've been coming here for 2 years and the quality never drops. Consistent and professional every time.",
    },
  ];

  return (
    <div className='testimonials-container'>
      <HeaderSection/>
      <div className="testimonials-section">
        <div className="testimonials-header">
          <h2>What Our Clients Say</h2>
          <p>Real experiences from real clients</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <p className="testimonial-message">"{t.message}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.name.charAt(0)}</div>
                <div className="author-info">
                  <span className="author-name">{t.name}</span>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Testimonials };
