import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';

export default function Interrogation() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>
            <QuestionMarkCircledIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-[400px] h-auto bg-background">
          <p>
            O Índice de Massa Corporal (IMC) é uma medida usada para avaliar se
            uma pessoa está dentro de um peso saudável em relação à sua altura.
            É uma fórmula simples que relaciona o peso de alguém à sua altura.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
