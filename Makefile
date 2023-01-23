dolint:
	npx eslint . --fix
node:
	node gendiff.js file1.json file2.json
lint:
	npx eslint .