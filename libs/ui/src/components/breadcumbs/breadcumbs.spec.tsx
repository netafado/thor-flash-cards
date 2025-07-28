import BreadCumbs from '.';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

/**
* It ensures that the component correctly implements ARIA roles and attributes for navigation.
* https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/

**/

describe('BreadCumbs', () => {
  it('should add the apropriate accessibility attributes', () => {
    render(<BreadCumbs title="Test Title" pages={['Page 1', 'Page 2']} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should render all the elements in the list', () => {
    render(<BreadCumbs title="Test Title" pages={['Page 1', 'Page 2']} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  it('should the last item should have aria-current="page"', () => {
    render(<BreadCumbs title="Test Title" pages={['Page 1', 'Page 2']} />);
    const lastItem = screen.getByText('Page 2');
    expect(lastItem).toHaveAttribute('aria-current', 'page');
  });
});
