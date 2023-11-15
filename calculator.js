const express = require('express');
const app = express();
const bodyPaser = require('body-parser');

app.use(bodyPaser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.sendFile(__dirname+"/index.html")
})

app.post('/', function (req, res) {
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
var result = n1 + n2;
res.send("the result is"+ result);
  })

  app.get('/bmicalculator', function (req, res) {
    res.sendFile(__dirname+"/bmiCalculator.html")
  })
  app.post('/bmicalculator', function (req, res) {
    var weight = Number(req.body.num1);
    var height = Number(req.body.num2);


    if (!isNaN(weight) && !isNaN(height)) {
        var bmi = weight / (height * height);
        res.json({ result: bmi });
      } else {
        res.status(400).json({ error: 'Invalid input' });
      }

    //console.log(weight);
//var result = n1 + n2;
//res.send("the result is"+ result);
  })

app.listen(3000,()=>{
    console.log("server running on port 3000");
})