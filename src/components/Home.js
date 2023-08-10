import React, { useState, useEffect } from 'react';
import './Home.css';


const Home = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: require("../../src/assets/img/Home_page_1.png"),
      text: "Insights and practices that resulted in a new environmental equilibrium",
    },
    {
      image: require("../../src/assets/img/forest_1.png"),
      text: "Insights and practices that resulted in a new environmental equilibrium",
    },
    {
      image: require("../../src/assets/img/agriculture_1.png"),
      text: "Insights and practices that resulted in a new environmental equilibrium",
    },
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, 2000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <><div className="slideshow-container" onClick={goToNextSlide}>
      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
          ></span>
        ))}
      </div>
      <div className={`mySlides fade`} key={currentSlide}>
        <div className="numbertext">
          {currentSlide + 1} / {slides.length}
        </div>
        <img
          src={slides[currentSlide].image}
          className="slide_img"
          alt={`Slide ${currentSlide + 1}`} />
        <div className="text">
          <h1 style={{ fontFamily: 'Calibri', paddingTop: '35px', fontSize: 50 }}>
            Building solutions for environmental, industrial <br /> and social sustainability
          </h1>
          <p style={{ fontFamily: 'Calibri', color: '#fff', fontSize: 15 }}>
            {slides[currentSlide].text}
          </p>
        </div>
      </div>
    </div>
    <div style={{ textAlign: 'center' }}>
      {slides.map((_, index) => (
        <span
          key={index}
          className={`dot ${index === currentSlide ? "active" : ""}`}
        ></span>
      ))}
    </div><><section className="features-area mt-minus-70 pb-70">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 style={{ color: '#BD0324', fontWeight: 'bold', paddingTop: '18%' }} className="welcomeNote">
              Welcome to GCRS
            </h2>
            <p style={{ color: '#000', fontFamily: 'Calibri', fontSize: '20px' }}>
              GCRS is a solution provider, consultancy, and advisory services firm that focuses on environmental and
              sustainability challenges. At every level, we collaborate with people around the world to develop and
              deliver innovative solutions that protect communities, wildlife, and the places in which they live.
            </p>
          </div>
        </div>
      </div>
    </section><section className="offer-area offer-area-two pt-100 pb-70">
          <div className="container">
            <div className="section-title" style={{ color: '#fff' }}>
              <h2 style={{ color: '#BD0324', fontWeight: 'bold' }}>Our Solutions For You</h2>
              <p style={{ color: '#000', fontSize: '20px', fontFamily: 'Calibri' }}>
                We aim to deliver research-driven and technology-enabled solutions to investors around the world.
              </p>
            </div>
            <div className="row">
              {/* First Row */}
              <div className="col-lg-4 col-sm-6">
                <a href="environmental_solutions.html">
                  <div className="single-offer" style={{ height: '240px' }}>
                    <img
                      src={require("../../src/assets/img/solutions/environmental_solutions.svg").default}
                      style={{ width: '65px', marginRight: '19px', float: 'left' }}
                      alt="Image" />
                    <h3 className="h3IndexPage">Environmental Solutions</h3>
                    <p style={{ float: 'left', color: '#000', fontFamily: 'Calibri', fontSize: '16px', paddingTop: '10px' }}>
                      Effective methods for reducing environmental issues like conserving natural resources, preserving habitats, reducing pollution, managing water, and slowing global warming.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-sm-6">
                <a href="climate_change_and_carbon_offsetting.html">
                  <div className="single-offer" style={{ height: 240 }}>
                    <img
                      src={require("../../src/assets/img/solutions/climate_change.svg").default}
                      style={{ width: '65px', marginRight: '19px', float: 'left' }}
                      alt="Image" />
                    <h3 className="h3IndexPage">Climate Change and Carbon Offsetting</h3>
                    <p style={{ float: 'left', color: '#000', fontFamily: 'Calibri', fontSize: '16px', paddingTop: '10px' }}>
                      It emphasizes the importance of developing carbon-free communities as well as creating and maintaining healthy neighborhood settings.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-sm-6">
                <a href="multi_infrastructure_risk_analysis.html">
                  <div className="single-offer" style={{ height: '240px' }}>
                    <img src={require("../../src/assets/img/solutions/multiinfrastructure.svg").default} style={{ width: '65px', marginRight: '19px', float: 'left' }} alt="Image" />
                    <h3 className="h3IndexPage">Multi Infrastructure Risk Analysis</h3>
                    <p style={{ float: 'left', color: '#000', fontFamily: 'Calibri', fontSize: '16px', paddingTop: '10px' }}>
                      Assessing risks throughout a project's life cycle helps to make it more resilient and, as a result, more profitable for all stakeholders.
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="row">
              {/* Second Row */}
              <div className="col-lg-4 col-sm-6">
                <a href="water_resources.html">
                  <div className="single-offer" style={{ height: '240px' }}>
                    <img src={require("../../src/assets/img/solutions/water_resource_1.svg").default} style={{ width: '65px', marginRight: '19px', float: 'left' }} alt="Image" />
                    <h3 className="h3IndexPage">Water Resources</h3>
                    <p style={{ float: 'left', color: '#000', fontFamily: 'Calibri', fontSize: '16px', paddingTop: '10px' }}>
                      Integrated thinking about water budgeting, governance, and management contributes to the creation of more resilient habitats.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-sm-6">
                <a href="geospatial_technologies.html">
                  <div className="single-offer" style={{ height: '240px' }}>
                    <img src={require("../../src/assets/img/solutions/geospatial_technologies.svg").default} style={{ width: '65px', marginRight: '19px', float: 'left' }} alt="Image" />
                    <h3 className="h3IndexPage">Geospatial Technologies</h3>
                    <p style={{ float: 'left', color: '#000', fontFamily: 'Calibri', fontSize: '16px', paddingTop: '10px' }}>
                      Geographic Information Systems (GIS), Remote Sensing, and the Global Positioning System (GPS) are all used to analyze, model, simulate, and visualize data in terms of location.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-sm-6">
                <a href="Agriculture and Natural Resources.html">
                  <div className="single-offer" style={{ height: '240px' }}>
                    <img src={require("../../src/assets/img/solutions/agricultural_natural_resources.svg").default} style={{ width: '65px', marginRight: '19px', float: 'left' }} alt="Image" />
                    <h3 className="h3IndexPage">Agriculture and Natural Resources</h3>
                    <p style={{ float: 'left', color: '#000', fontFamily: 'Calibri', fontSize: '16px', paddingTop: '10px' }}>
                      Securing agriculture and natural resources helps to reduce obstacles of farmers, fishermen, and communities dependent on it.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="industries-serve-area pt-100" style={{ marginTop: '-31px' }}>
          <div className="container">
            <div className="section-title">
              <h2 style={{ color: '#BD0324', fontWeight: 'bold', margin: 10, padding: 30 }}>About us</h2>
              <p style={{ color: '#000', fontFamily: 'Calibri', fontSize: '20px' }}>GCRS provides end-to-end solutions for a wide range of industries</p>
            </div>

            <div style={{ display: 'flex' }}>
              <video width="60%" height="400px" controls style={{ marginRight: '0px' }}>
                <source src={require("../../src/assets/img/VN20230105_151610.m4v")} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
              </video>

              <div width="100%" height="500px" style={{ marginLeft: '15px' }}>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="single-industries-about_us right-item" style={{ display: 'flex' }}>
                        <img src={require("../../src/assets/img/icons/svg/water.svg").default} className="industry_serve_img" alt="Water Resources" style={{ margin: 10, width: 60,height:60 }} />
                        <h3 className="industry_serve_h3_aboutus">Water Resources</h3>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="single-industries-about_us right-item" style={{ display: 'flex' }}>
                        <img src={require("../../src/assets/img/icons/svg/forestry.svg").default} className="industry_serve_img" alt="Forestry" style={{ margin: 10, width: 60,height:60 }} />
                        <h3 className="industry_serve_h3_aboutus">Forestry</h3>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="single-industries-about_us right-item" style={{ display: 'flex' }}>
                        <img src={require("../../src/assets/img/icons/svg/wildlife_1.svg").default} className="industry_serve_img" alt="Wildlife" style={{ margin: 10, width: 60,height:60 }} />
                        <h3 className="industry_serve_h3_aboutus">Wildlife</h3>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="single-industries-about_us right-item" style={{ display: 'flex' }}>
                        <img src={require("../../src/assets/img/icons/svg/agriculture.svg").default} className="industry_serve_img" alt="Agriculture" style={{ margin: 10, width: 60,height:60 }} />
                        <h3 className="industry_serve_h3_aboutus">Agriculture</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="single-industries-about_us right-item" style={{ display: 'flex' }}>
                        <img src={require("../../src/assets/img/icons/svg/water resource.svg").default} className="industry_serve_img" alt="Land Resources" style={{ margin: 10, width: 60,height:60 }} />
                        <h3 className="industry_serve_h3_aboutus">Land Resources</h3>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="single-industries-about_us right-item" style={{ display: 'flex' }}>
                        <img src={require("../../src/assets/img/icons/svg/mining.svg").default} className="industry_serve_img" alt="Mining and Mineral" style={{ margin: 10, width: 60,height:60}} />
                        <h3 className="industry_serve_h3_aboutus">Mining and Mineral</h3>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="single-industries-about_us right-item" style={{ display: 'flex' }}>
                        <img src={require("../../src/assets/img/icons/svg/oil_gas.svg").default} className="industry_serve_img" alt="Oil & Gas" style={{ margin: 10, width: 60,height:60 }} />
                        <h3 className="industry_serve_h3_aboutus">Oil & Gas</h3>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="single-industries-about_us right-item" style={{ display: 'flex' }}>
                        <img src={require("../../src/assets/img/icons/svg/chemical.svg").default} className="industry_serve_img" alt="Chemical" style={{ margin: 10, width: 60,height:60 }} />
                        <h3 className="industry_serve_h3_aboutus">Chemical</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="news-area pb-70" style={{ marginTop: '-46px' }}>
          <div className="container">
            <div className="section-title">
              <h2 style={{ color: '#BD0324', fontWeight: 'bold'}}>News !</h2>
              <p style={{ color: '#000', fontSize: '20px', fontFamily: 'Calibri' }}>Check out for the latest news on GCRS</p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-news" >
                  <div className="blog-img" >
                    <a href="https://twitter.com/gailindia/status/1123883594844393473">
                      <img src={require("../../src/assets/img/GAIL.png")} alt="GAIL gives wings to city (Vizag) startup" />
                    </a>
                  </div>
                  <div className="news-content-wrap" style={{ height: '200px' }}>
                    <a href="https://twitter.com/gailindia/status/1123883594844393473">
                      <h3>GAIL gives wings to city (Vizag) startup</h3>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-news">
                  <div className="blog-img">
                    <a href="http://magazines.insightssuccess.in/The-10-Most-Recommended-GIS-Solution-Provider-Companies-September2019/#page=32">
                      <img src={require("../../src/assets/img/insight Success.png")} alt="Conserving Environment by Providing Sustainable Solutions" />
                    </a>
                  </div>
                  <div className="news-content-wrap" style={{ height: '200px' }}>
                    <a href="http://magazines.insightssuccess.in/The-10-Most-Recommended-GIS-Solution-Provider-Companies-September2019/#page=32">
                      <h3>Conserving Environment by Providing Sustainable Solutions</h3>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-news">
                  <div className="blog-img">
                    <a href="http://viscan.in/vizags-rs-20-crore-startup/">
                      <img src={require("../../src/assets/img/Vizag industrial Scan.png")} alt="Vizag’s Rs 20 crore Startup!" />
                    </a>
                  </div>
                  <div className="news-content-wrap" style={{ height: '200px' }}>
                    <a href="http://viscan.in/vizags-rs-20-crore-startup/">
                      <h3>Vizag’s Rs 20 crore Startup!</h3>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-news">
                  <div className="blog-img">
                    <a href="https://www.timesnownews.com/videos/et-now/shows/leaders-of-tomorrow-season-8-geo-climate-furlenco/47915">
                      <img src={require("../../src/assets/img/THE HINDU .png")} alt="Leaders of tomorrow brings you two small giant conversations" />
                    </a>
                  </div>
                  <div className="news-content-wrap" style={{ height: '200px' }}>
                    <a href="https://www.timesnownews.com/videos/et-now/shows/leaders-of-tomorrow-season-8-geo-climate-furlenco/47915">
                      <h3>Leaders of tomorrow brings you two small giant conversations</h3>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="brand-area pb-70" style={{ marginTop: -31 }}>
          <div className="container">
            <div className="section-title" style={{ marginTop: '5%', maxWidth: 1200 }}>
              <h2 style={{ color: '#BD0324', fontWeight: 'bold' }}> </h2>
              <img src={require("../../src/assets/img/_con.png")} />
            </div>
          </div>
        </div>
        <div className="brand-area pb-70" style={{ marginTop: '-31px' }}>
          <div className="container">
            <div className="section-title" style={{ marginTop: '5%' }}>
              <h2 style={{ color: '#BD0324', fontWeight: 'bold' }}>Our Partners</h2>
              <p style={{ color: '#000', fontFamily: 'Calibri', fontSize: '20px' }}>
                We collaborate with people from all walks of life to influence and bring our expertise to bear on environmental issues.
              </p>
            </div>
            <div className="brand-list">
              <div className="row">
                <div className="col-md-2">
                  <img src={require("../../src/assets/img/brand/gail india ltd.png")} alt="GAIL India Ltd." />
                </div>
                <div className="col-md-2">
                  <img src={require("../../src/assets/img/brand/esri.png")} alt="Esri" />
                </div>
                <div className="col-md-2">
                  <img src={require("../../src/assets/img/brand/Govt.png")} alt="Government" />
                </div>
                <div className="col-md-2">
                  <img src={require("../../src/assets/img/brand/nasscom_250.png")} alt="NASSCOM" />
                </div>
                <div className="col-md-2">
                  <img src={require("../../src/assets/img/brand/mekorot.png")} alt="Mekorot" />
                </div>
                <div className="col-md-2">
                  <img src={require("../../src/assets/img/brand/technopark.png")} alt="Technopark" />
                </div>
              </div>
            </div>
          </div>
        </div>







      </></>

)
      }
export default Home



    
