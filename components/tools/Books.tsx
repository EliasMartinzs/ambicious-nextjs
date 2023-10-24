import { getBooks } from '@/lib/actions/book.action';
import AddBook from '../Shared/AddBook';
import { Rating, ThinStar } from '@smastrom/react-rating';
import Image from 'next/image';

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fff',
};

export default async function Books({ user }: { user: any }) {
  const books = await getBooks();

  return (
    <div className="w-full flex flex-col">
      <div className="flex-between w-full md:pr-10">
        <h3 className="font-bold text-lg md:text-xl">Meus Livros</h3>
        <AddBook user={user} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-5 gap-10">
        {books.map(book => (
          <div className="w-full">
            <div className="w-full h-52 relative mb-2">
              <Image
                alt={book.title}
                fill
                className="object-contain object-center"
                src={book.thumbs}
              />
            </div>
            <h1 className="text-lg font-medium">{book.title}</h1>
            <Rating
              style={{ maxWidth: 80 }}
              value={book.avaliation}
              itemStyles={myStyles}
              readOnly
            />
          </div>
        ))}
      </div>
    </div>
  );
}
