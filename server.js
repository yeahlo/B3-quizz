const express = require('express');
const app = express();
const fs = require('fs');
const fsp = require("fs").promises;
const cors = require('cors');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(cors());

app.get('/', function(req, res) {
    res.send('<h1>QUIZZ</h1> GET /api/quizz/:id POST /api/save');
});

app.post('/api/save', jsonParser,function(req, res) {
    let id = Date.now();
    fsp.writeFile('tmp/' + id + '.json',JSON.stringify(req.body))
        .then(value => {
            res.json({
                error : 0,
                id : id
            });
        })
        .catch(reason => {
            res.json({
                error : 500,
                id : id
            });
        });

});

app.get('/api/quizz/:id', function (req, res) {
    fs.readFile('tmp/' + req.params.id + '.json', (err, data) => {
        if (err) {
            res.json({error : 404, message : err});
        }else {
            console.log('data',data)
            res.json({error : 0, quizz : JSON.parse(data)});
        }
    });
});

app.listen(3006, function () {
    console.log('Example app listening on port 3006!')
});