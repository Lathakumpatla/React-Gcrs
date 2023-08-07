import React from 'react';
import { Link } from 'react-router-dom';
import './EnvironmentalSolutions.css';

const EnvironmentalSolutions = () => {
  return (
    <>
      {/* Main Banner Section */}
      <section className="main-banner-area::before"  style={{ height: "450px" }}>
      <img src={require("../../src/assets/img/Environment_solutions_main.png")} style={{ height: "470px" }}/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="" style={{ height: "180px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="banner-text">
              <h1 style={{ color: "#BD0324", fontWeight: "bold", fontFamily: "Calibri", marginBottom: "10px", textAlign: "center" }}>Environmental Solutions</h1>
              <p style={{ color: "#000", fontFamily: "Calibri", fontSize: "20px" }}>Effective methods for reducing environmental issues like conserving natural resources, preserving habitats, reducing pollution, managing water, and slowing global warming.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="product-details-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-lg-8 col-md-12">
              <div className="product-details-image">
                <img src={require("../../src/assets/img/solutions/environmental_solutions_2.png")} style={{ height: "400px" }} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: "#000" }}>Other Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-2 col-sm-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link to="/ClimateChangeAndCarbonOffsetting">
                    <img src={require("../../src/assets/img/solutions/climate_change_ico.png")} className="other_services_solutions_images" alt="Image" />
                  </Link>
                </div>
                <div className="news-content-wrap other_services_solutions_h3">
                  <Link to="/ClimateChangeAndCarbonOffsetting">
                    <h3 style={{ textAlign: "center",fontSize:19 }}>Climate Change and Carbon Offsetting</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link to="/MultiInfrastructureRiskAnalysis">
                    <img src={require("../../src/assets/img/solutions/multi_infras.png")} className="other_services_solutions_images" alt="Image" />
                  </Link>
                </div>
                <div className="news-content-wrap other_services_solutions_h3">
                  <Link to="/MultiInfrastructureRiskAnalysis">
                    <h3 style={{ textAlign: "center",fontSize:19  }}>Multi Infrastructure Risk Analysis</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link to="/WaterResources">
                    <img src={require("../../src/assets/img/solutions/water_resource.png")} className="other_services_solutions_images" alt="Image" />
                  </Link>
                </div>
                <div className="news-content-wrap other_services_solutions_h3">
                  <Link to="/WaterResources">
                    <h3 style={{ textAlign: "center" }}>Water Resources</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link to="/GeospatialTechnologies">
                    <img src={require("../../src/assets/img/solutions/geospatial.png")} className="other_services_solutions_images" alt="Image" />
                  </Link>
                </div>
                <div className="news-content-wrap other_services_solutions_h3">
                  <Link to="/GeospatialTechnologies">
                    <h3 style={{ textAlign: "center" }}>Geospatial Technologies</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link to="/AgricultureAndNaturalResources">
                  <img src={require("../../src/assets/img/solutions/agri_icon.png")} className="other_services_solutions_images" alt="Image" />
                  </Link>
                </div>
                <div className="news-content-wrap other_services_solutions_h3">
                  <Link to="/AgricultureAndNaturalResources">
                    <h3 style={{ textAlign: "center",fontSize:19  }}>Agriculture and Natural Resources</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnvironmentalSolutions;

