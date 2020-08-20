import React, { useState } from 'react';
import homeStyles from 'styles/home.module.scss';

const BUTTONS = ['Recs', 'Rewards', 'Feed', 'Near You'];

const Buttons = ({ buttons, selected, onClick }) => {
  return (
    <div className={homeStyles.buttonsContainer}>
      {buttons.map((label, index) => {
        return (
          <button
            className={homeStyles.featureButton}
            key={label}
            name={label}
            type="button"
            style={selected === index ? { backgroundColor: 'white', color: '#342020', opacity: 1 } : {}}
            onClick={onClick}
          >{label}
          </button>
        );
      })}
    </div>
  );
};

const Features = ({ inputRef }) => {
  const [selected, setSelected] = useState(0);

  const onClick = (e) => {
    setSelected(BUTTONS.indexOf(e.target.name));
  };

  return (
    <div className={homeStyles.features} ref={inputRef}>
      <div className={homeStyles.small}>FEATURES</div>
      <div className={homeStyles.title} style={{ color: 'white' }}>What&#39;s in RecMe?</div>

      <Buttons buttons={BUTTONS} selected={selected} onClick={onClick} />
    </div>
  );
};

export default Features;
