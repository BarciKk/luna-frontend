import { render } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage.component';

describe('Error message component', () => {
  it('renders error message with error message', () => {
    const { getByText } = render(<ErrorMessage message="Error message" />);
    expect(getByText('Error message')).toBeInTheDocument();
  });

  it('it should render null when message prop is not provided', () => {
    const { container } = render(<ErrorMessage message={undefined} />);
    expect(container.firstChild).toBeNull();
  });

  it('it should render null when message prop is empty string', () => {
    const { container } = render(<ErrorMessage message={''} />);
    expect(container.firstChild).toBeNull();
  });
});
