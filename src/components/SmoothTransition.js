// TransitionWrapper.js

import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../static/css/SmoothTransition.css';

const TransitionWrapper = ({ children, isVisible }) => {
  return (
    <CSSTransition
      in={isVisible}
      timeout={300}
      classNames="fade"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default TransitionWrapper;
