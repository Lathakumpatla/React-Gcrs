import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for routing

const MultiInfrastructureRiskAnalysis = () => {
  return (
    <>
     
      {/* Main Banner Section */}
      <section className="" style={{  height: "420px", backgroundPosition: "right" }}>
      <img src={require("../../src/assets/img/Risk_analysis_main.png")} style={{ height: "470px" }}/>
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
              <h1 style={{ color: "#BD0324", fontWeight: "bold", fontFamily: "Calibri", paddingTop: "4%", marginBottom: "10px", textAlign: "center" }}>Multi Infrastructure Risk Analysis</h1>
              <p style={{ color: "#000", fontFamily: "Calibri", fontSize: "20px", textAlign: "center" }}>Assessing risks throughout a project's life cycle helps to make it more resilient and, as a result, more profitable for all stakeholders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="product-details-area ptb-100" style={{ paddingTop: "70px" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="product-details-desc">
                <h3>Overview :</h3>
                <p>Multi infrastructure risk analysis incorporates the identification and assessment of infrastructure related risk from bridges, electricity and energy infrastructure, highways, trains, airports, water infrastructure and dams, waste management plants, and other development projects. Infrastructure projects have a long lifespan, which includes the maintenance and operating phases. As such these projects address important organisational, resource management, technological, and budgetary concerns. Environmental factors, such as macroeconomic conditions or national political considerations, can have a big impact on such activities. Because of all of these considerations, the project's risk and opportunity must be identified and evaluated before any decision is made. The following are the major themes that guide GCRS's activities:</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="product-details-image">
                <img src={require("../../src/assets/img/solutions/multi_infra_2.png")} style={{ height: "300px" }.default} alt="Image" />
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div>
              <h3 style={{ marginTop: "20px", marginBottom: "25px" }}>
                <img src={require("../../src/assets/img/icons/1x/governance_policy_2.svg").default} style={{ width: "50px", marginRight: "19px", float: "left" }} alt="Image" />
                <label style={{ marginTop: "13px" }}>Risk Governance and Regulatory Mechanisms</label>
              </h3>
            </div>
            <p>To allow the incorporation of catastrophe and climate resilience principles in all infrastructure projects, governance and regulatory mechanisms must be developed. Infrastructure investment, growth, sustainability, resilience, and inclusion are all driven by governance quality. GCRS will identify risk governance aspects that increase infrastructure resilience. It will look at new ideas and techniques for bridging the information, policy, and fiscal gaps that exist at different levels of government. It will determine the best incentive mechanisms and regulatory measures for increasing demand for disaster-resistant infrastructure. GCRS will take advantage of possibilities to collaborate with the business sector on disaster-resilient infrastructure.</p>
          </div>

          <div className="row align-items-center">
            <div>
              <h3 style={{ marginTop: "20px", marginBottom: "25px" }}>
                <img src={require("../../src/assets/img/icons/1x/risk_identification_2.svg").default} style={{ width: "50px", marginRight: "19px", float: "left" }} alt="Image" />
                <label style={{ marginTop: "13px" }}>Risk Management</label>
              </h3>
            </div>
            <p>Risk management is critical for identifying and assessing risk and opportunity events throughout a project’s life cycle. In order to build resilient strategies, it is necessary to first understand and measure catastrophe risk to infrastructure systems. GCRS will endeavour to identify the most serious risks posed by natural disasters, analyse the possible consequences, and develop resilience plans to reduce risk in infrastructure sectors. Across geographies, it will conduct sector-specific as well as national risk and resilience assessments.</p>
          </div>

          <div className="row align-items-center">
            <div>
              <h3 style={{ marginTop: "20px", marginBottom: "25px" }}>
                <img src={require("../../src/assets/img/icons/1x/capacity_building_2.svg").default} style={{ width: "50px", marginRight: "19px", float: "left" }} alt="Image" />
                <label style={{ marginTop: "13px" }}>Strengthening Capabilities</label>
              </h3>
            </div>
            <p>Strengthening Capabilities for context-specific knowledge and a stronger emphasis on its practical implementation, including pre-disaster preparedness and post-disaster restoration, are required to reduce natural hazard-induced damages to vital infrastructure and interruption of essential services. Because infrastructure development involves many stakeholders, it is vital to raise awareness and create capacity through training programmes that target each type of stakeholder at the global, national, and local levels. The goal of GCRS is to give solid, evidence-based advice on building capacity to make infrastructure catastrophe and climate resilient.</p>
          </div>

          <div className="row align-items-center">
            <div>
              <h3 style={{ marginTop: "20px", marginBottom: "25px" }}>
                <img src={require("../../src/assets/img/icons/1x/innovation_technology_2.svg").default} style={{ width: "50px", marginRight: "19px", float: "left" }} alt="Image" />
                <label style={{ marginTop: "13px" }}>Technological Advancement and Innovation</label>
              </h3>
            </div>
            <p>Breakthrough inventions and the adoption of new technology may be our salvation as we face unprecedented difficulties from severe calamities. Applications of augmented reality, GIS, GPS, drones, unmanned aerial vehicles, advanced materials, computer-assisted design, big data, Internet of things (IOT), machine learning, data mining, block chain, and other technologies are currently being developed. Despite the existence of multiple such ideas, their uptake in practice is limited. GCRS's goal is to provide a platform that collects and disseminates information on such improvements to the resilient infrastructure community throughout the world. GCRS also aspires to support new technology development and acceptance by collaborating with governments. It will build and use its network of innovation hubs, knowledge partners, and technology users over time to establish an ecosystem of resilience-building innovations.</p>
          </div>

          <div className="row align-items-center">
            <div>
              <h3 style={{ marginTop: "20px", marginBottom: "25px" }}>
                <img src={require("../../src/assets/img/icons/1x/coomunity_based_2.svg").default} style={{ width: "50px", marginRight: "19px", float: "left" }} alt="Image" />
                <label style={{ marginTop: "13px" }}>Participatory Approach</label>
              </h3>
            </div>
            <p>The importance of community engagement and infrastructure services is becoming more generally recognized across the world. GCRS hopes to gain a better understanding of community needs for disaster-resistant infrastructure through interacting with vulnerable populations. It will work with community-based infrastructure providers to improve disaster resilience. By focusing on inclusion, gender sensitivity, engagement, and capacity building, GCRS hopes to tap into indigenous knowledge and decrease inequities in disaster infrastructure provision.</p>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
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
                    <h3 style={{ textAlign: "center" }}>Agriculture and Natural Resources</h3>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Add more other service links following the same structure */}
          </div>
        </div>
      </section>
    </>
  );
};

export default MultiInfrastructureRiskAnalysis;
