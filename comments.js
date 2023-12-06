// Create web server

// Import express
const express = require('express');

// Import path
const path = require('path');

// Import body-parser
const bodyParser = require('body-parser');

// Import mongoose
const mongoose = require('mongoose');

// Import model
const Comment = require('../models/comment');

// Create router
const router = express.Router();

// Body parser
router.use(bodyParser.urlencoded({ extended: false }));

// Connect to mongoose
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });

// Get all comments
router.get('/', (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) res.status(500).send(err);
        res.send(comments);
    });
});

// Add comment
router.post('/', (req, res) => {
    const comment = new Comment({