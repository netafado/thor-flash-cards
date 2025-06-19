import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Typography } from '.';

describe('Typography', () => {
  it('renders H1 correctly', () => {
    const { getByText } = render(<Typography.H1>Heading 1</Typography.H1>);
    expect(getByText('Heading 1')).toBeInTheDocument();
    expect(getByText('Heading 1').tagName).toBe('H1');
  });

  it('renders H2 correctly', () => {
    const { getByText } = render(<Typography.H2>Heading 2</Typography.H2>);
    expect(getByText('Heading 2')).toBeInTheDocument();
    expect(getByText('Heading 2').tagName).toBe('H2');
  });

  it('renders H3 correctly', () => {
    const { getByText } = render(<Typography.H3>Heading 3</Typography.H3>);
    expect(getByText('Heading 3')).toBeInTheDocument();
    expect(getByText('Heading 3').tagName).toBe('H3');
  });

  it('renders H4 correctly', () => {
    const { getByText } = render(<Typography.H4>Heading 4</Typography.H4>);
    expect(getByText('Heading 4')).toBeInTheDocument();
    expect(getByText('Heading 4').tagName).toBe('H4');
  });

  it('renders H5 correctly', () => {
    const { getByText } = render(<Typography.H5>Heading 5</Typography.H5>);
    expect(getByText('Heading 5')).toBeInTheDocument();
    expect(getByText('Heading 5').tagName).toBe('H5');
  });

  it('renders H6 correctly', () => {
    const { getByText } = render(<Typography.H6>Heading 6</Typography.H6>);
    expect(getByText('Heading 6')).toBeInTheDocument();
    expect(getByText('Heading 6').tagName).toBe('H6');
  });
});
