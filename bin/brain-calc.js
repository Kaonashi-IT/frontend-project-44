#!/usr/bin/env node

import gameBody from '../src/gameBody.js';

import BrainCalc from '../src/games/calc.js';

gameBody('What is the result of the expression?', BrainCalc);