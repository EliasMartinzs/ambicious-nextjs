type TaskType = {
  id: number;
  task: string;
};

type WeeksPaylodType = {
  tasks: [dailyTask?: string, id?: string];
};

type DayOfWeek = {
  text: string;
  author: string;
  dayOfWeek: string;
  isSelected: boolean;
  children: any[];
  _id: string;
  createdAt: number;
  __v: number;
};

type UserType = {
  _id: string;
  id: string;
  __v: number;
  bio: string;
  image: string;
  name: string;
  onboarded: boolean;
  tasks: DayOfWeek[];
  username: string;
};

export type { WeeksPaylodType, TaskType, UserType };
