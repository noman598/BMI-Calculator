const express = require("express");
const bodyparser = require("body-parser");

// Express is a framework of Node-js. using Express, developer can save his time and writing bunch of code
// it is faster than alone NodeJS.

var app = express()

// What is used of bodyparser ? => Using bodyparser we can grab the data of the index file (i.e. input data by using the same name). This is common code for everycase.

app.use(bodyparser.urlencoded({extende: true}));


// instaed of sending html section code, can be send the whole file to the browser from the localhost.

// And to Avoid error on file path we are using "__dirname". it directly get the path No matter where is you file.

// Inside of index.html file -> Used a form with action and method -

// <form action = "/" method = Post> 

// Besically here the Post -> post method is used to send the form data to the server on (action = "/") home position.


app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
})
app.get('/bmicalculator', function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

// By Post function, if we are posting something from the index file page. So it go to the new page but with the given url and give the desire result.

app.post('/bmicalculator', function(req, res){
    
//  By using req.body.height = > it grab the data on the particular name height from the "/bmicalculator" page.Number is for making integer if the fetching data. 
    
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    var result = weight / (height * height);

    res.send("The result of BMI Calculator is "+ result);
})

app.post('/' , function(req, res){
    var num1 = ParseFloat(req.body.num1);
    var num2 = ParseFloat(req.body.num2);

    var result = num1 + num2 ;

    res.send("The result of the calculater is "+ result);
})



app.listen(3000);
