import React from 'react';
import './FormInput.css';

export const FormInput = ({label, onChange, id, ...others}) => {
  // const inputHandler = (e) => {
  //  setUserName(e.target.value)
  // }

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...others} onChange={onChange}/>
    </div>
  )
}
