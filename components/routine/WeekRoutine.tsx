import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { deleteExercise } from '@/lib/actions/exercise.action';
import { DietType, TableType } from '@/types';
import Toast from '../Shared/Toast';
import { Button } from '../ui/button';
import { deleteDiet } from '@/lib/actions/diet.actions';
import Calendary from '../Shared/Calendary';

type Props = {
  day: string;
  exercises: TableType[];
  diets: DietType[];
};

export default function WeekRoutine({ day, exercises, diets }: Props) {
  const exerciseFiltered = exercises.filter(exercise => exercise.day === day);
  const dietFiltered = diets.filter(diet => diet.day === day);

  const removeExercise = async (author: string | undefined) => {
    await deleteExercise(author);
  };

  const removeDiet = async (author: string | undefined) => {
    await deleteDiet(author);
  };

  return (
    <div className="flex flex-col gap-y-10">
      <div className="w-full flex max-sm:flex-col">
        <div className="md:w-3/4">
          <h3 className="text-start paragraph font-bold my-5">{day}</h3>
          <Table>
            <TableHeader className="bg-primary-500 shadow-inner-2 text-white font-black">
              <TableRow>
                <TableHead>Membro</TableHead>
                <TableHead className="max-sm:pr-36">Exercisios</TableHead>
                <TableHead>Reps / Series</TableHead>
                <TableHead>Peso</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {exerciseFiltered.map(tab => (
                <TableRow key={tab.exercise} className="relative">
                  <TableCell>{tab.muscle}</TableCell>
                  <TableCell className="flex-between">{tab.exercise}</TableCell>
                  <TableCell>
                    {tab.reps} / {tab.series}
                  </TableCell>
                  <TableCell>{tab.cardio} Kg</TableCell>
                  <Button
                    onClick={() => removeExercise(tab._id)}
                    className="absolute top-2 right-0"
                  >
                    <Toast
                      dialog="Exercisio Removido"
                      textButton="x"
                      classname="hover:bg-transparent text-red-500 bg-transparent p-0"
                    />
                  </Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="max-sm:hidden md:w-1/4 flex-center">
          <Calendary />
        </div>
      </div>
      <div>
        <h3 className="text-start paragraph font-bold my-5">
          {day} / Dieta do Dia
        </h3>
        <Table>
          <TableHeader className="bg-primary-500 shadow-inner-2 text-white font-black">
            <TableRow>
              <TableHead>Horário</TableHead>
              <TableHead className="max-sm:pr-36">Comida</TableHead>
              <TableHead className="max-sm:pr-10">Quantidade </TableHead>
              <TableHead>Atleta</TableHead>
              <TableHead className="max-sm:pr-36">Observações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dietFiltered.map(diet => (
              <TableRow key={diet.food} className="relative">
                <TableCell>{diet.time}</TableCell>
                <TableCell>{diet.food}</TableCell>
                <TableCell>{diet.quantity} Gramas</TableCell>
                <TableCell>{diet.athlet}</TableCell>
                <TableCell>{diet.obs}</TableCell>
                <Button
                  onClick={() => removeExercise(diet._id)}
                  className="absolute top-2 right-2"
                >
                  <Toast
                    dialog="Exercisio Removido"
                    textButton="x"
                    classname="hover:bg-transparent text-red-500 bg-transparent p-0"
                  />
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
