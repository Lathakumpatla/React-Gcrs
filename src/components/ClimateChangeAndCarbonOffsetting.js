import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for routing

const ClimateChangeAndCarbonOffsetting = () => {
  return (
    <>
      {/* Main Banner Section */}
      <section className="index main-banner-area main-banner-area-two" style={{ height: "420px" }}>
      <img src={require("../../src/assets/img/climate_change_main.png")} style={{ height: "470px" }}/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-text" style={{ textAlign: "center" }}>
                {/* You can add some text here if needed */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="" style={{ height: "180px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="banner-text">
              <h1 style={{ color: "#BD0324", fontWeight: "bold", fontFamily: "Calibri", paddingTop: "3%", marginBottom: "10px", textAlign: "center" }}>Climate Change and Carbon Offsetting</h1>
              <p style={{ color: "#000", fontFamily: "Calibri", fontSize: "20px" }}>Building Low-carbon communities through adoption of greener practices like renewable sources of energy and energy efficiency; and promotion of carbon offsetting measures like tree plantation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="product-details-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-12">
              <div className="product-details-desc">
                {/* You can add some details here if needed */}
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="product-details-image">
                <img src={require("../../src/assets/img/solutions/climate_change_3.png")} style={{ height: "400px" }} alt="" />
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
            <div className="col-lg-1 col-sm-6"></div>
            <div className="col-lg-2 col-sm-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link to="/EnvironmentalSolutions">
                    <img src={require("../../src/assets/img/solutions/enviromental_solutions.png")} className="other_services_solutions_images" alt="" />
                  </Link>
                </div>
                <div className="news-content-wrap other_services_solutions_h3">
                  <Link to="/EnvironmentalSolutions">
                    <h3 style={{ textAlign: "center" }}>Environmental Solutions</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link to="/MultiInfrastructureRiskAnalysis">
                    <img src={require("../../src/assets/img/solutions/multi_infras.png")} className="other_services_solutions_images" alt="" />
                  </Link>
                </div>
                <div className="news-content-wrap other_services_solutions_h3">
                  <Link to="/MultiInfrastructureRiskAnalysis">
                    <h3 style={{ textAlign: "center" }}>Multi Infrastructure Risk Analysis</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link to="/WaterResources">
                    <img src={require("../../src/assets/img/solutions/water_resource.png")} className="other_services_solutions_images" alt="" />
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
                    <img src={require("../../src/assets/img/solutions/geospatial.png")} className="other_services_solutions_images" alt="" />
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
                    <img src={require("../../src/assets/img/solutions/agri_icon.png")} className="other_services_solutions_images" alt="" />
                  </Link>
                </div>
                <div className="news-content-wrap other_services_solutions_h3">
                  <Link to="/AgricultureAndNaturalResources">
                    <h3 style={{ textAlign: "center" }}>Agriculture and Natural Resources</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-sm-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClimateChangeAndCarbonOffsetting;
