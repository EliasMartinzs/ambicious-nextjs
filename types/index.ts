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
  _id?: string | undefined;
  exercise: string;
  reps: number;
  series: number;
  cardio: string;
  day?: string;
  muscle: string;
};

type DietType = {
  _id: string | undefined;
  food: string;
  quantity: string;
  athlet: string;
  obs: string;
  time: string;
  day: string;
};

type BodyMeasurementsType = {
  _id: string | undefined;
  chest: number;
  bicepsLeft: number;
  bicepsRight: number;
  legLeft: number;
  legRight: number;
  waist: number;
  calfLeft: number;
  calfRight: number;
  date: Date | undefined;
  author: string | undefined;
};

type BodyBasicsType = {
  imc: { imc: number; condition: string };
  _id: string;
  height: number;
  weight: number;
  age: number;
};

type DifferenceType = {
  _id: {
    before: string;
    after: string;
  };
  chest: { before: number; after: number };
  bicepsLeft: { before: number; after: number };
  bicepsRight: { before: number; after: number };
  legLeft: { before: number; after: number };
  legRight: { before: number; after: number };
  waist: { before: number; after: number };
  calfLeft: { before: number; after: number };
  calfRight: { before: number; after: number };
  date: {
    before: string;
    after: string;
  };
};

export type {
  WeeksPaylodType,
  TaskType,
  UserType,
  BodyMeasurementsType,
  BodyBasicsType,
  WeatherType,
  Course,
  DifferenceType,
  FlashcardType,
  TableType,
  DietType,
};
