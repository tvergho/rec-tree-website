/* eslint-disable global-require */
/* eslint-disable import/no-cycle */
import React, { useRef } from 'react';
import businessStyles from 'styles/business.module.scss';
import { RightArrow } from 'components/assets';
import useWindowSize from 'utils/useWindowSize';
import useScrollPosition from 'utils/useScrollPosition';
import { StepItem } from './index';

const Steps = () => {
  const stepsRef = useRef(null);
  const { width } = useWindowSize();
  const scrolled = useScrollPosition(stepsRef);

  return (
    <div className={businessStyles.steps} ref={stepsRef}>
      <div className={`${businessStyles.titleText} ${businessStyles.stepTitle}`}>3 steps to get started</div>

      <div className={businessStyles.stepContainer}>
        <StepItem title="Fill out the beta form." image={require('public/shop.png')} position={1} show={scrolled} />
        {width > 768 && <RightArrow style={{ marginBottom: 100 }} />}
        <StepItem title="Wait for our email." image={require('public/email.png')} position={2} show={scrolled} />
        { width > 768 && <RightArrow style={{ marginBottom: 100 }} />}
        <StepItem title="Enter your payment info." image={require('public/credit-card.png')} position={3} show={scrolled} />
      </div>
    </div>
  );
};

export default Steps;
