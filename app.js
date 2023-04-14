const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const routerPlayer = require('./routes/soccerPlayer.router');

const app = express()
app.use(express.json());

app.use("/api/v1/soccerplayers", routerPlayer )

module.exports = app
