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
        defaultValue="projetos"
        className="w-full flex flex-col md:flex-row gap-10"
      >
        <TabsList className="w-full md:w-[15%]">
          <div className="w-full flex flex-row md:flex-col bg-primary-500 relative rounded-tr-2xl rounded-br-2xl pl-5">
            <TabsTrigger
              value="cursos"
              className="rounded-bl-full py-2 font-bold"
            >
              Cursos
            </TabsTrigger>
            <TabsTrigger
              value="livros"
              className="rounded-tl-full rounded-bl-full py-2 font-bold"
            >
              Livros
            </TabsTrigger>
            <TabsTrigger
              value="projetos"
              className="rounded-tl-full py-2 font-bold"
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
            <Projects />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

// <div className="w-full max-h-48 md:w-[15%] md:pl-5 flex flex-row md:flex-col max-md:items-center max-md:justify-center md:bg-primary-500 gap-3 font-semibold transition-all py-5 md:rounded-tr-2xl md:rounded-br-3xl shadow-3xl">
// {tools.map(tool => (
//   <Button
//     key={tool}
//     onClick={() => handleItemClick(tool)}
//     className={cn(
//       'cursor-pointer capitalize',
//       tool === selectedItem
//         ? 'bg-background max-sm:bg-primary-500 max-sm:text-background text-primary-500 font-black p-2 max-md:rounded-full md:rounded-tl-full md:rounded-bl-full shadow-inner'
//         : ''
//     )}
//   >
//     {tool}
//   </Button>
// ))}
// </div>

// <div className="w-full md:w-[85%]">
// {selectedItem === 'Cursos' && <Courses user={user?.toString()} />}
// {selectedItem === 'Livros' && <Books />}
// {selectedItem === 'Projetos' && <Projects />}
// </div>
