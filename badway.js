
if (!fs.existsSync(path)) {
    // create folder
    // fs.mkdir(path[, options], callback)
    fs.mkdir(path, function (err) {
        if (err) {
            console.log('error ocured', err)
        }
        console.log('Folder created.');
    })
}



    fs.readdir(DIR_ORIGIN, function (err, result) {
        if (err) {
            console.log('Error occured while reading file')
            console.log(err)
        }


    })


function start() {
    if (!fs.existsSync(path)) {
        // create folder
        // fs.mkdir(path[, options], callback)
        fs.mkdir(path, function (err) {
            if (err) {
                console.log('error ocured', err)
            }
            console.log('Folder created.');

            readDir(function(result) {

            })


        })
    } else {
        console.log('Folder already present');

    }
}


function readDir(cb) {
    fs.readdir(DIR_ORIGIN, function (err, result) {
        if (err) {
            console.log('Error occured while reading file')
            console.log(err)
        }
        cb(result)
    })
}