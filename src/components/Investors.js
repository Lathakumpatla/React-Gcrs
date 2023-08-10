import React from 'react';
import '../static/css/Investors.css';

const InvestorsAndPartners = () => {
  return (
    <div>
      <div className="container" style={{ paddingTop:160,  background: '#f2f2f2' }}>
        <div className="section-title" style={{ marginTop: '2%' }}>
          <h2 style={{ color: '#BD0324', fontWeight: 'bold', fontFamily: 'calibri' }}>Our Investors</h2>
          <p style={{ color: '#000', fontFamily: 'Calibri', fontSize: '20px' }}>
            We have the support of the top investors who are committed to assisting us in providing the best environmental
            solutions.
          </p>
        </div>
        <div className="row portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
          <div className="row">
            <div className="col-md-4 col-sm-4 our_clint_div filter-web"></div>
            <div className="col-md-4 col-sm-4 our_clint_div filter-web investorGailImg">
              <div>
                <img src={require("../../src/assets/img/brand/gail india ltd.png")} style={{ width: '400px' }} alt="" />
              </div>
            </div>
            <div className="col-md-4 col-sm-4 our_clint_div filter-web"></div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '18px', background: '#f2f2f2' }}>
        <div className="section-title" style={{ marginTop: '2%' }}>
          <h2 style={{ color: '#BD0324', fontWeight: 'bold', fontFamily: 'calibri' }}>Partnership with</h2>
          <p style={{ color: '#000', fontFamily: 'Calibri', fontSize: '22px' }}>
            GCRS and Synspective Announce Partnership for SAR Satellite-Based Risk Analysis Solutions in South Asia
          </p>
        </div>
        <div className="row portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
          <div className="row">
            <div className="col-md-4 col-sm-4 our_clint_div filter-web"></div>
            <div className="col-md-2 col-sm-6 our_clint_div filter-web Partnershipsynspective">
              <div>
                <img src={require("../../src/assets/img/client/synspective.png")} style={{ width: '400px' }} alt="" />
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-web Partnershipsynspective">
              <div>
                <img src={require("../../src/assets/img/client/JBA_1.png")} style={{ width: '400px'  }} alt="" />
              </div>
            </div>
            <div className="col-md-4 col-sm-4 our_clint_div filter-web"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorsAndPartners;
