/* eslint-disable no-use-before-define */
import React from 'react';
import ActionCodeProcess from './ActionCodeProcess';

const RevokeEmail = ({ actionCode }) => {
  return (
    <ActionCodeProcess
      successMessage="Your email has been successfully reverted."
      errorMessage="There was an error reverting your email."
      actionCode={actionCode}
    />
  );
};

export default RevokeEmail;
