"use strict";

const TARGET_FILE_NAME = 'ksd.txt';
const fs = require('fs');

function start() {
    return Promise.resolve()
        .then(() => {
            return readFile()
        })
}


function readFile() {
    // fs.readFile ( path, [ optional, e.g. encoding utf-8]
    // fs.readFile('./trash/' + TARGET_FILE_NAME, {encoding: 'utf-8'}, function (err, res) {
    fs.readFile('./trash/' + TARGET_FILE_NAME, function (err, res) {
        if (err) {
            console.log(
                'err', err
            )
        }


        console.log('-----------------------')
        console.log(res.toString())
    })
}

function getStats() {

    return new Promise((resolve) => {
        fs.stat('./trash/' + TARGET_FILE_NAME, function(err, data) {
            if (err) {
                console.log('err: ', err)
            }
            console.log(data)
        })
    })
}

// start()

getStats()