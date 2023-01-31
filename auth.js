const jwtSecret = 'your_jwt_secret'; // This has to be the same key used in the JWTStrategy

const jwt = require('jsonwebtoken'),
    passport = require('passport');

/* const express = require('express'); */
/* const router = express.Router(); */

require('./passport'); // local passport file

/**
 * Creates JWT (expiring in 7 days, using HS256 algorithm to encode)
 * @param {object} user
 * @returns user object, jwt, and additional information on token
 * @function generateJWTToken
 */
let generateJWTToken = (user) => {
    return jwt.sign(user, jwtSecret, {
        subject: user.Username, // This is the username your're encoding in the JWT
        expiresIn: '7d', // This specifies that the token will expire in 7 days
        algorithm: 'HS256' // This is the algorithm used to "sign" or encode the values of the JWT
    });
};

// POST login.
/**
 * Handles user login, generating a JWT upon login
 * Request body: A JSON object holding Username and Password.
 * @name postLogin
 * @kind function
 * @param router
 * @returns A JSON object holding the user object and JWT
 * @requires passport
 */
module.exports = (router) => {
    router.post('/login', (req, res) => {
        passport.authenticate('local', { session: false }, (error, user) => {
            if (error || !user) {
                return res.status(400).json({
                    error,
                    message: 'Something is not right',
                    user: user
                });
            }
            req.login(user, { session: false }, (error) => {
                if (error) {
                    res.send(error);
                }
                let token = generateJWTToken(user.toJSON());
                return res.json({ user, token });
            });
        })(req, res);
    });
};
