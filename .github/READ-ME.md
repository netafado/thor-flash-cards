# Overview

## OverviewBest Practices for Database Migrations

Run migrations before updating the Lambda function if you have breaking schema changes
Use transaction-based migrations to ensure data integrity
Test migrations in staging first
Keep migration rollback scripts ready
Staging Environment Testing
Consider adding a staging deployment step first:

- `cmn` Pipelines which do not have any target system dependency
- `dev` Pipelines which are for `main/develop`
- `release` Pipelines which are for `releases/r-<release-number>`
