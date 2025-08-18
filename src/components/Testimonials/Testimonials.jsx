import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

// Add a rating field for stars (out of 5)
const testimonials = [
  {
    name: "Alekhya & Rohan",
    feedback:
      "PixsNovel Photography captured our wedding beautifully! Every shot told our story perfectly. The team was professional, friendly, and made us feel at ease throughout. Highly recommended!",
    rating: 5,
  },
  {
    name: "Saketh & Priya",
    feedback:
      "Our pre-wedding shoot was magical thanks to PixsNovel Photography. They have an amazing eye for detail and creativity. Truly made our memories timeless!",
    rating: 5,
  },
  {
    name: "Ananya & Arjun",
    feedback:
      "The maternity shoot was an unforgettable experience! PixsNovel Photography made us feel comfortable and captured every emotion with elegance. Exceptional work!",
    rating: 5,
  },
  {
    name: "Kiran & Meera",
    feedback:
      "PixsNovel Photography goes above and beyond! The candid moments, the smiles, everything was captured with perfection. Very professional and talented team!",
    rating: 5,
  },
  {
    name: "Ravi & Sneha",
    feedback:
      "Amazing experience with PixsNovel Photography! From kids' portraits to wedding moments, every photo is a piece of art. We couldn’t be happier with the results!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>
        What our clients say
        <br />
        about PixsNovel Photography
      </h2>
      <div className="testimonial-list">
        {testimonials.map((t, i) => (
          <motion.div
            className="testimonial-card"
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="stars">
              {Array.from({ length: t.rating }, (_, index) => (
                <span key={index} className="star">
                  ★
                </span>
              ))}
            </div>
            <p className="feedback">"{t.feedback}"</p>
            <p className="name">- {t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
