import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button.component';

describe('Button component', () => {
  it('renders button with text', () => {
    const { getByText } = render(<Button text="Click me" />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('displays loading spinner when isLoading is true', () => {
    const { getByTestId } = render(<Button text="Click me" isLoading={true} />);
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('fires onClick callback when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button text="Click me" onClick={onClickMock} />,
    );
    userEvent.click(getByText('Click me'));
    expect(onClickMock).toHaveBeenCalled();
  });

  it('has type submit', () => {
    const { container } = render(<Button text="Submit" />);
    const button = container.querySelector('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('renders with outlined variant', () => {
    const { container } = render(
      <Button text="Outlined Button" variant="outlined" />,
    );
    const button = container.querySelector('button');
    expect(button).toHaveClass('MuiButton-outlined');
  });
});
