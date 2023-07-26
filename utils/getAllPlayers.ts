import { BASE_URL } from '@/lib/constants';

export const getPlayers = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  const res = await fetch(
    `${BASE_URL}/api/players?page=${page}&limit=${limit}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );
  const { players } = await res.json();
  return players;
};
