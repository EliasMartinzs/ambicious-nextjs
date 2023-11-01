import { Dispatch, SetStateAction } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { MetaValidation } from '@/lib/validations/user';
import * as z from 'zod';

import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { DatePickerWithRange } from '../config/DatePickerWithRange';
import { MetaInfoProps } from './StepByStep';

type Props = {
  onNext: () => void;
  metaInfo: MetaInfoProps;
  setMetaInfo: Dispatch<SetStateAction<MetaInfoProps>>;
};

type Validation = z.infer<typeof MetaValidation>;

const Step2 = ({ onNext, metaInfo, setMetaInfo }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Validation>();
  const onSubmit: SubmitHandler<Validation> = data => {};

  const onChangeMeta = (field: string, value: string) => {
    setMetaInfo(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <span className="flex flex-col">
        <Label>Qual o seu objetivo?</Label>
        <Controller
          name="meta"
          control={control}
          rules={{ required: 'Este campo é obrigatório' }}
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
          rules={{ required: 'Este campo é obrigatório' }}
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
      <Button
        className="border-b font-bold hover:bg-white hover:font-black hover:shadow-2xl hover:text-primary-600 mt-5"
        type="submit"
      >
        Adicionar Meta
      </Button>
    </form>
  );
};

export default Step2;
