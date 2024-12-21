setup: install
	npx simple-git-hooks

install:
	npm ci

test:
	node index.js

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

update-deps:
	npx ncu -u