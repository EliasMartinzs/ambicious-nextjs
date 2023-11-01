'use server';

import { DateRange } from 'react-day-picker';
import Meta from '../models/meta.models';
import User from '../models/user.model';
import { connectToDB } from '../mongodb';
import { revalidatePath } from 'next/cache';

type MetaProps = {
  meta: string;
  category: string;
  description: string;
  dateFrom: string | undefined;
  dateTo: string | undefined;
  author: string | undefined;
};

export async function createMeta({
  author,
  category,
  dateFrom,
  dateTo,
  description,
  meta,
}: MetaProps) {
  try {
    connectToDB();

    const create = await Meta.create({
      category,
      dateFrom,
      dateTo,
      description,
      meta,
    });

    await User.findByIdAndUpdate(author, {
      $push: { metas: create },
    });
    revalidatePath('/');
  } catch (error: any) {
    throw new Error(`failed create META ${error.message}`);
  }
}

export const fetchMeta = async () => {
  try {
    connectToDB();

    const meta = await Meta.find();

    return meta;
  } catch (error: any) {
    throw new Error(`failed to fetch META ${error}`);
  }
};

export async function deleteMeta({ author }: { author: string }) {
  try {
    connectToDB();

    await Meta.deleteOne({ _id: author });

    if ('/' === '/') {
      revalidatePath('/');
    }
  } catch (error) {}
}
