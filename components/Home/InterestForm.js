/* eslint-disable no-return-assign */
import React, { useState, useEffect, useRef } from 'react';
import homeStyles from 'styles/home.module.scss';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Confirm from 'components/lottie/confirm';
import { motion } from 'framer-motion';
import useDelay from 'utils/useDelay';
import useForm from 'utils/useForm';

const useStyles = makeStyles({
  bottomMargin: {
    marginBottom: '10px',
  },
});

const Submitted = ({ display, height }) => {
  const style = {
    display: display ? 'flex' : 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: height || 'auto',
  };
  return (
    <motion.div style={style} animate={{ opacity: display ? 1 : 0 }}>
      <div className={homeStyles.subheader} style={{ textAlign: 'center' }}>Your response has been submitted.</div>
      <Confirm width={100} height={100} />
    </motion.div>
  );
};

const InterestForm = () => {
  const classes = useStyles();
  let form = useRef();
  const [formHeight, setFormHeight] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const delayedClose = useDelay(submitted, 300, true, false);
  const {
    values, errors, onChange, validateInput,
  } = useForm(['businessName', 'address', 'phone', 'contactName', 'email']);

  const onChangeWindowSize = () => {
    if (!submitted && form) setFormHeight(form.clientHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', onChangeWindowSize);
    onChangeWindowSize();

    return () => {
      window.removeEventListener('resize', onChangeWindowSize);
    };
  }, [form]);

  const onSubmit = () => {
    if (!validateInput()) {
      setSubmitted(true);
    }
  };

  return (
    <div className={homeStyles.col}>
      <div className={homeStyles.interestForm}>
        <motion.div style={delayedClose ? { display: 'none' } : {}} ref={(ref) => form = ref} animate={{ opacity: submitted ? 0 : 1 }}>
          <div className={homeStyles.headerText}>Sign up for our beta</div>
          <div className={homeStyles.subheader}>We’ll contact you prior to the beta release of RecMe, and you can de-activate the platform at any time.</div>

          <TextField
            variant="outlined"
            label="Store Name"
            name="businessName"
            fullWidth
            classes={{ root: classes.bottomMargin }}
            onChange={onChange}
            value={values.businessName}
            error={errors.businessName}
            helperText={errors.businessName}
          />
          <TextField
            variant="outlined"
            label="Store Address"
            name="address"
            fullWidth
            classes={{ root: classes.bottomMargin }}
            onChange={onChange}
            value={values.address}
            error={errors.address}
            helperText={errors.address}
          />
          <TextField
            variant="outlined"
            label="Phone Number"
            name="phone"
            fullWidth
            onChange={onChange}
            value={values.phone}
            error={errors.phone}
            helperText={errors.phone}
          />

          <div style={{ minHeight: 25 }} />

          <TextField
            variant="outlined"
            label="Full Name"
            name="contactName"
            fullWidth
            classes={{ root: classes.bottomMargin }}
            onChange={onChange}
            value={values.contactName}
            error={errors.contactName}
            helperText={errors.contactName}
          />
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            fullWidth
            onChange={onChange}
            value={values.email}
            error={errors.email}
            helperText={errors.email}
          />

          <button className={homeStyles.submitButton} type="submit" onClick={onSubmit}>Become a partner</button>
        </motion.div>

        <Submitted display={delayedClose} height={formHeight} />
      </div>
    </div>
  );
};

export default InterestForm;
