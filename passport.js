const passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth20').Strategy,
    keys = require('./keys'),
    LocalStrategy = require('passport-local').Strategy,
    Models = require('./models.js'),
    passportJWT = require('passport-jwt');

let Users = Models.User,
    JWTStrategy = passportJWT.Strategy,
    ExtractJWT = passportJWT.ExtractJwt;

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

passport.use(
    new GoogleStrategy(
        {
            // options for google strategy
            clientID: keys.google.clientID,
            clientSecret: keys.google.clientSecret,
            callbackURL: '/auth/google/redirect'
        },
        (accessToken, refreshToken, profile, done) => {
            // check if user already exists in our own db
            User.findOne({ googleId: profile.id }).then((currentUser) => {
                if (currentUser) {
                    // already have this user
                    console.log('user is: ', currentUser);
                    done(null, currentUser);
                } else {
                    // if not, create user in our db
                    new User({
                        googleId: profile.id,
                        username: profile.displayName
                    })
                        .save()
                        .then((newUser) => {
                            console.log('created new user: ', newUser);
                            done(null, newUser);
                        });
                }
            });
        }
    )
);
