import IndiaFlagIcon from '.';
import renderWithTheme from '~utils/testing/renderWithTheme.native';

describe('<IndiaFlagIcon />', () => {
  it('should render IndiaFlagIcon', () => {
    const renderTree = renderWithTheme(
      <IndiaFlagIcon color="feedback.icon.neutral.intense" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
