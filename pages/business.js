import React, { useEffect, useRef } from 'react';
import { NextSeo } from 'next-seo';
import {
  FullImageBanner, WhyRecTree, Steps, Contact,
} from 'components/Business';

const Business = () => {
  const whyRef = useRef(null);
  const scrollToWhy = () => {
    whyRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const HEADER_LINKS = [{ name: 'Why RecTree?', func: scrollToWhy }, { name: 'Product', to: '/' }, { name: 'Sign in' }];

  useEffect(() => {
    document.body.scroll(0, 0);
  }, []);

  return (
    <>
      <NextSeo
        title="Merchants • RecTree"
        description="RecTree allows you to recommend your favorite businesses to your friends. Now enrolling businesses near the UC Berkeley and Cornell campuses."
      />
      <FullImageBanner headerLinks={HEADER_LINKS} />
      <WhyRecTree inputRef={whyRef} />
      <Steps />
      <Contact />
    </>
  );
};

export default Business;
