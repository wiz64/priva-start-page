// expresss server
const express = require('express');
const app = express();

function start(port) {
// serve the public_html folder
app.use(express.static('public_html'));
// start server
app.listen(port, () => console.log(`Priva Web Server is listening on port ${port}!`));
}
//start(8000)
module.exports.start = start;