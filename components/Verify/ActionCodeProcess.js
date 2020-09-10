/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import useAuth from 'utils/useAuth';
import ResultDisplay from './ResultDisplay';
import ErrorDisplay from './ErrorDisplay';

const ActionCodeProcess = ({ actionCode, successMessage, errorMessage }) => {
  const { auth } = useAuth();
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (actionCode && auth) {
      verifyCode(actionCode);
    }
  }, [actionCode, auth]);

  const verifyCode = async (code) => {
    try {
      await auth.applyActionCode(code);
      setConfirmed(true);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  if (!confirmed && !error) return null;
  if (error) {
    return (
      <ErrorDisplay message={errorMessage} />
    );
  }

  return (
    <ResultDisplay message={successMessage} />
  );
};

export default ActionCodeProcess;
