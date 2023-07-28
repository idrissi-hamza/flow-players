'use client';

import { deletePlayer } from '@/utils/deletePlayer';
import React from 'react';
import { BsTrash } from 'react-icons/bs';

const DeletePlayerButton = ({ id }: { id: string }) => {
  return (
    <button
      aria-label="delete"
      className="font-medium   hover:text-blue-600 cursor-pointer"
      onClick={async () => deletePlayer(id)}
    >
      <BsTrash />
    </button>
  );
};

export default DeletePlayerButton;
