import { Rating, ThinStar } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import { Button } from '../ui/button';
import { PlusCircleIcon } from 'lucide-react';
import { createCourse, getCourses } from '@/lib/actions/course.action';

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fff',
};

export default async function Courses({ user }: { user: any }) {
  const courses = await getCourses();

  const createNewCourse = async () => {
    await createCourse({
      author: user,
      avaliation: 3,
      title: 'vamos testar esse curso',
      review: 'ta bao ue',
      path: '/',
    });
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex-between w-full md:pr-10">
        <h3 className="font-black text-lg md:text-xl">Meu Aprendizado</h3>
        {/* <Button onClick={createNewCourse}>
          <PlusCircleIcon />
        </Button> */}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-5 gap-10">
        {courses.map(course => (
          <div className="w-full">
            <h1>Course {course.title}</h1>
            <Rating
              style={{ maxWidth: 80 }}
              value={course.avaliation}
              itemStyles={myStyles}
              readOnly
            />
          </div>
        ))}
      </div>
    </div>
  );
}
