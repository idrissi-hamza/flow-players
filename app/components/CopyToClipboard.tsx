'use client';

import { PlayerType } from '@/lib/playerSchema';

import React from 'react';
import toast from 'react-hot-toast';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';

const CopyToClipboard = ({ player }: { player: PlayerType }) => {
  const handleCopyToClipboard = (player: PlayerType) => {
    const playerData = JSON.stringify(player, null, 2);
    navigator.clipboard.writeText(playerData);
    toast.success(`Data of ${player.firstname} is Copied in clipBoard `);
  };

  return (
    <button
    aria-label="copy player data"
     
      className="font-medium   hover:text-blue-600 cursor-pointer"
      onClick={() => handleCopyToClipboard(player)}
    >
      <HiOutlineDocumentDuplicate />
    </button>
  );
};

export default CopyToClipboard;
