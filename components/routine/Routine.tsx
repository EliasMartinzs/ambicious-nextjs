import React from 'react';
import Filters from './Filters';
import { auth } from '@clerk/nextjs';
import { fetchUser } from '@/lib/actions/user.action';
import { fetchExercises } from '@/lib/actions/exercise.action';
import {
  BodyBasicsType,
  BodyMeasurementsType,
  DietType,
  TableType,
} from '@/types';
import { fetchDiet } from '@/lib/actions/diet.actions';
import Body from '../body/Body';
import { fetchBodyMeasurements } from '@/lib/actions/bodyMeasurements.action';
import { fetchBodyBasics } from '@/lib/actions/bodyBasics.action';
import Separator from '../Shared/Separator';
import Comparations from '../body/Comparations';

export default async function Routine() {
  const { userId } = auth();
  const user = await fetchUser({ userId });
  const exercises: TableType[] = await fetchExercises();
  const diets: DietType[] = await fetchDiet();
  const bodyMeasurements: BodyMeasurementsType[] =
    await fetchBodyMeasurements();
  const bodyBasics: BodyBasicsType[] = await fetchBodyBasics();

  return (
    <div className="paddings pb-10">
      <Filters
        author={user?._id.toString()}
        exercises={exercises}
        diets={diets}
      />
      <br />
      <h3 className="title font-bold">Corpo</h3>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-10">
        <Body
          author={user?._id.toString()}
          bodyData={bodyMeasurements}
          bodyBasics={bodyBasics}
        />

        <div>
          <Comparations bodyMeasurements={bodyMeasurements} />
        </div>
      </div>
    </div>
  );
}
