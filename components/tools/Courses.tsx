import { Rating, ThinStar } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';

import { getCourses } from '@/lib/actions/course.action';

import AddCourse from '../Shared/AddCourse';

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fff',
};

export default async function Courses({ user }: { user: any }) {
  const courses = await getCourses();

  return (
    <div className="w-full flex flex-col">
      <div className="flex-between w-full md:pr-10">
        <h3 className="font-bold text-lg md:text-xl">Meu Aprendizado</h3>
        <AddCourse user={user} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-5 gap-10">
        {courses.map(course => (
          <div className="w-full">
            <h1 className="text-lg font-medium">Course {course.title}</h1>
            <small className="py-2">{course?.review}</small>
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
