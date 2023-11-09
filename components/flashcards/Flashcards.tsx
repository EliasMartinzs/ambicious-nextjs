import { auth } from '@clerk/nextjs';
import { fetchUser } from '@/lib/actions/user.action';
import FlashcardMenu from './FlashcardMenu';
import { fecthFlashcard } from '@/lib/actions/flashcard.action';
import { FlashcardType } from '@/types';

export default async function Flashcard() {
  const { userId } = auth();
  const user = await fetchUser({ userId });
  const flashcard = await fecthFlashcard();

  return (
    <div>
      <FlashcardMenu user={user?._id.toString()} flashcard={flashcard} />
    </div>
  );
}
