import Button, { ButtonPropType } from './Button';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Button component testing', () => {
  test('if label rendered correctly', () => {
    const ButtonProps: ButtonPropType = {
      text: 'button',
      type: 'filled-btn'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    expect(element.innerHTML).toBe('button');
  });
  test('if type rendered correctly', () => {
    const ButtonProps: ButtonPropType = {
      text: 'button',
      type: 'filled-btn'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    expect(element.getAttribute('class')).toBe('filled-btn');
  });
  test('if onClick is triggered', () => {
    const onClickMock = jest.fn();
    const ButtonProps: ButtonPropType = {
      text: 'button',
      type: 'filled-btn',
      onClick: onClickMock
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    fireEvent.click(element);
    fireEvent.click(element);
    expect(onClickMock).toBeCalledTimes(2);
  });
});
