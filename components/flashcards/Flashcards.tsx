import { auth } from '@clerk/nextjs';
import { fetchUser } from '@/lib/actions/user.action';
import FlashcardMenu from './FlashcardMenu';
import { fecthFlashcard } from '@/lib/actions/flashcard.action';

export default async function Flashcards() {
  const { userId } = auth();
  const user = await fetchUser({ userId });
  const flashcard = await fecthFlashcard();

  return (
    <div className="w-full h-full text-center">
      <h3 className="title font-bold">Criar um novo Flashcard</h3>
      <div className="w-full h-full flex-center">
        <FlashcardMenu user={user?._id.toString()} flashcard={flashcard} />
      </div>
    </div>
  );
}
