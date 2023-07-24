'use client';

import { PlayerType } from '@/lib/playerSchema';
import { deletePlayer } from '@/lib/players';
import { revalidatePath } from 'next/cache';
import React, { startTransition, useState } from 'react';
import toast from 'react-hot-toast';
import { BsTrash } from 'react-icons/bs';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';

const CopyToClipboard = ({ player }: { player: PlayerType }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = (player: PlayerType) => {
    const playerData = JSON.stringify(player, null, 2);
    navigator.clipboard.writeText(playerData).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000); // Reset the copied state after 3 seconds
    });
    toast.success(`Data of ${player.firstname} is Copied in clipBoard `);
  };

  return (
    <button
      className="font-medium   hover:text-blue-600 cursor-pointer"
      // onClick={() => startTransition(() => deletePlayerAction(id))}
      onClick={() => handleCopyToClipboard(player)}
    >
      <HiOutlineDocumentDuplicate />
    </button>
  );
};

export default CopyToClipboard;
