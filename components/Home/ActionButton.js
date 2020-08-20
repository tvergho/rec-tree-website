import React from 'react';
import homeStyles from 'styles/home.module.scss';

const ActionButton = ({ children, style }) => {
  return (
    <button type="button" className={`pink-button ${homeStyles.signUp}`} style={style}>{children}</button>
  );
};

export default ActionButton;
