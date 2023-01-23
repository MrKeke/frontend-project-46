import fs from 'fs';
import _ from 'lodash';

function sortObjectByKey(obj) {
  const sorted = {};
  const keys = Object.keys(obj).sort();

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    sorted[key] = obj[key];
  }
  return sorted;
}
function doDiff(file1, file2) {
  console.log('{');
  const json1 = sortObjectByKey(JSON.parse(fs.readFileSync(file1, 'utf8')));
  const json2 = sortObjectByKey(JSON.parse(fs.readFileSync(file2, 'utf8')));
  Object.keys(json1).forEach((key) => {
    if (_.isEqual(json1[key], json2[key])) console.log(`  ${key}: ${json1[key]}`);
    else {
      console.log(`- ${key}: ${json1[key]}`);
      if (!_.isUndefined(json2[key])) console.log(`+ ${key}: ${json2[key]}`);
    }
  });
  Object.keys(json2).forEach((key) => {
    if (!json1.hasOwnProperty(key)) console.log(`+ ${key}: ${json2[key]}`);
  });
  console.log('}');
}

export default doDiff;
