## Git flow:

### main (or master)

always contains production-ready code

### develop

holds the latest development features (integration branch)

### feature/\*

feature branches for new functionality

branched from develop, merged back to develop

### release/\*

for prepping a release (e.g., QA, bugfixes before production)

branched from develop, merged into main and back to develop

### hotfix/\*

for emergency production fixes

branched from main, merged back into main and develop
