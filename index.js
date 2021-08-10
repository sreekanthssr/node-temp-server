const express = require('express');
const app = express();
const port = 3000;

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});

app.get('/county', (req, res) => {
  res.send({status : 200, message: 'Success', data:[
    {id: 1, name: 'USA'},
    {id: 2, name: 'UK'},
    {id: 3, name: 'IND'},
    ]
  });
});
app.get('/state', (req, res) => {
  res.send({status : 200, message: 'Success', data:[
    {id: 1, name: 'USA-state 1', countyId: 1},
    {id: 2, name: 'USA-state 3', countyId: 1},
    {id: 3, name: 'USA-state 2', countyId: 1},
    {id: 4, name: 'UK-state 1', countyId: 2},
    {id: 5, name: 'UK-state 3', countyId: 2},
    {id: 6, name: 'UK-state 2', countyId: 2},
    {id: 7, name: 'IND-state 1', countyId: 3},
    {id: 8, name: 'IND-state 3', countyId: 3},
    {id: 9, name: 'IND-state 2', countyId: 3},
    ]
  })
});
app.post('/register', (req, res) => {
  console.log(req);
  res.send({status : 200, message: 'Success', data:[]})
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})