import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component testing', () => {
  test('if header rendered correctly', () => {
    const HeadingProps = {
      className: 'blank-container'
    };

    render(<Header {...HeadingProps} />);
    const element = screen.getByTestId('header-test');

    expect(element.getAttribute('class')).toBe(HeadingProps.className);
  });
});
