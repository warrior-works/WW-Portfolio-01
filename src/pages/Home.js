import React from "react";
import textureImg from "../resources/images/background_texture.png";
import aashuu from "../aashuu/profilebw.jpg";
import nextIcon from "../resources/images/Next_icon.svg";
import starIcon from "../resources/images/star1.svg";
import DevDisplayW from "../resources/images/DevDisplayW.png";
import "../styles/Home.css";
import Projects from "../components/Projects";
import { Link } from "react-router-dom";
import AboutMe from "../components/AboutMe";
import Service from "../components/ServiceOffering";
import Profile from "../components/Profile";
import WorkTogether from "../components/WorkTogether";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      {/* <Helmet>
        <title>Ashutosh Kumar Portfolio</title>
        <meta property="og:title" content="Ashutosh Kumar Portfolio" />
        <meta property="og:description" content="Portfolio of Ashutosh Kumar, a Creative Full-Stack Web App Developer & UI Designer. With 50+ web apps built, he is currently developing DevDisplay - a paradise for developers!" />
        <meta property="og:url" content="https://www.aashuu.tech/" />
        <meta property="og:image" content="https://www.aashuu.tech/portfoliothumbnail.png" />
        <meta property="og:image:width" content="1928" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ashutosh Kumar Portfolio" />
        <meta name="twitter:description" content="Portfolio of Ashutosh Kumar, a Creative Full-Stack Web App Developer & UI Designer. With 50+ web apps built, he is currently developing DevDisplay - a paradise for developers!" />
        <meta name="twitter:image" content="https://www.aashuu.tech/portfoliothumbnail.png" />
        <meta name="twitter:site" content="@warrioraashuu" />
        <meta name="twitter:creator" content="@warrioraashuu" />
        <meta name="twitter:url" content="https://www.aashuu.tech/" />
        <meta name="twitter:domain" content="aashuu.tech" />
      </Helmet>
      <Navbar/>
      <section className="about_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-30" data-aos="zoom-in">
              <div className="about_me_box shadow_box">
                <Link to="/about" className="overlay_link"></Link>
                <img src={textureImg} alt="" className="bg_img" />
                <div className="img_box">
                  <img src={aashuu} alt="" />
                </div>
                <div className="infos"> */}
                      <Helmet>
        <title>Polymath | Ashutosh Kumar</title>
        <meta name="description" content="The human version of JavaScript. Ashutosh Kumar is a Creative Full-Stack Web App Developer & UI Designer. Founder of DevDisplay." />
        <meta name="keywords" content="The human version of JavaScript, Ashutosh Kumar, JavaScript Developer, Full Stack Developer, React Developer" />
        <meta property="og:title" content="The Human Version of JavaScript | Ashutosh Kumar" />
        <meta property="og:description" content="The human version of JavaScript. Portfolio of Ashutosh Kumar, a Creative Full-Stack Web App Developer & UI Designer. With 50+ web apps built, he is currently developing DevDisplay." />
        <meta property="og:url" content="https://www.aashuu.tech/" />
        <meta property="og:image" content="https://www.aashuu.tech/portfoliothumbnail.png" />
        <meta property="og:image:width" content="1928" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Human Version of JavaScript | Ashutosh Kumar" />
        <meta name="twitter:description" content="The human version of JavaScript. Portfolio of Ashutosh Kumar, a Creative Full-Stack Web App Developer & UI Designer." />
        <meta name="twitter:image" content="https://www.aashuu.tech/portfoliothumbnail.png" />
        <meta name="twitter:site" content="@warrioraashuu" />
        <meta name="twitter:creator" content="@warrioraashuu" />
        <meta name="twitter:url" content="https://www.aashuu.tech/" />
        <meta name="twitter:domain" content="aashuu.tech" />
      </Helmet>
      <Navbar/>
      <section className="about_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-30" data-aos="zoom-in">
              <div className="about_me_box shadow_box">
                <Link to="/about" className="overlay_link"></Link>
                <img src={textureImg} alt="" className="bg_img" />
                <div className="img_box">
                  <img src={aashuu} alt="" />
                </div>
                <div className="infos">
                  <h4>Entrepreneur. Engineer. Designer.</h4>
                  <h1>𝘈𝘴𝘩𝘶𝘵𝘰𝘴𝘩 𝘒𝘶𝘮𝘢𝘳</h1>
                  <p>Turning pixels into production-grade SaaS products for the past 4 years with relentless creative obsession.</p>
                  {/* <p>✦ Built 50+ production grade SaaS products over the past 3 years across Web2 • Web3 • AI • Open Source</p> */}
                  {/* <p>SDE I @LPS • GSoC'25 • Building DevDisplay - A tech ecosystem running on 3 business models: Platform, Labs, and Community.</p> */}
                  {/* <p>SDE @LPS • Designing & developing production ready web apps with a mind full of fucking obsessed creativity • Currently in GSoC'25 • Open to contract based freelance work only.</p> */}
                  <Link href="#" className="about_btn">
                    <img src={nextIcon} alt="Button" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="zoom-in">
              <div className="row h-100">
                <div className="col-lg-12">
                  <div className="banner shadow_box devdisplay_wrapper">
                    <a href="https://www.devdisplay.org/" target="_blank" rel="noopener noreferrer" className="devdisplay_banner_link">
                      <div className="devdisplay_content">
                        <span className="founder_text">Founder & Creator</span>
                        
                        <div className="active_button_container">
                            <div className="pulsing_button"></div>
                        </div>

                        <img src={DevDisplayW} alt="DevDisplay Website" className="dev_display_img" />
                        
                        <div className="visit_now_container">
                              <img src={nextIcon} alt="Next" className="next_icon_img" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                  <AboutMe />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                  <Projects />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="banner shadow_box">
                <div className="marquee slow">
                  <div>
                    <span>
                      {/* Your idea + My Visuals =<b>$$$</b> */}
                      Your Idea + My Implementation =<b>$$$</b>
                      <img decoding="async" src={starIcon} alt="Star" />
                    </span>
                    <span>
                      Your Idea + My Implementation =<b>$$$</b>
                      <img decoding="async" src={starIcon} alt="Star" />
                    </span>
                    <span>
                      Your Idea + My Implementation =<b>$$$</b>
                      <img decoding="async" src={starIcon} alt="Star" />
                    </span>
                    <span>
                      Your Idea + My Implementation =<b>$$$</b>
                      <img decoding="async" src={starIcon} alt="Star" />
                    </span>
                    <span>
                      Your Idea + My Implementation =<b>$$$</b>
                      <img decoding="async" src={starIcon} alt="Star" />
                    </span>
                    <span>
                      Your Idea + My Implementation =<b>$$$</b>
                      <img decoding="async" src={starIcon} alt="Star" />
                    </span>
                    <span>
                      Your Idea + My Implementation =<b>$$$</b>
                      <img decoding="async" src={starIcon} alt="Star" />
                    </span>
                    <span>
                      Your Idea + My Implementation =<b>$$$</b>
                      <img decoding="async" src={starIcon} alt="Star" />
                    </span>
                    <span>
                      Your Idea + My Implementation =<b>$$$</b>
                      <img decoding="async" src={starIcon} alt="Star" />
                    </span>
                    <span>
                      Your Idea + My Implementation =<b>$$$</b>
                      <img decoding="async" src={starIcon} alt="Star" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30" data-aos="zoom-in">
              <Service />
            </div>
            <div className="col-lg-6 mb-30" data-aos="zoom-in">
              <Profile />
            </div>
            <div className="col-lg-6 mb-30" data-aos="zoom-in">
              <div className="about_client_box info_box shadow_box">
                <img src={textureImg} alt="bg" className="bg_img" />
                <div className="clients d-flex align-items-start justify-content-center">
                  <div className="client_item">
                    <h1>3+</h1>
                    <p>
                      Years <br />
                      Experience
                    </p>
                  </div>
                  <div className="client_item">
                    <h1>30+</h1>
                    <p>
                      CLIENTS <br />
                      WORLDWIDE
                    </p>
                  </div>
                  <div className="client_item">
                    <h1>90+</h1>
                    <p>
                      TOTAL <br />
                      PROJECTS
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30" data-aos="zoom-in">
              <WorkTogether />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
