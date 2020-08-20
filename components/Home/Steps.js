import React, { useRef } from 'react';
import homeStyles from 'styles/home.module.scss';
import useScrollPosition from 'utils/useScrollPosition';
import { motion } from 'framer-motion';

const StepItem = ({
  color, title, description, position, show,
}) => {
  return (
    <div className={homeStyles.stepItem}>
      <div className={`circle ${homeStyles.circle}`} style={{ backgroundColor: color }}>{position}</div>

      <div className={homeStyles.box}>
        <motion.div
          animate={{ opacity: show ? 1 : 0, x: show ? 0 : -30, visibility: !show ? 'hidden' : '' }}
          transition={{ duration: show ? 1 : 0, delay: show ? position * 0.2 : 0 }}
        >
          <div className={homeStyles.itemTitle}>{title}</div>
          <div className={homeStyles.description}>{description}</div>
        </motion.div>
      </div>
    </div>
  );
};

const Steps = () => {
  const stepsRef = useRef(null);
  const scrolled = useScrollPosition(stepsRef, 80);

  return (
    <div className={homeStyles.steps} ref={stepsRef}>
      <StepItem
        color="#C8CFE9"
        title="Get the app"
        description="Currently in Ithaca. Sign up online, and we’ll send you a download link. Start getting paid in minutes."
        position={1}
        show={scrolled}
      />
      <StepItem
        color="#E2F0CB"
        title="Connect your card"
        description="Connect your bank account online or in-app. We use 256-bit encrypion and read-only access."
        position={2}
        show={scrolled}
      />
      <StepItem
        color="#FFDAC1"
        title="Make referrals"
        description="Start adding your friends in seconds, from Facebook and the app. Check out their referrals."
        position={3}
        show={scrolled}
      />
    </div>
  );
};

export default Steps;
