import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type initialState = {
  [key: string]: string[];
};

const initialState: initialState = {
  Segunda: [],
  Terça: [],
  Quarta: [],
  Quinta: [],
  Sexta: [],
};

const addTaskToDay = (
  state: string[],
  addTask: {
    day: string;
    values: {
      task: string;
    };
    id: string;
  }
) => {
  const hasTask = state.find((task: any) => task?.id === addTask.id);

  if (hasTask) {
    return (state = state.map((task: any) =>
      task.id === addTask.id ? { ...task, addTask } : task
    ));
  }

  return [...state, addTask];
};

const removeTaskToDay = (
  state: any,
  removeTask: { day: string; values: { task: string }; id: string }
) => {
  const hasTask = state.find((item: any) => item.id);

  if (hasTask) {
    return (state = state.filter((item: any) => item.id !== removeTask.id));
  }

  return [...state, removeTask];
};

const Week = createSlice({
  name: 'week',
  initialState: initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{
        day: string;
        values: { task: string };
        id: string;
      }>
    ) => {
      const { day } = action.payload;
      return void (state[day] = addTaskToDay(state[day], action.payload));
    },
    removeTask: (
      state,
      action: PayloadAction<{
        day: string;
        items: { day: string; values: { task: string }; id: string };
      }>
    ) => {
      const { day, items } = action.payload;

      return void (state[day] = removeTaskToDay(state[day], items));
    },
  },
});

export const { addTask, removeTask } = Week.actions;
export const WeekReducer = Week.reducer;
