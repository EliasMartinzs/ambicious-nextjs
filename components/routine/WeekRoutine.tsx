import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TableType } from '@/types';

type Props = {
  day: string;
  table: TableType[];
};

export default function WeekRoutine({ day, table }: Props) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-x-5">
        <Table>
          <TableHeader className="bg-primary-500 shadow-inner-2">
            <TableRow>
              <TableHead>Exercisios</TableHead>
              <TableHead>Reps / Series</TableHead>
              <TableHead>Cardio</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.map(tab => (
              <TableRow key={tab.exercise}>
                <TableCell>{tab.exercise}</TableCell>
                <TableCell>
                  {tab.reps} / {tab.series}
                </TableCell>
                <TableCell>{tab.cardio}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
