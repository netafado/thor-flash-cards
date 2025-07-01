.
🚀 What is CI/CD?
✅ CI/CD stands for:

Continuous Integration (CI)

Continuous Delivery (CD) or Continuous Deployment (CD)

They are best practices for automating software build, test, and deployment pipelines.

🧩 Continuous Integration (CI)
👉 The CI part means:

developers regularly merge (integrate) their code into a shared branch (often main or develop)

every commit triggers an automated build and automated tests

that way you detect problems immediately instead of weeks later

Benefits:
✅ catch bugs earlier
✅ keep your code always buildable
✅ avoid “it works on my machine”

Popular CI tools:

GitHub Actions

GitLab CI

Jenkins

CircleCI

🧩 Continuous Delivery / Deployment (CD)
👉 the CD part means:

after CI builds & tests pass, the code is automatically packaged for delivery

Continuous Delivery: you can deploy at any time, but might still click “deploy” manually

Continuous Deployment: deploys automatically to production after passing tests

Benefits:
✅ deliver features faster
✅ reduce human error
✅ smaller, safer deployments

🧩 CI/CD Pipeline
When people say pipeline, they usually mean:

bash
Copiar
Editar
push code ➡️ build ➡️ test ➡️ deploy ➡️ done
automated, every time.

A typical YAML pipeline might:

Install dependencies

Run unit tests

Lint/format

Build the project

Deploy to staging

Deploy to production (maybe with approval)
