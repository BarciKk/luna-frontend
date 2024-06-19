import { render } from 'utils/tests/Mocks';
import { screen } from 'tests';
import { ErrorMessage } from './ErrorMessage.component';

describe('Error message component ', () => {
  it('Should render component with error message ', () => {
    render(<ErrorMessage message="Error message" />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });
});
