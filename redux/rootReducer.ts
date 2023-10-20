import { combineReducers } from '@reduxjs/toolkit';
import { WeekReducer } from './slices/weeks/weeks.slice';

export const rootReducer = combineReducers({
  week: WeekReducer,
});
