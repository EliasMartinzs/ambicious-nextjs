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
  const [difference, setDifference] = useState<DifferenceType[]>([]);

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

  return (
    <div className="w-full flex-center flex-col">
      <h3 className="paragraph font-medium py-3">Comparações</h3>
      <div className="flex gap-x-5">
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
        >
          Comparar
        </Button>
      </div>
    </div>
  );
}
