import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { authenticate } from '@dash/common/actions/authenticate';
import '@testing-library/jest-dom';
import SignIn from '.';

jest.mock('@dash/common/actions/authenticate', () => ({
  authenticate: jest.fn(),
}));

describe('SignIn', () => {
  it('sould renders the sign-in form', () => {
    render(<SignIn />);
    expect(screen.getByLabelText(/pages.login.email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/pages.login.password/i)).toBeInTheDocument();
    expect(screen.getByText(/pages.login.forgotPassword/i)).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /pages.login.signIn/i })
    ).toBeInTheDocument();
  });

  it('should call the router push if on the click of the forgot password link', () => {
    render(<SignIn />);
    const forgotPasswordLink = screen.getByText(/pages.login.forgotPassword/i);
    expect(forgotPasswordLink).toHaveAttribute('href', '/forgot-password');
  });

  it('should display an error message when errorMessage prop is provided', async () => {
    const errorMessage = 'Invalid credentials';

    const formAction = jest.fn().mockReturnValue(errorMessage);

    (authenticate as jest.Mock).mockReturnValue([
      errorMessage,
      formAction,
      false,
    ]);
    render(<SignIn />);
    const submitButton = screen.getByRole('button', {
      name: /pages.login.signIn/i,
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/pages.login.error/i)).toBeInTheDocument();
    });
  });
});
