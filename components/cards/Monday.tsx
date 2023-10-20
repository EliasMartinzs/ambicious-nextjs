import { fetchUser } from '@/lib/actions/user.action';
import { auth } from '@clerk/nextjs';
import { getTask } from '@/lib/actions/task.action';
import { Trash2 } from 'lucide-react';
import StyledCheckbox from '../Shared/StyledCheckbox';
import AddTask from '../Shared/AddTask';
import { cn } from '@/lib/utils';
import DeleteTask from '../Shared/DeleteTask';

export default async function Monday({ dayOfWeek }: { dayOfWeek: string }) {
  // const { userId } = auth();
  // const user = await fetchUser({ userId });
  // const tasks = await getTask();

  // const mondayTask = tasks?.filter(task => task.dayOfWeek === dayOfWeek);

  return (
    // <div className="h-52 max-h-64 overflow-y-auto scroll pb-3 text-foreground shadow-inner">
    //   <div className="px-2 py-1 flex-between border-b border-primary-500 shadow-2xl">
    //     <h3 className="font-medium">{dayOfWeek}</h3>
    //     <AddTask author={user?._id.toString()} dayOfWeek={dayOfWeek} />
    //   </div>

    //   {mondayTask && mondayTask.length === 0 ? (
    //     <p className="px-2 font-extralight my-4 text-small">
    //       Nenhuma tarefa adicionada
    //     </p>
    //   ) : (
    //     mondayTask &&
    //     mondayTask.map(task => (
    //       <div
    //         key={task._id}
    //         className="w-full mt-5 px-3 flex-between gap-y-3 text-xs"
    //       >
    //         <span className="flex-center gap-x-2">
    //           <StyledCheckbox
    //             author={task._id.toString()}
    //             isSelected={task?.isSelected}
    //           />
    //           <p
    //             className={cn(
    //               'capitalize font-medium',
    //               task?.isSelected ? 'line-through' : 'list-none'
    //             )}
    //           >
    //             {task?.text}
    //           </p>
    //         </span>
    //         <DeleteTask author={task._id.toString()} />
    //       </div>
    //     ))
    //   )}
    // </div>
    <h1>oi</h1>
  );
}
