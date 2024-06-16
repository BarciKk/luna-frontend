import { render, screen } from 'tests';
import { Button } from './Button.component';

describe('Button component', () => {
  it('renders button with text', () => {
    render(<Button text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('displays loading spinner when isLoading is true', () => {
    render(<Button text="Click me" isLoading={true} />);
    expect(screen.getByRole('loading')).toBeInTheDocument();
  });

  it('fires onClick callback when clicked', async () => {
    const onClickMock = vitest.fn();
    const { userEvent } = render(
      <Button text="Click me" onClick={onClickMock} />,
    );
    await userEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalled();
  });

  it('has type submit', () => {
    render(<Button text="Submit" />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });
});
