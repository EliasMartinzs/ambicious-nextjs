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

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

export default function AccountProfile({ user, btnTitle }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing('media');

  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.image || '',
      name: user?.name || '',
      username: user?.username || '',
      bio: user?.bio || '',
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
      userId: user.id,
      username: values.username,
      name: values.name,
      bio: values.bio,
      image: values.profile_photo,
      path: pathname,
    });

    router.push('/');

    if (pathname === '/') {
      router.back();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-5"
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
                <Input type="text" className="input-3" {...field} />
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
                <Input type="text" className="input-3" {...field} />
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

        <Button
          type="submit"
          className="bg-primary-500 text-white hover:bg-foreground transition-colors hover:rounded-xl"
        >
          Salvar
        </Button>
        <Button
          type="submit"
          className="bg-foreground text-white hover:bg-primary-500 transition-colors hover:rounded-none rounded-xl"
        >
          <Link href="/">Voltar</Link>
        </Button>
      </form>
    </Form>
  );
}
