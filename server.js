'use strict';

// dependencies
const express = require('express');
const path = require('path');

// setup
const app = express();
const PORT = 3000;

// handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// data
let tables = [
    // {
    //     routeName: 'table-1',
    //     name: 'test',
    //     email: 'test@test.com',
    //     phone: '555-555-5555',
    //     id: 1,
    // }
];




// =============================================================
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/table', (req, res) => res.sendFile(path.join(__dirname, 'table.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));


// Displays waitlist
//app.get('/api/waitlist', (req, res) => res.json(waitlist));
//Displays Tables
app.get('/api/tables', (req, res) => res.json(tables));
 //Displays a single character or returns false

// creates new reservations - takes JSON input
// pretty sure this will be very similar to the starwars
// can edit it later
app.post('/api/reservations', (req, res) => {
    const newReservation = req.body;

    console.log(newReservation);

    tables.push(newReservation);

    res.json(newReservation);
});

//listening
app.listen(PORT, () => console.log('App listening on PORT ' + PORT));
