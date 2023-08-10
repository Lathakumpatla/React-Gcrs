import React from 'react';
import '../static/css/ContactUs.css';
import { Envelope,} from 'react-bootstrap-icons';
import { FiPhoneCall } from 'react-icons/fi';
import {BiLocationPlus} from 'react-icons/bi';



const ContactPage = () => {
  return (
    <div>
      <section style={{ height: '150px' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="banner-text section-title">
              <h1 style={{ color: '#BD0324', fontWeight: 'bold', fontFamily: 'Calibri', paddingTop: '19%', marginBottom: '10px' }}>
                Contact Us
              </h1>
              <p style={{ color: '#000', fontFamily: 'Calibri', fontSize: '20px', marginBottom: '15px' }}>
                For any assistance, get in touch with us. We will get you the help you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
              <i class="bi bi-envelope">
              <Envelope color="#1dd3f8" size={22}  />
              
              
              </i>
             
                <h3>Email Us:</h3>
                <p>business@gcrs.co.in</p>
                <p>info@gcrs.co.in</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-phone-call">
                  <FiPhoneCall/>
                </i>
                <h3>Call Us:</h3>
                <p>+91 9391779197</p>
                <p>+91 7997143593</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus">
                  <BiLocationPlus/>
                </i>
                <h3>Find Us</h3>
                <span>Head Office:</span>
                <p>
                  <a href="#">Andhra Pradesh Innovation Society, Sunrise Incubation Tower, Hill-3, IT SEZ, Madhurawada, Visakhapatnam - 530048</a>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus">
                <BiLocationPlus/>
                </i>
                <h3>Find Us</h3>
                <span>Research and Development Centre Kanpur:</span>
                <p>
                  <a href="#">
                    TP 301, Technopark@iitk,
                    3rd Floor, Aerosol Building,
                    IIT Kanpur, Kanpur 208016
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.621365229124!2d83.38540371411398!3d17.80948348782689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b7f153e7305%3A0x1b566e748a14d77e!2sGCRS%2C%20APIS%2FNASSCOM%2C%20Innovation%20Valley%2C%20Hill%20No%203%2C%20IT%20SEZ%2C%20Madhurawada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530048!5e0!3m2!1sen!2sbd!4v1640367566928!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <section className="main-contact-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-wrap contact-pages mb-0">
                <div className="contact-form">
                  <div className="section-title">
                    <h2 style={{ color: '#BD0324' }}>Drop us a message for any query</h2>
                  </div>
                  <form id="contactForm">
                    <div className="row">
                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                            data-error="Please enter your name"
                            placeholder="Your Name"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            required
                            data-error="Please enter your email"
                            placeholder="Your Email"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone_number"
                            id="phone_number"
                            required
                            data-error="Please enter your number"
                            className="form-control"
                            placeholder="Your Phone"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="msg_subject"
                            id="msg_subject"
                            className="form-control"
                            required
                            data-error="Please enter your subject"
                            placeholder="Your Subject"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            cols="30"
                            rows="5"
                            required
                            data-error="Write your message"
                            placeholder="Your Message"
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <button type="submit" className="default-btn btn-two">
                          Send Message
                        </button>
                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
