import { auth } from '@clerk/nextjs';
import AddMeta from '../Shared/AddMeta';
import { fetchUser } from '@/lib/actions/user.action';
import { fetchMeta } from '@/lib/actions/meta.action';

import DeleteMeta from '../crud/DeleteMeta';

export default async function Metas() {
  const { userId } = auth();
  const author = await fetchUser({ userId });
  const metas = await fetchMeta();

  console.log(metas);

  function formatDate(dataString: string) {
    const data = new Date(dataString);
    const day = data.getDate();
    const month = data.getMonth() + 1;
    const year = data.getFullYear();

    const dayFormatado = day < 10 ? `0${day}` : day;
    const monthFormatado = month < 10 ? `0${month}` : month;

    return `${dayFormatado}/${monthFormatado}/${year}`;
  }

  return (
    <div className="w-full pr-2 md:pr-5 lg:pr-10 xl:pr-14 2xl:pr-20">
      <div className="flex gap-x-5 items-center">
        <div className="flex items-center gap-x-3">
          <h3 className="font-bold text-lg md:text-xl">Metas</h3>
          <AddMeta author={author?._id.toString()} />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {metas &&
          metas.map(meta => (
            <div
              key={meta?.meta}
              className="w-full border border-primary-500 shadow-3xl p-5 rounded-xl relative"
            >
              <h3 className="font-bold text-xl text-center py-2">
                {meta?.meta}
              </h3>

              <div className="w-full flex flex-col gap-y-3">
                <span className="flex flex-col">
                  <p className="font-semibold text-lg py-1">
                    Qual o seu objetivo?
                  </p>
                  <p className="px-3 font-light">{meta?.category}</p>
                </span>
                <span className="flex flex-col">
                  <p className="font-semibold text-lg py-1">
                    Por que essa meta é importante?
                  </p>
                  <p className="px-3 font-light">{meta?.description}</p>
                </span>
                <span className="flex flex-col">
                  <p className="font-semibold text-lg py-1">
                    Inicio e data limite?
                  </p>
                  <p className="px-3 flex gap-x-3 font-light">
                    {formatDate(meta?.dateFrom)} - {formatDate(meta?.dateTo)}
                  </p>
                </span>
                <span className="flex flex-col">
                  <p className="font-semibold text-lg py-1">Categoria</p>
                  <p className="px-3 font-light">{meta?.category}</p>
                </span>
              </div>

              <DeleteMeta author={meta?._id.toString()} />
            </div>
          ))}
      </div>
    </div>
  );
}