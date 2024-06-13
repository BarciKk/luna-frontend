import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CustomAvatar } from './Avatar.component';

describe('CustomAvatar component', () => {
  const defaultProps = {
    src: 'test-avatar.jpg',
  };

  it('renders without crashing', () => {
    render(<CustomAvatar {...defaultProps} />);
    const avatar = screen.getByAltText('user avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', 'test-avatar.jpg');
  });

  it('opens the menu on avatar click when showMenu is true', () => {
    render(<CustomAvatar {...defaultProps} showMenu />);
    const avatar = screen.getByAltText('user avatar');
    fireEvent.click(avatar);
    expect(screen.getByText('Profile')).toBeVisible();
    expect(screen.getByText('My account')).toBeVisible();
  });

  it('closes the menu when a menu item is clicked', () => {
    render(<CustomAvatar {...defaultProps} showMenu />);
    const avatar = screen.getByAltText('user avatar');
    fireEvent.click(avatar);
    fireEvent.click(screen.getByText('Profile'));
    expect(screen.queryByText('Profile')).not.toBeVisible();
  });

  it('does not show the menu when showMenu is false', () => {
    render(<CustomAvatar {...defaultProps} />);
    const avatar = screen.getByAltText('user avatar');
    fireEvent.click(avatar);
    expect(screen.queryByText('Profile')).not.toBeInTheDocument();
    expect(screen.queryByText('My account')).not.toBeInTheDocument();
  });
});
