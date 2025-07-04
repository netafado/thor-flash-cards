#!/bin/bash
# Setup branch protection for main branch

echo "Setting up branch protection for main branch..."

# Enable branch protection
gh api repos/:owner/:repo/branches/main/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"contexts":["main"]}' \
  --field enforce_admins=true \
  --field required_pull_request_reviews='{"required_approving_review_count":1,"dismiss_stale_reviews":true,"require_code_owner_reviews":false}' \
  --field restrictions=null \
  --field allow_force_pushes=false \
  --field allow_deletions=false

echo "Branch protection enabled for main branch!"
echo "Main branch now requires:"
echo "- Pull request with at least 1 approval"
echo "- All status checks to pass (CI must succeed)"
echo "- Branch to be up to date before merging"
echo "- No direct pushes to main"
