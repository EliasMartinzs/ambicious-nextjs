'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function SwiperInspiration({ phrases }: { phrases: any[] }) {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 10000 }}
        className="w-full text-center"
      >
        {Array.isArray(phrases)
          ? phrases.map(phrase => (
              <SwiperSlide key={phrase.text} className="text-sm paddings">
                <blockquote className="mt-6 border-l-2 border-r-2 border-primary-500 pl-6 italic">
                  <span className="text-xl">"</span>
                  {phrase.text}
                  <span className="text-xl">"</span>
                </blockquote>
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </>
  );
}
