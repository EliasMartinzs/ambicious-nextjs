import { getQuestionsById } from '@/lib/actions/question.action';

export default async function Page({ params }: { params: { id: string } }) {
  const question = await getQuestionsById(params.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 paddings">
      <div className="w-full bg-black/20 rounded-2xl px-10 py-10">
        <h3 className="font-black py-5">{question?.question}</h3>
        <span className="w-full flex gap-x-5 pb-5 capitalize font-extralight">
          <p>{question?.difficulty}</p>
          <p>{question?.category}</p>
        </span>
        <p className="text-font-extralight">{question?.description}</p>
        <div className="flex-start flex-col gap-y-1 text-sm border-l pl-5 mt-5 border-slate-300/50">
          <p> Entrada: {question?.input}</p>
          <p>Saida: {question?.output}</p>
          <p> Explicacao:{question?.explanation}</p>
        </div>
      </div>
      <div className="w-full bg-black/10 rounded-2xl px-10 py-10">
        <h3 className="font-black py-5">Resolução da Questões</h3>
        <p>{question?.code}</p>
      </div>
    </div>
  );
}
