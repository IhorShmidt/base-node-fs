"use strict";

module.exports = function (documents) {
    return documents.filter(function (item) {
        // is copy word present
        if (item.includes('copy)')) {
            return true;
        } else {
            // skip
            return false;
        }
    });
};
