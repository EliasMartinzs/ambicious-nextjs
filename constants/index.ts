import { Airplay } from 'lucide-react';

export const themes = [
  'wanella',
  'abyss',
  'noturn',
  'fortune',
  'ancient',
  'castily',
] as const;

export const day = [
  'Domingo',
  'Segunda-Feira',
  'Terça-Feira',
  'Quarta-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
  'Sábado',
] as const;

export const weekly = [
  {
    name: 'hoje',
    title: 'Hoje',
  },
  {
    name: 'segunda',
    title: 'Segunda',
  },
  {
    name: 'terca',
    title: 'Terça',
  },
  {
    name: 'quarta',
    title: 'Quarta',
  },
  {
    name: 'quinta',
    title: 'Quinta',
  },
  {
    name: 'sexta',
    title: 'Sexta',
  },
] as const;

export const tools = ['Cursos', 'Livros', 'Projetos'] as const;

export const categoriesProblems = [
  {
    label: 'Todos',
    value: 'todos',
  },
  {
    label: 'Array',
    value: 'array',
  },
  {
    label: 'String',
    value: 'string',
  },
  {
    label: 'Hash Table',
    value: 'hash table',
  },
  {
    label: 'Dynamic Programming',
    value: 'dynamic programming',
  },
] as const;

export const difficultyProblems = [
  {
    label: 'Facil',
    value: 'facil',
  },
  {
    label: 'Medio',
    value: 'medio',
  },
  {
    label: 'Dificil',
    value: 'dificil',
  },
] as const;

export const categoriesMeta = [
  {
    title: 'Saúde',
    description: [
      {
        title: 'Perder Peso',
        subTitle: 'Saúde e Bem-estar',
        icon: './metas/biceps.png',
      },
      {
        title: 'Treino Anual',
        subTitle: 'Saúde e Bem-estar',
        icon: './metas/exercise.png',
      },
      {
        title: 'Atingir % de Gordura',
        subTitle: 'Saúde e Bem-estar',
        icon: './metas/percentage.png',
      },
    ],
  },
  {
    title: 'Finanças',
    description: [
      {
        title: 'Renda Extra',
        subTitle: 'Liberdade Financeira',
        icon: './metas/money.png',
      },
      {
        title: 'Faturamento Anual',
        subTitle: 'Liberdade Financeira',
        icon: './metas/money.png',
      },
      {
        title: 'Reserva de Emergencia',
        subTitle: 'Liberdade Financeira',
        icon: './metas/money.png',
      },
      {
        title: 'Guardar Dinheiro',
        subTitle: 'Liberdade Financeira',
        icon: './metas/money.png',
      },
    ],
  },
  {
    title: 'Intelectual',
    description: [
      {
        title: 'Leitura Anual',
        subTitle: 'Conhecimento',
        icon: './metas/book.png',
      },
      {
        title: 'Leitura Mensal',
        subTitle: 'Conhecimento',
        icon: './metas/book.png',
      },
      {
        title: 'Aprender Novos Idiomas',
        subTitle: 'Conhecimento',
        icon: './metas/book.png',
      },
    ],
  },
  {
    title: 'Profissional',
    description: [
      {
        title: 'Concluir Curso',
        subTitle: 'Conhecimento',
        icon: './metas/profissional.png',
      },
      {
        title: 'Ser Promovido',
        subTitle: 'Liberdade financeira',
        icon: './metas/profissional.png',
      },
    ],
  },
] as const;
