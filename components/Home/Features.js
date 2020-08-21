import React, { useState, useEffect } from 'react';
import homeStyles from 'styles/home.module.scss';
import { ActionButton } from './index';

const BUTTONS = [
  {
    label: 'Recs',
    title: 'Scroll through your recommendations',
    desc: 'Check out all of the stores your friends have recommended. Accept your favorites, and we’ll automatically check if you’ve shopped there.',
    image: require('public/screen-recs.png'),
  },
  {
    label: 'Rewards',
    title: 'Get rewarded for trying out stores',
    desc: 'When you accept or make a recommendation, you and your friends both receive a reward. It’s as simple as clicking three buttons!',
    image: require('public/screen-rewards.png'),
  }, {
    label: 'Feed',
    title: 'See where your friends are shopping',
    desc: 'When you don’t know where to shop, swipe to your friends feed to see stores your friends have recommended. Also, keep track of your rewards.',
    image: require('public/screen-feed.png'),
  }, {
    label: 'Near You',
    title: 'Explore stores in your area',
    desc: 'Find stores in your area that interest you. Once you make a purchase at these stores, recommend them to more friends.',
    image: require('public/screen-near-you.png'),
  }];

const Buttons = ({ buttons, selected, onClick }) => {
  return (
    <div className={homeStyles.buttonsContainer}>
      {buttons.map((data, index) => {
        const { label } = data;
        return (
          <button
            className={homeStyles.featureButton}
            key={label}
            data-index={index}
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
    setSelected(parseInt(e.target.dataset.index, 10));
  };

  useEffect(() => {
    BUTTONS.forEach((button) => {
      const img = new Image();
      img.src = button.image;
    });
  }, []);

  return (
    <div className={homeStyles.features} ref={inputRef}>
      <div className={homeStyles.small}>FEATURES</div>
      <div className={homeStyles.title} style={{ color: 'white' }}>What&#39;s in RecMe?</div>

      <Buttons buttons={BUTTONS} selected={selected} onClick={onClick} />

      <div className={homeStyles.textContainer}>
        <div className={homeStyles.featureTitle}>{BUTTONS[selected].title}</div>
        <div className={homeStyles.featureDesc}>{BUTTONS[selected].desc}</div>
      </div>

      <ActionButton style={{ boxShadow: '0px 0px 8px 0px #FFB7B2' }}>Sign up</ActionButton>

      <img src={BUTTONS[selected].image} alt="Screenshot of app" className={homeStyles.fullScreenshot} />
    </div>
  );
};

export default Features;
