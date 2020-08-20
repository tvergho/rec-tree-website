import React, { useRef } from 'react';
import homeStyles from 'styles/home.module.scss';
import businessStyles from 'styles/business.module.scss';
import { motion } from 'framer-motion';
import useScrollPosition from 'utils/useScrollPosition';

const StatItem = ({
  stat, description, position, show,
}) => {
  return (
    <div className={businessStyles.statItem}>
      <div className={businessStyles.stat}>{stat}</div>
      <motion.div
        className={businessStyles.desc}
        animate={{ opacity: show ? 1 : 0, x: show ? 0 : -30 }}
        transition={{ duration: show ? 1 : 0, delay: show ? position * 0.3 : 0 }}
      >{description}
      </motion.div>
    </div>
  );
};

const StatSection = ({ title = 'Why RecMe?', smallText }) => {
  const statRef = useRef(null);
  const scrolled = useScrollPosition(statRef, 120);

  return (
    <div style={{ marginTop: 50 }}>
      <div className={homeStyles.small}>{smallText}</div>
      <div className={businessStyles.titleText}>{title}</div>
      <div
        className={businessStyles.subtitleText}
        style={{ marginTop: 10 }}
      >We help new customers&nbsp;
        <span
          style={{ backgroundColor: '#FFB7B2' }}
        >discover your business
        </span>
        &nbsp;by rewarding existing ones if they recommend you to friends.
      </div>

      <div className={businessStyles.statContainer} ref={statRef}>
        <StatItem stat="4/5" description="customers willing to recommend." position={0} show={scrolled} />
        <StatItem stat="25%" description="higher profit from referred friends." position={1} show={scrolled} />
        <StatItem stat="20x" description="sales revenue versus rewards." position={2} show={scrolled} />
      </div>
    </div>
  );
};

export default StatSection;
