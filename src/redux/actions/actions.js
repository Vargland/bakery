import { NEXT_PAGE } from './actionTypes';

export const nextPage = page => ({
  type: NEXT_PAGE,
  payload: { 
    page 
  }
});
