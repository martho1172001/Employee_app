import React from 'react';
import './styles.css';
type InputPropType = {
  label: string | null;
  type: 'text' | 'password' | 'number' | 'date';
  value: string | number;
  onChange: (e) => void;
  placeholder: string;
};

const Input: React.FC<InputPropType> = (props) => {
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const label = e.currentTarget.previousSibling as HTMLElement;

    label.classList.add('focused');
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const label = e.currentTarget.previousSibling as HTMLElement;

    label.classList.remove('focused');
  };

  return (
    <>
      <div className='input-div'>
        {props.label && <label className='label'>{props.label}</label>}
        <input
          type={props.type}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          onFocus={handleFocus} // Add class on focus
          onBlur={handleBlur}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};

export default Input;
