import React from 'react';
import homeStyles from 'styles/home.module.scss';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bottomMargin: {
    marginBottom: '10px',
  },
});

const InterestForm = () => {
  const classes = useStyles();

  return (
    <div className={homeStyles.col}>
      <div className={homeStyles.interestForm}>
        <div className={homeStyles.headerText}>Sign up for our beta</div>
        <div className={homeStyles.subheader}>We’ll contact you prior to the beta release of RecMe, and you can de-activate the platform at any time.</div>

        <TextField variant="outlined" label="Store Name" fullWidth classes={{ root: classes.bottomMargin }} />
        <TextField variant="outlined" label="Store Address" fullWidth classes={{ root: classes.bottomMargin }} />
        <TextField variant="outlined" label="Phone Number" fullWidth />

        <div style={{ minHeight: 20 }} />

        <TextField variant="outlined" label="Full Name" fullWidth classes={{ root: classes.bottomMargin }} />
        <TextField variant="outlined" label="Email" fullWidth />

        <button className={homeStyles.submitButton} type="submit">Become a partner</button>
      </div>
    </div>
  );
};

export default InterestForm;
