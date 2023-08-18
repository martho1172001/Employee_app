import React from 'react';
import { render } from '@testing-library/react';
import EmployeeCard from './EmployeeCard';

describe('EmployeeCard Component', () => {
  const mockData = {
    id: 3,
    name: 'mariya',
    username: 'mariya',
    password: 'mariya',
    joiningDate: '2012-11-01T18:30:00.000Z',
    isActive: 'Active',
    experience: 8,
    role: 'HR',
    departmentId: 2,
    address: {
      address_line_1: "Edachira'",
      address_line_2: 'Kakkanad',
      city: 'Ernakulam',
      state: 'Kerala',
      country: 'India',
      pincode: '682024'
    }
  };

  test('should render employee details correctly', () => {
    const { getByText } = render(<EmployeeCard data={mockData} />);

    // Check if the labels and data are rendered correctly
    expect(getByText('Employee Name').innerHTML).toBe('Employee Name');
    expect(getByText('Joining Date').innerHTML).toBe('Joining Date');
    expect(getByText('Experience').innerHTML).toBe('Experience');
    expect(getByText('Role').innerHTML).toBe('Role');
    expect(getByText('Status').innerHTML).toBe('Status');
    expect(getByText('Address').innerHTML).toBe('Address');
    expect(getByText('Employee ID').innerHTML).toBe('Employee ID');

    //Check if the mock data values are displayed correctly
    expect(getByText(mockData.name).innerHTML).toBe('mariya');
    expect(getByText(mockData.joiningDate).innerHTML).toBe('2012-11-01T18:30:00.000Z');
    expect(getByText(mockData.experience).innerHTML).toBe('8');
    expect(getByText(mockData.role).innerHTML).toBe('HR');
    expect(getByText('Active').innerHTML).toBe('Active'); // Assuming isActive is true
    expect(
      getByText(
        `${mockData.address.address_line_1}, ${mockData.address.address_line_2}, ${mockData.address.city}, ${mockData.address.state}, ${mockData.address.country}, ${mockData.address.pincode}`
      ).innerHTML
    ).toBe("Edachira', Kakkanad, Ernakulam, Kerala, India, 682024");
    expect(getByText(mockData.id).innerHTML).toBe('3');
  });
});
