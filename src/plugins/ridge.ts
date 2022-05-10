import { newRidgeState } from 'react-ridge-state';
import { shuffle } from '../utils';

export const prizeState = newRidgeState<string[] | null>(null, {
  onSet: (newState) => {
    if (newState) {
      localStorage.setItem('prize', newState.join(''));
    } else {
      localStorage.removeItem('prize');
    }
  },
});

export const openState = newRidgeState<boolean[] | null>(null, {
  onSet: (newState) => {
    if (newState) {
      localStorage.setItem(
        'open',
        newState.map((v) => (v ? '1' : '0')).join('')
      );
    } else {
      localStorage.removeItem('open');
    }
  },
});

const setInitialPrizeState = () => {
  const prize = localStorage.getItem('prize');
  if (!prize) {
    const initialPrize = ['A', 'A', 'B', 'C', 'D'].concat(
      Array(3).fill('E'),
      Array(3).fill('F'),
      Array(4).fill('G'),
      Array(12).fill('H'),
      Array(13).fill('I'),
      Array(27).fill('J'),
      Array(26).fill('K'),
      Array(27).fill('L'),
      Array(60).fill('M'),
      Array(60).fill('N'),
      Array(260).fill('O')
    );
    prizeState.set(shuffle(initialPrize));
  } else prizeState.set(prize.split(''));
};

const setInitialOpenState = () => {
  const open = localStorage.getItem('open');
  if (!open) {
    openState.set(Array(500).fill(false));
  } else openState.set(open.split('').map((x) => x === '1'));
};

setInitialPrizeState();
setInitialOpenState();
