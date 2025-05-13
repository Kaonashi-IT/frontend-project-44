#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

import BrainGcd from '../src/games/gcd.js';

gameBody('Find the greatest common divisor of given numbers.', BrainGcd);