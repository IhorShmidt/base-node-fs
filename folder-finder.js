"use strict";
const fs = require('fs');

module.exports = function findFolder(path) {
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
    });
};
