import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function PomodoroSpecs() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <h3 className="font-bold text-2xl mb-2">Pomodoro Timer</h3>
      <AccordionItem value="item-1">
        <AccordionTrigger>O que é a técnica Pomodoro Timer?</AccordionTrigger>
        <AccordionContent>
          <small>
            O Pomodoro Timer não é um método de gerenciamento de tempo e
            produtividade recente, tampouco uma técnica que só pode ser
            utilizada com celulares e computadores.
          </small>
          <br />
          <small>
            A técnica Pomodoro vem de lá dos anos 1980. Desenvolvida por
            Francesco Cirillo, o método é cíclico e consiste em separar as
            tarefas em pequenos intervalos de tempo, de 25 minutos, que podem
            ser chamados de “Pomodoros”.
          </small>
          <br />
          <small>
            O método pode ser aplicado tanto no trabalho quanto no estudo para
            aumentar a concentração. A técnica também maximiza o tempo e a
            eficiência, e ajuda até mesmo a evitar atrasos e a obedecer prazos.
          </small>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Como usar o Pomodoro Timer?</AccordionTrigger>
        <AccordionContent>
          <small>
            O método Pomodoro não requer muitos aparatos, aplicativos ou
            soluções extremamente tecnológicas para ser utilizada. Como falamos
            anteriormente, ela não é nova, e muito menos depende de dispositivos
            “smart” para funcionar.
          </small>
          <br />
          <small>
            Você só precisa de dois itens: um cronômetro e disciplina para
            obedecer os Pomodoros (períodos de 25 minutos) e as pausas.
          </small>
          <br />
          <small>
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
          </small>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>É certo para você?</AccordionTrigger>
        <AccordionContent className="overflow-y-scroll">
          <small>
            A técnica não precisa de psicanálise complicada ou testes mentais
            para verificar sua eficácia futura em você. O único pré-requisito
            para usar a técnica Pomodoro é a sua intenção de melhorar. Se você
            realmente quer fazer progressos tangíveis em sua vida, o
            gerenciamento do tempo é o primeiro passo.
          </small>
          <br />
          <br />
          <small>
            Distrai-se facilmente ao longo do dia, mesmo enquanto trabalha em
            projetos importantes
          </small>
          <br />
          <small>
            Precisa trabalhar em projetos abertos, como uma tese de doutorado,
            preparação para um exame e blogs
          </small>
          <br />
          <small>Acha difícil cumprir os prazos</small>
          <br />
          <small>
            Tendem a trabalhar demais à medida que o prazo se aproxima, mas não
            conseguem otimizar a produtividade mais cedo
          </small>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
