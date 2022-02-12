import { intersection } from 'lodash';

export const matches = (
  letters: string[],
  letter: string,
  position: number
) => {
  return letters[position] === letter;
};

export const hasLetter = (
  letters: string[],
  has: string[],
  notInPosition: number
) => {
  if (!intersection(letters, has).length) return false;

  if (has.includes(letters[notInPosition])) {
    return false;
  }

  return true;
};

export const hasntLetter = (letters: string[], hasnt: string) => {
  if (letters.includes(hasnt)) return false;

  return true;
};
