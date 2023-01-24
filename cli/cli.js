import fs from 'fs';
import sortkeybyABC from '../src/sort.js';

function doDiff(file1, file2) {
  let diffreslt = '{\n';
  // console.log('{');
  const json1 = sortkeybyABC(JSON.parse(fs.readFileSync(file1, 'utf8')));
  const json2 = sortkeybyABC(JSON.parse(fs.readFileSync(file2, 'utf8')));
  Object.keys(json1).forEach((key) => {
    if (json1[key] === json2[key]) diffreslt +=`  ${key}: ${json1[key]}\n`;
    else {
      diffreslt += `- ${key}: ${json1[key]}\n`;
      if (json2[key]) diffreslt += `+ ${key}: ${json2[key]}\n`;
    }
  });
  Object.keys(json2).forEach((key) => {
    if (!json1.hasOwnProperty(key)) diffreslt += `+ ${key}: ${json2[key]}\n`;
  });
  diffreslt += '}';
  console.log(diffreslt)
  return diffreslt
}

export default doDiff;
