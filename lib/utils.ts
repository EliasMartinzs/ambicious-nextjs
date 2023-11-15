import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// created by chatgpt
export function isBase64Image(imageData: string) {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(imageData);
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
    { headers: headers },
  );

  const weather = await response.json();

  return weather;
};

export const calculateIMC = ({
  weight,
  height,
}: {
  weight: number;
  height: number;
}) => {
  const divide = weight / Math.pow(height, 2);

  const intervals = [
    { range: [0, 18.5], label: 'Abaixo do peso' },
    { range: [18.5, 24.9], label: 'Peso Normal' },
    { range: [25, 29.9], label: 'Sobrepeso' },
    { range: [30, Infinity], label: 'Obesidade' },
  ];

  const result = intervals.find(
    interval => divide >= interval.range[0] && divide <= interval.range[1],
  );

  return result ? { imc: divide, condition: result.label } : '';
};

const imc = calculateIMC({
  height: 1.8,
  weight: 80,
});
