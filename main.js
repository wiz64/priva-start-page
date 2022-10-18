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