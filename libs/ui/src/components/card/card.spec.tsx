import { Card } from '.';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Card', () => {
  it('should render children', () => {
    render(
      <Card>
        <div>Test Child</div>
      </Card>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('should render as button when onClick is provided', () => {
    const handleClick = jest.fn();
    render(
      <Card onClick={handleClick}>
        <div>Clickable Card</div>
      </Card>
    );
    const cardElement = screen.getByRole('button');
    fireEvent.click(cardElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
