/* eslint-disable global-require */
import React from 'react';
import homeStyles from 'styles/home.module.scss';
import { StatSection, WhyItem } from './index';

const WhyRecMe = ({ inputRef }) => {
  return (
    <div className={homeStyles.whySection} ref={inputRef}>
      <StatSection />
      <WhyItem
        title="Turn customers into passionate advocates."
        description="RecMe lets customers add their friends, and make referrals if they’ve shopped at your business."
        image={require('public/consumer.png')}
        color="#FFB7B2"
      />
      <WhyItem
        title="Explore unique customer insights."
        description="Find out when your customers shop at your store, if they shop with friends, how much they spend, and much more."
        image={require('public/analytics.png')}
        color="#B5EAD7"
        reversed
      />
      <WhyItem
        title="Integrate with mobile delivery apps."
        description="We verify purchases using transaction history, meaning that we can integrate with apps like Doordash and Postmates. "
        image={require('public/delivery.png')}
        color="#FFDAC1"
      />
    </div>
  );
};

export default WhyRecMe;
