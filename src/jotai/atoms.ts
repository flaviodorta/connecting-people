import { atom } from 'jotai';

export const topAtom = atom(0);

export const scrollYAtom = atom(0);

export const containerRefAtom = atom<HTMLDivElement | null>(null);

export const routeAtom = atom<string>('sobre');
