import { Input } from '../ui/input';
import { categoryFields } from '@/constants';

type Props = {
  onNext: () => void;
  changeHandler: (e: any) => void;
  category: string;
};

const Step2 = ({ onNext, changeHandler, category }: Props) => {
  return (
    <div>
      <h1>Passo 2: Preencha informações adicionais</h1>
      <form className="flex flex-col gap-y-4">
        {categoryFields[category].map(cat => (
          <Input
            key={cat.fieldName}
            type="text"
            name={cat.fieldName}
            placeholder={`Campo para ${cat.fieldName}`}
            onChange={changeHandler}
            className="input"
          />
        ))}
        <button type="submit">salvar</button>
      </form>
    </div>
  );
};

export default Step2;
