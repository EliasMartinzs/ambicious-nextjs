'use server';

import { revalidatePath } from 'next/cache';
import User from '../models/user.model';
import { connectToDB } from '../mongodb';
import Diet from '../models/diet.model';

type CreateDietProps = {
  food: string;
  quantity: string;
  athlet: string;
  obs: string;
  time: string;
  day: string;
  author: string | undefined;
};

export async function CreateDiet({
  author,
  athlet,
  food,
  obs,
  day,
  quantity,
  time,
}: CreateDietProps) {
  try {
    await connectToDB();

    const create = await Diet.create({
      athlet,
      food,
      day,
      obs,
      quantity,
      time,
    });

    await User.findByIdAndUpdate(author, {
      $push: { diet: create },
    });

    revalidatePath('/gym');
  } catch (error: any) {
    throw new Error(`failed to create DIET ${error}`);
  }
}

export async function fetchDiet() {
  try {
    await connectToDB();

    const dietData = await Diet.find();

    revalidatePath('/gym');

    return JSON.parse(JSON.stringify(dietData));
  } catch (error: any) {
    throw new Error(`failed to fetch DIET ${error}`);
  }
}

export async function deleteDiet(author: string | undefined) {
  try {
    await connectToDB();

    await Diet.deleteOne({ _id: author });

    revalidatePath('/gym');
  } catch (error: any) {
    throw new Error(`failed to delete DIET ${error}`);
  }
}
