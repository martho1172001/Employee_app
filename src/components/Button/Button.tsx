import React from 'react';
import './styles.css';
export type ButtonPropType = {
  text: string;
  type: 'filled-btn' | 'disabled-btn' | 'enabled' | 'disabled';
  onClick?: (e) => void;
};

const Button: React.FC<ButtonPropType> = (props) => {
  return (
    <>
      <div className='button-class'>
        <button
          className={props.type}
          onClick={props.onClick}
          value='hello'
          data-testid='button-test'
        >
          {props.text}
        </button>
      </div>
    </>
  );
};

export default Button;
