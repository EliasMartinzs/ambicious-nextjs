import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const headers = {
  'X-RapidAPI-Key': '488fbc12c0msh86d32a72473524dp117130jsnd5dc39ebcc7f',
  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
};

export const fetchWeatherApi = async ({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) => {
  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat}%2C${lon}`,
    { headers: headers }
  );

  const weather = await response.json();

  return weather;
};
