'use server';

import Question from '../models/question.models';
import User from '../models/user.model';
import { connectToDB } from '../mongodb';

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
}: QuestionType) => {
  try {
    connectToDB();

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
  } catch (error: any) {
    throw new Error(`failed to create question ${error}`);
  }
};

export const getQuestions = async () => {
  try {
    connectToDB();

    const getQuestion = await Question.find();

    return getQuestion;
  } catch (error: any) {
    throw new Error(`failed to fetch questions ${error}`);
  }
};

export const getQuestionsById = async (id: string) => {
  try {
    connectToDB();

    const getQuestionByID = await Question.findById(id);

    return getQuestionByID;
  } catch (error: any) {
    throw new Error(`failed to fetch questions by id ${error}`);
  }
};
