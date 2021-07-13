import { wordsData } from './data/wordsData.js';

import { Dictionary } from './components/Dictionary.js';

const zodynas = new Dictionary('.content', 'Anglų - Lietuvių kalbų žodynas', wordsData); 

console.log(zodynas); 