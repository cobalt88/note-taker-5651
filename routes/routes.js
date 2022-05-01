const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const note = require('../db/db.json');




router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/api/notes', (req, res) => {
  res.send
  console.log('/api/notes get')
});

router.post('/api/notes', (req, res) => {
  res.send
  console.log('/api/notes post')
})

router.delete('/api/notes', (req, res) => {
  res.send
  console.log('/api/notes delete')
})

module.exports = router;