
# Ambicious

Eu sei que 'Ambicious' não é o melhor nome. Criei este projeto com o objetivo de aprofundar meu conhecimento em Next.js, TypeScript e MongoDB. Antes desse projeto, eu não tinha qualquer experiência com MongoDB e estou buscando ampliar meu entendimento sobre essa tecnologia.

Existem melhorias a serem feitas, especialmente em termos de ajustes visuais que pretendo corrigir com o tempo. O código em si está um pouco complexo, uma vez que estou lidando com a construção do backend e a integração com o frontend, algo que nunca fiz simultaneamente antes. Para enfrentar esse desafio, experimentei uma variedade de estilos na criação, exclusão e atualização de dados, assim como diferentes abordagens na construção de formulários, utilizando inputs, controllers, Hook Form, Zod e até mesmo o uso do 'useState' para criação de formulários.

O objetivo dessa abordagem multifacetada foi entender qual método se adapta melhor a diferentes tipos de projetos. Consequentemente, ofereci diversos tipos de entradas para os usuários, ao invés de seguir um único padrão. Isso foi feito visando a flexibilidade e aprimorando a legibilidade do código, buscando identificar qual técnica seria mais vantajosa para a reutilização futura.

Aqui esta o projeto updado na vercel se quiser ter um acesso de como funciona https://ambicious-nextjs.vercel.app/

O Ambicious é um projeto 100% de código aberto, desenvolvido para melhorar meus conhecimentos. Fique a vontade para fazẽ-lo seu.

# Funcionalidades

# Planejamento

1: Curso
Armazenamento de Cursos Realizados: Permite registrar os cursos que você completou, facilitando a revisão de seus conteúdos. Oferece a oportunidade de manter um registro completo de todos os cursos já realizados.

2: Estante de Livros
Registro de Leitura: É possível registrar os livros já lidos e também aqueles que deseja ler. Isso ajuda a manter uma lista organizada de suas leituras passadas e futuras.

3: LeetCode
Armazenamento de Questões de Lógica de Programação: Criado especificamente para armazenar e acessar rapidamente questões de lógica de programação. Essa funcionalidade é ideal para manter um banco de desafios e soluções para consulta futura.

4: Metas
Definição de Objetivos Pessoais: Permite estabelecer metas de vida ou anuais, categorizando-as e definindo prazos para conclusão. Ajuda a manter o foco e a organização na busca por objetivos específicos.

# Academia

1: Organizador de Treino
Exercícios, Séries e Repetições: Permite criar e organizar treinos com detalhes específicos de exercícios, séries e repetições para cada exercício. Isso ajuda a manter um registro claro do seu plano de treino.

2: Planejador de Dieta
Horário e Alimentos: Permite criar um plano alimentar detalhado com horários específicos para cada refeição, indicando os alimentos a serem consumidos e suas respectivas quantidades. Isso possibilita um controle preciso da dieta.

3" Registro de Medidas Corporais
Salvamento de Medidas: Oferece a funcionalidade de registrar medidas corporais, como peito, bíceps, entre outros. Isso permite acompanhar o progresso ao longo do tempo e visualizar mudanças no corpo.

4: Calculadora de IMC
Avaliação do Índice de Massa Corporal: Inclui uma calculadora de IMC para fornecer uma avaliação rápida e simples do índice de massa corporal, ajudando na compreensão do estado físico atual.

5" Comparador de Medidas
Análise de Mudanças: Permite comparar medidas registradas em momentos distintos para identificar se houve ganho, perda ou estabilidade em relação a diferentes partes do corpo. Isso auxilia na análise do progresso físico.

# Temas 

9 Temas diferntes, contendo dark e light mode
## Referência

 - [Tailwind CSS](https://tailwindcss.com/)
 - [Tailwind Merge](https://www.npmjs.com/package/tailwind-merge)
 - [CVA](https://cva.style/)
 - [CLSX](https://www.npmjs.com/package/tailwind-merge)
 - [Shadcn Ui](https://ui.shadcn.com/)
 - [Redux](https://redux.js.org/)
 - [Clerk](https://clerk.com/)
 - [React Hook Form](https://react-hook-form.com/)
 - [Zod](https://react-hook-form.com/)
 - [Headless Ui](https://headlessui.com/)
 - [Lucide](https://lucide.dev/)
 - [MongoDb](https://www.mongodb.com/)
 - [NextTheme](https://www.npmjs.com/package/next-themes?activeTab=readme)
 - [Pensador](https://github.com/operfildoluiz/pensador-api)
 - [Uploadthing](https://uploadthing.com/)
 - Entre outros


## Deploy

Requisitos e Configurações

Requisitos.

Certifique-se de ter o Node.js instalado, preferencialmente na versão 18 ou superior, para garantir a compatibilidade com o projeto.

Instalação do Node.js
Se você ainda não tem o Node.js instalado, você pode baixar a versão mais recente em nodejs.org ou utilizando um gerenciador de versões como nvm (Node Version Manager).

Variáveis de Ambiente
Algumas configurações do projeto dependem de variáveis de ambiente. Para configurá-las, siga os passos abaixo:

Na pasta principal do projeto, crie um arquivo chamado ".env.local."
Adicione as variáveis de ambiente necessárias nesse arquivo. Por exemplo:

Acesse clerk.dev crie uma conta, depois um projeto e copie as chaves e substitue-as

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=**************************
CLERK_SECRET_KEY=**************************

Acesse uploadthing.com crie uma conta, depois um projeto e copie as chaves e substitue-as

UPLOADTHING_SECRET=**************************
UPLOADTHING_APP_ID=**************************


NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

Acesse uploadthing.com crie uma conta, depois um projeto e copie as chaves e substitue-as

MONGODB_URL=**************************

Feito tudo isso rode.

```bash
  npm i next@latest
```

```bash
  npm run dev
```

Se você se deparar com um erro devido à falta de dependências no seu projeto, você pode resolver isso instalando as dependências ausentes. Geralmente, isso pode ser feito com um gerenciador de pacotes como o npm ou o yarn. Aqui estão as etapas básicas que você pode seguir:

```bash
  npm i --legacy-peer-deps
```
E Novamente


```bash
  npm run dev
```
