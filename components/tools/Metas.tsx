'use client';
import { useForm } from 'react-hook-form';
import AddMeta from '../Shared/AddMeta';
import Progressbar from '../Shared/Progressbar';
import { zodResolver } from '@hookform/resolvers/zod';
import { MetaValidation } from '@/lib/validations/user';
import z from 'zod';

type Validation = z.infer<typeof MetaValidation>;

export default function Metas() {
  const { getValues } = useForm<Validation>({
    resolver: zodResolver(MetaValidation),
  });

  // const { category, descriptio, meta } = getValues();

  // const metaInfo = {
  //   category: category,
  //   meta: meta,
  //   description: descriptio,
  // };

  console.log(getValues('category'));

  return (
    <div className="w-full">
      <div className="flex gap-x-5 items-center">
        <div className="flex items-center gap-x-3">
          <h3 className="font-bold text-lg md:text-xl">Metas</h3>
          <AddMeta />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="w-full border border-primary-500/70 p-5 rounded-2xl">
          <h3 className="font-bold text-xl text-center py-2">Treino Anual</h3>

          <div className="w-full flex flex-col gap-y-3">
            <span className="flex flex-col">
              <p className="font-semibold text-lg py-1">Qual o seu objetivo?</p>
              <p className="px-3 font-light">Shape ate o final do ano</p>
            </span>
            <span className="flex flex-col">
              <p className="font-semibold text-lg py-1">Progresso</p>
              <span className="flex gap-x-5">
                <Progressbar progress={80} /> 80%
              </span>
            </span>
            <span className="flex flex-col">
              <p className="font-semibold text-lg py-1">
                Por que essa meta é importante?
              </p>
              <p className="px-3 font-light">Saúde e Bem-estar</p>
            </span>
            <span className="flex flex-col">
              <p className="font-semibold text-lg py-1">
                Inicio e data limite?
              </p>
              <p className="px-3 font-light">
                November 15th, 2020–November 19th, 2020
              </p>
            </span>
            <span className="flex flex-col">
              <p className="font-semibold text-lg py-1">Categoria</p>
              <p className="px-3 font-light">Exercicio</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
