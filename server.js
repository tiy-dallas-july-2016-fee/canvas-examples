var express = require('express');
var app = express();

app.use(express.static('public'));


app.listen(8123, function() {
    console.log('listening on 8123');
});
