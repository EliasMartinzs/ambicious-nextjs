export const themes = [
  'wanella',
  'abyss',
  'noturn',
  'fortune',
  'ancient',
  'castily',
] as const;

export const lightThemes = ['city', 'lightmontain', 'library'] as const;

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
    title: 'Perder Peso',
    subTitle: 'Saúde e Bem-estar',
    icon: '/metas/loseweight.svg',
  },
  {
    title: 'Treino Anual',
    subTitle: 'Saúde e Bem-estar',
    icon: '/metas/exerciseyear.svg',
  },
  {
    title: 'Atingir % de Gordura',
    subTitle: 'Saúde e Bem-estar',
    icon: '/metas/percent.svg',
  },

  {
    title: 'Renda Extra',
    subTitle: 'Liberdade Financeira',
    icon: '/metas/money.svg',
  },
  {
    title: 'Faturamento Anual',
    subTitle: 'Liberdade Financeira',
    icon: '/metas/totalmoney.svg',
  },
  {
    title: 'Reserva de Emergencia',
    subTitle: 'Liberdade Financeira',
    icon: '/metas/reserveemergency.svg',
  },
  {
    title: 'Guardar Dinheiro',
    subTitle: 'Liberdade Financeira',
    icon: '/metas/savemoney.svg',
  },

  {
    title: 'Leitura Anual',
    subTitle: 'Conhecimento',
    icon: '/metas/bookmonth.svg',
  },
  {
    title: 'Leitura Mensal',
    subTitle: 'Conhecimento',
    icon: '/metas/bookyear.svg',
  },
  {
    title: 'Aprender Novos Idiomas',
    subTitle: 'Conhecimento',
    icon: '/metas/language.svg',
  },

  {
    title: 'Concluir Curso',
    subTitle: 'Conhecimento',
    icon: '/metas/course.svg',
  },
  {
    title: 'Ser Promovido',
    subTitle: 'Liberdade financeira',
    icon: '/metas/promoted.svg',
  },
] as const;

type BodyMeasurementsType = {
  _id: string | undefined;
  chest: number;
  bicepsLeft: number;
  bicepsRight: number;
  legLeft: number;
  legRight: number;
  waist: number;
  calfLeft: number;
  calfRight: number;
  date: Date | undefined;
  author: string | undefined;
};

export const Muscle = [
  'Bíceps',
  'Tríceps',
  'Peito',
  'Ombro',
  'Dorsal',
  'Pernas',
  'Abdõmen',
  'Antebraço',
  'Panturrilha',
] as const;
