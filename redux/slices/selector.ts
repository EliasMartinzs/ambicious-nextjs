import { ReduxState } from '../store';

export const selectorTask = (state: ReduxState) => state.task;

export const selectorDay = (state: ReduxState) => state.week;
