import { categoriesMeta } from '@/constants';
import Image from 'next/image';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Dispatch, SetStateAction, useState } from 'react';
import { MetaValidation } from '@/lib/validations/user';
import z from 'zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { ca } from 'date-fns/locale';
import { FormControl } from '../ui/form';
import { sub } from 'date-fns';
import { Subtitles } from 'lucide-react';

type Props = {
  onNext: () => void;
  setCategory: Dispatch<SetStateAction<{ title: string }>>;
};

type Validation = z.infer<typeof MetaValidation>;

const Step1 = ({ onNext, setCategory }: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<Validation>();

  const onSubmit: SubmitHandler<Validation> = data => {
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-between w-full">
      <select
        defaultValue=""
        className="bg-transparent p-2 border-b"
        {...register('category', { required: true })}
        // onChange={e =>
        //   setCategory({
        //     title: e.target.value,
        //   })
        // }
        onChange={e =>
          setValue('category', e.target.value, {
            shouldValidate: true,
            shouldDirty: true,
          })
        }
      >
        <option value="" disabled className="font-black py-2">
          Selecione a categoria
        </option>
        {categoriesMeta.map(category => (
          <option
            key={category.title}
            value={category.title}
            className="bg-primary-500 border-b font-black my-5"
          >
            {category.title}
          </option>
        ))}
      </select>
      {/* <button
        type="button"
        onClick={() =>
          setValue('category', 'category', {
            shouldValidate: true,
            shouldDirty: true,
          })
        }
      >
        heheheh
      </button> */}
      <Button
        className="border-b font-bold hover:bg-white hover:font-black hover:shadow-2xl hover:text-primary-600"
        type="submit"
      >
        Proxímo
      </Button>
    </form>
  );
};

export default Step1;
