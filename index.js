/* Powtóreczka :D
const { readFile, writeFile } = require('fs').promises;
const FILE_NAME = './src/Hello World.txt';
(async () => {
  try {
    await writeFile(FILE_NAME, '10', 'utf8');
    console.log('File Saved!');
  } catch (e) {
    console.log('problem', e);
  }
})();

(async () => {
  try {
    const getNumber = Number(await readFile(FILE_NAME, 'utf8'));
    console.log (getNumber * 20);
  } catch (err) {
    console.log('Oh no, there is an error!', err);
  }
})();
*/

const { readdir, stat } = require('fs').promises;

(async () => {
  try {
    const fileNames = await readdir(`.`);

    console.log(fileNames);
    for (const fileName of fileNames) {
      const fileStat = await stat(fileName);
      console.log(fileStat);
      console.log(fileStat.isFile());
    }
  } catch (e) {
    return e;
  }
})();



