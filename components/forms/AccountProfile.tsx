'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserValidation } from '@/lib/validations/user';
import * as z from 'zod';
import { useUploadThing } from '@/lib/uploadthing';

import {
  Form,
  FormControl,
  FormMessage,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { Textarea } from '../ui/textarea';
import { usePathname, useRouter } from 'next/navigation';
import { updateUser } from '@/lib/actions/user.action';
import { isBase64Image } from '@/lib/utils';
import Link from 'next/link';
import { User } from '@clerk/nextjs/server';
import { UserType } from '@/types';
import Toast from '../Shared/Toast';


interface Props {
  id: any;
  username: string;
  name: string;
  bio: string;
  image: string;
  onboarded: boolean;
  userDb: UserType | null;
}

export default function AccountProfile({
  bio,
  id,
  image,
  name,
  username,
  onboarded,
  userDb,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing('media');

  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: image || '',
      name: userDb?.name.toString() || '',
      username: userDb?.username || '',
      bio: userDb?.bio || '',
    },
  });

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void,
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      setFiles(Array.from(e.target.files));

      if (!file.type.includes('image')) return;

      fileReader.onload = async e => {
        const imageDataUrl = e.target?.result?.toString() || '';

        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    const blob = values.profile_photo;

    const hasImageChanged = isBase64Image(blob);

    if (hasImageChanged) {
      const imgRes = await startUpload(files);

      // or fileUrl
      if (imgRes && imgRes[0].url) {
        values.profile_photo = imgRes[0].url;
      }
    }

    await updateUser({
      userId: id,
      username: values.username,
      name: values.name,
      bio: values.bio,
      image: values.profile_photo,
      path: pathname,
    });

    router.push('/home')
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-5 text-white"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex items-start flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Nome
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-foreground">
                <Input
                  type="text"
                  className="input-3 placeholder:text-white text-white"
                  placeholder="Jonh"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex items-start flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Sobrenome
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-foreground">
                <Input
                  type="text"
                  className="input-3 placeholder:text-white text-white"
                  placeholder="Doe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="flex items-start flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Bio
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-foreground">
                <Textarea rows={10} className="input-3" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="account-form_image-label">
                {field.value ? (
                  <Image
                    src={field.value}
                    alt="profile photo"
                    width={96}
                    height={96}
                    className="rounded-full object-contain"
                    priority
                  />
                ) : (
                  <Image
                    src="/profile.svg"
                    alt="profile photo"
                    width={96}
                    height={96}
                    className="rounded-full object-contain"
                    priority
                  />
                )}
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-foreground">
                <Input
                  type="file"
                  accept="image/*"
                  placeholder="Upload a photo"
                  className="input-3"
                  onChange={e => handleImage(e, field.onChange)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <Button type='submit' className="w-full bg-transparent hover:bg-primary-700 transition-colors font-bold hover:text-white">
            Salvar
          </Button>
       
      </form>
    </Form>
  );
}
