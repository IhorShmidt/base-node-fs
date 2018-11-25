"use strict";

const fs = require('fs');
const constants = require('./constants');

module.exports = moveFiles;

function moveFiles(files) {
    // fs.rename(oldPath, newPath, callback)
    const promises = files.map((item) => _moveHelper(item));

    return Promise.all(promises, (result) => {
        console.log('Done');
    });
}

function _moveHelper(file) {
    // fs.rename(oldPath, newPath, callback)
    return new Promise((resolve) => {

        // './trash/ksd.txt' - origin
        // './duplicates/ksd.txt' - target

        const basePath = `./${constants.DIR_ORIGIN}/${file}`;
        const targetPath = `./${constants.DIR_PATH_DUPLICATES}/${file}`;

        fs.rename(basePath, targetPath, (err, result) => {
            if (err) {
                console.log('Error moving file: ', file)
            }
            console.log('Moved file: ', file);

            return resolve();
        });
    });
}
