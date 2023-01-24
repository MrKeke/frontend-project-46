dolint:
	npx eslint . --fix
node:
	node gendiff.js files/file1.json files/file2.json
lint:
	npx eslint .