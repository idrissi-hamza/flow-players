import React from 'react';
import Link from 'next/link';
import EditForm from '@/app/components/EditForm';
import { getPlayerById } from '@/utils/getPlayerById';

const EditPage = async ({ params }: { params: { id: string } }) => {
  const player = await getPlayerById(params.id);

  return (
    <div className="mt-10 ">
      <Link
        className=" font-extrabold"
        href="/"
      >
        Back
      </Link>
      <EditForm player={player} />
    </div>
  );
};

export default EditPage;
