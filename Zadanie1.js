const { readFile, writeFile } = require('fs').promises;
const FILE_NAME1 = './src/input1.json';
const FILE_NAME2 = './src/sum.txt';

(async () => {
  try {
    const getData = await readFile(FILE_NAME1, 'utf8');
    const parsedData = JSON.parse(getData);
    const sum = parsedData.reduce((prev, curr) => {
      const result = prev + curr;
      return result;
    }, 0);
    console.log(`The sum of all numbers from input1.json are equal to ${sum}`);git
    const stringedSum = sum.toString();
    console.log(`\n${typeof sum}`);
    const save = await writeFile(FILE_NAME2, stringedSum, 'utf8');
    // eslint-disable-next-line no-useless-concat
    console.log('\n' + 'File saved!');
  } catch (err) {
    console.log('Problem! ERROR!', err);
  }
})();
