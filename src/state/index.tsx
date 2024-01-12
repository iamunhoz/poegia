import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const enum ETheme {
  dark = 'dark',
  light = 'light',
}

const themeAtom = atom<ETheme>(ETheme.dark);

const borderAtom = atom<'with' | 'without'>('without');

const siteLanguageAtom = atom<'pt' | 'en'>('en');

const dalleImageQueryAtom = atom<string>('');
const dalleImageURLAtom = atom<string | null>(null);

const isLoggedinAtom = atomWithStorage<'vary' | 'depend'>('relent', 'vary')

export { 
  themeAtom,
  ETheme,
  siteLanguageAtom,
  borderAtom,
  dalleImageQueryAtom,
  dalleImageURLAtom,
  isLoggedinAtom
};
