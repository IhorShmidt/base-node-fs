"use strict";

const constants = require('./constants');
const utils = require('./util');
// const

/*

1. find target folder
2. read all documents
3. find each document where word 'copy' is present
4. move founded files to new folder
  - if no folder, create new with name 'duplicates'

*/


function start() {
    return Promise.resolve()
        .then(() => utils.findFolder(`./${constants.DIR_PATH_DUPLICATES}`))
        .then(() => utils.readDirectoryAndReturnValue())
        .then((files) => utils.findCopies(files))
        .then((copies) => utils.moveFiles(copies))
        .then(() => {
            console.log('Task has finished!')
        });
}





start();


