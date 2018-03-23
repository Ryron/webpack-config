const fs = require('fs')
function getEntries(path) {
    console.log(path);
    let test = /(.*)\.js$/;
    let entries = {};
    fs.readdirSync(path).forEach((file) => {
        let t;
        if ((t = test.exec(file)) !== null) {
            entries[t[1]] = `${path}/${file}`;
        }
    })
    return entries;
}

module.exports = getEntries;
