import { MONTHS, dbUsers } from './constants';

export const parseDate = date => {
  return `${
    MONTHS[date.getMonth()]
  }  ${date.getDate()}, ${date.getFullYear()}  |  ${date.getHours()}:${date.getMinutes()}`;
};

export const getRandomUser = () => {
  // generate random number from 0 to the dbUsers's length and return a user
  return dbUsers[Math.floor(Math.random() * (dbUsers.length - 1))];
};
