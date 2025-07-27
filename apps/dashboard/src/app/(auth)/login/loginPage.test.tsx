import PageAuth from './page';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@lib/ui';

const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const setUp = () => {
  return render(<PageAuth />, {
    wrapper: TestWrapper,
  });
};

describe('PageAuth', () => {
  it('should render without crashing', () => {
    const { container } = setUp();
    expect(container).toBeTruthy();
  });

  it('should have a form with email and password fields', () => {
    const { getByLabelText } = setUp();
    expect(getByLabelText('pages.login.email')).toBeInTheDocument();
    expect(getByLabelText('pages.login.password')).toBeInTheDocument();
  });
});
