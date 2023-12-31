import Image from 'next/image';
import Table from './components/Table';
import Header from './components/Header';
import { Suspense } from 'react';
import Pagination from './components/Pagination';
import { LIMIT } from '@/lib/constants';
import { getPlayers } from '@/utils/getAllPlayers';

export default async function Home({
  searchParams,
}: {
  // Using [key: string]: string | string[] | undefined for searchParams allows handling multiple query parameters beyond page and limit. It's adaptable to any parameter type, be it a string, array of strings, or even undefined if absent in the URL. This flexibility enhances scalability and future-proofing, as the type doesn't need modification for new parameters.

  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const limit =
    typeof searchParams.limit === 'string' ? Number(searchParams.limit) : LIMIT;

  const players = await getPlayers({ page, limit });

  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="flex flex-col justify-center items-center gap-4 ">
        <Suspense fallback={<div>...loading</div>}>
          <Table
            promise={players}
            page={page}
          />
        </Suspense>
        <Pagination
          page={page}
          total={players.length}
        />
      </div>
    </div>
  );
}
