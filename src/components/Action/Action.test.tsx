/* eslint-disable no-undef */
/* eslint-disable no-unused-labels */
import { render, screen } from '@testing-library/react';
import Action from './Action';

describe('Button component testing', () => {
  test('if label rendered correctly', () => {
    const props = {};

    render(<Action {...props} />);
    const element = screen.getByTestId('image1-action-test');

    expect(element.getAttribute('class')).toBe('delete-icon');
    const element1 = screen.getByTestId('image2-action-test');

    expect(element1.getAttribute('class')).toBe('edit-icon');
  });
});
