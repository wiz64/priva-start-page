const dataProvider = require('./dataProvider');
const templateProvider = require('./templateProvider');
const handlebars = require('handlebars');
const fs = require('fs');

// get config
function config() {
    return dataProvider.config;
}
function IfEndswith(string, array) {
    for (let i = 0; i < array.length; i++) {
        if (string.endsWith(array[i])) {
            return true;
        }
    }
    return false;
}

function compile(filename) {
    console.log(" - Compiling -> "+filename)
    // get data
    const defaultData = dataProvider.defaultData();
    const data = dataProvider.data(filename+'.json');
    Object.assign(data, defaultData);
    // get template
    const template = templateProvider.template(filename+'.html');
    // compile template
    const compiled = handlebars.compile(template);
    // write compiled data to public_html folder
    fs.writeFileSync('public_html/'+filename+'.html', compiled(data));
}
function compileAll() {
    console.log(" ---- Starting compilation of all pages ----")
    // get all files in assets folder
    const files = fs.readdirSync('assets');
    // filter out files that don't end with .html and also those html files that don't have a corresponding json file
    const filtered_files = files.filter(file => IfEndswith(file, ['.html']) && fs.existsSync('assets/'+file.slice(0,-5)+".json"));
    
    // create public_html folder if it doesn't exist
    if (!fs.existsSync('public_html')) {
        fs.mkdirSync('public_html');
    }

    // compile each file
    filtered_files.forEach(file => {
        compile(file.slice(0, -5));
    });
}

module.exports.compileAll = compileAll;
module.exports.config = config;