const express = require('express')
const router = express.Router()
const db = require('../components/db')
const layout = require('../components/layout')
const table = require('../components/table')
const quiz = require('../components/quiz')
const quizSelect = require('../components/quizSelect')
const quizSubmit = require('../components/quizSubmit')

router.get('/', function(req, res){
    db.query('SELECT * FROM tree_info', (err, treeInfo) => {
        res.send(layout(table.leaf(treeInfo)));
    })
})

router.get('/quizSelect', function(req, res){
    db.query('SELECT * FROM tree_info', (err, treeInfo) => {
        res.send(layout(quizSelect.leaf(treeInfo)));
    })
})

router.post('/quiz', function(req,res){
    db.query('SELECT * FROM tree_info', (err, treeInfo) => {
        res.send(layout(quiz.leaf(treeInfo, req.body.selected)));
    })
})

router.post('/quizSubmit', function (req, res) {
  const quizItems = JSON.parse(req.body.quizItems);
  db.query('UPDATE statistics SET leaf = leaf+1 WHERE id=0', () => { })
  db.query('UPDATE tree_info SET selected = selected+1 WHERE id IN (?)', [quizItems], () => {});
  db.query('SELECT * FROM tree_info', (err, treeInfo) => {
    res.send(layout(quizSubmit.leaf(treeInfo, quizItems, req.body.submittedAnswers)));
  })
})

module.exports = router