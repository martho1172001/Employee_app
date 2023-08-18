import React from 'react';
import { render } from '@testing-library/react';
import Status from './Status';

describe('Status Component', () => {
  it('should render "Active" status when isactive is true', () => {
    const { getByText } = render(<Status isactive={true} />);

    const activeElement = getByText('Active');

    expect(activeElement.innerHTML).toBe('Active');
    expect(activeElement.getAttribute('class')).toBe('active'); // Check if the appropriate class is applied
  });

  it('should render "Inactive" status when isactive is false', () => {
    const { getByText } = render(<Status isactive={false} />);

    const inactiveElement = getByText('Inactive');

    expect(inactiveElement.innerHTML).toBe('Inactive');
    expect(inactiveElement.getAttribute('class')).toBe('inactive');
  });
});
