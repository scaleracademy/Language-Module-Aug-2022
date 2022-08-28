const fs = require('fs');

/**
 * create a file sorted.txt will all the numbers from 1.txt, 2.txt and 3.txt
 * combined and sorted. 
 * 
 * Eg. if 1.txt has 3, 12 , 14 
 *        2.txt has 6, 23, 11
 * 
 * Then sorted.txt should have 3, 6, 11, 12, 14, 23
 * 
 * NOTE: You can NOT use readFileSync or writeFileSync 
 */

const getFilePath = fileName => __dirname + `/${fileName}`;
const writeFileAsync = (fileName, data) => new Promise((resolve, reject) => {
  fs.writeFile(getFilePath(fileName), data, err => err ? reject(err) : resolve(true));
});
const readFileAsync = fileName => new Promise((resolve, reject) => {
  fs.readFile(getFilePath(fileName), (err, data) => err ? reject(err) : resolve(data.toString()));
});

const splitByNewline = str => str.split('\n').map(el => Number(el));
const OUTPUT_FILE = 'sorted.txt';
const FILES = ['1.txt', '2.txt', '3.txt'];
const sortElementsInFiles = async () => {
  const fileOneData = splitByNewline(await readFileAsync(FILES[0]));
  const fileTwoData = splitByNewline(await readFileAsync(FILES[1]));
  const fileThreeData = splitByNewline(await readFileAsync(FILES[2]));
  const allFilesDataSorted = [...fileOneData, ...fileTwoData, ...fileThreeData].sort((a, b) => a - b);
  const outputString = allFilesDataSorted.reduce((acc, currVal) => acc + currVal +'\n', '');
  await writeFileAsync(OUTPUT_FILE, outputString);
};

(async () => await sortElementsInFiles())();
