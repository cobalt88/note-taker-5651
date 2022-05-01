const fs = require('fs');
const express = require('express');
const PORT = 3009;
const app = express();
const routes = require("./routes/routes");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('db'));
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});