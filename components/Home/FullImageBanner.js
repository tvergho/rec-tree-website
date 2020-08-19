import React from 'react';
import homeStyles from 'styles/home.module.scss';
import { TopHeader } from './index';

const LeftCol = () => {
  return (
    <div className={homeStyles.col}>
      <div className={homeStyles.infoBold}>Word-of-mouth made simple, affordable, and effective.</div>
      <div className={homeStyles.info} style={{ marginTop: 50 }}>RecMe rewards consumers for recommending your business to friends, and you only pay if brand-new customers buy your product.</div>
    </div>
  );
};

const FullImageBanner = () => {
  return (
    <>
      <TopHeader />
      <div className={homeStyles.fullImage}>
        <LeftCol />
      </div>
    </>
  );
};

export default FullImageBanner;
