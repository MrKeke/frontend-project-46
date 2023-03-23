install:
		npm install

publish:
		npm publish --dry-run

do:
		gendiff __fixtures__/first.json  __fixtures__/second.json

do-big:
		gendiff __fixtures__/firstBig.json  __fixtures__/secondBig.json

doY:
		gendiff __fixtures__/first.yml  __fixtures__/second.yml

do-bigY:
		gendiff __fixtures__/firstBig.yml  __fixtures__/secondBig.yml

lint:
		npx eslint .

lint-fix:
		npx eslint --fix .

test:
		npm test

test-coverage:
		npm test -- --coverage --coverageProvider=v8
