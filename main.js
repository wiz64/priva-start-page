console.log(" ---- Initializing ----");
// import modules
const webserver = require('./webserver');
const compiler = require('./compiler');
// get config
console.log(" ---- Loading config ----");
const config = compiler.config();
console.log(config);

// compile all pages in assets folder to public_html
compiler.compileAll();

console.log(" ---- Starting webserver ----");
// start webserver
webserver.start(config.port);
const chokidar = require('chokidar');

const sleep = ms => new Promise(res => setTimeout(res, ms));

// One-liner for current directory
async function watch() {
await sleep(3000);
chokidar.watch('./assets').on('all', (event, path) => {
    compiler.compileAll();
});
}
watch()

