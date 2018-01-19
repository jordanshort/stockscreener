const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ctrl = require('./savedSearches');
app.use(bodyParser.json());


app.post('/api/newsearch', ctrl.create)


let port=3030
app.listen(port, ()=> {
    console.log("Server listening on port:" +port);
});