import QRCodeIcon from '.';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.native';

describe('<QRCodeIcon />', () => {
  it('should render QRCodeIcon', () => {
    const renderTree = renderWithTheme(
      <QRCodeIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});