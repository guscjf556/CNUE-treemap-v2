const express = require('express')
const app = express()
const db = require('./components/db')
const bodyParser = require('body-parser')
const layout = require('./components/layout')
const map = require('./components/map')
const leaf = require('./routes/leaf')
const bird = require('./routes/bird')
const stat = require('./components/stat')
const table = require('./components/table')
const quiz = require('./components/quiz')
const quizSelect = require('./components/quizSelect')
const quizSubmit = require('./components/quizSubmit')
const info = require('./components/info')
const fs = require('fs')

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/chartjs', express.static('node_modules/chart.js/dist'))
app.use(express.static('sprites'))
app.use(express.static('css'))

app.get('/', function(req, res){
  db.query('SELECT * FROM tree_positions AS position LEFT JOIN tree_info AS info ON position.id= info.id',
    function (err, treeData) {
      db.query('SELECT * FROM tree_info', (err, treeInfo) => {
        const treeInfo_array = JSON.stringify(treeInfo);
        const treeData_array = JSON.stringify(treeData);
        res.send(layout(map(treeData_array, treeInfo_array)));
      })
  });
  db.query('UPDATE statistics set visit = visit+1 WHERE id=0', (err) => {
    if (err) throw err;
  });
})

app.get('/info', (req, res) => {
  db.query('SELECT visit FROM statistics WHERE id=0', (err, result) => {
    if (err) throw err;
    const total = result[0];
    res.send(layout(info(total)));
  })
})

app.get('/stat', (req, res) => {
  db.query('SELECT * FROM tree_info', (err, treeInfo) => {
    if (err) throw err;
    db.query('SELECT * FROM bird_info', (err, birdInfo) => {
      if (err) throw err;
      db.query('SELECT leaf, birdSound, birdPhoto FROM statistics WHERE id=0', (err, result) => {
        if (err) throw err;
        const total = result[0];
        res.send(layout(stat(treeInfo, birdInfo, total)));
      }); 
    });
  });
})

app.use('/leaf', leaf)
app.use('/bird', bird)

app.listen(4000, () => {})