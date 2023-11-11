import { ReduxState } from '../store';

export const selectorDay = (state: ReduxState) => state.week;
export const selectorLoading = (state: ReduxState) => state.loading.loading;
