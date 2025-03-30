import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Call from "../resources/images/phone.svg";
import mail from "../resources/images/mail.svg";
import Loacte from "../resources/images/pin-alt.svg";
import textureImg from "../resources/images/background_texture.png";
import StarIcon from "../resources/images/star-icon.png";
import Footer from "../components/Footer";
import "../styles/contact.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWeb3Forms from "@web3forms/react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  const apiKey = "YOUR_API_KEY";
  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Lorem Lorem",
      subject: "New Contact Message from your ",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
      // Show a success toast
      toast.success(message || "Message sent successfully");
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
      // Show an error toast
      toast.error(msg);
    },
  });
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact | {process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <Navbar />
      <section className="contact_area">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-4 contact_infos">
              <h3 data-aos="fade-right">Contact Info</h3>
              <ul className="contact_details">
                <li className="d-flex align-items-center" data-aos="zoom-in">
                  <div className="icon_box shadow_box">
                    <img src={mail} alt="" />
                  </div>
                  <div className="right">
                    <span>MAIL us</span>
                    <Link to="mailto:Lorem, ipsum.">Lorem, ipsum.</Link>
                  </div>
                </li>
                <li className="d-flex align-items-center" data-aos="zoom-in">
                  <div className="icon_box shadow_box">
                    <img src={Call} alt="" />
                  </div>
                  <div className="right">
                    <span>Contact Us</span>
                    <Link
                      to="tel: lorem1
                    "
                    >
                      +91 lorem1
                    </Link>
                  </div>
                </li>
                <li className="d-flex align-items-center" data-aos="zoom-in">
                  <div className="icon_box shadow_box">
                    <img src={Loacte} alt="" />
                  </div>
                  <div className="right">
                    <span>LOCATION</span>
                    <h4>Surat Gujarat India</h4>
                  </div>
                </li>
              </ul>
              <h3 data-aos="fade-right">Social Info</h3>
              <ul
                className="social_links d-flex align-items-center"
                data-aos="zoom-in"
              >
                <li>
                  <Link
                    className="shadow_box"
                    to="https://github.com/pradipladva01"
                    target="_blank"
                  >
                    <svg
                      width="16px"
                      height="16px"
                      strokeWidth="1.6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#FFFFFF"
                    >
                      <path
                        d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3"
                        stroke="#FFFFFF"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    className="shadow_box"
                    to="https://www.linkedin.com/in/pradip-ladva-539b86219/"
                    target="_blank"
                  >
                    <svg
                      width="16px"
                      height="16px"
                      strokeWidth="1.6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#FFFFFF"
                    >
                      <path
                        d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7"
                        stroke="#FFFFFF"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011"
                        stroke="#FFFFFF"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    className="shadow_box"
                    to="https://www.instagram.com/pradip_ladva_official/"
                    target="_blank"
                  >
                    <svg
                      width="16px"
                      height="16px"
                      strokeWidth="1.6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#FFFFFF"
                    >
                      <path
                        d="M12 16a4 4 0 100-8 4 4 0 000 8z"
                        stroke="#FFFFFF"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z"
                        stroke="#FFFFFF"
                        strokeWidth="1.6"
                      ></path>
                      <path
                        d="M17.5 6.51l.01-.011"
                        stroke="#FFFFFF"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 contact_form" data-aos="zoom-in">
              <div className="shadow_box">
                <img src={textureImg} alt="bg" className="bg_img" />
                <img src={StarIcon} alt="bg" className="star_icon" />
                <h1>
                  Let’s work <span>together.</span>
                </h1>
                <form
                  noValidate
                  onSubmit={handleSubmit(onSubmit)}
                  method="POST"
                >
                  <div className="input-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name *"
                      {...register("name", {
                        required: "Full name is required",
                        maxLength: 80,
                      })}
                    />
                    {errors.name && (
                      <div className="mt-1 error">
                        <small>{errors.name.message}</small>
                      </div>
                    )}
                  </div>
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email *"
                      {...register("email", {
                        required: "Enter your email",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="mt-1 error">
                        <small>{errors.email.message}</small>
                      </div>
                    )}
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Your Subject *"
                      {...register("subject", {
                        required: "subject is required",
                      })}
                    />
                    {errors.subject && (
                      <div className="mt-1 error">
                        <small>{errors.subject.message}</small>
                      </div>
                    )}
                  </div>
                  <div className="input-group">
                    <textarea
                      type="text"
                      name="message"
                      id="message"
                      placeholder="Your Message *"
                      {...register("message", {
                        required: "Enter your Message",
                      })}
                    />
                    {errors.message && (
                      <div className="mt-1 error">
                        <small>{errors.message.message}</small>
                      </div>
                    )}
                  </div>
                  <div className="input-group">
                    <button type="submit" className="theme_btn submit_btn">
                      {isSubmitting ? (
                        <div className="spinner-border" role="status"></div>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isSubmitSuccessful && isSuccess && (
        <ToastContainer position="bottom-left" autoClose={3000} />
      )}
      <Footer />
    </>
  );
};

export default Contact;
