import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { LIMIT } from '@/lib/constants';

const Pagination = ({ page, total }: { page: number; total: number }) => {
  return (
    <div className="flex space-x-6">
      <Link
        href={`?page=${page > 1 ? page - 1 : 1}`}
        className={clsx(
          'rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800',
          page <= 1 && 'pointer-events-none opacity-50'
        )}
      >
        &lt;
      </Link>
      <Link
        href={`?page=${total && page + 1}`}
        className={clsx(
          'rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800',
          total < LIMIT && 'pointer-events-none opacity-50'
        )}
      >
        &gt;
      </Link>
    </div>
  );
};

export default Pagination;
