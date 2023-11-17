'use client';

import { BodyMeasurementsType } from '@/types';
import { useState } from 'react';
import CheckComparation from './CheckComparation';
import { Button } from '../ui/button';
import { DifferenceType } from '@/types/index';

type Props = {
  bodyMeasurements: BodyMeasurementsType[];
};

export default function Comparations({ bodyMeasurements }: Props) {
  const [progress, setProgress] = useState<any>([]);
  const [difference, setDifference] = useState<DifferenceType>({
    _id: {
      before: '',
      after: '',
    },
    chest: { before: 0, after: 0 },
    bicepsLeft: { before: 0, after: 0 },
    bicepsRight: { before: 0, after: 0 },
    legLeft: { before: 0, after: 0 },
    legRight: { before: 0, after: 0 },
    waist: { before: 0, after: 0 },
    calfLeft: { before: 0, after: 0 },
    calfRight: { before: 0, after: 0 },
    date: {
      before: '',
      after: '',
    },
  });

  function compararMedidas({
    medidasAnteriores,
    medidasAtuais,
  }: {
    medidasAnteriores: BodyMeasurementsType[];
    medidasAtuais: BodyMeasurementsType[];
  }) {
    let mudancas: any = {};

    for (const medida in medidasAtuais) {
      if (medidasAnteriores.hasOwnProperty(medida)) {
        if (medidasAtuais[medida] !== medidasAnteriores[medida]) {
          mudancas[medida] = {
            before: medidasAnteriores[medida],
            after: medidasAtuais[medida],
          };
        }
      }
    }

    setDifference(mudancas);
  }

  const updateProgress = (key: string, id: string) => {
    const findedItem = bodyMeasurements.find(item => item._id === id);

    setProgress((prevProgress: any) => ({
      ...prevProgress,
      [key]: findedItem,
    }));
  };

  const {
    chest,
    bicepsLeft,
    bicepsRight,
    legLeft,
    legRight,
    waist,
    calfLeft,
    calfRight,
    date,
  } = difference;

  const gains = (before: number, after: number) => {
    if (after > before) {
      return `Ganho de ${after - before} cm`;
    } else {
      return `Perda de ${before - after} cm`;
    }
  };

  return (
    <div className="w-full flex-center flex-col gap-y-5">
      <h3 className="paragraph font-medium py-2 border-b-2 border-primary-500">
        Comparações
      </h3>

      <div className="flex flex-col lg:flex-row gap-5">
        <CheckComparation
          bodyMeasurements={bodyMeasurements}
          name="progressBefore"
          updateProgress={updateProgress}
        />
        <CheckComparation
          bodyMeasurements={bodyMeasurements}
          name="progressAfter"
          updateProgress={updateProgress}
        />
        <Button
          onClick={() =>
            compararMedidas({
              medidasAnteriores: progress.progressBefore,
              medidasAtuais: progress.progressAfter,
            })
          }
          className="bg-primary-500 rounded-lg hover:bg-primary-700 hover:font-black transition-colors text-foreground-50 hover:rounded-xl font-bold"
        >
          Comparar
        </Button>
      </div>

      <div className="md:w-[500px]">
        {
          <div className="w-full h-full flex-center">
            <table className="fl-table text-sm">
              <thead>
                <tr>
                  <th>Musculo</th>
                  <th>Antes</th>
                  <th>Depois</th>
                  <th>Cm</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Peito</td>
                  <td>{chest?.before}</td>
                  <td>{chest?.after}</td>
                  <td>{gains(chest?.before, chest?.after)}</td>
                </tr>
                <tr>
                  <td>Biceps Esq</td>
                  <td>{bicepsLeft?.before}</td>
                  <td>{bicepsLeft?.after}</td>
                  <td>{gains(bicepsLeft?.before, bicepsLeft?.after)}</td>
                </tr>
                <tr>
                  <td>Biceps Dir</td>
                  <td>{bicepsRight?.before}</td>
                  <td>{bicepsRight?.after}</td>
                  <td>{gains(bicepsRight?.before, bicepsRight?.after)}</td>
                </tr>
                <tr>
                  <td>Perna Esq</td>
                  <td>{legLeft?.before}</td>
                  <td>{legLeft?.after}</td>
                  <td>{gains(legLeft?.before, legLeft?.after)}</td>
                </tr>
                <tr>
                  <td>Perna DIr</td>
                  <td>{legRight?.before}</td>
                  <td>{legRight?.after}</td>
                  <td>{gains(legRight?.before, legRight?.after)}</td>
                </tr>
                <tr>
                  <td>Cintura</td>
                  <td>{waist?.before}</td>
                  <td>{waist?.after}</td>
                  <td>{gains(waist?.before, waist?.after)}</td>
                </tr>
                <tr>
                  <td>Panturrilha Esq</td>
                  <td>{calfLeft?.before}</td>
                  <td>{calfLeft?.after}</td>
                  <td>{gains(calfLeft?.before, calfLeft?.after)}</td>
                </tr>
                <tr>
                  <td>Panturrilha Dir</td>
                  <td>{calfRight?.before}</td>
                  <td>{calfRight?.after}</td>
                  <td>{gains(calfRight?.before, calfRight?.after)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>
  );
}
