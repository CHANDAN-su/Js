import { name  } from './user.js'; //single import
import {code} from './user.js'; //single import

import {withdrawal } from './user.js'   //dono file me same varible and function hota h to ye error aata h  (SyntaxError: Identifier 'withdrawal' has already been declared ) slove karne ke liye rename karna parta h

import {default as def , withdrawal as wd, Balance} from './account.js'; //double and thrple and more import ( ---as-- se rename hota h)


import * as usr from './user.js';   //ye tab use karte h tab 50 and more export function ho to our import me ek hi likhana h to use hota h
usr.cooking();

import {circle,square,triangle} from './modules/shaps.js';
circle();
square();
triangle();



// console.log(name);

// const SumNumber = code(15,15);
// console.log(SumNumber);

// wd();
// withdrawal();
// Balance();

// def();

