import * as z from 'zod';

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z.string().min(1, {
    message: 'Por favor insira um nome para continuar!'
  }).max(30),
  username: z.string().min(1,{
  message: 'Por favor insira um sobrenome para continuar!'
  }).max(30),
  bio: z.string().min(3).max(1000),
});

export const MetaValidation = z.object({
  category: z.string(),
  meta: z
    .string()
    .min(3, { message: 'O seu objetivo deve conter no minimo 3 caracteres!' }),
  descriptio: z
    .string()
    .min(3, { message: 'A descrição deve conter no minimo 3 caracteres!' })
    .max(200, { message: 'A descrição deve conter no maximo 3 caracteres!' }),
});
