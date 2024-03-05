const express = require('express');

const app = express();
const { sequelize } = require('./models'); 

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./routes/index');
const PORT = 3000;

app.use('/', routes);

app.set('view engine', 'pug');



sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });