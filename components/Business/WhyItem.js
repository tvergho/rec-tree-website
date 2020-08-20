import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import businessStyles from 'styles/business.module.scss';
import useScrollPosition from 'utils/useScrollPosition';
import { motion } from 'framer-motion';

const WhyItem = ({
  color = '#FFB7B2', image, title, highlightedTitle, description, reversed,
}) => {
  const imgRef = useRef(null);
  const scrolled = useScrollPosition(imgRef, 10);

  const xOffset = reversed ? -20 : 20;

  return (
    <div className={businessStyles.whyItem} style={reversed ? { flexDirection: 'row-reverse' } : {}}>
      <div className={businessStyles.col} ref={imgRef}>
        <div className={businessStyles.objectRectangle} style={{ backgroundColor: color }} />
        <motion.object
          data={image}
          aria-label={title}
          type="image/png"
          animate={{ opacity: scrolled ? 1 : 0, x: scrolled ? xOffset : 0, y: scrolled ? 20 : 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className={businessStyles.col}>
        <div className={businessStyles.titleText}>
          {title}
          {<span style={{ backgroundColor: color }}>{highlightedTitle}</span>}
        </div>
        <div className={businessStyles.desc}>{description}</div>
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
