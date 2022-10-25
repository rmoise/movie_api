const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    Models = require('./models.js'),
    passportJWT = require('passport-jwt');

let Users = Models.User,
    JWTStrategy = passportJWT.Strategy,
    ExtractJWT = passportJWT.ExtractJwt;

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { keys } = require('lodash');
const mongoose = require('mongoose');
const User = require('./models.js');
const keys = require('./keys');

module.exports = function (passport) {
    passport.use(
        new GoogleStrategy(
            {
                clientID: keys.google.clientID,
                clientSecret: keys.google.clientSecret,
                callbackURL: '/auth/google/callback'
            },
            async (accessToken, refreshToken, profile, done) => {
                const newUser = {
                    googleId: profile.id,
                    displayName: profile.displayName,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    image: profile.photos[0].value
                };

                try {
                    let user = await User.findOne({ googleId: profile.id });

                    if (user) {
                        done(null, user);
                    } else {
                        user = await User.create(newUser);
                        done(null, user);
                    }
                } catch (err) {
                    console.error(err);
                }
            }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user));
    });
};

passport.use(
    new LocalStrategy(
        {
            usernameField: 'Username',
            passwordField: 'Password'
        },
        (username, password, callback) => {
            console.log(username + ' ' + password);
            Users.findOne({ Username: username }, (error, user) => {
                if (error) {
                    console.log(error);
                    return callback(error);
                }

                if (!user) {
                    console.log('incorrect username');
                    return callback(null, false, { message: 'Incorrect username or password.' });
                }

                if (!user.validatePassword(password)) {
                    console.log('incorrect password');
                    return callback(null, false, { message: 'Incorrect password.' });
                }

                console.log('finished');
                return callback(null, user);
            });
        }
    )
);

passport.use(
    new JWTStrategy(
        {
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'your_jwt_secret'
        },
        (jwtPayload, callback) => {
            return Users.findById(jwtPayload._id)
                .then((user) => {
                    return callback(null, user);
                })
                .catch((error) => {
                    return callback(error);
                });
        }
    )
);
