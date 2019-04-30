const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator/check');

const User = require('../../models/user')

// @route   GET api/users @desc    Test route @access  Public
router.post('/', [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({
                errors: errors.array()
            });
    }

    const {name, email, password} = req.body;

    try {
        // See if the user exists
        let user = await User.findOne({email});
        if (user) {
            return res
                .status(400)
                .json({
                    errors: [
                        {
                            msg: 'User already exists'
                        }
                    ]
                });
        }

        // Get users gravatar (based on email)

        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });

        // creates a new user
        user = new User({name, email, avatar, password});
        // Encrypt password using bcrypt
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        // save user to database
        await user.save();

        // Return jsonwebtoken - for user to be logged in right away
        res.send('User registered')
    } catch (err) {
        console.error(err.message);
        res
            .status(500)
            .send('Server error');
    }

});

module.exports = router;