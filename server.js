const express = require("express");
const bodyparser = require("body-parser");


var app = express()
app.use(bodyparser.urlencoded({extende: true}));


app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
})
app.get('/bmicalculator', function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})


app.post('/bmicalculator', function(req, res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    var result = weight / height;

    res.send("The result of BMI Calculator is "+ result);
})

app.post('/' , function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2 ;

    res.send("The result of the calculater is "+ result);
})



app.listen(3000);