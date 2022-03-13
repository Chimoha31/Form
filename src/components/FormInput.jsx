import React,{useState} from 'react';
import './FormInput.css';

export const FormInput = ({label, errorMessage, id, values, setValues, ...others}) => {
  
  const [focused, setFocused] = useState(false)

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleFocus = (e) => {
    setFocused(true);
  }

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...others} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
      <span>{errorMessage}</span>
    </div>
  )
}
