import React from 'react';
import businessStyles from 'styles/business.module.scss';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const StepItem = ({
  image, title, position, show,
}) => {
  return (
    <div className={businessStyles.stepItem}>
      <div className={businessStyles.box}>
        <object
          data={image}
          aria-label={title}
          type="image/png"
        />
        <motion.div
          animate={{ opacity: show ? 1 : 0, x: show ? 0 : -30 }}
          transition={{ duration: 1, delay: position * 0.3 }}
        >{title}
        </motion.div>
      </div>

      <div className={businessStyles.circle}>{position}</div>
    </div>
  );
};

StepItem.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  position: PropTypes.number,
  show: PropTypes.bool,
};

export default StepItem;
