import { categoriesProblems } from '@/constants';
import React from 'react';
import AddQuestion from '../Shared/AddQuestion';

export default function Projects() {
  return (
    <div className="">
      <div className="flex-between w-full pr-5">
        <h3 className="font-bold text-lg md:text-xl">Estudos</h3>
        <AddQuestion />
      </div>
      <ul className="flex gap-x-5 my-5">
        {categoriesProblems.map(category => (
          <li
            key={category}
            className="capitalize border border-primary-500 shadow-inner hover:bg-primary-500 transition-colors text-foreground px-3 py-2 rounded-full hover:font-black cursor-pointer hover:shadow-2xl"
          >
            {category}
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pr-10">
        {[1, 2, 3, 4, 5, 6].map(item => (
          <div
            key={item}
            className="flex-start flex-col border-b border-primary-400 relative"
          >
            <h4 className="font-black text-primary-300 cursor-pointer">
              The sum
            </h4>
            <span className="flex-between w-full font-extralight text-sm">
              <p>Easy</p>
              <p>Array</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
