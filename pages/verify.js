import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import TopHeader from 'components/TopHeader';
import styles from 'styles/verify.module.scss';
import { VerifyEmail, RevokeEmail, PasswordReset } from 'components/Verify';

const Verify = () => {
  const [mode, setMode] = useState('');
  const [actionCode, setActionCode] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setMode(urlParams.get('mode'));
    setActionCode(urlParams.get('oobCode'));
  }, []);

  return (
    <>
      <NextSeo
        title="Verify Your Account • RecTree"
        description="RecTree allows you to recommend your favorite businesses to your friends."
      />
      <TopHeader invert border />

      <div className={styles.container}>
        <div className={styles.box}>
          {mode === 'verifyEmail' && <VerifyEmail actionCode={actionCode} />}
          {mode === 'recoverEmail' && <RevokeEmail actionCode={actionCode} />}
          {mode === 'resetPassword' && <PasswordReset actionCode={actionCode} />}
        </div>
      </div>
    </>
  );
};

export default Verify;
