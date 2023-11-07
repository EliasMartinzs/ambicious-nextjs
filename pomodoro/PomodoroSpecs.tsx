import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function PomodoroSpecs() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <h3 className="font-bold title mb-2">Pomodoro Timer</h3>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm font-medium">
          O que é a técnica Pomodoro Timer?
        </AccordionTrigger>
        <AccordionContent>
          <p className="font-light">
            O Pomodoro Timer não é um método de gerenciamento de tempo e
            produtividade recente, tampouco uma técnica que só pode ser
            utilizada com celulares e computadores.
          </p>
          <br />
          <p className="font-light">
            A técnica Pomodoro vem de lá dos anos 1980. Desenvolvida por
            Francesco Cirillo, o método é cíclico e consiste em separar as
            tarefas em pequenos intervalos de tempo, de 25 minutos, que podem
            ser chamados de “Pomodoros”.
          </p>
          <br />
          <p className="font-light">
            O método pode ser aplicado tanto no trabalho quanto no estudo para
            aumentar a concentração. A técnica também maximiza o tempo e a
            eficiência, e ajuda até mesmo a evitar atrasos e a obedecer prazos.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-sm font-medium">
          Como usar o Pomodoro Timer?
        </AccordionTrigger>
        <AccordionContent>
          <p className="font-light">
            O método Pomodoro não requer muitos aparatos, aplicativos ou
            soluções extremamente tecnológicas para ser utilizada. Como falamos
            anteriormente, ela não é nova, e muito menos depende de dispositivos
            “smart” para funcionar.
          </p>
          <br />
          <p className="font-light">
            Você só precisa de dois itens: um cronômetro e disciplina para
            obedecer os Pomodoros (períodos de 25 minutos) e as pausas.
          </p>
          <br />
          <p className="font-light">
            1. Pegue um cronômetro e marque 25 minutos;
            <br />
            2. Foque somente em uma atividade durante esse período;
            <br />
            3. Ao concluir o tempo, tire uma pausa curta, de pelo menos 5
            minutos;
            <br />
            4. Repita o processo quatro vezes;
            <br />
            5. Ao completar o ciclo, tire uma pausa mais longa, de 15 a 30
            minutos.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-sm font-medium">
          É certo para você?
        </AccordionTrigger>
        <AccordionContent className="overflow-y-scroll">
          <p className="font-light">
            A técnica não precisa de psicanálise complicada ou testes mentais
            para verificar sua eficácia futura em você. O único pré-requisito
            para usar a técnica Pomodoro é a sua intenção de melhorar. Se você
            realmente quer fazer progressos tangíveis em sua vida, o
            gerenciamento do tempo é o primeiro passo.
          </p>
          <br />
          <br />
          <p className="font-light">
            Distrai-se facilmente ao longo do dia, mesmo enquanto trabalha em
            projetos importantes
          </p>
          <br />
          <p className="font-light">
            Precisa trabalhar em projetos abertos, como uma tese de doutorado,
            preparação para um exame e blogs
          </p>
          <br />
          <p className="font-light">Acha difícil cumprir os prazos</p>
          <br />
          <p className="font-light">
            Tendem a trabalhar demais à medida que o prazo se aproxima, mas não
            conseguem otimizar a produtividade mais cedo
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
