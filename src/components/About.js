import React from 'react';
import '../static/css/header.css';
import '../static/css/About.css';
import  {TiInputChecked} from 'react-icons/ti';




function Header() {
  return (
    <>
      
      <div className="page-title-area"></div>
      <section className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
              <img src={require("../../src/assets/img/about_us.png")}  alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h2 style={{ color: '#BD0324', fontWeight: 'bold', fontFamily: 'calibri' }}>About Us</h2>
                <p>
                  GCRS is a solution provider, consultancy, and advisory services firm that focuses on environmental and sustainability challenges.
                  At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities,
                  wildlife, and the places in which they live.
                </p>
                <p>Our work is focused around six key areas:</p>
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li style={{listStyleType:'none'}}><i className="flaticon-checked">
                        <TiInputChecked size={24}/>
                        </i> Environmental solutions</li>
                      <li style={{listStyleType:'none'}}><i className="flaticon-checked">
                      <TiInputChecked size={24}/>
                        </i> Climate change and carbon offsetting</li>
                      <li style={{listStyleType:'none'}}><i className="flaticon-checked">
                      <TiInputChecked size={24}/>
                        </i> Multi infrastructure risk analysis</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li style={{listStyleType:'none'}}><i className="flaticon-checked">
                      <TiInputChecked size={24}/>
                        </i> Water resources</li>
                      <li style={{listStyleType:'none'}}><i className="flaticon-checked">
                      <TiInputChecked size={24}/>
                        </i> Geospatial technologies</li>
                      <li style={{listStyleType:'none'}}><i className="flaticon-checked">
                      <TiInputChecked size={24}/>
                        </i> Agriculture and natural resources</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default  Header;