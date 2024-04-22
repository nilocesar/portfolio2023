import { render, screen } from '@testing-library/react';
import { CardModel } from 'components/CardModel';

const data = {
  thumbnail: 'thumbnail',
  title: 'title',
  card: 'https://img.freepik.com/vetores-premium/cotacao-de-cafe-para-ir-cafe-com-design-de-xicara-de-cafe_688596-243.jpg',
  description: 'Lorem Ypson'
};

describe('<CardModel />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardModel it={0} delay={1} data={data} />);
    expect(baseElement).toBeTruthy();
  });

  it('Ensure to verify the link within the card model', () => {
    render(<CardModel it={0} delay={1} data={data} />);
    expect(screen.getByTestId('linkProject')).toHaveAttribute('href', '/project?item=0');
  });
});
