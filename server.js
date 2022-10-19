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
        Description:
            'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
        Genre: {
            Name: 'Drama',
            Description:
                "The drama genre features stories with high stakes and many conflicts. They're plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters."
        },
        Director: {
            Name: 'David Fincher',
            Bio: 'David Andrew Leo Fincher is an American film director. His films, mostly psychological thrillers and biographical dramas, have received 40 nominations at the Academy Awards, including three for him as Best Director.',
            Birth: 1962
        },
        ImageURL: 'https://www.themoviedb.org/t/p/w1280/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
        Featured: false
    },
    {
        Title: 'Pulp Fiction',
        Description:
            'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        Genre: {
            Name: 'Crime',
            Description:
                'A crime film is a type of film focusing on the lives of criminals. The stylistic approach ranges from grittily realistic portrayals of real-life criminal figures (crime drama) to the far-fetched evil doings of imaginary arch-villains (master criminal films.) Criminal acts are almost always glorified in these movies.'
        },
        Director: {
            Name: 'Quentin Tarantino',
            Bio: 'Quentin Jerome Tarantino is an American filmmaker and actor. His films are characterized by frequent references to popular culture and film genres, nonlinear storylines, dark humor, stylized violence, extended dialogue, pervasive use of profanity, cameos and ensemble casts.',
            Birth: 1963
        },
        ImageURL: 'https://www.themoviedb.org/t/p/w1280/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg',
        Featured: false
    },
    {
        Title: 'There Will Be Blood',
        Description:
            'A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.',
        Genre: {
            Name: 'Drama',
            Description:
                "The drama genre features stories with high stakes and many conflicts. They're plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters."
        },
        Director: {
            Name: 'Paul Thomas Anderson',
            Bio: 'Paul Thomas Anderson, also known by his initials PTA, is an American filmmaker. He developed an interest in filmmaking from a young age. He made his feature-film debut with Hard Eight.',
            Birth: 1970
        },
        ImageURL: 'https://www.themoviedb.org/t/p/w1280/fa0RDkAlCec0STeMNAhPaF89q6U.jpg',
        Featured: false
    },
    {
        Title: 'The Lighthouse',
        Description:
            'Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.',
        Genre: {
            Name: 'Drama',
            Description:
                "The drama genre features stories with high stakes and many conflicts. They're plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters."
        },
        Director: {
            Name: 'Robert Eggers',
            Bio: 'Robert Houston Eggers is an American filmmaker and production designer. He is best known for writing and directing the historical horror films The Witch and The Lighthouse, as well as directing and co-writing the historical fiction epic film The Northman.',
            Birth: 1970
        },
        ImageURL: 'https://www.themoviedb.org/t/p/w1280/4SC4cyzHWWzDEdszdxHYPWd32YH.jpg',
        Featured: false
    },
    {
        Title: 'Good Time',
        Description:
            "After a botched bank robbery lands his younger brother in prison, Connie Nikas embarks on a twisted odyssey through New York City's underworld to get his brother Nick out of jail.",
        Genre: {
            Name: 'Crime',
            Description:
                'A crime film is a type of film focusing on the lives of criminals. The stylistic approach ranges from grittily realistic portrayals of real-life criminal figures (crime drama) to the far-fetched evil doings of imaginary arch-villains (master criminal films.) Criminal acts are almost always glorified in these movies.'
        },
        Director: {
            Name: 'Benny Safdie',
            Bio: 'Benjamin Safdie is an American film director, screenwriter, actor and film editor, best known for working with his older brother Josh as a filmmaker, whose works include Good Time and Uncut Gems.',
            Birth: 1986
        },
        ImageURL: 'https://www.themoviedb.org/t/p/w1280/s6DJXJU3HzX24Ij3VWg5MfVGHrI.jpg',
        Featured: false
    },
    {
        Title: 'American Psycho',
        Description:
            'A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.',
        Genre: {
            Name: 'Crime',
            Description:
                'A crime film is a type of film focusing on the lives of criminals. The stylistic approach ranges from grittily realistic portrayals of real-life criminal figures (crime drama) to the far-fetched evil doings of imaginary arch-villains (master criminal films.) Criminal acts are almost always glorified in these movies.'
        },
        Director: {
            Name: 'Mary Harron',
            Bio: 'Mary Harron is a Canadian filmmaker and screenwriter, and former entertainment critic. She gained recognition for her role in writing and directing several independent films, including I Shot Andy Warhol, American Psycho, and The Notorious Bettie Page.',
            Birth: 1953
        },
        ImageURL: 'https://www.themoviedb.org/t/p/w1280/9uGHEgsiUXjCNq8wdq4r49YL8A1.jpg',
        Featured: false
    },
    {
        Title: 'The Joker',
        Description:
            'A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.',
        Genre: {
            Name: 'Crime',
            Description:
                'A crime film is a type of film focusing on the lives of criminals. The stylistic approach ranges from grittily realistic portrayals of real-life criminal figures (crime drama) to the far-fetched evil doings of imaginary arch-villains (master criminal films.) Criminal acts are almost always glorified in these movies.'
        },
        Director: {
            Name: 'Todd Phillips',
            Bio: 'Todd Phillips is an American film director, producer, and screenwriter. He began his career in 1993 and directed films in the 2000s such as Road Trip, Old School, Starsky & Hutch, and School for Scoundrels.',
            Birth: 1970
        },
        ImageURL: 'https://www.themoviedb.org/t/p/w1280/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
        Featured: false
    },
    {
        Title: 'Scarface',
        Description: 'In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.',
        Genre: {
            Name: 'Crime',
            Description:
                'A crime film is a type of film focusing on the lives of criminals. The stylistic approach ranges from grittily realistic portrayals of real-life criminal figures (crime drama) to the far-fetched evil doings of imaginary arch-villains (master criminal films.) Criminal acts are almost always glorified in these movies.'
        },
        Director: {
            Name: 'Brian De Palma',
            Bio: 'Brian Russell De Palma is an American film director and screenwriter. With a career spanning over 50 years, he is best known for his work in the suspense, crime and psychological thriller genres.',
            Birth: 1940
        },
        ImageURL: 'https://www.themoviedb.org/t/p/w1280/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg',
        Featured: false
    },
    {
        Title: "Pan's Labyrinth",
        Description:
            'In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.',
        Genre: {
            Name: 'Drama',
            Description:
                "The drama genre features stories with high stakes and many conflicts. They're plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters."
        },
        Director: {
            Name: 'Guillermo del Toro',
            Bio: "Guillermo del Toro Gómez is a Mexican filmmaker, author, and actor. He directed the Academy Award-winning fantasy films Pan's Labyrinth and The Shape of Water, winning the Academy Awards for Best Director and Best Picture for the latter.",
            Birth: 1964
        },
        ImageURL: 'https://www.themoviedb.org/t/p/w1280/s8C4whhKtDaJvMDcyiMvx3BIF5F.jpg',
        Featured: false
    },
    {
        Title: 'Inglourious Basterds',
        Description:
            "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
        Genre: {
            Name: 'Adventure',
            Description:
                ' Adventure Films are exciting stories, with new experiences or exotic locales. Adventure films are very similar to the action film genre, in that they are designed to provide an action-filled, energetic experience for the film viewer.'
        },
        Director: {
            Name: 'Quentin Tarantino',
            Bio: 'Quentin Jerome Tarantino is an American filmmaker and actor. His films are characterized by frequent references to popular culture and film genres, nonlinear storylines, dark humor, stylized violence, extended dialogue, pervasive use of profanity, cameos and ensemble casts.',
            Birth: 1963
        },
        ImageURL: 'https://www.themoviedb.org/t/p/w1280/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg',
        Featured: false
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
