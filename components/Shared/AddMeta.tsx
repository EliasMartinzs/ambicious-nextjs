import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import StepByStep from '../steps/StepByStep';

export default function AddMeta() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent className="border-none shadow-2xl bg-black/50">
        <DialogHeader>
          <DialogTitle>Criação de meta</DialogTitle>
        </DialogHeader>

        <div className="">
          <StepByStep />
        </div>
      </DialogContent>
    </Dialog>
  );
}
