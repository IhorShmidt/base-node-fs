const findFolder = require('./folder-finder');
const readDirectoryAndReturnValue = require('./read-directory');
const findCopies = require('./copies-finder');
const moveFiles = require('./move-files');

module.exports = {
    findFolder,
    readDirectoryAndReturnValue,
    findCopies,
    moveFiles
};