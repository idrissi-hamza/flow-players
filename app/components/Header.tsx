import Link from 'next/link';
import React from 'react';
import { IoMdAdd } from 'react-icons/io';

const Header = () => {
  return (
    <header className="border-b  w-full ">
      <div className="   w-full p-4 mx-auto flex justify-between items-center ">
        <div className="font-bold">
          <Link href={'/'}>List des joueurs</Link>
        </div>
        <div className="border px-2 py-1 border-slate-900 border-b-2 border-r-2 hover:bg-slate-100 flex items-center">
          <IoMdAdd className="text-xl" />
          <Link href="/ajouter">Ajouter un Joueur</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
