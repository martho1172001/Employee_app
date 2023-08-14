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
  test('if input rendered correctly', () => {
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
  test('if on focus label renders correctly', () => {
    const InputProps: InputPropType = {
      label: 'button here',
      value: 'button',
      type: 'text',
      placeholder: 'button placeholder'
    };

    render(<Input {...InputProps} />);

    const element = screen.getByTestId('input-input-test');
    const element_label = screen.getByTestId('input-label-test');

    fireEvent.focus(element);
    expect(element_label.getAttribute('class')).toBe('label focused');
  });
  test('if on blur label renders correctly', () => {
    const InputProps: InputPropType = {
      label: 'button here',
      value: 'button',
      type: 'text',
      placeholder: 'button placeholder'
    };

    render(<Input {...InputProps} />);

    const element = screen.getByTestId('input-input-test');
    const element_label = screen.getByTestId('input-label-test');

    fireEvent.focus(element);
    fireEvent.blur(element);
    expect(element_label.getAttribute('class')).toBe('label');
  });
  test('if onchange works correctly', () => {
    const onChangeMock = jest.fn();
    const InputProps: InputPropType = {
      label: 'button here',
      value: 'button',
      type: 'text',
      placeholder: 'button placeholder',
      onChange: onChangeMock
    };

    render(<Input {...InputProps} />);

    const element = screen.getByTestId('input-input-test');

    fireEvent.change(element);

    expect(element).toMatchSnapshot();
    expect(onChangeMock).toHaveBeenCalled;

  });
  test('if onchange with value works correctly', () => {
    const onChangeMock = jest.fn();
    const InputProps: InputPropType = {
      label: 'button here',
      value: 'button',
      type: 'text',
      placeholder: 'button placeholder',
      onChange: onChangeMock
    };

    render(<Input {...InputProps} />);

    const element = screen.getByTestId('input-input-test');

    fireEvent.change(element, { target: { value: 'New value' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('New value');
  });
});
