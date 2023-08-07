import React from 'react';
import ReactDOM from 'react-dom';
import './footer.css'; // Make sure to adjust the path if the file is in a different folder
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '.bootstrap/dist/js/bootstrap.bundle.min';
import '.bootstrap/dist/css/bootstrap.css';
import Footer from './footer'; // Assuming the Footer component is in the same directory as index.js
import Header from './header';
import Home from './Home';
import "../assets/css/animate.min.css"
import "../assets/css/boxicons.min.css"
import "../assets/css/flaticon.css"
import "../assets/css/meanmenu.min.css"
import "../assets/css/nice-select.min.css"
import "../assets/css/odometer.min.css"
import "../assets/css/magnific-popup.min.css"
import "../assets/css/style.css"
import "../assets/css/responsive.css"

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Home/>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
