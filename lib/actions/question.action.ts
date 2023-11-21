'use server';

import { revalidatePath } from 'next/cache';
import Question from '../models/question.models';
import User from '../models/user.model';
import { connectToDB } from '../mongodb';

connectToDB();

type QuestionType = {
  author: string;
  question: string;
  category: string;
  input: string;
  output: string;
  code: string;
  difficulty: string;
  description: string;
  explanation: string;
  path: string;
};

export const createQuestion = async ({
  author,
  category,
  code,
  input,
  output,
  question,
  difficulty,
  description,
  explanation,
  path,
}: QuestionType) => {
  try {
    const createdQuestion = await Question.create({
      category,
      author,
      code,
      input,
      output,
      question,
      difficulty,
      description,
      explanation,
    });

    await User.findByIdAndUpdate(author, {
      $push: { questions: createdQuestion },
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`failed to create question ${error}`);
  }
};

export const getQuestions = async () => {
  try {
    const getQuestion = await Question.find();

    return getQuestion;
  } catch (error: any) {
    throw new Error(`failed to fetch questions ${error}`);
  }
};

export const getQuestionsById = async (id: string) => {
  try {
    const getQuestionByID = await Question.findById(id);

    return getQuestionByID;
  } catch (error: any) {
    throw new Error(`failed to fetch questions by id ${error}`);
  }
};

export const deleteQuestion = async ({
  author,
  path,
}: {
  author: string;
  path: string;
}) => {
  try {
    await Question.deleteOne({ _id: author });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`failed to delete question ${error}`);
  }
};
