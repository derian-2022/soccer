const express = require('express');
const { createSoccerPlayer } = require('../controller/player.controller');


const router = express.Router();


router
.post("/", createSoccerPlayer),




module.exports = router