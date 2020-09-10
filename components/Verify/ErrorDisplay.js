import React from 'react';
import Error from 'components/lottie/error';
import styles from 'styles/verify.module.scss';

const ErrorDisplay = ({ message }) => {
  return (
    <div className="fade-in">
      <div className={styles.message} style={{ textAlign: 'center' }}>{message}</div>
      <Error height="15vh" width="15vh" />
    </div>
  );
};

export default ErrorDisplay;
