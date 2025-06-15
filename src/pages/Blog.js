import React from "react";
import textureImg from "../resources/images/background_texture.png";
import Star from "../resources/images/star-2.png";
import nextIcon from "../resources/images/Next_icon.svg";
import "../styles/Blog.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import BlogData from "./data/BlogData";
import Navbar from "../components/Navbar";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | {process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <Navbar/>
      <section className="project_area">
        <div className="container">
          <h1 className="section_heading" data-aos="fade-up">
            <img src={Star} alt="star" />
            Recent Blogs
            <img src={Star} alt="star" />
          </h1>
          <div className="row">
            {BlogData.map((blog) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="zoom-in"
                key={blog.slug}
              >
                <div className="project_item shadow_box">
                  <Link
                    className="overlay_link"
                    to={`/blog-details/${blog.slug}`}
                  ></Link>
                  <img src={textureImg} alt="" className="bg_img" />
                  <div className="project_img">
                    <img src={blog.image} alt="blog-thumbnail" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project_info">
                      <h1>{blog.name}</h1>
                    </div>
                    <Link
                      to={`/blog-details/${blog.slug}`}
                      className="project_btn"
                    >
                      <img src={nextIcon} alt="Button" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;