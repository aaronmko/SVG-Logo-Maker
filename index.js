const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const fileName = "./examples/logo.svg";
const setShape = require('./lib/setShape.js')