import { auth } from '@clerk/nextjs';
import { fetchUser } from '@/lib/actions/user.action';
import FlashcardMenu from './FlashcardMenu';
import { fecthFlashcard } from '@/lib/actions/flashcard.action';
import { FlashcardType } from '@/types';
import Flashcard from './Flashcard';

export default async function Flashcards() {
  const { userId } = auth();
  const user = await fetchUser({ userId });
  const flashcard = await fecthFlashcard();

  return (
    <>
      <FlashcardMenu user={user?._id.toString()} flashcard={flashcard} />
      <div className="h-full flex-center">
        {Array.isArray(flashcard) ? (
          <>
            {flashcard
              .filter((_, index) => index < 1)
              .map((card: FlashcardType) => (
                <Flashcard key={card.title} flashcard={card} />
              ))}
          </>
        ) : null}
      </div>
    </>
  );
}
