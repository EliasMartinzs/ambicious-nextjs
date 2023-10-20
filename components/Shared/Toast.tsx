import React from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../ui/button';

type Props = {
  dialog: string;
  textButton: string;
};

export default function Toast({ dialog, textButton }: Props) {
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
      className="capitalize bg-primary-500 rounded-lg hover:bg-primary-500/70 transition-colors"
    >
      {textButton}
    </Button>
  );
}
