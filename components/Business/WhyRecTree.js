import React from 'react';
import businessStyles from 'styles/business.module.scss';
import { StatSection, WhyItem } from './index';

const WhyRecTree = ({ inputRef }) => {
  return (
    <div className={businessStyles.whySection} ref={inputRef}>
      <StatSection title="Why RecTree?" />
      <WhyItem
        title="Turn customers into "
        highlightedTitle="passionate advocates."
        description="RecTree lets customers add their friends, and make referrals if they’ve shopped at your business."
        image={require('public/consumer.png')}
        color="#FFB7B2"
      />
      <WhyItem
        title="Explore unique consumer "
        highlightedTitle="insights."
        description="Find out when your customers shop at your store, if they shop with friends, how much they spend, and much more."
        image={require('public/analytics.png')}
        color="#B5EAD7"
        reversed
      />
      <WhyItem
        title="Integrate with mobile "
        highlightedTitle="delivery apps."
        description="We verify purchases using transaction history, meaning that we can integrate with apps like Doordash and Postmates."
        image={require('public/delivery.png')}
        color="#FFDAC1"
      />
    </div>
  );
};

export default WhyRecTree;
