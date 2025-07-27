global.console.warn = (e) => e;
global.console.error = (e) => e;
global.console.debug = (e) => e;

Object.defineProperty(window, 'location', {
  value: {
    origin: 'http://everest.com',
    protocol: 'http:',
    host: 'everest.com',
    hostname: 'everest.com',
    search: '',
    href: 'http://everest.com/',
    pathname: '/',
  },
  writable: true,
});

jest.mock('next-auth', () => ({
  __esModule: true,

  useSession: jest.fn(() => ({
    data: {
      user: {
        name: 'Test User',
        email: 'test@example.com',
        image: 'http://example.com/image.jpg',
      },
      expires: '2023-10-01T00:00:00.000Z',
    },
    status: 'authenticated',
  })),
  signIn: jest.fn(),
  signOut: jest.fn(),
  default: () => ({
    useSession: jest.fn(() => ({
      data: {
        user: {
          name: 'Test User',
          email: 'test@example.com',
          image: 'http://example.com/image.jpg',
        },
        expires: '2023-10-01T00:00:00.000Z',
      },
      status: 'authenticated',
    })),
  }),
}));

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    query: {},
  }),
  useSearchParams: () => ({
    get: (key: string) => {
      return key === 'callbackUrl' ? '/dashboard' : null;
    },
  }),
}));
