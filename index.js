const express = require('express'),
    morgan = require('morgan'),
    fs = require('fs'), // import built in node modules fs and path
    path = require('path');

const app = express();
// create a write stream (in append mode)
// a ‘log.txt’ file is created in root directory
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), { flags: 'a' });

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
    res.send('Welcome to my app!');
});

app.use(express.static('public'));
app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/movies', (req, res) => {
    res.json(topTenMovies);
});

let topTenMovies = [
    {
        title: 'Fight Club'
    },
    {
        title: 'Pulp Fiction'
    },
    {
        title: 'There Will Be Blood'
    },
    {
        title: 'The Lighthouse'
    },
    {
        title: 'Good Time'
    },
    {
        title: 'The Matrix'
    },
    {
        title: 'The Joker'
    },
    {
        title: 'Scarface'
    },
    {
        title: "Pan's Labyrinth"
    },
    {
        title: 'Inglourious Basterds'
    }
];

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});
