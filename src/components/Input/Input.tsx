import React from 'react';
import './styles.css';
type InputPropType = {
  label: string;
  type: 'text' | 'password';
  value: string;
  onChange: (e) => void;
  placeholder: string;
};

const Input: React.FC<InputPropType> = (props) => {
  return (
    <>
      <div className='input-div'>
        <label>{props.label}</label>
        <input
          type={props.type}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};

export default Input;