import { categoriesProblems } from '@/constants';
import React from 'react';
import AddQuestion from '../Shared/AddQuestion';
import { getQuestions } from '@/lib/actions/question.action';
import Link from 'next/link';

export default async function Projects({ user }: { user: any }) {
  const question = await getQuestions();
  return (
    <>
      <div className="flex gap-x-5 items-center">
        <h3 className="font-bold text-lg md:text-xl">Projetos</h3>
        <AddQuestion user={user} />
      </div>

      <ul className="flex gap-x-5 my-5">
        {categoriesProblems.map(category => (
          <li
            key={category.value}
            className="capitalize max-sm:text-xs max-sm:items-center max-sm:flex text-center md:border border-primary-500 shadow-inner hover:bg-primary-500 transition-colors text-foreground px-3 py-2 md:rounded-full hover:font-black cursor-pointer hover:shadow-2xl"
          >
            {category.label}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pr-10 mt-10">
        {question.map(quest => (
          <div
            key={quest}
            className="flex-start flex-col border-b border-primary-400 relative p-5"
          >
            <Link
              href={`/problems/${quest._id.toString()}`}
              className="font-black text-primary-300 cursor-pointer"
            >
              {quest.question}
            </Link>
            <span className="flex-between w-full text-sm capitalize font-medium mt-2">
              <p>{quest.difficulty}</p>
              <p>{quest.category}</p>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
