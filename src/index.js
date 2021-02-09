const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// const router = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}));
app.use(cors());

// app.use('/', router);

app.listen(PORT, () => {
	console.log(`Server Listening on ${PORT}`);
});