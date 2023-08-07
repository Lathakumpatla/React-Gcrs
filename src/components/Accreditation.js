import React from 'react';
import './Accreditation.css';
import { Envelope,HandIndexFill} from 'react-bootstrap-icons';
import  {BiSolidHandRight} from 'react-icons/bi';


const AccreditationComponent = () => {
  return (
    <><div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <section className="" style={{ height: '75px' }}>
          <div className="container-fluid">
            <div className="row">{/* Content for the first section can be added here if required */}</div>
          </div>
        </section>
        <div className="container" style={{ padding: '18px', background: '#ffffff' }}>
          <div className="section-title" style={{ marginTop: '3%', marginBottom: '0px' }}>
            <h2 style={{ color: '#BD0324', fontWeight: 'bold', fontFamily: 'calibri', paddingTop: 38 }}>
              Accreditation
            </h2>
          </div>
          <div
            className="row portfolio-container aos-init aos-animate justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="wpb_wrapper">
              <div className="wpb_content_element featured-box ">
                <div className="featured-box-thumb">
                  {/* Featured box thumbnail content can be added here if required */}
                </div>
                <div className="featured-box-content">
                  <div className="featured-box-desc">
                    <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                      <BiSolidHandRight size={24} style={{marginRight:6}}/>
                      <a href={require("../../src/assets/img/brand/Geoclimate Risk Solutions.pdf")} id="accred_link" target="_blank">
                        Certificate of Accreditation by Central Ground Water Authority
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-5 col-sm-9 filter-web investorGailImg">
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <img
                    src={require("../../src/assets/img/brand/accreditation.png")}
                    style={{ width: '600px', height: 'auto', marginBottom: '20px' }}
                    alt="" />
                  <img
                    src={require("../../src/assets/img/brand/accrediation_certificate.png")}
                    style={{ width: '600px', height: 'auto' }}
                    alt="" />
                </div>
                <div className="section-title" style={{ marginTop: '3%', marginBottom: '0px', width: '600px' }}>
                  <h2
                    style={{
                      color: '#BD0324',
                      fontWeight: 'bold',
                      fontFamily: 'calibri',
                      textAlign: 'center',
                      width: '600px',
                    }}
                  >
                    Member In
                  </h2>
                </div>
                <div className="container" style={{ width: '500%' }}>
                  <img
                    src={require("../../src/assets/img/brand/IAH.png")}
                    style={{ width: '600px', height: 'auto', marginTop: '20px', }}
                    className="center"
                    alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default AccreditationComponent;
