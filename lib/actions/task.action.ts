'use server';

import { revalidatePath } from 'next/cache';
import Task from '../models/taks.models';
import User from '../models/user.model';
import { connectToDB } from '../mongodb';

connectToDB();

interface ParamsCreateTasks {
  text: string;
  author: string | undefined;
  path: string;
  day: string;
}

interface ParamsChecked {
  isSelected: boolean;
  author: string;
  path: string;
}

interface ParamsDeleteTask {
  author: string;
  path: string;
}

export async function createTasks({
  author,
  path,
  text,
  day,
}: ParamsCreateTasks) {
  try {
    const createdThread = await Task.create({
      text,
      author,
      community: null,
      dayOfWeek: day,
    });

    await User.findByIdAndUpdate(author, {
      $push: { tasks: createdThread },
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`failed create thread ${error.message}`);
  }
}

export async function getTask() {
  try {
    const task = await Task.find();

    return task;
  } catch (error) {}
}

export async function checkedTask({
  isSelected,
  author,
  path,
}: ParamsChecked): Promise<void> {
  try {
    await Task.updateOne({ _id: author }, { $set: { isSelected: isSelected } });

    if (path === '/') {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

export async function deleteTask({ author, path }: ParamsDeleteTask) {
  try {
    await Task.deleteOne({ _id: author });

    if (path === '/') {
      revalidatePath('/');
    }
  } catch (error) {}
}
