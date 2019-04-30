const express = require('express');
const router = express.Router();

// @route   POST api/posts
// @desc    Register User
// @access  Public
router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Posts route')
});

module.exports = router;