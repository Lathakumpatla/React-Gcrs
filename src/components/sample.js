import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../static/css/header.css';


export default function Header() {
 
  const [isServicesDropdownVisible, setIsServicesDropdownVisible] = useState(false);
  const [isAboutDropdownVisible, setIsAboutDropdownVisible] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  

  const handleServicesDropdownToggle = () => {
    setIsServicesDropdownVisible(!isServicesDropdownVisible);
  };

  const handleAboutDropdownToggle = () => {
    setIsAboutDropdownVisible(!isAboutDropdownVisible);
  };

  return (
    <>
      {/* header */}
      <div id="header" className="arduix-nav-style">
        <div className="navbar-area">
          <div className="logo-container">
            <Link to="/" className="logo">
          
            <img
                src={require("../../src/assets/img/logo_website_2.svg").default}
                alt="Logo"
                width="80%"/>
            </Link>
          </div>
          {/* Mobile menu icon */}
          <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
          
          </div>
          <div className={`main-nav ${isMobileMenuVisible ? 'mobile-menu-visible' : ''}`}>
            <nav className="navbar navbar-expand-md navbar-light">
              <div className="container">
                <Link className="navbar-brand" to="/"></Link>
                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                      <NavLink exact to="/" className="nav-link" activeClassName="active">
                        Home
                      </NavLink>
                    </li>
                    <li
                      className={`nav-item dropdown ${isServicesDropdownVisible ? 'show' : ''}`}
                      onMouseEnter={handleServicesDropdownToggle}
                      onMouseLeave={handleServicesDropdownToggle}
                    >
                      <Link to="/" className="nav-link dropdown-toggle">
                        Services
                      </Link>
                      <ul className={`dropdown-menu ${isServicesDropdownVisible ? 'show' : ''}`}>
                        <li className="nav-item">
                          <NavLink to="/EnvironmentalSolutions" className="nav-link">
                            Environmental Solutions
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/ClimateChangeAndCarbonOffsetting" className="nav-link">
                            Climate Change and Carbon offsetting
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/MultiInfrastructureRiskAnalysis" className="nav-link">
                            Multi infrastructure Risk Analysis
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/WaterResources" className="nav-link">
                            Water Resources
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/GeospatialTechnologies" className="nav-link">
                            Geospatial Technologies
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="AgricultureAndNaturalResources" className="nav-link">
                            Agriculture and Natural Resources
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/" className="nav-link">
                        Products
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <Link to="/Accreditation" className="nav-link">
                        Accreditation
                      </Link>
                    </li>
                    <li
                      className={`nav-item dropdown ${isAboutDropdownVisible ? 'show' : ''}`}
                      onMouseEnter={handleAboutDropdownToggle}
                      onMouseLeave={handleAboutDropdownToggle}
                    >
                      <Link to="/about" className="nav-link dropdown-toggle">
                        About Us
                      </Link>
                      <ul className={`dropdown-menu ${isAboutDropdownVisible ? 'show' : ''}`}>
                        <li className="nav-item">
                          <NavLink to="/Team" className="nav-link">
                            Our Team
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/LifeGcrs" className="nav-link">
                            Life @ GCRS
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/OurJourneyGcrs" className="nav-link">
                            Our Journey
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/Career" className="nav-link">
                            Career
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/Clients" className="nav-link">
                        Clients
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/Investors" className="nav-link">
                        Investors & Partners
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/ContactUs" className="nav-link">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}