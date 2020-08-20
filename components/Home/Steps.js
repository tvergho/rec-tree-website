import React from 'react';
import homeStyles from 'styles/home.module.scss';

const StepItem = ({
  color, title, description, position,
}) => {
  return (
    <div className={homeStyles.stepItem}>
      <div className={`circle ${homeStyles.circle}`} style={{ backgroundColor: color }}>{position}</div>

      <div className={homeStyles.box}>
        <div className={homeStyles.itemTitle}>{title}</div>
        <div className={homeStyles.description}>{description}</div>
      </div>
    </div>
  );
};

const Steps = () => {
  return (
    <div className={homeStyles.steps}>
      <StepItem color="#C8CFE9" title="Get the app" description="Currently in Ithaca. Sign up online, and we’ll send you a download link. Start getting paid in minutes." position={1} />
      <StepItem color="#E2F0CB" title="Connect your card" description="Connect your bank account online or in-app. We use 256-bit encrypion and read-only access." position={2} />
      <StepItem color="#FFDAC1" title="Make referrals" description="Start adding your friends in seconds, from Facebook and the app. Check out their referrals." position={3} />
    </div>
  );
};

export default Steps;
