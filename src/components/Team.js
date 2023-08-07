import React from 'react';
import './Team.css';
import {Linkedin} from 'react-bootstrap-icons';


const TeamSection = () => {
  return (
    <><div>
          {/* Banner Area */}
          <section className="" style={{ height: '70px' }}>
              <div className="container-fluid">
                  <div className="row">
                      <div className="banner-text section-title">
                          <h1 style={{ color: '#BD0324', fontWeight: 'bold', fontFamily: 'Calibri', paddingTop: '20%', marginBottom: '25px' }}>
                              Meet Our Expert Team
                          </h1>
                          <p style={{ color: '#000', fontFamily: 'Calibri', fontSize: '20px' }}>
                              Our team is comprised of industry experts who are passionate about their work, and have an extensive background in a wide variety of applications.
                          </p>
                      </div>
                  </div>
              </div>
          </section>

          {/* Team Area */}
          <section className="team-area team-inner-area ptb-100" style={{ marginTop: '140px' }}>
              <div className="container">
              <h2 style={{ marginBottom: '25px', color: '#000',fontFamily: "Dosis",fontWeight:700 }}>Board of Directors</h2>
                  <div className="row">
                     

                      {/* Team Member 1 */}
                      <div className="col-lg-3 col-sm-6">
                          <div className="single-team">
                              <ul>
                                  <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
                                      <a href="https://www.linkedin.com/in/prasad-babu-627a3924/">
                                          <Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
                                      </a>
                                  </li>
                              </ul>
                              <div className="team-single-img">
                                  <img src={require("../../src/assets/img/team/prasad_babu.png")} style={{ height: '140px', width: '140px' }} alt="Image" />
                              </div>
                              <div className="team-content">
                                  <h3>G Prasad Babu</h3>
                                  <span>Founder and CEO</span>
                              </div>
                          </div>
                      </div>

                      {/* Team Member 2 */}
                      <div className="col-lg-3 col-sm-6">
                          <div className="single-team">
                              <ul>
                                  <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
                                      <a href="#">
                                          <Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
                                      </a>
                                  </li>
                              </ul>
                              <div className="team-single-img">
                                  <img src={require("../../src/assets/img/team/Mungreila.png")} style={{ height: '140px', width: '140px' }} alt="Image" />
                              </div>
                              <div className="team-content">
                                  <h3>Mungreila PA</h3>
                                  <span>Director Business Development & Communications</span>
                              </div>
                          </div>
                      </div>

                      {/* Team Member 3 */}
                      <div className="col-lg-3 col-sm-6">
                          <div className="single-team">
                              <ul>
                                  <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
                                      <a href="https://in.linkedin.com/in/daniel-sananth-573102187">
                                          <Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
                                      </a>
                                  </li>
                              </ul>
                              <div className="team-single-img">
                                  <img src={require("../../src/assets/img/team/Sananth.png")} style={{ height: '140px', width: '140px' }} alt="Image" />
                              </div>
                              <div className="team-content">
                                  <h3>Daniel Sananth. P</h3>
                                  <span>Hydrogeologist</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div>
              <h2 style={{ marginBottom: '25px' ,fontFamily: "Dosis",fontWeight:700 ,paddingLeft:50}}>Advisors</h2>
              <div className="row">
                  

                  {/* Advisor 1 */}
                  <div className="col-lg-3 col-sm-6">
                      <div className="single-team"style={{marginLeft:30}}>
                          <ul>
                              <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
                                  <a href="#"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} /></a>
                              </li>
                          </ul>
                          <div className="team-single-img">
                              <img src={require('../../src/assets/img/team/rajiv_pic1.jpg')} style={{ height: '140px', width: '140px' }} alt="Image" />
                          </div>
                          <div className="team-content">
                              <h3>Dr. Rajiv Sinha</h3>
                              <span>Professor<br />Department of Earth Sciences<br />IIT Kanpur</span>
                          </div>
                      </div>
                  </div>

                  {/* Advisor 2 */}
                  <div className="col-lg-3 col-sm-6">
                      <div className="single-team">
                          <ul>
                              <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
                                  <a href="https://www.linkedin.com/in/sreeja-nair-2204/"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} /></a>
                              </li>
                          </ul>
                          <div className="team-single-img">
                              <img src={require('../../src/assets/img/team/sreeja.png')} style={{ height: '140px', width: '140px' }} alt="Image" />
                          </div>
                          <div className="team-content">
                              <h3>Dr. Sreeja S. Nair</h3>
                              <span>Advisor<br />Climate Change & Disaster Risk Reduction</span>
                          </div>
                      </div>
                  </div>

                  {/* Advisor 3 */}
                  <div className="col-lg-3 col-sm-6">
                      <div className="single-team">
                          <ul>
                              <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
                                  <a href="https://www.linkedin.com/in/rikhi/"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} /></a>
                              </li>
                          </ul>
                          <div className="team-single-img">
                              <img src={require('../../src/assets/img/team/Rikhi.png')} style={{ height: '140px', width: '140px' }} alt="Image" />
                          </div>
                          <div className="team-content">
                              <h3>Rikhi Kaushal</h3>
                              <span>Advisor</span>
                          </div>
                      </div>
                  </div>

                  {/* Advisor 4 */}
                  <div className="col-lg-3 col-sm-6">
                      <div className="single-team">
                          <ul>
                              <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
                                  <a href="https://www.linkedin.com/in/dr-cbs-dutt-a4365bb6/?originalSubdomain=in"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} /></a>
                              </li>
                          </ul>
                          <div className="team-single-img">
                              <img src={require('../../src/assets/img/team/Dr CBS DUTT.png')} style={{ height: '140px', width: '140px' }} alt="Image" />
                          </div>
                          <div className="team-content">
                              <h3>Dr. CBS Dutt</h3>
                              <span>Fmr, Scientist-H at National Remote Sensing Center of ISRO</span>
                          </div>
                      </div>
                  </div>

                  {/* Advisor 5 */}
                  <div className="col-lg-3 col-sm-6">
                      <div className="single-team">
                          <ul>
                              <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
                                  <a href="#"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} /></a>
                              </li>
                          </ul>
                          <div className="team-single-img">
                              <img src={require('../../src/assets/img/team/Equeenuddin.png')} style={{ height: '140px', width: '140px' }} alt="Image" />
                          </div>
                          <div className="team-content">
                              <h3>Md. Equeenuddin (Ph.D)</h3>
                              <span style={{ fontSize: '13px' }}>Advisor<br />Associate Professor<br />Earth and Atmospheric Sciences, NIT Rourkela</span>
                          </div>
                      </div>
                  </div>

                  {/* Advisor 6 */}
                  <div className="col-lg-3 col-sm-6">
                      <div className="single-team">
                          <ul>
                              <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
                                  <a href="#"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} /></a>
                              </li>
                          </ul>
                          <div className="team-single-img">
                              <img src={require('../../src/assets/img/team/gcrs_mentor.png')} style={{ height: '140px', width: '140px' }} alt="Image" />
                          </div>
                          <div className="team-content">
                              <h3>Dr. Bijay Kumar Sahu</h3>
                              <span style={{ fontSize: '8px' }}>(M Phil, PhD (JNU) Regional Manager & Head)<br />
                                  Mentor<br />
                                  UN-WIPO Technology & Innovation Support Centre (TISC)<br />
                                  NRDC-MoMSME Intellectual Property Facilitation Centre (IPFC),<br />
                                  Research Development Corporation (NRDC),<br />
                                  (An Enterprise of DSIR, Ministry of Science and Technology, Govt of India),</span>
                          </div>
                      </div>
                  </div>

                  {/* Advisor 7 */}
                  <div className="col-lg-3 col-sm-6">
                      <div className="single-team">
                          <ul>
                              <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
                                  <a href="https://www.linkedin.com/in/vijaysingh4/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} /></a>
                              </li>
                          </ul>
                          <div className="team-single-img">
                              <img src={require('../../src/assets/img/team/P.singh.png')} style={{ height: '140px', width: '140px' }} alt="Image" />
                          </div>
                          <div className="team-content">
                              <h3>Vijay P. Singh (Ph.D)</h3>
                              <span>Advisor</span>
                          </div>
                      </div>
                  </div>
                  <div>
                  <h2 style={{ marginBottom: '25px' ,fontFamily: "Dosis",fontWeight:700 ,paddingLeft:50}}>Employees</h2><div className="col-lg-3 col-sm-6">
  <div className="single-team">
    <ul>
      <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
        <a href="https://www.linkedin.com/in/manoj-gummadi-3870b148/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
        </a>
      </li>
    </ul>
    <div className="team-single-img">
      <img src={require("../../src/assets/img/team/manoj.png")} style={{ height: '140px', width: '140px' }} alt="Image" />
    </div>

    <div className="team-content">
      <h3>G. Manoj</h3>
      <span>GIS Application Development and Management</span>

    </div>
  </div>
