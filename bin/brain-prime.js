#!/usr/bin/env node
import gameBody from '../src/gameBody.js';
import BrainPrime from '../src/games/prime.js';

gameBody('Answer "yes" if given number is prime. Otherwise answer "no".', BrainPrime);
