# DesignSystem

This repo was create for study and create a basic structure,

Architecture decision record (ADR)

## Be a good fit to t the position "Need to know: Node.Js, React.Js, Typescript and AWS" and the curotec test

Goal: the go of this project is to learned Build a simplified, production-grade checkout system using modern architecture practices and cloud infrastructure using AWS.

Goal this App should allowed the user to create custom checkout using third part payments gateways, and integrate it with any e-commerce plataform for this our system need to be agnostic to the plataform of the ecommerce, so multitenant is required.

create a design-sytem to be shared between the front-end applications

Service one

- Radix UI
- shared lib

Services

- Store
  emum: bigCommerce | commercetools
- orderService
  dashborad
- Analityc Services
- OrderDashboradService
- Payment
- CheckoutService
- CartService
  - webhook
- Product (interface)
- Transforms

- Products search

  - Algolia Integration interface
    - need to be fast
  - webhook

- Fron-end
- Design System
- onLine-store

## SOLID principles.

## 🔧 Tech Stack

| Layer          | Tools                                                              |
| -------------- | ------------------------------------------------------------------ |
| Frontend       | React.js (w/ TypeScript), Redux Toolkit                            |
| Backend        | Node.js (w/ TypeScript), Express, GraphQL or REST                  |
| Database       | PostgreSQL (via Sequelize or Prisma)                               |
| Infrastructure | AWS (Lambda, API Gateway, RDS, S3, Cognito), Terraform (optional)  |
| DevOps         | GitHub Actions or AWS CodePipeline (CI/CD), ESLint, Prettier, Jest |
