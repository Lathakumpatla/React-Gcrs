import React from 'react';
import { Link } from 'react-router-dom';


const AgricultureAndNaturalResources = () => {
  return (
    <>
      <section className="" style={{ height: "420px" }}>
      <img src={require("../../src/assets/img/agriculture_1.png")} style={{ height: "470px" }}/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-text" style={{ textAlign: "center" }}>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ height: "180px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="banner-text">
              <h1 style={{ color: "#BD0324", fontWeight: "bold", fontFamily: "Calibri", paddingTop: "4%", marginBottom: "10px", textAlign: "center" }}>Agriculture and Natural Resources</h1>
              <p style={{ color: "#000", fontFamily: "Calibri", fontSize: "20px", textAlign: "center" }}>Updated information about weather conditions, climate change impact and adaptation measures, climate resilient agriculture practices, yield analysis and market linkages</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-details-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-12">
              {/* Add any content if needed */}
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="product-details-image">
                <img src={require("../../src/assets/img/solutions/agri_nature.svg").default} style={{ height: "400px" }} alt="Agriculture and Natural Resources" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: "#000" }}>Other Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-1 col-sm-6">
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="single-news">
                <div className="blog-img">
                <Link to="/EnvironmentalSolutions">
                    <img src={require("../../src/assets/img/solutions/enviromental_solutions.png")} className="other_services_solutions_images" alt="Image" />
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
                    <img src={require("../../src/assets/img/solutions/climate_change_ico.png")} className="other_services_solutions_images" alt="Image" />
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
                    <img src={require("../../src/assets/img/solutions/multi_infras.png")} className="other_services_solutions_images" alt="Image" />
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
            
            <div className="col-lg-1 col-sm-6">
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgricultureAndNaturalResources;
