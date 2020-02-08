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
//app.get('/api/waitlist', (req, res) => res.json(tables));
// Displays a single character or returns false

//listening
app.listen(PORT, () => console.log('App listening on PORT ' + PORT));
