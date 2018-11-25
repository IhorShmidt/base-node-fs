"use strict";

const DIR_PATH_DUPLICATES = 'duplicates';
const DIR_ORIGIN = 'trash';

/*

1. find target folder
2. read all documents
3. find each document where word 'copy' is present
4. move founded files to new folder
  - if no folder, create new with name 'duplicates'

*/

const fs = require('fs');

function start() {
    return Promise.resolve()
        .then(() => findFolder(`./${DIR_PATH_DUPLICATES}`))
        .then(() => {
            return readDirectoryAndReturnValue()
        })
        .then((files) => findCopies(files))
        .then((copies) => {
            return moveFiles(copies)
        });
}

function findFolder(path) {
    return new Promise((resolve) => {
        if (!fs.existsSync(path)) {
            // create folder
            // fs.mkdir(path[, options], callback)
            return new Promise((resolve) => {
                fs.mkdir(path, function (err) {
                    if (err) {
                        console.log('error ocured', err)
                    }
                    console.log('Folder created.');
                    return resolve();
                })
            })

        } else {
            console.log('Folder already present');
            return resolve();
        }

    })
}

function readDirectoryAndReturnValue() {
    // fs.readFile(path[, options], callback)

    return new Promise((resolve) => {
        fs.readdir(DIR_ORIGIN, function (err, result) {
            if (err) {
                console.log('Error occured while reading file')
                console.log(err)
            }

            return resolve(result);

        })
    })
}

function findCopies(documents) {
    return documents.filter(function (item) {
        // is copy word present
        if (item.includes('copy)')) {
            return true;
        } else {
            // skip
            return false;
        }
    });
}

function moveFiles(files) {
    // fs.rename(oldPath, newPath, callback)
    // return new Promise((resolve))
    const promises = files.map(function (item) {
        return moveHelper(item);
    });

    return Promise.all(promises, function (result) {
        console.log('-----------------------');
        console.log(result);
        console.log('-----------------------');
    });

}

function moveHelper(file) {
    // fs.rename(oldPath, newPath, callback)
    return new Promise((resolve) => {

        // './trash/ksd.txt' - origin
        // './duplicates/ksd.txt' - target

        const basePath = `./${DIR_ORIGIN}/${file}`;
        const targetPath = `./${DIR_PATH_DUPLICATES}/${file}`;

        fs.rename(basePath, targetPath, function (err, result) {
            if (err) {
                console.log('Error moving file: ', file)
            }
            console.log('Moved file: ', file);

            return resolve();
        })
    })
}

start();


