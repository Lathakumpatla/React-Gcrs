
/*import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/Home';
import React from 'react';
import {Link} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
   <React.Fragment>
    <>
   <Header/>
    <Home/> 
   <Footer/>
   </>\
   </React.Fragment>
  );
}

export default App;*/
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/Home';
import About from './components/About';
import AcceptCookies from './components/AcceptCookies'; // Import the AcceptCookies component
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TeamSection from './components/Team';
import LifeAtGCRS from './components/LifeGcrs';
import OurJourney from './components/OurJourneyGcrs';
import CareerSection from './components/Career';
import EnvironmentalSolutions from './components/EnvironmentalSolutions';
import ClimateChangeAndCarbonOffsetting from './components/ClimateChangeAndCarbonOffsetting';
import MultiInfrastructureRiskAnalysis from './components/MultiInfrastructureRiskAnalysis';
import WaterResources from './components/WaterResources';
import GeospatialTechnologies from './components/GeospatialTechnologies';
import AgricultureAndNaturalResources from './components/AgricultureAndNaturalResources';
import AccreditationComponent from './components/Accreditation';
import OurClientsComponent from './components/Clients';
import InvestorsAndPartners from './components/Investors';
import ContactPage from './components/ContactUs';
import ScrollTopButton from './components/ScrollTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading delay (replace this with your actual loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Change the delay time as needed
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <Router>
      {isLoading ? (
        // ... preloader content
        <div className="preloader">
          {/* Your preloader content here */}
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <>
          <AcceptCookies /> {/* Always show the AcceptCookies modal on every refresh */}
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/team" component={TeamSection} />
            <Route path="/LifeGcrs" component={LifeAtGCRS} />
            <Route path="/OurJourneyGcrs" component={OurJourney} />
            <Route path="/Career" component={CareerSection} />
            <Route path="/EnvironmentalSolutions" component={EnvironmentalSolutions} />
            <Route path="/ClimateChangeAndCarbonOffsetting" component={ClimateChangeAndCarbonOffsetting} />
            <Route path="/MultiInfrastructureRiskAnalysis" component={MultiInfrastructureRiskAnalysis} />
            <Route path="/WaterResources" component={WaterResources} />
            <Route path="/GeospatialTechnologies" component={GeospatialTechnologies} />
            <Route path="/AgricultureAndNaturalResources" component={AgricultureAndNaturalResources} />
            <Route path="/Accreditation" component={AccreditationComponent} />
            <Route path="/Clients" component={OurClientsComponent} />
            <Route path="/Investors" component={InvestorsAndPartners} />
            <Route path="/ContactUs" component={ContactPage} />
          </Switch>
          <Footer />
          <ScrollTopButton onClick={scrollToTop} />
        </>
      )}
    </Router>
  );
}

export default App;
