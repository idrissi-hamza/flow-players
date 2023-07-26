import { LIMIT } from '@/lib/constants';
import { formatSalary } from '@/lib/formatSalary';
import { PlayerTypeWithId } from '@/lib/playerSchema';
import Link from 'next/link';
import React from 'react';
import { BsFillPencilFill, BsTrash } from 'react-icons/bs';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import DeletePlayerButton from './Delete';
import { Toaster } from 'react-hot-toast';
import CopyToClipboard from './CopyToClipboard';

const Table = async ({
  promise,
  page,
}: {
  promise: Promise<PlayerTypeWithId[]>;
  page: number;
}) => {
  const players = await promise;

  const headers = ['Num', 'NOM COMPLET', 'SALAIRE ANNUEL', 'BUT', 'ACTIONS'];
  return (
    <>
      <Toaster />
      <div className="mb-5">
        <div className="shadow-md sm:rounded-lg mt-10 max-w-2xl mx-auto ">
          {/* <pre>{JSON.stringify(players, null, 2)}</pre> */}
          <table className="w-full text-sm text-left text-gray-500 table-auto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                {headers.map((header, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="px-6 py-3"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {players.map((player, i) => (
                <tr
                  key={i}
                  className="bg-white border-b "
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {/* this code so we get always the order of the the elements of the table instead of the id that can be random */}
                    {i + 1 + LIMIT * (page - 1)}
                  </th>
                  <td className="px-6 py-4 ">{`${player.firstname} ${player.lastname}`}</td>
                  <td className="px-6 py-4">
                    {player.salary &&
                      formatSalary(player.salary, player.devise)}
                  </td>
                  <td className="px-6 py-4">{player.goal}</td>
                  <td className="px-6 py-4 flex gap-4 items-center">
                    {/* edit */}
                    <Link
                      aria-label="update player info"
                      href={`/edit/${player.id}`}
                      className="font-medium   hover:text-blue-600 cursor-pointer"
                    >
                      <BsFillPencilFill />
                    </Link>
                    {/* copy */}
                    <CopyToClipboard player={player} />
                    {/* delete */}

                    <DeletePlayerButton id={player.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
