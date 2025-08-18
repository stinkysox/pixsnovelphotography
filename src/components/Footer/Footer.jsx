import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo + Tagline */}
        <div className="footer-brand">
          <motion.div
            className="logo-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <img
              src="https://i.postimg.cc/SNhP63Lb/ONLY-LOGO-Black.png"
              alt="PixsNovel Photography Logo"
              style={{ height: "50px" }}
            />
          </motion.div>
          <p className="footer-tagline">
            Turning your wedding moments into cinematic memories and lasting
            frames.
          </p>

          {/* Address */}
          <p className="footer-address">
            201, Hy End Homes, Ayyappa Society, 100ft Road, Madhapur-500081
          </p>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/pixs_novel_photography/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/+918886771988"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Google Map */}
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15238.524985597374!2d78.3860159!3d17.4542049!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzE1LjEiTiA3OMKwMjMnMTguOSJF!5e0!3m2!1sen!2sin!4v1692365830000!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PixsNovel Photography Location"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} PixsNovel Photography. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
