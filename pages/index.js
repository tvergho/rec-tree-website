import React, { useRef } from 'react';
import { NextSeo } from 'next-seo';
import { FullImageBanner, WhyRecMe } from 'components/Home';

const Home = () => {
  const whyRef = useRef(null);
  const scrollToWhy = () => {
    whyRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const HEADER_LINKS = [{ name: 'Why RecMe?', func: scrollToWhy }, { name: 'Product' }, { name: 'Sign in' }];

  return (
    <>
      <NextSeo
        title="Home • RecMe"
        description="RecMe allows you to recommend your favorite businesses to your friends. Stay up to date with where your friends are shopping and earn money back for using the app."
      />
      <FullImageBanner headerLinks={HEADER_LINKS} />
      <WhyRecMe inputRef={whyRef} />
    </>
  );
};

export default Home;
