import { render, screen } from '@testing-library/react';
import SubHeading from './SubHeading';

describe('SubHaeding component testing', () => {
  test('if image source correctly', () => {
    const mockFunction = jest.fn();
    const SubHeadingProps = {
      heading: 'Employee Details',
      buttontext: 'Edit ',
      imgSrc: '/assets/icons/edit.png',
      classname: 'edit-icon-white',
      onClick: mockFunction
    };

    render(<SubHeading {...SubHeadingProps} />);
    const element = screen.getByTestId('subheading-img-test');

    expect(element.getAttribute('src')).toBe('/assets/icons/edit.png');
  });
  test('if image source not given works correctly', () => {
    const mockFunction = jest.fn();
    const SubHeadingProps = {
      heading: 'Employee Details',
      buttontext: 'Edit ',
      classname: 'edit-icon-white',
      onClick: mockFunction
    };

    render(<SubHeading {...SubHeadingProps} />);
    const element = screen.getByTestId('subheading-maindiv-test');

    expect(element.innerHTML).toBe(`<h2>${SubHeadingProps.heading}</h2>`);
  });
});
