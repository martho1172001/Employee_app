import { fireEvent, render, screen } from '@testing-library/react';
import DeletePopup from './DeletePopup';

describe('DeletePopup component testing', () => {
  test('if close symbol rendered correctly', () => {
    const PopupProps = {};

    render(<DeletePopup {...PopupProps} />);
    const element = screen.getByTestId('popup-img-test');

    expect(element.getAttribute('src')).toBe('/assets/icons/close.svg');
  });

  test('should call onDeleteClick with false when close icon is clicked', () => {
    const onDeleteClickMock = jest.fn();
    const PopupProps = {
      onDeleteClick: onDeleteClickMock,
      deleteId: { current: null }
    };

    render(<DeletePopup {...PopupProps} />);

    const closeIcon = screen.getByTestId('popup-img-test');

    fireEvent.click(closeIcon);

    expect(onDeleteClickMock).toHaveBeenCalledWith(false);
  });
  test('should call onDeleteClick with false when Confirm button is clicked', () => {
    const onDeleteClickMock = jest.fn();
    const PopupProps = {
      onDeleteClick: onDeleteClickMock,
      deleteId: { current: null }
    };

    render(<DeletePopup {...PopupProps} />);

    const ConfirmButton = screen.getByText('Confirm');

    fireEvent.click(ConfirmButton);

    expect(onDeleteClickMock).toHaveBeenCalledWith(false);
  });
  test('should call onDeleteClick with false when Cancel button is clicked', () => {
    const onDeleteClickMock = jest.fn();
    const PopupProps = {
      onDeleteClick: onDeleteClickMock,
      deleteId: { current: null }
    };

    render(<DeletePopup {...PopupProps} />);

    const CancelButton = screen.getByText('Cancel');

    fireEvent.click(CancelButton);

    expect(onDeleteClickMock).toHaveBeenCalledWith(false);
  });

});
