import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Slider from './Slider';

const images = [
  'https://image.com/foo.jpg',
  'https://image.com/toto.jpg',
  'https://image.com/tata.jpg',
];

describe('Slider', () => {
  test('displays greeting', () => {
    render(<Slider images={images} />);
    expect(screen.getByTestId('slider')).toBeDefined();

    images.forEach(image => {
      expect(screen.getByTestId(`slide-${image}`)).toBeDefined();
      const imgElement = screen.getByTestId(`slide-${image}`).firstChild;
      expect(imgElement).toHaveAttribute('class');
      expect(imgElement).toHaveAttribute('src');
    });
  });

  test("doesn't break snapshot", () => {
    const { container } = render(<Slider images={images} />);
    expect(container).toMatchSnapshot();
  });
});
