import { testimonials } from "@/data/testimoni";
import "./Testimoni.css";

export default function Testimoni() {
  const testimonial = testimonials[0];

  return (
    <section className="testimoni-section">
      <div className="testimoni-content">
        <h3>TESTIMONI</h3>
        <h2>Kata Mereka Tentang Tomoro</h2>
        <div className="quote-box">
          <p className="quote-text">{testimonial.quote}</p>
          <div className="author-info">
            <div className="avatar">{testimonial.initials}</div>
            <div className="author-details">
              <strong>{testimonial.name}</strong>
              <br />
              <span>{testimonial.role}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
