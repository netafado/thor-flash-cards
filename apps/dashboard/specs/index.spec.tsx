import React from 'react';
import { render } from '@testing-library/react';
import Page from '../src/app/page';
import { SidebarProvider, ThemeProvider } from '@thor-commerce/ui';

describe('Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Page />, {
      wrapper: ({ children }) => (
        <SidebarProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </SidebarProvider>
      ),
    });
    expect(baseElement).toBeTruthy();
  });
});
