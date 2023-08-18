import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DropDown from './Dropdown';

describe('DropDown Component', () => {
  it('should call onChange with selected option value', () => {
    const onChangeMock = jest.fn();

    const options = ['Option 1', 'Option 2', 'Option 3'];
    const DropdownProps = {
      label: 'Select an option',
      options: options,
      onChange: onChangeMock
    };

    render(<DropDown {...DropdownProps} />);

    const selectElement = screen.getByTestId('dropdown-select-test');

    fireEvent.change(selectElement, { target: { value: 'Option 2' } });

    expect(onChangeMock).toHaveBeenCalledWith('Option 2');
  });
});
