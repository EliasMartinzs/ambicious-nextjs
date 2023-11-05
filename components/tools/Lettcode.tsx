import { categoriesProblems } from '@/constants';
import React from 'react';
import AddQuestion from '../Shared/AddQuestion';
import { getQuestions } from '@/lib/actions/question.action';
import Link from 'next/link';
import DeleteProject from '../crud/DeleteProject';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';

export default async function Leetcode({ user }: { user: any }) {
  const question = await getQuestions();

  return (
    <>
      <div className="flex gap-x-5 items-center max-sm:justify-center max-sm:my-5">
        <h3 className="font-bold text-lg md:text-xl">Leetcode</h3>
        <AddQuestion user={user} />
      </div>

      <Tabs defaultValue="array">
        <TabsList className="w-full flex items-center justify-start px-0 mt-5 max-sm:grid grid-cols-3">
          {categoriesProblems.map((cat, idx) => (
            <TabsTrigger value={cat.value} key={cat.value}>
              <Button className="border-b border-primary-500">
                {cat.label}
              </Button>
            </TabsTrigger>
          ))}
        </TabsList>

        {categoriesProblems.map(cat => (
          <TabsContent value={cat.value} key={cat.value}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pr-10 mt-10">
              {question.length === 0 ? (
                <small>Não contem nenhuma questão sobre {cat.value}</small>
              ) : (
                question
                  .filter(quest => quest.category === cat.value)
                  .map(quest => (
                    <div
                      key={quest}
                      className="flex-start flex-col border-b border-primary-400 relative p-5"
                    >
                      <Link
                        href={`/problems/${quest._id.toString()}`}
                        className="font-black text-primary-300 cursor-pointer flex-between items-center"
                      >
                        {quest?.question}
                      </Link>
                      <span className="flex-between w-full text-sm capitalize font-medium mt-2">
                        <p>{quest?.difficulty}</p>
                        <p>{quest?.category}</p>
                      </span>
                      <DeleteProject author={quest._id.toString()} />
                    </div>
                  ))
              )}
            </div>
          </TabsContent>
        ))}

        <TabsContent value="todos">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pr-10">
            {question.map(quest => (
              <div
                key={quest}
                className="flex-start flex-col border-b border-primary-400 relative p-5"
              >
                <Link
                  href={`/problems/${quest._id.toString()}`}
                  className="font-black text-primary-300 cursor-pointer flex-between items-center"
                >
                  {quest?.question}
                </Link>
                <span className="flex-between w-full text-sm capitalize font-medium mt-2">
                  <p>{quest?.difficulty}</p>
                  <p>{quest?.category}</p>
                </span>
                <DeleteProject author={quest._id.toString()} />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
