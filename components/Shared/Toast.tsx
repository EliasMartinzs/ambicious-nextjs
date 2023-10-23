import React from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

type Props = {
  dialog: string;
  textButton: string;
  classname?: string;
};

export default function Toast({ dialog, textButton, classname }: Props) {
  const notify = () =>
    toast.success(dialog, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  return (
    <Button
      onClick={notify}
      className={cn(
        'capitalize bg-primary-500 rounded-lg hover:bg-primary-500/70 transition-colors',
        classname
      )}
    >
      {textButton}
    </Button>
  );
}
