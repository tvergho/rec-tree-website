/* eslint-disable global-require */
import React from 'react';
import homeStyles from 'styles/home.module.scss';
import { ActionButton } from './index';

const CollegeImage = ({ image, title }) => {
  return (
    <div className={homeStyles.collegeImage}>
      <object data={image} aria-label={title} type="image/png" />
    </div>
  );
};

const LeftCol = () => {
  return (
    <div className={homeStyles.col}>
      <div className={homeStyles.small}>INTRODUCING RECME</div>
      <div className={homeStyles.title} style={{ color: 'rgba(0,0,0,0.85)' }}>Rewards for recommendations.</div>
      <div className={homeStyles.info} style={{}}>RecMe rewards you for referring your favorite stores to friends. We connect with your bank account to see if you’ve bought from eligible stores.</div>

      <div style={{ marginTop: 50 }}>
        <ActionButton>Sign Up</ActionButton>
        <div className={homeStyles.colleges}>
          <div>Currently at</div>
          <CollegeImage image={require('public/cornell.png')} label="Cornell University" />
          <CollegeImage image={require('public/ithaca.png')} label="Ithaca College" />
        </div>
      </div>
    </div>
  );
};

const RightCol = () => {
  return (
    <div className={`${homeStyles.col} ${homeStyles.imageContainer}`}>
      <img src={require('public/background-screenshots.png')} alt="App screenshots" className={homeStyles.backgroundScreenshots} />
    </div>
  );
};

const TopImageBanner = () => {
  return (
    <div className={homeStyles.topImage}>
      <LeftCol />
      <RightCol />
    </div>
  );
};

export default TopImageBanner;
