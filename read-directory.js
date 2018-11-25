"use strict";

const constants = require('./constants');
const fs = require('fs');

module.exports = function () {
    // fs.readFile(path[, options], callback)

    return new Promise((resolve) => {
        fs.readdir(constants.DIR_ORIGIN, function (err, result) {
            if (err) {
                console.log('Error occured while reading file');
                console.log(err)
            }

            return resolve(result);

        });
    });
};
