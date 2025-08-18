import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import MarqueeImages from "../../components/MarqueeImages/MarqueeImages";
import StatsCounter from "../../components/StatsCounter/StatsCounter";
import OurServices from "../../components/OurServices/OurServices";
import TeasersSection from "../../components/TeasersSection/TeasersSection";
import LatestWork from "../../components/LatestWork/LatestWork";
import Testimonials from "../../components/Testimonials/Testimonials";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import ScrollButton from "../../components/ScrollButton/ScrollButton";
import BannerBottom from "../../components/BannerBottom/BannerBottom";
import GridComponent from "../../components/GridComponent/GridComponent";
const Home = () => {
  return (
    <section className="home-container">
      <Navbar />
      <BannerBottom
        title="Cinematic"
        backgroundImage="https://i.pinimg.com/736x/b6/61/ed/b661ed422c3176b993327c2901ac97b6.jpg"
      />
      <Banner />
      <BannerBottom
        title="Framed inForever"
        backgroundImage="https://i.pinimg.com/736x/3c/df/82/3cdf826df82628ecb2e30129de43a765.jpg"
      />
      <MarqueeImages />
      <BannerBottom
        title="Chasing Light &Love"
        backgroundImage="https://i.pinimg.com/736x/d1/88/48/d18848482b46839661826b3a53ec90e0.jpg"
      />
      <StatsCounter />
      <BannerBottom
        title="Stories inStills"
        backgroundImage="https://i.pinimg.com/736x/86/2b/27/862b270e2df884de8a190791ef966e1f.jpg"
      />
      <OurServices />
      <BannerBottom
        title="Echoes ofEmotion"
        backgroundImage="https://i.pinimg.com/1200x/a7/a9/34/a7a9343856b9c9525f71fc2a2e6a61d9.jpg"
      />
      <LatestWork />
      <BannerBottom
        title="Time HeldGently"
        backgroundImage="https://i.pinimg.com/1200x/72/8b/e7/728be75e92e4ac8560db94c302996a07.jpg"
      />
      <TeasersSection />
      <BannerBottom
        title="The Human Lens"
        backgroundImage="https://i.pinimg.com/736x/21/92/a9/2192a9d4bb6cf242a19cab0bd566e515.jpg"
      />
      <Testimonials />
      <BannerBottom
        title="Unscripted Beauty"
        backgroundImage="https://i.pinimg.com/736x/12/9e/36/129e36c40593a6ba84345fb57547a55a.jpg"
      />
      <ContactSection />
      <BannerBottom
        title="Moments Between Moments"
        backgroundImage="https://i.pinimg.com/736x/da/40/7b/da407b3560977ef7c9be8ca0f5ed524e.jpg"
      />
      <Footer />
      <ScrollButton />
    </section>
  );
};

export default Home;
