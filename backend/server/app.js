const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const dbConfig = require("./config/database.config");
const app = express()
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());

mongoose.connect(dbConfig.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((established) => {
    console.log('MongoDB connection established');
}).catch((err) => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.status(200).send('Successfully Working!');
})

require('./routes/auth')(app);
require('./routes/product')(app);

app.listen(PORT, () => {
    console.log(`app listining on port ${PORT}`)
});