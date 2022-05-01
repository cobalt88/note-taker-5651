const fs = require('fs');
const express = require('express');
const PORT = process.env.port || 3000;
const path = require('path');
const req = require('express/lib/request');
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('db'));
app.use(express.static('routes'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})