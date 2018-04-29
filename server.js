const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'src/static')));
app.use(express.static(path.join(__dirname, 'dist')));

app.all('*', (req, res) => {
  res.render('index.html');
});

app.listen(3000, () => console.log('App on port 3000'));