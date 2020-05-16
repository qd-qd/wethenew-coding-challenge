import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import sneaker from '@test/fixtures/sneaker.json';
import Card from './Card';

describe('Card', () => {
  test('displays greeting', () => {
    render(
      <Card
        slug={sneaker.slug}
        image={sneaker.image}
        price={sneaker.price}
        name={sneaker.name}
        brand={sneaker.brand}
      />,
    );

    expect(screen.getByTestId('card-link')).toBeDefined();
    expect(screen.getByTestId('card-link').href).toContain(sneaker.slug);
    expect(
      screen.getByAltText(`The ${sneaker.name} sneaker by ${sneaker.brand}`),
    ).toBeTruthy();
    expect(screen.getByRole('img').src).toContain(sneaker.image);
    expect(screen.getByRole('img').className).toBeTruthy();
    expect(screen.getByRole('img').alt).toBeTruthy();

    expect(screen.getByText(sneaker.name)).toHaveAttribute('class');
    expect(screen.getByText(sneaker.price)).toHaveAttribute('class');
    expect(screen.getByText(sneaker.brand)).toHaveAttribute('class');
    expect(screen.getByText('€')).toBeTruthy();
  });

  test('displays placeholder image if no one is pass', () => {
    render(
      <Card
        slug={sneaker.slug}
        price={sneaker.price}
        name={sneaker.name}
        brand={sneaker.brand}
      />,
    );
    expect(screen.getByRole('img').src).toContain('placeholder');
  });

  test("doesn't break snapshot", () => {
    const { container } = render(
      <Card
        slug={sneaker.slug}
        image={sneaker.image}
        price={sneaker.price}
        name={sneaker.name}
        brand={sneaker.brand}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
