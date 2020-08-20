import React from 'react';
import { NextSeo } from 'next-seo';
import TopHeader from 'components/TopHeader';
import { TopImageBanner } from 'components/Home';

const Home = () => {
  const HEADER_LINKS = [{ name: 'Product' }, { name: 'For Businesses', to: '/business' }, { name: 'Sign up' }];

  return (
    <>
      <NextSeo
        title="Home • RecMe"
        description="RecMe allows you to recommend your favorite businesses to your friends. Stay up to date with where your friends are shopping and earn money back for using the app."
      />
      <TopHeader links={HEADER_LINKS} invert border />
      <TopImageBanner />
    </>
  );
};

export default Home;
