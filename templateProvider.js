const fs = require('fs')
const path = require('path')


function readHTMLFile(filename) {
    return fs.readFileSync(filename, 'utf8')
}

function readTemplate(filename) {
    return readHTMLFile(path.join(__dirname, 'assets', filename))
}

module.exports.template = readTemplate;
