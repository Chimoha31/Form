import React from 'react';
import './FormInput.css';

export const FormInput = ({label, errorMessage, id, values, setValues, ...others}) => {

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...others} onChange={onChange} />
      <span>{errorMessage}</span>
    </div>
  )
}
