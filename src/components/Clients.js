import React from 'react';


const OurClientsComponent = () => {
  return (
    <>
      <section className="" style={{ height: '70px' }}>
        <div className="container-fluid">
          <div className="row">
            {/* Content for the first section can be added here if required */}
          </div>
        </div>
      </section>
      <div className="container" style={{ padding: '18px' }}>
        <div className="section-title">
          <h2 style={{ color: '#BD0324', fontWeight: 'bold', fontFamily: 'Calibri', paddingTop: '7.5%' }}>Our Clients</h2>
          <p style={{ fontFamily: 'Calibri', fontSize: '20px', color: '#000', lineHeight: '1.5em' }}>
            We work with corporations, private equity firms, government agencies, non-profit organisations, multilateral and bilateral financing partners, and donor agencies to provide solutions.
          </p>
        </div>

        <div className="row portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
          <div className="row" >
            <div className="col-md-2 col-sm-6 our_clint_div filter-app">
              <div>
                <img src={require("../../src/assets/img/client/wbcsd.png")} alt="WB CSD" style={{margin:30}}/>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-app">
              <div>
                <img src={require("../../src/assets/img/client/world bank.png")} alt="World Bank" style={{margin:30}} />
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-app">
              <div>
                <img src={require("../../src/assets/img/client/UNDP.png")} alt="UNDP" style={{margin:30}}/>
              </div>
            </div>
            
            <div className="col-md-2 col-sm-6 our_clint_div">
              <div>
                <img src={require("../../src/assets/img/client/Ministery of water resource.png")} alt="Ministery of Water Resource" />
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-org">
              <div>
                <img src={require("../../src/assets/img/client/oxfam.png")} alt="Oxfam" style={{margin:30}}/>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/Adhithya birla.png")} alt="Adhithya Birla" style={{margin:30}}/>
              </div>
            </div>
          </div>

          {/* Add more rows for additional client logos */}
          <div className="row">
            <div className="col-md-2 col-sm-6 our_clint_div filter-app">
              <div>
                <img src={require("../../src/assets/img/client/giz.png")} alt="GIZ" style={{margin:30}}/>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div">
              <div>
                <img src={require("../../src/assets/img/client/Ministery of climate change.png")} alt="Ministery of Climate Change"style={{margin:30}}/>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-org">
              <div>
                <img src={require("../../src/assets/img/client/save the children.png")} alt="Save the Children" style={{margin:30}}/>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/CDKN.png")} alt="CDKN" style={{margin:30}}/>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-app">
              <div>
                <img src={require("../../src/assets/img/client/caritas india.png")} alt="Caritas India" style={{margin:30}}/>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-org">
              <div>
                <img src={require("../../src/assets/img/client/Lutheran World relief.png")} alt="Lutheran World Relief" style={{margin:30}}/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-sm-6 our_clint_div filter-card">
              <div>
                <img src={require("../../src/assets/img/client/Dept of water resource.png")} alt="Department of Water Resource" style={{margin:30}}/>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/RP.png")} alt="RP" style={{margin:30}}/>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/IC Net Ltd.png")} alt="IC Net Ltd" style={{margin:30}}/>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/Bisleri_1.png")} alt="Bisleri" style={{margin:30}}/>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-card">
              <div>
                <img src={require("../../src/assets/img/client/BSI_1.png")} alt="BSI" style={{margin:30}}/>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-card">
              <div>
                <img src={require("../../src/assets/img/client/Central Ground water board.png" )}alt="Central Ground Water Board" style={{margin:30}}/>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/GVMC_2.png")} alt="GVMC" style={{margin:30}}/>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-org">
              <div>
                <img src={require("../../src/assets/img/client/NCDHR_1.png")} alt="NCDHR" style={{margin:30}}/>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-org">
              <div>
                <img src={require("../../src/assets/img/client/Save life foundation_1.png")} alt="Save Life Foundation" style={{margin:30}}/>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-org">
              <div>
                <img src={require("../../src/assets/img/client/Sphere india_1.png")} alt="Sphere India" style={{margin:30}}/>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-card">
              <div>
                <img src={require("../../src/assets/img/client/ZSI_1.png")} alt="ZSI" style={{margin:30}}/>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 our_clint_div filter-card">
              <div>
                <img src={require("../../src/assets/img/client/hmdamdpi.png")} alt="HMDA MDPI" style={{margin:30}}/>
              </div>
            </div>
            <div className="row">
            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/aga_k.png")} alt="AGA K" style={{margin:30}}/>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/afd1.png")} alt="AFD" style={{margin:30}}/>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/Facor _client.png")} alt="Facor" style={{margin:30}}/>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/Vedanta_client.png")} alt="Vedanta" style={{margin:30}}/>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/adithya birla_Client.png")} alt="Adithya Birla" style={{margin:30}}/>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/shiva.png")} alt="Shiva" style={{margin:30}}/>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/AB_EMMRL.png")} alt="AB EMMRL" style={{margin:30}}/>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/SUZKI_Client.png")} alt="SUZKI" style={{margin:30}}/>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/DLF.png")} alt="DLF" style={{margin:30}}/>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/Tata_Steel.png")} alt="Tata Steel" style={{margin:30}}/>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/omg.png")} alt="OMG" style={{margin:30}}/>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 our_clint_div filter-web">
              <div>
                <img src={require("../../src/assets/img/client/srrngta_grop.png")} alt="SRRNGTA GROP" style={{margin:30}}/>
              </div>
            </div>
            <div className="row">
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/jsw_steel.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/Cococola_1.png")}className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/tata_steel_bsl.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/tetra_tech.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/brand/gail india ltd.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/lokamangal.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/SECL.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/omecl_1.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/APMDC.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/Indian_Oil.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/Sterling_Biotech.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/Grainfuel_logo.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="row">
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/Hindusthan_copper.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/Suraj Products.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/Chowgule_group.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/Jindal.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/ccl_2.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/wwf.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/jsw.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/fairtrade.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/Maha_cement.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/JSL.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/NMDC_Limited.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 our_clint_div filter-web">
          <div>
            <img src={require("../../src/assets/img/client/JBA_1.png")} className="" alt="" style={{margin:30}}/>
          </div>
        </div>
      </div>
    </div>
      </div>
            
          </div>
          </div>
        </div>
      
    </>
  );
};

export default OurClientsComponent;
