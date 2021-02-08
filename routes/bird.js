const express = require('express')
const router = express.Router()
const db = require('../components/db')
const layout = require('../components/layout')
const table = require('../components/table')
const quiz = require('../components/quiz')
const quizSelect = require('../components/quizSelect')
const quizSubmit = require('../components/quizSubmit')

router.get('/', function (req, res) {
  db.query('SELECT * FROM bird_info', (err, birdInfo) => {
        res.send(layout(table.bird(birdInfo)));
    })
})

router.get('/quizSelect', function (req, res) {
  db.query('SELECT * FROM bird_info', (err, birdInfo) => {
        res.send(layout(quizSelect.bird(birdInfo)));
  })
})

router.post('/quiz', function (req, res) {
  db.query('SELECT * FROM bird_info', (err, birdInfo) => {
    res.send(layout(quiz.bird(birdInfo, req.body.selected)));
  })
})

router.post('/quizSubmit', function (req, res) {
  const quizItems = JSON.parse(req.body.quizItems);
  db.query('UPDATE statistics set birdPhoto = birdPhoto+1 WHERE id=0', () => { });
  db.query('UPDATE bird_info SET selected = selected+1 WHERE id IN (?)', [quizItems], () => {});
  db.query('SELECT * FROM bird_info', (err, birdInfo) => {
    res.send(layout(quizSubmit.bird(birdInfo, req.body.quizItems, req.body.submittedAnswers)));
  })
  
})

router.get('/sound/quizSelect', function (req, res) {
  db.query('SELECT * FROM bird_info', (err, birdInfo) => {
    res.send(layout(quizSelect.birdSound(birdInfo)));
  })
})

router.post('/sound/quiz', function (req, res) {
  db.query('SELECT * FROM bird_info', (err, birdInfo) => {
    res.send(layout(quiz.birdSound(birdInfo, req.body.selected)));
  })
})

router.post('/sound/quizSubmit', function (req, res) {
  const quizItems = JSON.parse(req.body.quizItems);
  db.query('UPDATE bird_info SET selected = selected+1 WHERE id IN (?)', [quizItems], () => { });
  db.query('UPDATE statistics set birdSound = birdSound+1 WHERE id=0', () => {})
  db.query('SELECT * FROM bird_info', (err, birdInfo) => {
    res.send(layout(quizSubmit.birdSound(birdInfo, req.body.quizItems, req.body.submittedAnswers)));
  })
})

module.exports = router