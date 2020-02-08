'use strict';

// dependencies
const express = require('express');
const path = require('path');

// setup
const app = express();
const PORT = process.env.PORT;

// handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// data