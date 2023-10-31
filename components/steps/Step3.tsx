// components/Step1.tsx
import { useForm } from 'react-hook-form';

const Step3 = ({ onNext }: { onNext: any }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    // Faça algo com os dados do formulário
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>step 3</p>
      <button type="submit">Próximo</button>
    </form>
  );
};

export default Step3;
