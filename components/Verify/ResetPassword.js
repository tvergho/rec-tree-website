import React, { useState, useEffect } from 'react';
import useAuth from 'utils/useAuth';
import styles from 'styles/verify.module.scss';
import { TextField } from '@material-ui/core';
import Loading from 'components/lottie/loading';
import ResultDisplay from './ResultDisplay';
import ErrorDisplay from './ErrorDisplay';

const PasswordReset = ({ actionCode }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [password, setPassword] = useState('');
  const { auth } = useAuth();

  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const enabled = password?.length >= 8;

  const verifyCode = async (code) => {
    try {
      const firebaseEmail = await auth.verifyPasswordResetCode(code);
      setEmail(firebaseEmail);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  useEffect(() => {
    if (actionCode && auth) {
      verifyCode(actionCode);
    }
  }, [actionCode, auth]);

  const updatePassword = async () => {
    setLoading(true);
    try {
      await auth.confirmPasswordReset(actionCode, password);
      setLoading(false);
      setLoaded(true);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError(true);
    }
  };

  if (!email && !error) return null;
  if (error) {
    return (
      <ErrorDisplay message="There was an error resetting your password." />
    );
  }
  if (!loaded) {
    return (
      <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className={styles.message} style={{ textAlign: 'center', marginBottom: '30px' }}>{`Enter a new password for ${email}.`}</div>
        <TextField
          variant="outlined"
          label="New Password"
          name="password"
          fullWidth
          onChange={(e) => { setPassword(e.target.value); }}
          value={password}
          type="password"
        />
        <button className={styles.password} disabled={!enabled} onClick={updatePassword} type="button">Submit</button>

        {loading && (
          <div className="backdrop">
            <Loading style={{ marginTop: '5vh' }} />
          </div>
        )}
      </div>
    );
  }

  return (
    <ResultDisplay message="Your password was successfully reset." />
  );
};

export default PasswordReset;
