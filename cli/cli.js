import fs from 'fs';
import sortkeybyABC from '../src/sort.js';

function doDiff(file1, file2) {
  console.log('{');
  const json1 = sortkeybyABC(JSON.parse(fs.readFileSync(file1, 'utf8')));
  const json2 = sortkeybyABC(JSON.parse(fs.readFileSync(file2, 'utf8')));
  Object.keys(json1).forEach((key) => {
    if (json1[key] === json2[key]) console.log(`  ${key}: ${json1[key]}`);
    else {
      console.log(`- ${key}: ${json1[key]}`);
      if (json2[key]) console.log(`+ ${key}: ${json2[key]}`);
    }
  });
  Object.keys(json2).forEach((key) => {
    if (!json1.hasOwnProperty(key)) console.log(`+ ${key}: ${json2[key]}`);
  });
  console.log('}');
}

export default doDiff;
