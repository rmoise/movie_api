const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    uuid = require('uuid');

app.use(bodyParser.json());

let users = [
    {
        id: 1,
        name: 'Kim',
        favoriteMovies: []
    },
    {
        id: 2,
        name: 'Joe',
        favoriteMovies: ['Fight Club']
    }
];

let movies = [
    {
        Title: 'Fight Club',
        Description: 'Lorem ipsum.',
        Genre: {
            Name: 'Drama',
            Description:
                'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.'
        },
        Director: {
            Name: 'David Fincher',
            Bio: 'David Fincher was born in 1962 in Denver, Colorado, and was raised in Marin County, California. When he was 18 years old he went to work for John Korty at Korty Films in Mill Valley. He subsequently worked at ILM (Industrial Light and Magic) from 1981-1983. Fincher left ILM to direct TV commercials and music videos after signing with N. Lee Lacy',
            Birth: 1962
        },
        ImageURL: 'https://via.placeholder.com/',
        Featured: false
    },
    {
        Title: 'Pulp Fiction'
    },
    {
        Title: 'There Will Be Blood'
    },
    {
        Title: 'The Lighthouse'
    },
    {
        Title: 'Good Time'
    },
    {
        Title: 'American Psycho'
    },
    {
        Title: 'The Joker'
    },
    {
        Title: 'Scarface'
    },
    {
        Title: "Pan's Labyrinth"
    },
    {
        Title: 'Inglourious Basterds'
    }
];

// CREATE
app.post('/users', (req, res) => {
    const newUser = req.body;

    if (newUser.name) {
        newUser.id = uuid.v4();
        users.push(newUser);
        res.status(201).json(newUser);
    } else {
        res.status(400).send('users need names');
    }
});

// UPDATE
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;

    let user = users.find((user) => user.id == id);

    if (user) {
        user.name = updatedUser.name;
        res.status(200).json(user);
    } else {
        res.status(400).send('no such user');
    }
});

// CREATE
app.post('/users/:id/:movieTitle', (req, res) => {
    const { id, movieTitle } = req.params;

    let user = users.find((user) => user.id == id);

    if (user) {
        user.favoriteMovies.push(movieTitle);
        res.status(200).send(`${movieTitle} has been added to user ${id}'s array`);
    } else {
        res.status(400).send('no such user');
    }
});

// DELETE
app.delete('/users/:id/:movieTitle', (req, res) => {
    const { id, movieTitle } = req.params;

    let user = users.find((user) => user.id == id);

    if (user) {
        user.favoriteMovies = user.favoriteMovies.filter((title) => title !== movieTitle);
        res.status(200).send(`${movieTitle} has been removed from user ${id}'s array`);
    } else {
        res.status(400).send('no such user');
    }
});

// DELETE
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    let user = users.find((user) => user.id == id);

    if (user) {
        users = users.filter((user) => user.id != id);
        res.status(200).send(`user ${id} has been deleted`);
    } else {
        res.status(400).send('no such user');
    }
});

// READ
app.get('/movies', (req, res) => {
    res.status(200).json(movies);
});

// READ
app.get('/movies/:title', (req, res) => {
    const { title } = req.params;
    const movie = movies.find((movie) => movie.Title === title);

    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(400).send('no such movie');
    }
});

// READ
app.get('/movies/genre/:genreName', (req, res) => {
    const { genreName } = req.params;
    const genre = movies.find((movie) => movie.Genre.Name === genreName).Genre;

    if (genre) {
        res.status(200).json(genre);
    } else {
        res.status(400).send('no such genre');
    }
});

// READ
app.get('/movies/directors/:directorName', (req, res) => {
    const { directorName } = req.params;
    const director = movies.find((movie) => movie.Director.Name === directorName).Director;

    if (director) {
        res.status(200).json(director);
    } else {
        res.status(400).send('no such director');
    }
});

app.listen(8080, () => console.log('listening on 8080'));
