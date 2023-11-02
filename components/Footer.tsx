import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className="paddings w-full bg-black/50 shadow-3xl">
      <small className="w-full flex-center py-10">
        Criado com
        <Image
          alt="love"
          width={20}
          height={20}
          src="/footer/heart.png"
          className="mx-2"
        />
        por Elias Martins
      </small>
    </footer>
  );
}
