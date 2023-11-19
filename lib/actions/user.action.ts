'use server';

import { revalidatePath } from 'next/cache';
import User from '../models/user.model';
import { connectToDB } from '../mongodb';
import Task from '../models/taks.models';
import { UserType } from '@/types';

interface Params {
  userId?: string;
  username?: string;
  name?: string;
  bio?: string;
  image?: string;
  path?: string;
  onboarded?: boolean;
}

export async function updateUser({
  userId,
  bio,
  name,
  path,
  username,
  image,
  onboarded,
}: Params): Promise<void> {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { id: userId },
      {
        username,
        name,
        bio,
        image,
        onboarded,
      },
      { upsert: true },
    );

    revalidatePath('/');
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

export async function fetchUser({
  userId,
}: {
  userId: string | null | undefined;
}): Promise<UserType | null> {
  try {
    connectToDB();

    return await User.findOne({ id: userId });
  } catch (error: any) {
    throw new Error(`Failed to fetch user:${error.message}`);
  }
}

export async function fetchUserPost(userId: string) {
  try {
    connectToDB();

    const tasks = await User.findOne({ id: userId }).populate({
      path: 'tasks',
      model: Task,
      populate: {
        path: 'children',
        model: Task,
        populate: {
          path: 'author',
          model: User,
          select: 'name image id',
        },
      },
    });

    return tasks;
  } catch (error: any) {
    throw new Error(`failed fetch user post ${error.message}`);
  }
}
