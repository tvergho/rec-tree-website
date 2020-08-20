import React, { useRef } from 'react';
import { NextSeo } from 'next-seo';
import {
  FullImageBanner, WhyRecMe, Steps, Contact,
} from 'components/Business';

const Business = () => {
  const whyRef = useRef(null);
  const scrollToWhy = () => {
    whyRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const HEADER_LINKS = [{ name: 'Why RecMe?', func: scrollToWhy }, { name: 'Product', to: '/' }, { name: 'Sign in' }];

  return (
    <>
      <NextSeo
        title="Businesses • RecMe"
        description="RecMe allows you to recommend your favorite businesses to your friends. Now enrolling businesses near the UC Berkeley and Cornell campuses."
      />
      <FullImageBanner headerLinks={HEADER_LINKS} />
      <WhyRecMe inputRef={whyRef} />
      <Steps />
      <Contact />
    </>
  );
};

export default Business;
