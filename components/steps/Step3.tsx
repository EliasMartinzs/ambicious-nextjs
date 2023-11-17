import { useForm } from 'react-hook-form';

const Step3 = ({ onNext }: { onNext: any }) => {
  const { handleSubmit } = useForm();

  const onSubmit = (data: any) => {
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
