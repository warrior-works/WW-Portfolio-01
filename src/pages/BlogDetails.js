import React from "react";
import linkArrow from "../resources/images/link-arrow.svg";
import Star from "../resources/images/star-2.png";
import StarIcon from "../resources/images/star-icon.png";
import textureImg from "../resources/images/background_texture.png";
import Footer from "../components/Footer";
import "../styles/BlogDetails.css";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import BlogData from "./data/BlogData";
import Navbar from "../components/Navbar";
import ReactMarkdown from "react-markdown"; // <-- Add this import

const BlogDetails = () => {
  const { slug } = useParams();

  const blogData = BlogData.find((blog) => blog.slug === String(slug));

  if (!blogData) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        Blog not found.
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>Blog Detail | {process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <Navbar />
      <section className="breadcrumb_area">
        <div className="container">
          <div className="breadcrumb_content" data-aos="fade-up">
            <p>{blogData.name}</p>
            <h1 className="section_heading">
              <img src={Star} alt="star" />
              {blogData.title}
              <img src={Star} alt="star" />
            </h1>
          </div>
        </div>
      </section>
      <section className="project_details_wrap">
        <div className="project_details_img" data-aos="zoom-in">
          <img src={blogData.bannerImage} alt="blog banner" />
          <img src={blogData.image} alt="blog thumbnail" className="main-img" />
        </div>
        <div className="container">
          <div data-aos="zoom-in">
            <div className="d-flex project_infos_wrap shadow_box">
              <img src={textureImg} alt="" className="bg_img" />
              <img src={StarIcon} alt="star icon" className="star_icon" />
              <div className="project_details_info flex-1">
                <h3>{blogData.name}</h3>
                <div style={{ color: "var(--white-color)", opacity: 0.8, fontSize: 18 }}>
                  <ReactMarkdown>{blogData.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container d-flex align-items-center justify-content-center"
          data-aos="zoom-in"
        >
          {blogData.nextBlog && (
            <button
              className="big_btn shadow_box"
              onClick={() => (window.location.href = blogData.nextBlog)}
            >
              Next Blog
            </button>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetails;