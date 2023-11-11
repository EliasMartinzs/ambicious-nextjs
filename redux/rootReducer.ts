import { combineReducers } from '@reduxjs/toolkit';
import { WeekReducer } from './slices/weeks/weeks.slice';
import { LoadingReducer } from './slices/loading/loading.slice';

export const rootReducer = combineReducers({
  week: WeekReducer,
  loading: LoadingReducer,
});
