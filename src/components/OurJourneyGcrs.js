import React from 'react';

// Our Journey Section Component
const OurJourney = () => {
  return (
    <><section className="offer-area offer-area-two pt-100 pb-70">
          <div className="container">
              <div className="section-title">
                  <h2 style={{ color: '#BD0324', fontWeight: 'bold', fontFamily: 'Calibri', paddingTop: '5%', marginBottom: '10px' }}>
                      Our Journey
                  </h2>
                  <p style={{ color: '#000', fontFamily: 'Calibri', fontSize: '18px' }}>
                      GCRS was established in the year 2014. We began our work in the environment and sustainability domains and finally rose to the top. Several gems
                      have been tied to our string over the years in the shape of our accomplishments, clientele, and an exceptional team of professionals. This was
                      only possible due to our unwavering commitment to addressing environmental issues and making the world a better and greener place to live.
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
      </section><section className="industries-serve-area pt-100">
              <div className="container">
                  <div className="section-title">
                      <h2 style={{ color: '#000' }}>A Look Back At GCRS's History</h2>
                  </div>
                  <img src={require("../../src/assets/img/solutions/our_journey.svg").default} style={{ width: '61%', marginLeft: '20%' }} alt="Image" />
              </div>
          </section></>
  );
};


    





export default OurJourney;
