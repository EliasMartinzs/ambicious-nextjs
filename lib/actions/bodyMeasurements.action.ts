'use server';

import { revalidatePath } from 'next/cache';
import BodyMeasurements from '../models/bodyMeasurements.model';
import User from '../models/user.model';
import { connectToDB } from '../mongodb';

connectToDB();

type CreateBodyMeasurementsProps = {
  chest: number;
  bicepsLeft: number;
  bicepsRight: number;
  legLeft: number;
  legRight: number;
  waist: number;
  calfLeft: number;
  calfRight: number;
  date: Date | undefined;
  author: string | undefined;
};

export async function createBodyMeasurements({
  chest,
  bicepsLeft,
  bicepsRight,
  legLeft,
  legRight,
  waist,
  calfLeft,
  calfRight,
  date,
  author,
}: CreateBodyMeasurementsProps) {
  try {
    const create = await BodyMeasurements.create({
      chest,
      bicepsLeft,
      bicepsRight,
      legLeft,
      legRight,
      waist,
      calfLeft,
      calfRight,
      date,
    });

    await User.findByIdAndUpdate(author, {
      $push: { bodyMeasurements: create },
    });

    revalidatePath('/gym');
  } catch (error: any) {
    throw new Error(`failed create BODY MEANSUREMENTS ${error.message}`);
  }
}

export async function fetchBodyMeasurements() {
  try {
    const bodyMeasurements = await BodyMeasurements.find();

    return JSON.parse(JSON.stringify(bodyMeasurements));
  } catch (error: any) {
    throw new Error(`failed to fetch flashcard ${error}`);
  }
}
