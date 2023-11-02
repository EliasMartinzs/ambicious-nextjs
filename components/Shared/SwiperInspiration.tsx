'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

export default function SwiperInspiration({ phrases }: { phrases: any[] }) {
  return (
    <>
      <Slider
        adaptiveHeight={true}
        autoplay={true}
        autoplaySpeed={10000}
        fade={true}
        infinite={true}
        centerMode={true}
        className="flex-center w-full text-center pb-5"
      >
        {Array.isArray(phrases)
          ? phrases.map(phrase => (
              <blockquote className="mt-6 border-l-2 border-r-2 border-primary-500 pl-6 italic px-2 mx-auto">
                <span className="text-xl">"</span>
                {phrase.text}
                <span className="text-xl">"</span>
              </blockquote>
            ))
          : null}
      </Slider>
    </>
  );
}
