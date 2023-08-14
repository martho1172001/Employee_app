import Input, { InputPropType } from './Input';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Button component testing', () => {
  test('if label rendered correctly', () => {
    const InputProps: InputPropType = {
      label: 'button here',
      value: 'button',
      type: 'text',
      placeholder: 'button placeholder'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-label-test');

    expect(element.innerHTML).toBe('button here');
  });
  test('if label rendered correctly', () => {
    const InputProps: InputPropType = {
      label: 'button here',
      value: 'button',
      type: 'text',
      placeholder: 'button placeholder'
    };

    render(<Input {...InputProps} />);

    const element = screen.getByTestId('input-input-test');

    expect(element).toMatchSnapshot();
    expect(element.getAttribute('value')).toBe('button');
  });
  test('if focus label correctly', () => {
    const InputProps: InputPropType = {
      label: 'button here',
      value: 'button',
      type: 'text',
      placeholder: 'button placeholder'
    };

    render(<Input {...InputProps} />);

    const element = screen.getByTestId('input-input-test');

    fireEvent.focus(element);
    expect(element.getAttribute('value')).toBe('button');
  });
});
