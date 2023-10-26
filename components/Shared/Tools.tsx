import Books from '../tools/Books';
import Projects from '../tools/Projects';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Courses from '../tools/Courses';
import { auth } from '@clerk/nextjs';
import { fetchUser } from '@/lib/actions/user.action';

export default async function Tools() {
  const { userId } = auth();
  const user = await fetchUser({ userId });

  return (
    <div className="py-10 mb-10">
      <Tabs
        defaultValue="cursos"
        className="w-full flex flex-col md:flex-row gap-10"
      >
        <TabsList className="w-full md:w-[15%]">
          <div className="w-full flex flex-row max-sm:justify-center max-sm:items-center md:flex-col bg-primary-500 relative md:rounded-tr-2xl md:rounded-br-2xl md:pl-5">
            <TabsTrigger
              value="cursos"
              className="md:rounded-bl-full py-2 font-bold"
            >
              Cursos
            </TabsTrigger>
            <TabsTrigger
              value="livros"
              className="md:rounded-tl-full md:rounded-bl-full py-2 font-bold"
            >
              Livros
            </TabsTrigger>
            <TabsTrigger
              value="projetos"
              className="md:rounded-tl-full py-2 font-bold"
            >
              Projetos
            </TabsTrigger>
          </div>
        </TabsList>

        <div className="w-full md:w-[85%]">
          <TabsContent value="cursos">
            <Courses user={user?._id.toString()} />
          </TabsContent>
          <TabsContent value="livros">
            <Books user={user?._id.toString()} />
          </TabsContent>
          <TabsContent value="projetos">
            <Projects user={user?._id.toString()} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
