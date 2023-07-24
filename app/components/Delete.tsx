'use client';

import { deletePlayer } from '@/lib/players';
import { revalidatePath } from 'next/cache';
import React, { startTransition } from 'react';
import toast from 'react-hot-toast';
import { BsTrash } from 'react-icons/bs';

const DeletePlayerButton = ({ id }: { id: string }) => {
  const onDeleteHandler = async (id: string) => {
    // toast(id);

    toast.loading('Deleting Request ', { id: '2' });

    try {
      await deletePlayer(id);

      toast.success(`Player  Deleted Successfully'`, { id: '2' });
    } catch (error: any) {
      toast.error(` ${error.message} `, { id: '2' });
    } finally {
      window.location.assign('/');
    }
  };

  return (
    <button
      className="font-medium   hover:text-blue-600 cursor-pointer"
      // onClick={() => startTransition(() => deletePlayerAction(id))}
      onClick={() => onDeleteHandler(id)}
    >
      <BsTrash />
    </button>
  );
};

export default DeletePlayerButton;
