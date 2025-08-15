# Thor Commerce

A modern e-commerce platform built with Next.js, Nx monorepo architecture, and TypeScript.

## 🏗️ Architecture

This project uses **Nx 21.2.0** as a monorepo tool with **Yarn** as the package manager. The workspace follows a modular architecture with separate applications and shared libraries.

### Applications

- **📱 Dashboard** (`apps/dashboard`) - Next.js admin dashboard with authentication
  - Built with Next.js App Router
  - NextAuth.js for authentication with AWS Cognito
  - Internationalization (i18n) support
  - Theme system with light/dark mode

### Libraries

- **🎨 UI** (`libs/ui`) - Shared component library
  - Reusable React components
  - Theme provider and styling system
  - Accessibility-compliant components (ARIA)

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd thor-commerce

# Install dependencies
yarn install
```

### Development

```bash
# Start the dashboard application in development mode
nx serve dashboard

# Or use yarn script
yarn dev:dashboard

# Run all applications
nx run-many --target=serve --all
```

The dashboard will be available at `http://localhost:4200`

## 🛠️ Available Commands

### Development

```bash
# Serve applications
nx serve dashboard              # Start dashboard dev server
nx serve --all                 # Start all applications

# Build applications
nx build dashboard              # Build dashboard for production
nx build --all                 # Build all applications

# Testing
nx test dashboard              # Run dashboard tests
nx test ui                     # Run UI library tests
nx test --all                  # Run all tests

# Linting
nx lint dashboard              # Lint dashboard
nx lint ui                     # Lint UI library
nx lint --all                  # Lint all projects
```

### Code Generation

```bash
# Generate new components
nx g @nx/react:component MyComponent --project=ui

# Generate new pages
nx g @nx/next:page my-page --project=dashboard

# Generate new libraries
nx g @nx/react:library my-lib

# Generate new applications
nx g @nx/next:application my-app
```

### Utilities

```bash
# Show project dependency graph
nx graph

# Show what's affected by changes
nx affected:graph

# Show project information
nx show project dashboard
```

## 🏛️ Project Structure

```
thor-commerce/
├── apps/
│   └── dashboard/                 # Next.js dashboard application
│       ├── src/
│       │   ├── app/              # Next.js App Router pages
│       │   │   ├── (auth)/       # Authentication routes
│       │   │   └── (session)/    # Protected routes
│       │   ├── common/           # Shared utilities
│       │   │   └── auth/         # NextAuth configuration
│       │   └── testUtils/        # Test setup and utilities
│       ├── public/               # Static assets
│       └── project.json          # Nx project configuration
├── libs/
│   └── ui/                       # Shared UI component library
│       ├── src/
│       │   ├── components/       # React components
│       │   ├── providers/        # Context providers
│       │   └── index.ts          # Library exports
│       └── project.json          # Nx project configuration
├── tools/                        # Workspace tools and scripts
├── nx.json                       # Nx workspace configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## 🔐 Authentication

The project uses **NextAuth.js v5** with AWS Cognito for authentication:

- **Provider**: AWS Cognito with custom credentials provider
- **Session Strategy**: JWT tokens
- **Protected Routes**: Wrapped in `(session)` route group
- **Login Page**: `/auth/login`

### Environment Variables

Create a `.env.local` file in the dashboard app:

```env
# NextAuth
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:4200

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:4004

# AWS Cognito (if using)
AWS_REGION=your-aws-region
AWS_USER_POOL_ID=your-user-pool-id
AWS_CLIENT_ID=your-client-id
```

## 🎨 UI Components

The UI library provides a comprehensive set of components:

- **Layout Components**: Content, Section, Card
- **Navigation**: BreadCrumbs with ARIA compliance
- **Theme**: ThemeProvider with light/dark mode support
- **Typography**: Styled text components
- **Interactive**: Buttons, forms, and more

### Usage Example

```tsx
import { Content, Section, Card, ThemeProvider } from '@lib/ui';

function MyPage() {
  return (
    <ThemeProvider>
      <Content title="Dashboard" pages={['Home', 'Dashboard']}>
        <Section>
          <Section.Item type="full">
            <Card>
              <h1>Welcome to Thor Commerce</h1>
            </Card>
          </Section.Item>
        </Section>
      </Content>
    </ThemeProvider>
  );
}
```

## 🧪 Testing

The project uses **Jest** and **React Testing Library** for testing:

- **Unit Tests**: Component and utility testing
- **Integration Tests**: Page and flow testing
- **Setup**: Global test configuration in `setupTests.ts`

### Test Setup Features

- NextAuth mocking for authentication tests
- Next.js router mocking
- Internationalization mocking
- Console output suppression for clean test runs

### Running Tests

```bash
# Run specific project tests
nx test dashboard
nx test ui

# Run all tests
nx test --all

# Run tests in watch mode
nx test dashboard --watch

# Run tests with coverage
nx test dashboard --coverage
```

## 🌐 Internationalization

The dashboard supports multiple languages using **next-intl**:

- Translation key structure: `pages.login.email`
- Locale detection and routing
- Fallback language support

## 📦 Package Management

This project uses **Yarn** workspaces with Nx:

```bash
# Add dependencies to specific projects
yarn add package-name
nx add package-name --project=dashboard

# Add dev dependencies
yarn add -D package-name

# Update dependencies
yarn upgrade
```

## 🔧 Configuration

### Nx Configuration

Key configuration files:

- `nx.json` - Workspace configuration
- `project.json` - Project-specific configuration
- `jest.config.ts` - Testing configuration
- `tsconfig.json` - TypeScript configuration

### VS Code Integration

The project includes VS Code configuration:

- Format on save enabled
- Auto-detection disabled for cleaner development
- Nx Console integration

## 🚀 Deployment

### Building for Production

```bash
# Build all applications
nx build --all

# Build specific application
nx build dashboard

# Build with production optimizations
nx build dashboard --prod
```

### Docker Support

The project can be containerized for deployment. The build outputs are optimized for static hosting or serverless deployment.

## 🤝 Contributing

1. **Clone** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Make** your changes following the coding standards
4. **Test** your changes: `nx test --all`
5. **Lint** your code: `nx lint --all`
6. **Commit** your changes: `git commit -m 'Add amazing feature'`
7. **Push** to the branch: `git push origin feature/amazing-feature`
8. **Open** a Pull Request

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Configured for React and Next.js
- **Prettier**: Code formatting on save
- **Testing**: Maintain test coverage
- **Accessibility**: ARIA compliance for UI components

## 📚 Documentation

- [Nx Documentation](https://nx.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [documentation](#-documentation)
2. Search existing [issues](link-to-issues)
3. Create a [new issue](link-to-new-issue)

---

Built with ❤️ using [Nx](https://nx.dev), [Next.js](https://nextjs.org), and [TypeScript](https://typescriptlang.org)
