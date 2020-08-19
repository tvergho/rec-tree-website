import React, { useState } from 'react';
import homeStyles from 'styles/home.module.scss';
import { RecMeLogo, ForMerchantsLogo } from 'components/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faTimes } from '@fortawesome/free-solid-svg-icons';
import useWindowSize from 'utils/useWindowSize';
import useDelay from 'utils/useDelay';
import { motion } from 'framer-motion';

const MOBILE_WIDTH = 960;

const MobileButton = ({ onClick }) => {
  return (
    <button className={homeStyles.mobileButton} type="button" tabIndex={0} onClick={onClick}>
      <FontAwesomeIcon icon={faAlignJustify} size="3x" />
    </button>
  );
};

const CloseButton = ({ close }) => {
  return (
    <button
      className={homeStyles.mobileButton}
      style={{
        position: 'absolute', right: '20px', top: '20px', color: 'rgba(0,0,0,0.7)',
      }}
      onClick={close}
      type="button"
      tabIndex={0}
    >
      <FontAwesomeIcon icon={faTimes} size="3x" />
    </button>
  );
};

const MobileBackdrop = ({
  isOpen, close,
}) => {
  const delayedClose = useDelay(isOpen, 300);

  return (
    <motion.div
      className={homeStyles.mobileBackdrop}
      onScroll={(e) => { e.preventDefault(); }}
      style={{ display: delayedClose ? 'flex' : 'none' }}
      animate={{ opacity: isOpen ? 1 : 0 }}
    >
      <CloseButton close={close} />
    </motion.div>
  );
};

const HeaderNav = () => {
  return (
    <nav>
      <button className={`button-text ${homeStyles.navButton}`} type="button">Why RecMe?</button>
      <button className={`button-text ${homeStyles.navButton}`} type="button">Product</button>
      <button className={`button-text ${homeStyles.navButton}`} type="button">Sign in</button>
    </nav>
  );
};

const TopHeader = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();

  const openBackdrop = () => {
    setOpen(true);
    document.querySelector('html').style.overflow = 'hidden';
    window.scrollTo(0, 0);
  };

  const closeBackdrop = () => {
    setOpen(false);
    document.querySelector('html').style.overflow = '';
  };

  return (
    <>
      <header className={homeStyles.header}>
        <div>
          <RecMeLogo />
          <ForMerchantsLogo className={homeStyles.merchantLogo} />
          <style jsx>
            {`
            display: flex;
            align-items: center;
          `}
          </style>
        </div>

        {width > MOBILE_WIDTH ? <HeaderNav /> : <MobileButton onClick={openBackdrop} />}
      </header>
      <MobileBackdrop isOpen={open} close={closeBackdrop} />
    </>
  );
};

export default TopHeader;
