import { PlayerType } from '@/lib/playerSchema';
import React from 'react';
import { BsFillPencilFill, BsTrash } from 'react-icons/bs';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';

const Table = async ({ players }: { players: PlayerType[] }) => {
  const headers = ['ID', 'NOM COMPLET', 'SALAIRE ANNUEL', 'BUT', 'ACTIONS'];
  return (
    <div className="min-h-[70vh]">
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
            {players.map((el, i) => (
              <tr
                key={i}
                className="bg-white border-b "
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {i + 1}
                </th>
                <td className="px-6 py-4 ">{`${el.firstname} ${el.lastname}`}</td>
                <td className="px-6 py-4">{el.salary}</td>
                <td className="px-6 py-4">{el.goal}</td>
                <td className="px-6 py-4 flex gap-4 items-center">
                  <div className="font-medium   hover:text-blue-600 cursor-pointer">
                    <BsFillPencilFill />
                  </div>
                  <div className="font-medium   hover:text-blue-600 cursor-pointer">
                    <HiOutlineDocumentDuplicate />
                  </div>
                  <div className="font-medium   hover:text-blue-600 cursor-pointer">
                    <BsTrash />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
