'use server';

import { revalidatePath } from 'next/cache';
import Basics from '../models/bodyBasics';
import User from '../models/user.model';
import { connectToDB } from '../mongodb';

type CreateBodyBasicsProps = {
  height: number;
  weight: number;
  age: number;
  imc:
    | ''
    | {
        imc: number;
        condition: string;
      };
  author: string | undefined;
};

export const createBodyBasics = async ({
  height,
  weight,
  age,
  imc,
  author,
}: CreateBodyBasicsProps) => {
  try {
    await connectToDB();

    const create = await Basics.create({
      height,
      weight,
      age,
      imc,
    });

    await User.findByIdAndUpdate(author, {
      $push: { bodyBasics: create },
    });

    revalidatePath('/gym');
  } catch (error: any) {
    throw new Error(`failed to create BODY BASICS ${error}`);
  }
};

export const fetchBodyBasics = async () => {
  try {
    await connectToDB();

    const basicsData = await Basics.find();

    return JSON.parse(JSON.stringify(basicsData));
  } catch (error: any) {
    throw new Error(`failed to fetch BODY BASICS ${error}`);
  }
};
