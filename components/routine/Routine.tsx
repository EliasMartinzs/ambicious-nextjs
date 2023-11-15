import React from 'react';
import Filters from './Filters';
import { auth } from '@clerk/nextjs';
import { fetchUser } from '@/lib/actions/user.action';
import { fetchExercises } from '@/lib/actions/exercise.action';
import { BodyMeasurementsType, DietType, TableType } from '@/types';
import { fetchDiet } from '@/lib/actions/diet.actions';
import Body from '../body/Body';
import { fetchBodyMeasurements } from '@/lib/actions/bodyMeasurements.action';

export default async function Routine() {
  const { userId } = auth();
  const user = await fetchUser({ userId });
  const exercises: TableType[] = await fetchExercises();
  const diets: DietType[] = await fetchDiet();
  const bodyData: BodyMeasurementsType[] = await fetchBodyMeasurements();

  return (
    <div className="paddings">
      <Filters
        author={user?._id.toString()}
        exercises={exercises}
        diets={diets}
      />
      <br />
      <Body author={user?._id.toString()} bodyData={bodyData} />
    </div>
  );
}
