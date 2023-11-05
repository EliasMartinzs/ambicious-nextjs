import { Rating, ThinStar } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';

import { getCourses } from '@/lib/actions/course.action';

import AddCourse from '../Shared/AddCourse';
import DeleteCourse from '../crud/DeleteCourse';

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fff',
};

export default async function Courses({ user }: { user: any }) {
  const courses = await getCourses();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex gap-x-5 items-center max-sm:justify-center max-sm:my-5">
        <h3 className="font-bold text-lg md:text-xl">Meu Aprendizado</h3>
        <AddCourse user={user} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-5 gap-10">
        {courses.length === 0 ? (
          <small>Nenhum curso adicionado</small>
        ) : (
          courses.map(course => (
            <div className="w-full relative">
              <h1 className="text-lg font-medium">{course.title}</h1>
              <small className="py-2">{course?.review}</small>
              <Rating
                style={{ maxWidth: 80 }}
                value={course.avaliation}
                itemStyles={myStyles}
                readOnly
              />
              <DeleteCourse author={course._id.toString()} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
