/* eslint-disable no-use-before-define */
import React from 'react';
import ActionCodeProcess from './ActionCodeProcess';

const VerifyEmail = ({ actionCode }) => {
  return (
    <ActionCodeProcess
      successMessage="Your email is confirmed!"
      errorMessage="There was an error verifying your email."
      actionCode={actionCode}
    />
  );
};

export default VerifyEmail;
