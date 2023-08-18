import { render, screen } from '@testing-library/react';
import CardDiv from './CardDiv';

describe('CardDiv component testing', () => {
  test('if total component rendered correctly', () => {
    const props = { label: 'label here', data: 'value' };

    render(<CardDiv {...props} />);
    const element = screen.getByTestId('carddiv-div-test');

    expect(element.getAttribute('class')).toBe('sub-detail');
  });
  test('if label rendered correctly', () => {
    const props = { label: 'label here', data: 'value' };

    render(<CardDiv {...props} />);
    const element = screen.getByTestId('carddiv-label-test');

    expect(element.innerHTML).toBe('label here');
  });
  test('if data prop rendered correctly', () => {
    const props = { label: 'label here', data: 'value' };

    render(<CardDiv {...props} />);
    const element = screen.getByTestId('carddiv-innerdiv-test');

    expect(element.innerHTML).toBe('value');
  });
});
