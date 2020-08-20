import React from 'react';
import { NextSeo } from 'next-seo';
import { FullImageBanner, WhyRecMe } from 'components/Home';

const Home = () => {
  return (
    <>
      <NextSeo
        title="Home • RecMe"
        description="RecMe allows you to recommend your favorite businesses to your friends. Stay up to date with where your friends are shopping and earn money back for using the app."
      />
      <FullImageBanner />
      <WhyRecMe />
    </>
  );
};

export default Home;
