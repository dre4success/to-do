const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const todoRoutes = require('./routes/todos');


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.use('/api/todos', todoRoutes);

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`APP IS RUNNING ON PORT ${PORT}`)
});