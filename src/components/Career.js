import React from 'react';
import './Career.css';

// Career Section Component
const CareerSection = () => {
  return (
    <><section className="offer-area offer-area-two pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: '#BD0324', fontWeight: 'bold', fontFamily: 'Calibri', paddingTop: '5%', marginBottom: '10px' }}>
            Career
          </h2>
          <p style={{ color: '#000', fontFamily: 'Calibri', fontSize: '18px' }}>
            At GCRS, we provide aspiring interns and professionals more than simply a job; we give a defined career path to help them advance their careers. If you are a potential career seeker looking for an organisation that offers a career path with an open and transparent work environment, consider partnering with us at GCRS to create long-term business success.
          </p>
        </div>
      </div>
      <div className="offer-shape">
        <img src={require("../../src/assets/img/shape/offer-shape/1.png")} alt="Image" />
        <img src={require("../../src/assets/img/shape/offer-shape/2.png")} alt="Image" />
        <img src={require("../../src/assets/img/shape/offer-shape/3.png")} alt="Image" />
        <img src={require("../../src/assets/img/shape/offer-shape/4.png")} alt="Image" />
        <img src={require("../../src/assets/img/shape/offer-shape/5.png")} alt="Image" />
        <img src={require("../../src/assets/img/shape/offer-shape/5.png")} alt="Image" />
        <img src={require("../../src/assets/img/shape/offer-shape/6.png")} alt="Image" />
      </div>

    </section><div className="container">
        <h3 style={{ color: '#BD0324', fontWeight: 'bold', fontFamily: 'Calibri', paddingTop: '2%', marginBottom: '8px', textAlign: 'center' }}>
          To share your resume, please use this email id
        </h3>
        <a href="mailto:careers@gcrs.co.in" style={{ display:'flex', justifyContent:'center'            ,  width: '100%', textAlign: 'center', fontFamily: 'calibri', fontWeight: 'bold', fontSize: '18px' }}>
          careers@gcrs.co.in
        </a>
      </div></>
  );
};

export default CareerSection;