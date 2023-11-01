'use client';

import { deleteMeta } from '@/lib/actions/meta.action';
import { X } from 'lucide-react';

export default function DeleteMeta({ author }: { author: string | undefined }) {
  console.log(author);
  const removeMeta = async () => {
    //@ts-ignore
    await deleteMeta({ author });
  };

  return <X onClick={removeMeta} className="cursor-pointer w-4 h-4" />;
}
