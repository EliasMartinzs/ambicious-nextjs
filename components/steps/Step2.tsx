import { Dispatch, SetStateAction } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { MetaValidation } from '@/lib/validations/user';
import * as z from 'zod';

import { Label } from '../ui/label';
import { DatePickerWithRange } from '../config/DatePickerWithRange';
import { MetaInfoProps } from './StepByStep';
import { createMeta } from '@/lib/actions/meta.action';

import Toast from '../Shared/Toast';

type Props = {
  metaInfo: MetaInfoProps;
  setMetaInfo: Dispatch<SetStateAction<MetaInfoProps>>;
  author: string | undefined;
};

type Validation = z.infer<typeof MetaValidation>;

const Step2 = ({ metaInfo, setMetaInfo, author }: Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Validation>();

  const onSubmit: SubmitHandler<Validation> = async e => {
    await createMeta({
      author: author,
      category: metaInfo.category || '',
      dateFrom: metaInfo.date?.from?.toString() || undefined,
      dateTo: metaInfo.date?.to?.toString() || undefined,
      description: metaInfo.description || '',
      meta: metaInfo.meta || '',
    });
  };

  const onChangeMeta = (field: string, value: string) => {
    setMetaInfo(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <>
      <div className="flex-center w-full my-5 gap-x-5">
        <span className="w-3 h-3 rounded-full bg-slate-300/40" />
        <span className="w-3 h-3 rounded-full bg-primary-500" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
        <span className="flex flex-col">
          <Label>Qual o seu objetivo?</Label>
          <Controller
            name="meta"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder={metaInfo.category}
                onChange={e => onChangeMeta('meta', e.target.value)}
                className="input-2 p-4"
              />
            )}
          />
          {errors.meta && <p>{errors.meta.message}</p>}
        </span>
        <span className="flex flex-col">
          <Label>Por que essa meta é importante?</Label>
          <Controller
            name="descriptio"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder={metaInfo.category}
                onChange={e => onChangeMeta('description', e.target.value)}
                className="input-2 p-4"
              />
            )}
          />
          {errors.meta && <p>{errors.meta.message}</p>}
        </span>
        <span className="flex flex-col">
          <Label>Escolha a data de inicio e fim de sua meta!</Label>
          <DatePickerWithRange metaInfo={metaInfo} setMetaInfo={setMetaInfo} />
        </span>
        <Toast
          dialog="Meta Adicionada."
          classname="bg-primary-500 hover:bg-primary-600 rounded-2xl mt-3"
          textButton="Adicionar Meta"
        />
      </form>
    </>
  );
};

export default Step2;
