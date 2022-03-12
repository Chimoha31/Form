import React from 'react';
import './FormInput.css';

export const FormInput = ({placeholder, setUserName}) => {
  const inputHandler = (e) => {
   setUserName(e.target.value)
  }

  return (
    <div className="formInput">
      {/* <label>Username</label> */}
      <input placeholder={placeholder} onChange={inputHandler} />
    </div>
  )
}
