/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatPhone, stripPhone } from 'utils/formatPhone';
import validateEmail from 'utils/validateEmail';

const useForm = (valueKeys) => {
  const [values, setValues] = useState(valueKeys.reduce((o, key) => Object.assign(o, { [key]: '' }), {}));
  const [errors, setErrors] = useState(valueKeys.reduce((o, key) => Object.assign(o, { [key]: '' }), {}));

  const onChange = (e) => {
    const { name, value } = e.target;
    const newValues = { ...values };
    const newErrors = { ...errors };

    if (name !== 'phone') {
      newValues[name] = value;
      newErrors[name] = '';
    } else {
      newValues.phone = formatPhone(value, values.phone);
      newErrors.phone = '';
    }
    setValues(newValues);
    setErrors(newErrors);
  };

  const validateInput = () => {
    let isError = false;
    const newErrors = { ...errors };
    for (const value in values) {
      if (Object.prototype.hasOwnProperty.call(values, value)) {
        if (values[value].length === 0) {
          newErrors[value] = 'Required.';
          isError = true;
        }
        if (value === 'email' && !validateEmail(values.email)) {
          newErrors.email = 'Invalid email.';
          isError = true;
        }
        if (value === 'phone' && stripPhone(values.phone).length < 12) {
          newErrors.phone = 'Invalid phone number.';
          isError = true;
        }
      }
    }

    setErrors(newErrors);

    return isError;
  };

  return {
    values, errors, onChange, validateInput,
  };
};

useForm.propTypes = {
  valueKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default useForm;
