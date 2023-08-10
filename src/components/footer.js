import React from 'react';
import '../static/css/footer.css';
import { Linkedin ,Facebook,Instagram,Twitter, ChevronDoubleRight,  EnvelopeFill,} from 'react-bootstrap-icons';
import {  } from 'react-router-dom';
import { FiChevronUp, FiPhoneCall } from 'react-icons/fi';
import {BiLocationPlus} from 'react-icons/bi';



const Footer = () => {
  return (
    <><><footer className="footer-top-area pt-10 pb-70">
          <div className="container">
              <div className="row">
                  {/* Column 1 */}
                  <div className="col-lg-3 col-md-6">
                      <div className="single-widget">
                           <a href='/Home'>
                              <img src={require("../../src/assets/img/logo_white.svg").default} alt="" style={{ height: '70px' }} />
                          </a>
                          <p style={{ paddingTop: '20px' }}>
                              GCRS is a solution provider, consultancy, and advisory services firm that focuses on
                              environmental and sustainability challenges.
                          </p>
                          <ul className="social-icon">
                              <li >
                                  <a href="https://www.facebook.com/Geo-Climate-Risk-Solutions-106867784806906" target="_blank" rel="noopener noreferrer">
                                     <i class="bx bxl-facebook" >
                                    <Facebook size={15}/>
                                  </i>
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.instagram.com/geoclimaterisksolutions3/" target="_blank" rel="noopener noreferrer">
                                      <Instagram/>
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.linkedin.com/company/gcrs/" target="_blank" rel="noopener noreferrer">
                                      <Linkedin style={{ fontSize: '20px', border: '1px solid', backgroundColor: '#fffff' }} />
                                  </a>
                              </li>
                              <li>
                                  <a href="https://twitter.com/geo_pvt" target="_blank" rel="noopener noreferrer">
                                      <Twitter/>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>

                  {/* Column 2 */}
                  <div className="col-lg-3 col-md-6">
                      <div className="single-widget">
                          <h3>Information</h3>
                          <ul>
                              <li>
                                  <a href="#">
                                      <ChevronDoubleRight/>
                                      CIN No: U74930AP2014PTC095735
                                  </a>
                              </li>
                              <li>
                                  <a href="#">
                                      <ChevronDoubleRight/>
                                      GSTIN: 37AAFCG8137J1Z9
                                  </a>
                              </li>
                              <li>
                                  <a href="#">
                                  <ChevronDoubleRight/>
                                      Start-up India Recognised: DIPP3449
                                  </a>
                              </li>
                              <li>
                                  <a href="#">
                                  <ChevronDoubleRight/>
                                      D-U-N-S Number: 87-727-0861
                                  </a>
                              </li>
                              <li>
                                  <a href="#">
                                  <ChevronDoubleRight/>
                                      <a href="/Content/images/Events/GEO_CLIMATE_RISK_SOLUTIONS_PRIVATE_LIMITED.pdf" download="" style={{ color: '#fff' }}>
                                          D-U-N-S Number: 87-727-0861
                                      </a>
                                      ISO Certified: ISO 9001:2015
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>

                  {/* Column 3 */}
                  <div className="col-lg-2 col-md-6">
                      <div className="single-widget">
                          <h3>Important Links</h3>
                          <ul>
                              <li>
                                  <a href="Terms_and_conditions.html">
                                  <ChevronDoubleRight/>
                                      Terms and Conditions
                                  </a>
                              </li>
                              <li>
                                  <a href="Privacy_Policy.html">
                                  <ChevronDoubleRight/>
                                      Privacy Policy
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>

                  {/* Column 4 */}
                  <div className="col-lg-4 col-md-6">
                      <div className="single-widget">
                          <h3>Contact Us</h3>
                          <ul className="information" style={{ display: 'flex' }}>
                              <li className="address">
                                 <FiPhoneCall style={{marginRight:10}}/>
                                  <a>Phone</a>
                                  <br />
                                  <a href="">+91 9391779197</a>
                                  <br />
                                  <a href="">+91 7997143593</a>
                              </li>
                              <li className="address" style={{ marginLeft: '30px' }}>
                                  <EnvelopeFill style={{marginRight:10}}/>
                                  <a>Email</a>
                                  <br />
                                  <a href="#">business@gcrs.co.in</a>
                                  <br />
                                  <a href="#">info@gcrs.co.in</a>
                                  <br />
                                  <a href="#">business.gcrs@gmail.com</a>
                              </li>
                          </ul>
                          <ul className="information">
                              <li className="address">
                                  <BiLocationPlus style={{marginRight:10}}/>
                                  APIS, Innovation Valley, Hill-3, IT SEZ, Madhurawada, Visakhapatnam - 530048
                              </li>
                              <li className="address">
                                  <BiLocationPlus style={{marginRight:10}}/>
                                  Research and Development Centre, IIT Kanpur:
                                  <br />
                                  # TP 301, Technopark@iitk,
                                  3rd Floor, Aerosol Building,
                                  IIT Kanpur, Kanpur 208016
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </footer><footer className="footer-bottom-area">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-12">
                          <div className="copy-right">
                              <p>
                                  Copyright © 2021 Geo Climate Risk Solutions Pvt. Ltd.
                                  {/* Uncomment the following line if you want to include the hit-counter */}
                                  {/* <span style={{ float: 'right' }}>Visitors: <a href="#"><img src="http://www.hit-counts.com/counter.php?t=MTQ1NzYyNQ==" alt="Visitors" /></a></span> */}
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </footer></><div className="go-top">
              <FiChevronUp/>
              <i className="bx bx-chevrons-up bx-fade-up"></i>
          </div></>
);
};
  

export default Footer;
