var express  =  require("express");
var path = require('path');
var route = require('./routes/flickr.routes')
var app     =     express();

route(app);

// Setting the app router and static folder
app.use(express.static(path.resolve('../client/dist/flickr')));

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client/dist/flickr', 'index.html'));
});

app.listen(3000,function(){
    console.log("Listening on 3000");
});
