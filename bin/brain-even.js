#!/usr/bin/env node
import gameBody from '../src/gameBody.js';
import task from '../src/games/even.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

gameBody(description, task);