'use server';

import { revalidatePath } from 'next/cache';
import Exercise from '../models/exercise.model';
import User from '../models/user.model';
import { connectToDB } from '../mongodb';

connectToDB();

type CreateExerciseProps = {
  exercise: string;
  reps: number;
  series: number;
  cardio: string;
  day: string;
  author: string | undefined;
  muscle: string;
};

export async function CreateExercise({
  author,
  cardio,
  exercise,
  reps,
  series,
  muscle,
  day,
}: CreateExerciseProps) {
  try {
    const create = await Exercise.create({
      exercise,
      day,
      reps,
      series,
      muscle,
      cardio,
    });

    await User.findByIdAndUpdate(author, {
      $push: { exerciseSheet: create },
    });

    revalidatePath('/gym');
  } catch (error: any) {
    throw new Error(`failed to create EXERCISE ${error}`);
  }
}

export async function fetchExercises() {
  try {
    const exercisesData = await Exercise.find();

    revalidatePath('/gym');

    return JSON.parse(JSON.stringify(exercisesData));
  } catch (error: any) {
    throw new Error(`failed to fetch EXERCISE ${error}`);
  }
}

export async function deleteExercise(author: string | undefined) {
  try {
    await Exercise.deleteOne({ _id: author });

    revalidatePath('/gym');
  } catch (error: any) {
    throw new Error(`failed to fetch EXERCISE ${error}`);
  }
}
