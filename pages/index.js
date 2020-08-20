/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import { NextSeo } from 'next-seo';
import TopHeader from 'components/TopHeader';
import {
  TopImageBanner, Steps, Features, ActionButton,
} from 'components/Home';
import { StatSection } from 'components/Business';
import Link from 'next/link';

const Home = () => {
  const featuresRef = useRef(null);
  const scrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const HEADER_LINKS = [{ name: 'Product', func: scrollToFeatures }, { name: 'For Businesses', to: '/business' }, { name: 'Sign up' }];

  return (
    <>
      <NextSeo
        title="Home • RecMe"
        description="RecMe allows you to recommend your favorite businesses to your friends. Stay up to date with where your friends are shopping and earn money back for using the app."
      />
      <TopHeader links={HEADER_LINKS} invert border />
      <TopImageBanner />
      <Steps />
      <Features inputRef={featuresRef} />

      <div style={{ padding: '0 10vw' }}>
        <StatSection title="For Businesses" smallText="PARTNERS" />
        <Link href="/business" passHref><a><ActionButton style={{ marginBottom: 50 }}>Partner with us</ActionButton></a></Link>
      </div>
    </>
  );
};

export default Home;
