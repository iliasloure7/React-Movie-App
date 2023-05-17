import { GENRES } from './constants';

export const findGenreFromId = (id: number): string => {
  const foundObj = GENRES.find((g) => {
    return g.id === id;
  });

  return foundObj ? foundObj.name : '';
};

export const convertToHoursAndMinutes = (minutes: number): string => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
};
