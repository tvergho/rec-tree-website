import React from 'react';
import businessStyles from 'styles/business.module.scss';

const Contact = () => {
  return (
    <div className={businessStyles.contact}>
      <div>Have questions? Talk to a co-founder.</div>
      <button type="button" className={businessStyles.contactButton}>Talk to an expert</button>
    </div>
  );
};

export default Contact;
