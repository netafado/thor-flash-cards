import React from 'react';
import { render } from '@testing-library/react';
import Page from './page';
import { ThemeProvider } from '@lib/ui';

const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const setUp = () => {
  return render(<Page />, {
    wrapper: TestWrapper,
  });
};

describe('Page', () => {
  it('should render successfully', () => {
    const { baseElement } = setUp();
    expect(baseElement).toBeTruthy();
  });
});