</div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/jasmine-g-4635b3169/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Jasmine_d.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>G. Jasmine </h3>
        <span>
          Associate Director (Business Development)
        </span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/rahul-kalki-yekkala-25a8a2155/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/rahul1.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>Rahul Kalki Yekkala</h3>
        <span>UI & UX Designer</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/ss-muskan?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDIHRrJ17RTi72vmp5IapKg%3D%3D" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Muskhan_new.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>S. Sai Muskan</h3>
        <span>Biodiversity Analyst</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/raghupatruni-gnaneswara-rao-4bb873165/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/gnanesh.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>R. Gnaneswara Rao</h3>
        <span>Mobile Application Developer</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/priyanka-khanna-b6684932/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Priyanka1.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>Priyanka Khanna</h3>
        <span>Water Resources Management Expert</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/sjsurya" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/surya_intern_250.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>S. Jaya Surya</h3>
        <span>GIS Application Developer</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/vagbhat-vamsi-krishna/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/IMG-20211010-WA0030.jpg")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>S. Vagbhat Vamsi Krishna</h3>
        <span>GIS & Mining Analyst</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/dr-fakir-bastia-884b01155/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Fakira.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>Dr. Fakira Bastia</h3>
        <span>Environmental Geochemist</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/jyoti-chaudhary-027a9165/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/JyotiChaudhary1.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>Ms. Jyoti Chaudhary</h3>
        <span>Hydrogeologist</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/suneel-kumar-joshi-51631916/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Sunil Kumar.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>Dr. Suneel Kumar Joshi</h3>
        <span>Lead - Water Sector Analyst</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/saloni-ranka-335b42186" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Saloni.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>Saloni Ranka</h3>
        <span>GIS & Water Resources Analyst</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/dgumber/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/deepthi.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>Deepti Gumber Bhatnagar</h3>
        <span>Environment & DRR Expert</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/tanushree-verma-328388122/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Verma.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>Tanushree Verma</h3>
        <span>Disaster Risk Reduction Expert</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="#" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Madhuri.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>P. Sri Siva Madhuri</h3>
        <span>GIS Analyst</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="http://www.linkedin.com/in/bhavanapedada" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Bhavana.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>P. Bhavana</h3>
        <span>GIS Developer</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="#" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/sivasnehajyothi.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>P. Siva Sneha Jyothi</h3>
        <span>GIS Analyst
        </span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/pvsoundarya-sravani-510117166" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Soundarya_1.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>P.V.Soundarya Sravani
        </h3>
        <span>GIS Developer</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/yehezekiel-karri-4aa35612b/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Yehezekiel.jpg")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>K.Yehezekiel
        </h3>
        <span>UI & UX Designer</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">


    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/paruchuri-manoj-kumar-1a38aa20b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwVf8baGqS02oimMJi%2Fl7og%3D%3D" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/PManojKumar.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>Paruchuri manoj kumar
        </h3>
        <span>
          Water Sector Analyst</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/karthik-eswar-8a942a230" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/MKarthikEswarBabu.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>M. Karthik EswarBabu
        </h3>
        <span>
          GIS Analyst </span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/niten-giri-b531b648/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/niten_giri.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3> Niten Giri
        </h3>
        <span>
          Hydrogeologist</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/balasubramaniyan-k-03012113b/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/balasubramanyan.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3> Balasubramaniyan
        </h3>
        <span>
          Water Sector Analyst</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/yashika-singh-505151173/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Yashika Singh.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>Yashika Singh
        </h3>
        <span>
          Hydrogeologist</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/sahal-k" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Sahal_K.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>Sahal K
        </h3>
        <span>
          Hydrogeologist</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/nandupillidanesh" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Danesh.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3>N. Danesh
        </h3>
        <span>
          Water Sector Analyst</span>

      </div>
    </div>
  </div><div

    className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/adithya-ajikumar-aba590218" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/adithya_aji.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3> Adithya Ajikumar
        </h3>
        <span>
          GIS Analyst </span>

      </div>
    </div>
  </div><div

    className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/sayam-vaishnavi-13528b188/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Vaishnavi.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3> Vaishnavi Sayam
        </h3>
        <span>
          Water Sector Analyst</span>

      </div>
    </div>
  </div><div

    className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/satya-deep-79282a125/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Satyadeep.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3> Dadi Satyadeep
        </h3>
        <span>
          React Native Developer</span>

      </div>
    </div>
  </div><div
    className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/blessy-thanmayi-77501a252/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/blessy.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3> Choppara Blessy Thanmayi
        </h3>
        <span>
          Water Sector Analyst</span>

      </div>
    </div>
  </div><div
    className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/venkata-harshini-rayala-5065aa217/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Harshini Rayala_1.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3> R Venkata Harshini
        </h3>
        <span>
          GIS Analyst (Intern)</span>

      </div>
    </div>
  </div><div
    className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/nakka-sai-lakshmi-b66646253" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Nakka Sai Lakshmi.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3> N Sai Lakshmi
        </h3>
        <span>
          GIS Analyst (Intern)</span>

      </div>
    </div>
  </div><div
    className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/sreenivas-bandapu-339a49242/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Srinivas.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3> Sreenivas Bandapu
        </h3>
        <span>
          GIS Developer</span>

      </div>
    </div>
  </div><div
    className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/karthick-g-3855011b4/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Karthick.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3> Karthick G
        </h3>
        <span>
          Sustainability Analyst</span>

      </div>
    </div>
  </div><div
    className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/preslych" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/presly.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3> Choppala Presly
        </h3>
        <span>
          GIS Analyst (Intern)</span>

      </div>
    </div>
  </div><div
    className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Mani.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3> Kollabattula Nagamani
        </h3>
        <span>
          HR generalist</span>

      </div>
    </div>
  </div><div
    className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/akansha-vaishnavi-6426ba178" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/Vaishnavi akansha.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3> Vaishnavi Akansha
        </h3>
        <span>
          Intern </span>

      </div>
    </div>
  </div><div
    className="col-lg-3 col-sm-6">
    <div className="single-team">

      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/ahammed-sahil-36126a229/" target="_blank"><Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/AHAMMED SAHIL SHAJAHAN.png")} style={{ height: '140px', width: '140px' }} alt="Image" />

      </div>
      <div className="team-content">
        <h3> Ahammed Sahil Shajahan
        </h3>
        <span>
          GIS Developer (Intern)</span>

      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/ajitha-r-49336524a" target="_blank">
            <Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/ajitha.png")} style={{ height: '140px', width: '140px' }} alt="Ajitha R" />
      </div>
      <div className="team-content">
        <h3>Ajitha R</h3>
        <span>Sustainability Intern</span>
      </div>
    </div>
  </div><div className="col-lg-3 col-sm-6">
    <div className="single-team">
      <ul>
        <li style={{ marginLeft: '-90%', listStyleType: 'none' }}>
          <a href="https://www.linkedin.com/in/venkatesh-dasari/" target="_blank">
            <Linkedin style={{ fontSize: '25px', border: '1px solid', backgroundColor: '#fffff' }} />
          </a>
        </li>
      </ul>
      <div className="team-single-img">
        <img src={require("../../src/assets/img/team/venkatesh.png")} style={{ height: '140px', width: '140px' }} alt="Dasari Venkatesh" />
      </div>
      <div className="team-content">
        <h3>Dasari Venkatesh</h3>
        <span>React Native Developer Intern</span>
      </div>
    </div>
  </div>
                  </div>
                  
              </div>
              
              

          </div>
          
          </section>
      </div></>
        
      
      
               
          
          
  );
};
    
   

export default TeamSection;
