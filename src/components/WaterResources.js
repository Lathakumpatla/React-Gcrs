import React from 'react';
import { Link } from 'react-router-dom';

const WaterResources = () => {
  return (
    <>
      {/* Main Banner Section */}
      <section className="" style={{ height: "420px" }}>
        <img src={require("../../src/assets/img/Water_and_Mining.jpg")} style={{ height: "470px" }} alt="Water and Mining" />
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
      <section style={{ height: "180px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="banner-text">
              <h1 style={{ color: "#BD0324", fontWeight: "bold", fontFamily: "Calibri", paddingTop: "4%", marginBottom: "10px", textAlign: "center" }}>Water Resources</h1>
              <p style={{ color: "#000", fontFamily: "Calibri", fontSize: "20px", textAlign: "center" }}>Integrated thinking about water budgeting, governance, and management contributes to the creation of more resilient habitats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="product-details-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="product-details-desc">
                <h3>Overview :</h3>
                <p>
                  Water data is essential for national and local economic prosperity, the protection of life and property, and the efficient management of the country's water resources. GCRS collaborates with partners to monitor, appraise, perform focused research, and disseminate data on a variety of water resources and situations, including streamflow, groundwater, surface water, water quality, water usage and availability, and other related fields. The key topic areas that govern GCRS's activities are as follows:
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="product-details-image">
                <img src={require("../../src/assets/img/solutions/water_resource (1).png")} style={{ height: "300px" }} alt="Water Resources" />
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
            <div className="col-lg-1 col-sm-6">
              {/* Add any content if needed */}
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link to="/EnvironmentalSolutions">
                    <img src={require("../../src/assets/img/solutions/enviromental_solutions.png")} className="other_services_solutions_images" alt="Environmental Solutions" />
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
                  <Link to="/ClimateChangeAndCarbonOffsetting">
                    <img src={require("../../src/assets/img/solutions/climate_change_ico.png")} className="other_services_solutions_images" alt="Climate Change and Carbon Offsetting" />
                  </Link>
                </div>
                <div className="news-content-wrap other_services_solutions_h3">
                  <Link to="/ClimateChangeAndCarbonOffsetting">
                    <h3 style={{ textAlign: "center" }}>Climate Change and Carbon Offsetting</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link to="/MultiInfrastructureRiskAnalysis">
                    <img src={require("../../src/assets/img/solutions/multi_infras.png")} className="other_services_solutions_images" alt="Multi Infrastructure Risk Analysis" />
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
                  <Link to="/GeospatialTechnologies">
                    <img src={require("../../src/assets/img/solutions/geospatial.png")} className="other_services_solutions_images" alt="Geospatial Technologies" />
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
                    <img src={require("../../src/assets/img/solutions/agri_icon.png")} className="other_services_solutions_images" alt="Agriculture and Natural Resources" />
                  </Link>
                </div>
                <div className="news-content-wrap other_services_solutions_h3">
                  <Link to="/AgricultureAndNaturalResources">
                    <h3 style={{ textAlign: "center" }}>Agriculture and Natural Resources</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-sm-6">
              {/* Add any content if needed */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WaterResources;
