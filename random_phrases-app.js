/*
Create an app that has two web servers.
One that listens on port 7000 and one that listens on port 7500.
The one listening on port 7000 will always tell the user something good about themselves.
The one listening on 7500 will always tell the user something bad about themselves.
Make sure you create a Github repo and commit this code!
** Bonus **

Generate the good / bad phrase randomly from a list of predefined phrases
Use the twitter package inside the response to also return a random tweet!
*/

var http = require('http');
var GOODPORT = 7000;
var BADPORT = 7500;

var niceThings = ["another nice thing", "You have a great smile", "You're the man", "It's your birthday"];
var badThings = ["your code is stinky", "your code is non performant", "your code is not DRY"];

var getRandomItem = function(itemArray){
    var size = itemArray.length;
    var index = Math.floor(Math.random() * size);

    return itemArray[index];
}

// Starting goodServer
var goodServer = http.createServer(function(req, res){
    res.end(getRandomItem(niceThings));
});

goodServer.listen(GOODPORT, function(){
    console.log("server is listening at http://localhost:%s", GOODPORT);
})

// Starting BadServer
var badServer = http.createServer(function(req, res){
    res.end(getRandomItem(badThings));
});

badServer.listen(BADPORT, function(){
    console.log("server is listening at http://localhost:%s", BADPORT);
})