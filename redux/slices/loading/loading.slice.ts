import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  loading: boolean;
};

const InitialState: InitialState = {
  loading: false,
};

const Loading = createSlice({
  name: 'loading',
  initialState: InitialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      return void (state.loading = action.payload);
    },
  },
});

export const { setLoading } = Loading.actions;
export const LoadingReducer = Loading.reducer;
