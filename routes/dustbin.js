const express = require('express');
const router = express.Router();

const Dustbin = require('../models/dustbin');

router.get("/", (req, res) => {
    res.render('./dustbin/dust-dash');
})

router.get("/1", (req, res) => {
    res.render('./dustbin/dustbin1');
});

router.get("/2", (req, res) => {
    res.render('./dustbin/dustbin2');
});

module.exports = router;