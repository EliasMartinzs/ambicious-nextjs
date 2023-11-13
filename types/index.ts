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

type WeatherType = {
  current: {
    cloud: number;
    condition: { text: string; icon: string; code: number };
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    humidity: number;
    is_day: number;
    last_updated: string;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
  };
  location: {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
  };
};

type Course = {
  _id: string;
  title: string;
  review: string;
  avaliation: number;
  createdAt: any;
};

type FlashcardType = {
  _id: string;
  title: string;
  description: string;
  color: string;
  category: string;
};

type TableType = {
  exercise: string;
  reps: string;
  series: string;
  cardio: string;
};

export type {
  WeeksPaylodType,
  TaskType,
  UserType,
  WeatherType,
  Course,
  FlashcardType,
  TableType,
};
