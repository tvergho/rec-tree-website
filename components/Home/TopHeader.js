import React, { useState } from 'react';
import homeStyles from 'styles/home.module.scss';
import { RecMeLogo, ForMerchantsLogo } from 'components/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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

const MobileItem = ({ title, onClick }) => {
  return (
    <div className={homeStyles.mobileItem} onClick={onClick} role="button" tabIndex={0}>
      <div>{title}</div>
      <FontAwesomeIcon icon={faChevronRight} size="2x" />
    </div>
  );
};

const MobileBackdrop = ({
  isOpen, close, links,
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

      <div style={{ marginTop: 50 }}>
        {links.map((link) => {
          return (
            <MobileItem
              title={link.name}
              key={link.name}
              onClick={() => {
                close();
                if (link?.func) link.func();
              }}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

const HeaderNav = ({ links }) => {
  return (
    <nav>
      {links.map((link) => {
        return (
          <button className={`button-text ${homeStyles.navButton}`} type="button" key={link.name} onClick={link.func}>{link.name}</button>
        );
      })}
    </nav>
  );
};

const TopHeader = ({ links }) => {
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

        {width > MOBILE_WIDTH ? <HeaderNav links={links} /> : <MobileButton onClick={openBackdrop} />}
      </header>
      <MobileBackdrop isOpen={open} close={closeBackdrop} links={links} />
    </>
  );
};

export default TopHeader;
