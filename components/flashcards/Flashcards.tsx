import FlashcardMenu from '@/components/flashcards/FlashcardMenu';
import { auth } from '@clerk/nextjs';
import { fetchUser } from '@/lib/actions/user.action';

export default async function Flashcard() {
  const { userId } = auth();
  const user = await fetchUser({ userId });

  return (
    <div>
      <FlashcardMenu user={user?._id.toString()} />
    </div>
  );
}
