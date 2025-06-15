import { render } from '@testing-library/react';

import ThorCommerceUi from '.';

describe('ThorCommerceUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThorCommerceUi />);
    expect(baseElement).toBeTruthy();
  });
});
