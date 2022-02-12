import fs from 'fs';
import { hasLetter, hasntLetter, matches } from './checkers';

const text = fs.readFileSync('./words.txt', 'utf8');
const words = text.split(/\W+/);

const match1 = '';
const match2 = '';
const match3 = '';
const match4 = '';
const match5 = '';
const matchs = [match1, match2, match3, match4, match5];

const has1: string[] = [];
const has2: string[] = ['a'];
const has3: string[] = [];
const has4: string[] = ['e'];
const has5: string[] = ['r'];
const hases: string[][] = [has1, has2, has3, has4, has5];

const hasents: string[] = ['n', 'c'];

for (const word of words) {
  const letters = word.split('');

  for (let i = 0; i < matchs.length; i++) {
    if (!matches(letters, matchs[i], i)) continue;
  }

  for (let i = 0; i < hases.length; i++) {
    if (!hasLetter(letters, hases[i], i)) continue;
  }

  for (let i = 0; i < hasents.length; i++) {
    if (!hasntLetter(letters, hasents[i])) continue;
  }

  console.log(word);
}
