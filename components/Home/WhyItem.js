import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import homeStyles from 'styles/home.module.scss';
import useScrollPosition from 'utils/useScrollPosition';
import { motion } from 'framer-motion';

const WhyItem = ({
  color = '#FFB7B2', image, title, description, reversed,
}) => {
  const imgRef = useRef(null);
  const scrolled = useScrollPosition(imgRef);

  const xOffset = reversed ? -20 : 20;

  return (
    <div className={homeStyles.whyItem} style={reversed ? { flexDirection: 'row-reverse' } : {}}>
      <div className={homeStyles.col} ref={imgRef}>
        <div className={homeStyles.objectRectangle} style={{ backgroundColor: color }} />
        <motion.object
          data={image}
          aria-label={title}
          type="image/png"
          animate={{ opacity: scrolled ? 1 : 0, x: scrolled ? xOffset : 0, y: scrolled ? 20 : 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className={homeStyles.col}>
        <div className={homeStyles.titleText}>{title}</div>
        <div className={homeStyles.desc}>{description}</div>
      </div>
    </div>
  );
};

WhyItem.propTypes = {
  color: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  reversed: PropTypes.bool,
};

export default WhyItem;
