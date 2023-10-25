import { getQuestionsById } from '@/lib/actions/question.action';

export default async function Page({ params }: { params: { id: string } }) {
  const question = await getQuestionsById(params.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 paddings">
      <div className="w-full h-screen bg-black/20 rounded-2xl">
        <h3 className="text-lg font-medium px-10 pt-10"></h3>
      </div>
      <div className="">2</div>
    </div>
  );
}
