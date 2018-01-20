const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ctrl = require('./savedSearches');
app.use(bodyParser.json());


app.post('/api/newsearch', ctrl.create);

app.get('/api/sectors', ctrl.read);




let port=3030;
app.listen(port, ()=> {
    console.log("Server listening on port:" +port);
});