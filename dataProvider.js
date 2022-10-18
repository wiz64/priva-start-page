// get data from assets index.json file and convert it to a javascript object

const fs = require('fs')

function readJSONFile(filename) {
    return JSON.parse(fs.readFileSync(filename, 'utf8'))
}

const path = require('path')

function readData(filename) {
    try {
        return readJSONFile(path.join(__dirname, 'assets', filename))
    }
    catch (err) { console.log(" -- X -- Error reading json file: " + filename+"\n Is json data valid ?") }
}

function readconfig() {
    try {
    config_obj = readJSONFile(path.join(__dirname, 'config.json'))
    // if a config file is found in assets folder, merge its contents with the default config
    if (fs.existsSync(path.join(__dirname, 'assets', 'config.json'))) {
        config_obj = Object.assign(config_obj, readJSONFile(path.join(__dirname, 'assets', 'config.json')))
    }
    return config_obj;
    } catch(err) { console.log(" -- X -- Failed to read config.json file..."); exit(); }
}



 module.exports.data = readData;
 module.exports.config = readconfig();