import doDiff from '../cli/cli.js';

const file1 = '/home/grafovalexandr/frontend-project-46/files/file1.json';
const file2 = '/home/grafovalexandr/frontend-project-46/files/file2.json';

// Нужный вывод при сравнение первого и второго файла
const file1andfile2 = `{
- follow: true
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;
// Нужный вывод при сравнение второго и первого файла
const file2andfile2 = `{
  host: hexlet.io
- timeout: 20
+ timeout: 50
- verbose: true
+ follow: true
+ proxy: 123.234.53.22
}`;

describe('Diff with 1 floor json files', () => {
  test('while full address && file1 to file2', () => {
    expect(doDiff(file1, file2)).toBe(file1andfile2);
  });

  test('while full address && file1 to file2', () => {
      expect(doDiff(file2, file1)).toEqual(file2andfile2);
  });
//   test('while full address && file1 to file2', () => {
//     expect(doDiff(file2, file1)).toEqual(file2andfile2);
// });
//   test('while full address && file1 to file2', () => {
//     expect(doDiff(file2, file1)).toEqual(file2andfile2);
// });
});

