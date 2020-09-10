import React from 'react';
import Confirm from 'components/lottie/confirm';
import styles from 'styles/verify.module.scss';

const ResultDisplay = ({ message }) => {
  return (
    <div className="fade-in">
      <div className={styles.message} style={{ textAlign: 'center' }}>{message}</div>
      <Confirm />
    </div>
  );
};

export default ResultDisplay;
