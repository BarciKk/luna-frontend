import { screen, waitFor } from 'tests';
import { CustomAvatar } from './Avatar.component';
import { render } from 'utils/tests/Mocks';
import { TEST_AVATAR, TEST_USER } from 'utils/tests/constants/auth.constants';

describe('Avatar component', () => {
  it('it should render component with provided src', () => {
    render(<CustomAvatar src={TEST_USER.avatar} />);

    const image = screen.getByAltText('user avatar');
    expect(image).toHaveAttribute('src', TEST_USER.avatar);
    expect(image).toBeInTheDocument();
  });

  it('it should render menu when showMenu prop is true and button is clicked', async () => {
    const { userEvent } = render(
      <CustomAvatar src={TEST_USER.avatar} showMenu />,
    );
    await userEvent.click(screen.getByTestId('menu-click'));

    const menu = screen.getByTestId('avatar-menu');

    expect(menu).toBeInTheDocument();
  });

  it('displays tooltip with provided label on hover', async () => {
    const { userEvent } = render(
      <CustomAvatar src={TEST_USER.avatar} label={TEST_AVATAR.label} />,
    );
    const avatarImage = screen.getByAltText('user avatar');

    userEvent.hover(avatarImage);

    await waitFor(() => {
      const tooltip = screen.getByRole('tooltip');
      expect(tooltip).toHaveTextContent(TEST_AVATAR.label);
    });
  });
});

// in perfect world u should test as well removeUser function but useUser is well in progress so update this later
