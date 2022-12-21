const fs = require('fs')

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

const fileNames = ['/1.txt', '/2.txt', '/3.txt']
const arrOfPromises = []

function mergeAllIntoOne(arrs) {
    let ans = [];
    arrs.forEach(element => {
        ans = [...ans, ...element]
    });
    ans.sort((a, b) => a - b);
    return (ans);
}

fileNames.forEach(filename => {
    let promise = new Promise((resolve, reject) => {
        fs.readFile(__dirname + filename, function (err, data) {
            if (err) throw err;
            let array = data.toString().split("\n");
            var numberArray = array.map(Number);
            numberArray.sort((a, b) => a - b)
            resolve(numberArray);
        })
    })
    arrOfPromises.push(promise);
})

Promise.all(arrOfPromises).then((arrs) => {
    var file = fs.createWriteStream(__dirname + '/sorted.txt');
    file.on('error', function (err) { throw err });
    mergeAllIntoOne(arrs).forEach(function (v) { file.write(v + '\n'); });
    file.end();
})
