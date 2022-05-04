const express = require('express');
const PORT = process.envPORT || 3009;
const app = express();
const routes = require("./routes/routes.js");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use('/', routes);
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});