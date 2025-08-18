import React, { useState } from "react";
import { motion } from "framer-motion"; // ✅ Import motion
import "./OurServices.css";

const services = [
  {
    title: "Wedding Photography",
    image: "https://i.postimg.cc/FRVBJYgZ/KAR04149.jpg",
  },
  {
    title: "Pre-wedding Photography",
    image: "https://i.postimg.cc/cJV1Cb4W/SUR03371.jpg",
  },
  {
    title: "Engagement Photography",
    image: "https://i.postimg.cc/ZKkYP7g8/KAR04497.jpg",
  },

  {
    title: "Fashion Photography",
    image: "https://i.postimg.cc/FKVJ6xcc/DEV-0007a.jpg",
  },

  {
    title: " Maternity Photography",
    image: "https://i.postimg.cc/x11FNjcG/RAJ01090.jpg",
  },

  {
    title: "Kids Photography",
    image: "https://i.postimg.cc/vZ35mqts/Z62-3361.jpg",
  },
];

const OurServices = () => {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const toggleZoom = (index) => {
    setZoomedIndex(zoomedIndex === index ? null : index);
  };

  return (
    <div className="our-services" id="services">
      <p className="subheading">OUR SERVICES</p>
      <h2 className="main-heading">
        Where every <span>picture</span> <br /> tells a story
      </h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={service.image}
              alt={service.title}
              onClick={() => toggleZoom(index)}
              className={zoomedIndex === index ? "zoomed" : ""}
            />
            <p>{service.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
