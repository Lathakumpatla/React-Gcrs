import React, { useState, useEffect } from 'react';
import '../static/css/ScrollTop.css';
import {  ChevronDoubleUp } from 'react-bootstrap-icons';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`go-top ${isVisible ? 'active' : ''}`} onClick={scrollToTop}>
      <i className="fa fa-chevron-up">
        <ChevronDoubleUp size={13} />
      </i>
      <i className="fa fa-arrow-up"><ChevronDoubleUp size={13}/></i>
    </div>
  );
};

export default ScrollTopButton;
