'use server';

import { revalidatePath } from 'next/cache';
import Course from '../models/couse.models';
import User from '../models/user.model';
import { connectToDB } from '../mongodb';

connectToDB();

interface CreateCourseProps {
  title: string;
  review?: string;
  avaliation: number;
  author: string;
  path: string;
}

export const createCourse = async ({
  title,
  review,
  avaliation,
  author,
  path,
}: CreateCourseProps) => {
  try {
    const course = await Course.create({
      title,
      review,
      avaliation,
      author,
    });

    await User.findByIdAndUpdate(author, {
      $push: { courses: course },
    });
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`error in create course ${error}`);
  }
};

export const getCourses = async () => {
  try {
    const course = await Course.find();

    return course;
  } catch (error: any) {
    throw new Error(`error find course ${error}`);
  }
};

export const deleteCourse = async ({
  author,
  path,
}: {
  author: string;
  path: string;
}) => {
  try {
    await Course.deleteOne({ _id: author });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`failed to delete course ${error}`);
  }
};
