import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import StepByStep from '../steps/StepByStep';
import { FilePlus } from 'lucide-react';

export default function AddMeta({ author }: { author: string | undefined }) {
  return (
    <Dialog>
      <DialogTrigger>
        <FilePlus />
      </DialogTrigger>
      <DialogContent className="max-w-2xl border-t-8 border-t-primary-700 shadow-inner-2">
        <DialogHeader>
          <DialogTitle className="text-center w-full font-black text-lg">
            Criação de Meta
          </DialogTitle>
        </DialogHeader>
        <div>
          <StepByStep author={author} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
