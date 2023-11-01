import { DateRange } from 'react-day-picker';
import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MetaValidation } from '@/lib/validations/user';
import * as z from 'zod';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { DatePickerWithRange } from '../config/DatePickerWithRange';

type Props = {
  onNext: () => void;
  date: DateRange | undefined;
  setDate: Dispatch<SetStateAction<DateRange | undefined>>;
  category: {
    title: string;
  };
};

type Validation = z.infer<typeof MetaValidation>;

const Step2 = ({ onNext, date, setDate, category }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Validation>();
  const onSubmit: SubmitHandler<Validation> = data => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>Qual o seu objetivo?</Label>
      <Input
        className="input-2"
        {...register('meta', {
          required: true,
        })}
        placeholder={category.title}
        onChange={e =>
          setValue('meta', e.target.value, {
            shouldValidate: true,
            shouldDirty: true,
          })
        }
      />
      {errors.category && errors.category.type === 'required' && (
        <span>This is required</span>
      )}
      <br />
      <Label>Nota?</Label>
      <Input
        className="input-2"
        {...register('descriptio', { required: true })}
        placeholder={`Ex: Como posso conseguir isso ${category.title}`}
        onChange={e =>
          setValue('descriptio', e.target.value, {
            shouldValidate: true,
            shouldDirty: true,
          })
        }
      />
      <br />
      <DatePickerWithRange date={date} setDate={setDate} />
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
