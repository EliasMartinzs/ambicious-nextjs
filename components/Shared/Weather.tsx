'use client';

import { fetchWeatherApi } from '@/lib/utils';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import useGeolocation from 'react-hook-geolocation';
import { WeatherType } from '@/types';

export default function Weather() {
  const [weather, setWeather] = useState<WeatherType>();
  const geolocation = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000,
  });

  useEffect(() => {
    const fetchApi = async (lat: number, lon: number) => {
      const weather = await fetchWeatherApi({ lat, lon });

      setWeather(weather);
    };
    fetchApi(geolocation.latitude, geolocation.longitude);
  }, [geolocation]);

  return (
    <div className="w-full h-full flex flex-col xl:flex-row">
      <div className="w-full p-5 xl:p-0 xl:w-1/2 flex-center flex-col gap-y-2">
        <div className="flex flex-row gap-x-4">
          <p className="text-4xl font-black">
            {weather?.current?.temp_c}
            <span className="paragraph align-top">⚬C</span>
          </p>
          <Image
            alt="rain"
            width={50}
            height={50}
            src={`https:${weather?.current?.condition.icon}`}
          />
        </div>
        <div className="flex flex-col">
          <span className="flex gap-x-2 font-black paragraph">
            <p>{weather?.location?.name}</p>
            <p>{weather?.location?.region}</p>
          </span>
          <span className="text-xs">
            Ultima atualizacao {weather?.current?.last_updated}
          </span>
        </div>
      </div>
      <div className="w-full xl:w-1/2 h-full flex-center">
        <div className="w-full border-primary-500">
          <h4 className="font-black text-lg">Detalhes do Tempo</h4>
          <div className="flex flex-col gap-y-2 font-bold mt-4 text-sm">
            <div className="flex-between w-full">
              <p>Nuvem</p> <p>{weather?.current?.cloud}%</p>
            </div>
            <div className="flex-between w-full">
              <p>Vento</p> <p>{weather?.current?.wind_kph}km/h</p>
            </div>
            <div className="flex-between w-full">
              <p>Humidade</p> <p>{weather?.current?.humidity}%</p>
            </div>
            <div className="flex-between w-full">
              <p>Sensação térmica</p> <p>{weather?.current?.feelslike_c}⚬C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
