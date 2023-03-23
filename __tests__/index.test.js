import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const getData = (fileName) => fs.readFileSync(getFixturePath(fileName), 'utf-8');

test('JSON big', () => {
  expect(genDiff(getFixturePath('first.json'), getFixturePath('second.json')))
    .toBe(getData('expectedStylish.txt'));
});

test('JSON big stylish', () => {
  expect(genDiff(getFixturePath('first.json'), getFixturePath('second.json'), 'stylish'))
    .toBe(getData('expectedStylish.txt'));
});

test('JSON big plain', () => {
  expect(genDiff(getFixturePath('first.json'), getFixturePath('second.json'), 'plain'))
    .toBe(getData('expectedPlain.txt'));
});

test('yml big', () => {
  expect(genDiff(getFixturePath('first.yml'), getFixturePath('second.yml')))
    .toBe(getData('expectedStylish.txt'));
});

test('yml big plain', () => {
  expect(genDiff(getFixturePath('first.yml'), getFixturePath('second.yml'), 'plain'))
    .toBe(getData('expectedPlain.txt'));
});

test('yml big json', () => {
  expect(genDiff(getFixturePath('first.yml'), getFixturePath('second.yml'), 'json'))
    .toBe(getData('expectedJSON.txt'));
});
