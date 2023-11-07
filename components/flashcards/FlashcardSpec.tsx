import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FlashcardSpec() {
  return (
    <Accordion type="single" collapsible>
      <h3 className="title font-bold">Flashcards</h3>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm font-medium">
          O que são Flashcards?
        </AccordionTrigger>
        <AccordionContent>
          <p>
            Flashcards são basicamente pequenos cartões para testar sua memória.
            Essencialmente, eles têm de um lado, uma pergunta, e do outro, a
            resposta. Isso também pode variar, como: tópico e palavras-chave ou
            termo e definição. Enfim, qualquer outra dicotomia que possa
            imaginar.
          </p>
          <br />
          <p>
            O bom desse método de estudos é que ele serve para qualquer tipo de
            matéria que você precise estudar. Além disso, por ser prático de
            fazer em casa, qualquer um que estiver se preparando para o
            vestibular de Medicina ou concurso de Residência Médica pode
            aproveitar dos flashcards.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-sm font-medium">
          Como usar os flashcards para estudar
        </AccordionTrigger>
        <AccordionContent>
          <p>
            Primeiro, ao fazer seus próprios flashcards. Ao elaborar os cartões,
            você já estará exercitando a escrita e leitura dos assuntos, ó que
            beleza. Faça quantos cards você achar necessário. O que importa é
            como você vai usá-los.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-sm font-medium">
          Quando usar os flashcards
        </AccordionTrigger>
        <AccordionContent>
          <p>
            Flashcards não é uma técnica pra se usar sozinha mas, sim como
            complemento a rotina convencional. Justamente pela funcionalidade de
            instigar a sua memória e refrescar o assunto esporadicamente, ela
            ajuda a remediar a chamada “curva do esquecimento”. Esse termo diz
            respeito a hipótese de como a informação se perde ao longo do tempo
            quando não há tentativa de retê-la.
          </p>
          <br />
          <p>
            Com isso esclarecido, aproveite o tamanho portátil do baralho e
            leve-o consigo aos lugares para estudos repentinos. Os flashcards
            são feitos para trazer dinamismo ao seus estudos, por isso, não vale
            a pena passar horas usando os cartões. Não precisa gastar mais que
            30 minutos numa “jogatina” de flashcards. Basta aproveitar esse
            tempo com a devida concentração.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-sm font-medium">
          Como usar os flashcards
        </AccordionTrigger>
        <AccordionContent>
          <p>
            Quando tiver os cards em mãos, se fizer sentido e achar necessário,
            embaralhe todas. Lembre-se de deixar todas as perguntas viradas para
            cima e respostas, para baixo. A partir daqui, comece:
          </p>
          <br />
          <p>
            Com isso esclarecido, aproveite o tamanho portátil do baralho e
            leve-o consigo aos lugares para estudos repentinos. Os flashcards
            são feitos para trazer dinamismo ao seus estudos, por isso, não vale
            a pena passar horas usando os cartões. Não precisa gastar mais que
            30 minutos numa “jogatina” de flashcards. Basta aproveitar esse
            tempo com a devida concentração.
          </p>
          <br />
          <p>
            1. Leia a pergunta –sem espiar o verso, ein;
            <br />
            2. Em seguida, responda como for melhor: por escrito, em voz alta,
            ou só mentalmente;
            <br />
            3. Depois, vire a carta para conferir a resposta certa;
            <br />
            4. Se acertou, use a carta para começar uma pilha de “acertos”. Caso
            contrário, use-a para começar uma pilha de “erros”;
            <br />
            5. Continue se avaliando assim por uns 20/30 minutos, separando os
            erros dos acertos;
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
