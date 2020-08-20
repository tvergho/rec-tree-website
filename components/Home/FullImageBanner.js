import React from 'react';
import homeStyles from 'styles/home.module.scss';
import useWindowSize from 'utils/useWindowSize';
import { TopHeader, InterestForm } from './index';

const LeftCol = () => {
  const { width } = useWindowSize();
  return (
    <div className={homeStyles.col}>
      <div className={homeStyles.infoBold}>Word-of-mouth made simple, affordable, and effective.</div>
      <div
        className={homeStyles.info}
        style={{ marginTop: width <= 768 ? 20 : 50 }}
      >RecMe rewards consumers for recommending your business to friends, and you only pay if brand-new customers buy your product.
      </div>
    </div>
  );
};

const FullImageBanner = ({ headerLinks }) => {
  return (
    <>
      <TopHeader links={headerLinks} />
      <div className={homeStyles.fullImage}>
        <LeftCol />
        <InterestForm />
      </div>
    </>
  );
};

export default FullImageBanner;
